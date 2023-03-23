namespace HighSchoolAPI.Models;

public class AddCommentDto
{
    public int AnnouncementId { get; set; }
    public string Name { get; set; }
    public string Contet { get; set; }
    public DateTime CreationDate { get; set; } = DateTime.Now;
}