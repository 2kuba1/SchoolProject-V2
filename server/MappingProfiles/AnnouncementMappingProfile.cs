using AutoMapper;
using HighSchoolAPI.Database.Entities;
using HighSchoolAPI.Models;

namespace HighSchoolAPI.MappingProfiles;

public class AnnouncementMappingProfile : Profile
{
    public AnnouncementMappingProfile()
    {
        CreateMap<Announcement, GetAnnouncementsDto>().ForMember(x => x.ThumbnailUrl, c => c.MapFrom(d => d.Thumbnail.ThumbnailUrl) );
    }
}