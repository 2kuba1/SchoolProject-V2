namespace HighSchoolAPI.Database.Entities;

public class User
{
    public int Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Email { get; set; }
    public string PasswordHash { get; set; }
    public string ApplicationStatus { get; set; } = "Unknown";
    
    public int? ApplicationId { get; set; }
    public int RoleId { get; set; }

    public virtual Application? Application { get; set; }
    public virtual Role Role { get; set; }
}