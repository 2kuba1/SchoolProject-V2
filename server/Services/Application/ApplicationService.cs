using HighSchoolAPI.Database;
using HighSchoolAPI.Exceptions;
using HighSchoolAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace HighSchoolAPI.Services.Application;

public class ApplicationService : IApplicationService
{
    private readonly AppDbContext _dbContext;
    private readonly IUserContextService _contextService;

    public ApplicationService(AppDbContext dbContext, IUserContextService contextService)
    {
        _dbContext = dbContext;
        _contextService = contextService;
    }

    public async Task CreateApplication(CreateApplicationDto dto)
    {
        var user = await  _dbContext.Users.FirstOrDefaultAsync(x => x.Id == _contextService.GetUserId.Value);

        if (user.ApplicationId is not null)
        {
            throw new UserAlreadyHasApplicationException("You already have application");
        }
        
        var names = dto.FirstAndLastName.Split(' ');

        var application = new Database.Entities.Application()
        {
            Age = dto.Age,
            Email = dto.Email,
            FirstName = names[0],
            LastName = names[1],
            DateOfBirth = dto.DateOfBirth
        };

        await _dbContext.Applications.AddAsync(application);
        await _dbContext.SaveChangesAsync();

        var getApplicationId = await _dbContext.Applications.FirstOrDefaultAsync(x => x.Email == application.Email);
        user.ApplicationId = getApplicationId.Id;
        await _dbContext.SaveChangesAsync();

    }

    public async Task ApproveApplication(int id)
    {
        var application = await _dbContext.Applications.FirstOrDefaultAsync(x => x.Id == id);

        if (application is null)
        {
            throw new NotFoundException("Application not found");
        }
        
        var user = await _dbContext.Users.FirstOrDefaultAsync(x => x.ApplicationId == id);

        _dbContext.Applications.Remove(application);
        user.ApplicationStatus = "Approved";
        await _dbContext.SaveChangesAsync();
    }

    public async Task RejectApplication(int id)
    {
        var application = await _dbContext.Applications.FirstOrDefaultAsync(x => x.Id == id);

        if (application is null)
        {
            throw new NotFoundException("Application not found");
        }
        
        var user = await _dbContext.Users.FirstOrDefaultAsync(x => x.ApplicationId == id);

        _dbContext.Applications.Remove(application);
        user.ApplicationStatus = "Rejected";
        await _dbContext.SaveChangesAsync();
    }

    public async Task<Database.Entities.Application> GetLastApplication()
    {
        var lastApplication = await _dbContext.Applications.LastOrDefaultAsync();

        if (lastApplication is null)
        {
            throw new NotFoundException("All applications have been checked");
        }
        return lastApplication;
    }
}