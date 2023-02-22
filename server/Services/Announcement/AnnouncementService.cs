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
    private readonly IConfiguration _configuration;

    public AnnouncementService(AppDbContext dbContext, IUserContextService contextService, IConfiguration configuration)
    {
        _dbContext = dbContext;
        _contextService = contextService;
        _configuration = configuration;
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
}