function del()
{
    document.getElementById("display").value="";
}
function show(x)
{
    document.getElementById("display").value+=x;
}
function result()
{
    document.getElementById("display").value=eval(document.getElementById("display").value)
}