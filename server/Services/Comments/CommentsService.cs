using AutoMapper;
using HighSchoolAPI.Database;
using HighSchoolAPI.Database.Entities;
using HighSchoolAPI.Exceptions;
using HighSchoolAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace HighSchoolAPI.Services.Comments;

public class CommentsService : ICommentsService
{
    private readonly AppDbContext _dbContext;
    private readonly IMapper _mapper;
    private readonly IUserContextService _contextService;

    public CommentsService(AppDbContext dbContext, IMapper mapper, IUserContextService contextService)
    {
        _dbContext = dbContext;
        _mapper = mapper;
        _contextService = contextService;
    }
    
    public async Task AddComment(AddCommentDto dto, int announcementId)
    {
        var userId = _contextService.GetUserId.Value;
        var comment = new Comment()
        {
            CreationDate = DateTime.Now,
            Content = dto.Content,
            Name = $"{_contextService.User.FindFirst(c => c.Type == "FirstName").Value} {_contextService.User.FindFirst(c => c.Type == "LastName").Value}", 
            CreatedBy = userId,
            AnnouncementId = announcementId
        };

        await _dbContext.Comments.AddAsync(comment);
        await _dbContext.SaveChangesAsync();
    }

    public async Task<IEnumerable<GetCommentsDto>> GetComments(int id)
    {
        var comments = await _dbContext.Comments.Where(x => x.AnnouncementId == id).ToListAsync();
        if (comments.Count == 0)
        {
            throw new NotFoundException("Comments not found");
        }
        var mappedValues = _mapper.Map<List<GetCommentsDto>>(comments);
        return mappedValues;
    }

    public async Task DeleteComment(int id)
    {
        var userId = _contextService.GetUserId.Value;
        var comment = await _dbContext.Comments.FirstOrDefaultAsync(x => x.CreatedBy == userId && x.AnnouncementId == id);
        if (comment is null)
        {
            throw new NotFoundException("Comment not found");
        }

        _dbContext.Comments.Remove(comment);
        await _dbContext.SaveChangesAsync();
    }
}