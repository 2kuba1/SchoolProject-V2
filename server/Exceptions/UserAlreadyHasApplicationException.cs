namespace HighSchoolAPI.Exceptions;

public class UserAlreadyHasApplicationException : Exception
{
    public UserAlreadyHasApplicationException(string message) : base(message)
    {
        
    }
}