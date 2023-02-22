using HighSchoolAPI.Models;

namespace HighSchoolAPI.Services.Announcement;

public interface IAnnouncementService
{
    Task CreateAnnouncementWithoutImages(CreateAnnouncementDto dto);
    Task AddThumbnail(IFormFile file, int id);
    Task AddImage(IFormFile file, int id);
}