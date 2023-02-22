using HighSchoolAPI.Database.Entities;

namespace HighSchoolAPI.Models;

public class GetAnnouncementBodyDto
{
    public string Title { get; set; }
    public string Description { get; set; }
    public string? ThumbnailUrl { get; set; }
    public List<string>? Images { get; set; }
}