using AutoMapper;
using HighSchoolAPI.Database;
using HighSchoolAPI.Database.Entities;
using HighSchoolAPI.Exceptions;
using HighSchoolAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace HighSchoolAPI.Services.Announcement;

public class AnnouncementService : IAnnouncementService
{
    private readonly AppDbContext _dbContext;
    private readonly IUserContextService _contextService;
    private readonly IMapper _mapper;

    public AnnouncementService(AppDbContext dbContext, IUserContextService contextService, IMapper mapper)
    {
        _dbContext = dbContext;
        _contextService = contextService;
        _mapper = mapper;
    }

    public async Task CreateAnnouncementWithoutImages(CreateAnnouncementDto dto)
    {
        var announcement = new Database.Entities.Announcement()
        {
            Description = dto.Description,
            Title = dto.Title,
            CreatedBy = _contextService.GetUserId.Value,
            CreationDate = DateTime.Now
        };

        await _dbContext.Announcements.AddAsync(announcement);
        await _dbContext.SaveChangesAsync();
    }

    public async Task AddThumbnail(IFormFile file, int id)
    {
        var getAnnouncement = await _dbContext.Announcements.FirstOrDefaultAsync(x => x.Id == id);
        if (getAnnouncement is null)
        {
            throw new NotFoundException("Announcement not found");
        }
        var newFileName = file.FileName.Replace(' ', '_');

        var rootPath = Directory.GetCurrentDirectory();
        var fullPath = $"{rootPath}/wwwroot/Thumbnails/{newFileName}";

        await using (var stream = new FileStream(fullPath, FileMode.Create))
        {
            await file.CopyToAsync(stream);
        }

        var thumbnail = new Thumbnail()
        {
            ThumbnailUrl = fullPath,
            FileName = newFileName,
            AnnouncementId = id
        };

        await _dbContext.Thumbnails.AddAsync(thumbnail);
        await _dbContext.SaveChangesAsync();
    }
    
    public async Task AddImage(IFormFile file, int id)
    {
        var getAnnouncement = await _dbContext.Announcements.FirstOrDefaultAsync(x => x.Id == id);
        if (getAnnouncement is null)
        {
            throw new NotFoundException("Announcement not found");
        }
        var newFileName = file.FileName.Replace(' ', '_');

        var rootPath = Directory.GetCurrentDirectory();
        var fullPath = $"{rootPath}/wwwroot/Images/{newFileName}";

        await using (var stream = new FileStream(fullPath, FileMode.Create))
        {
            await file.CopyToAsync(stream);
        }

        var image = new Image()
        {
            ImageUrl = fullPath,
            FileName = newFileName,
            AnnouncementId = id
        };

        await _dbContext.Images.AddAsync(image);
        await _dbContext.SaveChangesAsync();
    }

    public async Task DeleteAnnouncement(string announcementTitle)
    {
        var announcement = await _dbContext.Announcements.FirstOrDefaultAsync(s => announcementTitle == null || (
            s.Title.ToLower().Contains(announcementTitle.ToLower())));
            
        if (announcement is null)
        {
            throw new NotFoundException("Announcement not found");
        }
        var rootPath = Directory.GetCurrentDirectory();

        var thumbnail = await _dbContext.Thumbnails.FirstOrDefaultAsync(x => x.AnnouncementId == announcement.Id);

        if (thumbnail is not null)
        {
            var fullThumbnailsPath = $"{rootPath}/wwwroot/Thumbnails/"+thumbnail.FileName;

            if (File.Exists(fullThumbnailsPath))
            {
                File.Delete(fullThumbnailsPath);
                _dbContext.Thumbnails.Remove(thumbnail);
                await _dbContext.SaveChangesAsync();
            }
        }        
        
        var images = _dbContext.Images.Where(x => x.AnnouncementId == announcement.Id).ToList();
        
        if (images.Count != 0)
        {
            foreach (var image in images)
            {
                var fullImgPath = $"{rootPath}/wwwroot/Images/"+image.FileName;

                if (!File.Exists(fullImgPath))
                {
                    break;
                }

                File.Delete(fullImgPath);
                _dbContext.Images.Remove(image);
                await _dbContext.SaveChangesAsync();
            }
        }
        
        _dbContext.Announcements.Remove(announcement);
        await _dbContext.SaveChangesAsync();
    }

    public PagedResult<GetAnnouncementsDto> GetAnnouncements(int pageNumber, int pageSize)
    {
        var baseQuery = _dbContext.Announcements.Include(x => x.Thumbnail);

        var announcements = baseQuery.Skip(pageSize * (pageNumber - 1))
            .Take(pageSize)
            .ToList();

        var totalItemsCount = baseQuery.Count();
        
        var mappedValues = _mapper.Map<List<GetAnnouncementsDto>>(announcements);

        var results = new PagedResult<GetAnnouncementsDto>(mappedValues, totalItemsCount,pageSize, pageNumber);
        
        return results;
    }

    public async Task<GetAnnouncementBodyDto> GetAnnouncementBody(int id)
    {
        var announcement = await _dbContext.Announcements.Include(x => x.Thumbnail).Include(x => x.Images).FirstOrDefaultAsync(x => x.Id == id);

        if (announcement is null)
        {
            throw new NotFoundException("Announcement not found");
        }

        var imagesUrlList = _dbContext.Images.Where(x => x.AnnouncementId == announcement.Id).Select(x => x.ImageUrl).ToList();

        var announcementBody = new Database.Entities.Announcement
        {
            Description = announcement.Description,
            Title = announcement.Title,
            Thumbnail = announcement.Thumbnail,
            Images = announcement.Images
        };

        var mappedValues = _mapper.Map<GetAnnouncementBodyDto>(announcementBody);
        mappedValues.Images = imagesUrlList;
        
        return mappedValues;
    }
}