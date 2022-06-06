function calculate(){
    var a = parseInt(document.getElementById('computer').value);
    var b = parseInt(document.getElementById('english').value);
    var c = parseInt(document.getElementById('maths').value);
    var d = parseInt(document.getElementById('physics').value);
    var e = parseInt(document.getElementById('chemistry').value);
    if(a>100 || b>100 || c>100|| d>100|| e>100 ){
      alert("Please Enter The Valid Value")
    }else{
        var obtain=a+b+c+d+e;
        document.getElementById("obtain").innerHTML=obtain;

        var per=obtain/500*100
        document.getElementById("per").innerHTML=per;

        if(a>33 && b>33 && c>33 && d>33 && e>33){
            document.getElementById("remarks").innerHTML="<span style='color:green'>PASS</span>";
            
        }
        else{
            document.getElementById("remarks").innerHTML="<span style='color:red'>FAIL</span>";
        }
        if(per>=80){
            document.getElementById("grade").innerText="A"
        }
        else if(per>=60 && per<80){
            document.getElementById("grade").innerText="B"
        }
        else if(per>=45 && per<60){
            document.getElementById("grade").innerText="C"
        }
        else if(per>=33 && per<45){
            document.getElementById("grade").innerText="D"
        }
        else if(per>=21 && per<33){
            document.getElementById("grade").innerText="E"
        }
        else{
            document.getElementById("grade").innerText="F"
        }


    }
}


