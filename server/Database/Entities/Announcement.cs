namespace HighSchoolAPI.Database.Entities;

public class Announcement
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public DateTime CreationDate { get; set; }
    public int CreatedBy { get; set; }
    public virtual Thumbnail Thumbnail { get; set; }
    public virtual List<Image> Images { get; set; }
}