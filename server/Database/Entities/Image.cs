namespace HighSchoolAPI.Database.Entities;

public class Image
{
    public int Id { get; set; }
    public string ImageUrl { get; set; }
    public string FileName { get; set; }
    public int AnnouncementId { get; set; }

    public virtual Announcement Announcement { get; set; }
}