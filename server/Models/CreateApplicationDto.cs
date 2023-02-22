namespace HighSchoolAPI.Models;

public class CreateApplicationDto
{
    public string FirstAndLastName { get; set; }
    public int Age { get; set; }
    public string DateOfBirth { get; set; }
    public string Email { get; set; }
}