using HighSchoolAPI.Models;

namespace HighSchoolAPI.Services.Comments;

public interface ICommentsService
{
    Task AddComment(AddCommentDto dto, int announcementId);
    Task<IEnumerable<GetCommentsDto>> GetComments(int id);
    Task DeleteComment(int id);
}