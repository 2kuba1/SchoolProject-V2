using HighSchoolAPI.Models;

namespace HighSchoolAPI.Services.Announcement;

public interface IAnnouncementService
{
    Task CreateAnnouncementWithoutImages(CreateAnnouncementDto dto);
    Task AddThumbnail(IFormFile file, int id);
    Task AddImage(IFormFile file, int id);
    Task DeleteAnnouncement(string announcementTitle);
    PagedResult<GetAnnouncementsDto> GetAnnouncements(int pageNumber, int pageSize);
    Task<GetAnnouncementBodyDto> GetAnnouncementBody(int id);

}