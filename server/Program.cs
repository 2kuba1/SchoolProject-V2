using System.Text;
using FluentValidation;
using FluentValidation.AspNetCore;
using HighSchoolAPI;
using HighSchoolAPI.Database;
using HighSchoolAPI.Models;
using HighSchoolAPI.Services;
using HighSchoolAPI.Services.Account;
using HighSchoolAPI.Services.Announcement;
using HighSchoolAPI.Services.Application;
using HighSchoolAPI.Validators;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo() { Title = "HighSchool API", Version = "v1" });
    c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme()
    {
        In = ParameterLocation.Header,
        Description = "Enter token",
        Name = "Authorization",
        Type = SecuritySchemeType.Http,
        BearerFormat = "JWT",
        Scheme = "bearer"
    });
    c.AddSecurityRequirement(new OpenApiSecurityRequirement()
    {
        {
            new OpenApiSecurityScheme()
            {
                Reference = new OpenApiReference()
                {
                    Type = ReferenceType.SecurityScheme,
                    Id = "Bearer"
                }
            },
            new string[] { }
        }
    });
});
builder.Services.AddDbContext<AppDbContext>(config  =>
{
    var connectionString = builder.Configuration.GetValue<string>("ConnectionStrings:connectionString");
    config.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString));
});

var authSettings = new AuthSettings();

builder.Configuration.GetSection("Jwt").Bind(authSettings);

builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = "Bearer";
    options.DefaultScheme = "Bearer";
    options.DefaultAuthenticateScheme = "Bearer";
}).AddJwtBearer(cfg =>
{
    cfg.RequireHttpsMetadata = false;
    cfg.SaveToken = true;
    cfg.TokenValidationParameters = new TokenValidationParameters
    {
        ValidIssuer = authSettings.JwtIssuer,
        ValidAudience = authSettings.JwtIssuer,
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(authSettings.JwtKey))
    };
});

builder.Services.AddScoped<IAccountService, AccountService>();
builder.Services.AddSingleton(authSettings);
builder.Services.AddScoped<IUserContextService, UserContextService>();
builder.Services.AddScoped<IAnnouncementService, AnnouncementService>();
builder.Services.AddHttpContextAccessor();
builder.Services.AddAutoMapper(typeof(Program).Assembly);
builder.Services.AddScoped<IApplicationService, ApplicationService>();
builder.Services.AddScoped<ErrorHandlingMiddleware>();
builder.Services.AddFluentValidation(fv => fv.AutomaticValidationEnabled = true);
builder.Services.AddScoped<IValidator<RegisterUserDto>, RegisterValidator>();
builder.Services.AddScoped<IValidator<LoginDto>, LoginValidator>();
builder.Services.AddScoped<IValidator<CreateAnnouncementDto>, CreateAnnouncementValidator>();
builder.Services.AddScoped<IValidator<CreateApplicationDto>, CreateApplicationValidator>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseMiddleware<ErrorHandlingMiddleware>();
app.UseStaticFiles();
app.UseAuthentication();
app.UseCookiePolicy();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();