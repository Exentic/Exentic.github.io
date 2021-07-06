id = prompt('ID를 입력하시오');

if(id == 'std01')
{
    password = prompt('PW를 입력하시오');
    if(password == '1111')
    {
     document.write("로그인 성공");
    }
    else
    {
        document.write("로그인 실패. 다시 시도하세요. ");
    }
}
else if(id == 'std02')
{
    password = prompt('PW를 입력하시오');
    if(password == '2222')
    {
     document.write("로그인 성공");
    }
    else
    {
        document.write("로그인 실패. 다시 시도하세요. ");
    }
}
else if(id == 'std03')
{
    password = prompt('PW를 입력하시오');
    if(password == '3333')
    {
     document.write("로그인 성공");
    }
    else
    {
        document.write("로그인 실패. 다시 시도하세요. ");
    }
}
else {
    document.write("로그인 실패. 다시 시도하세요. ");
}