using HighSchoolAPI.Models;

namespace HighSchoolAPI.Services.Application;

public interface IApplicationService
{
    Task CreateApplication(CreateApplicationDto dto);
    Task RejectApplication(int id);
    Task ApproveApplication(int id);
    Task<Database.Entities.Application> GetLastApplication();
}