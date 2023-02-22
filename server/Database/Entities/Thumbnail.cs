namespace HighSchoolAPI.Database.Entities;

public class Thumbnail
{
    public int Id { get; set; }
    public string ThumbnailUrl { get; set; }
    public string FileName { get; set; }
    public int AnnouncementId { get; set; }
    public virtual Announcement Announcement { get; set; }
}