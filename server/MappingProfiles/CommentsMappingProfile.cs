using AutoMapper;
using HighSchoolAPI.Database.Entities;
using HighSchoolAPI.Models;

namespace HighSchoolAPI.MappingProfiles;

public class CommentsMappingProfile : Profile
{
    public CommentsMappingProfile()
    {
        CreateMap<Comment, GetCommentsDto>().ForMember(x => x.Content, c => c.MapFrom(d => d.Content));
    }    
}