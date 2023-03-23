namespace HighSchoolAPI.Database.Entities;

public class Comment
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Content { get; set; }
    public DateTime CreationDate { get; set; }
    public int CreatedBy { get; set; }
    public int AnnouncementId { get; set; }
    public virtual Announcement Announcement { get; set; }
}