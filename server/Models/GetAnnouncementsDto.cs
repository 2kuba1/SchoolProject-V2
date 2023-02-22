namespace HighSchoolAPI.Models;

public class GetAnnouncementsDto
{
    public int Id { get; set; }
    public string Title { get; set; }
    public DateTime CreationDate { get; set; }
    public string? ThumbnailUrl { get; set; }
}