
function TESTING()
{
    var userLog = document.getElementById('loginUser');

    if(userLog.value === user)
    {
        userLog.style.borderBottom = "3px solid green";
    }
    else
    {
        userLog.style.borderBottom = "3px solid red";
    }
}