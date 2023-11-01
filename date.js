function fullDate()
{
    var today=new Date();
    outt=today.toDateString().split(" ").splice(1);
    return outt[1]+' '+outt[0]+' '+outt[2];
}

console.log(fullDate())