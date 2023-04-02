namespace HighSchoolAPI.Models;

public class GetCommentsDto
{
    public int Id {get; set;}
    public string Name { get; set; }
    public string Content { get; set; }
    public string CreationDate { get; set; }
}