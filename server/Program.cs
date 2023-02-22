using System.Text;
using HighSchoolAPI;
using HighSchoolAPI.Database;
using HighSchoolAPI.Services;
using HighSchoolAPI.Services.Account;
using HighSchoolAPI.Services.Announcement;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
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

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseStaticFiles();
app.UseAuthentication();
app.UseCookiePolicy();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();