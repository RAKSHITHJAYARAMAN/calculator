$(document).ready(function(){
    console.log("ready");
});

function add(){
    console.log("ajax call started");
    var inputdata='n1='+$("#number1").val()+'n2='+$("#number2").val();
    console.log("input data:"+inputdata);
    $.ajax({
        url:"calc",data: inputdata,type:"POST",
        succes:function(data)
        {
            $("#result1").html(data);
        }
    });
    console.log("ajax call ended");
}