function compareNum(){
    const num1= document.getElementById("first_num").value;
    const num2= document.getElementById("second_num").value;
    const num3= document.getElementById("third_num").value;

    if(num1 < 1 || num2 < 1 || num3 < 1){
      return document.write("<h1>Not a Valid Triangle</h1>");
    }

    if(num1 + num2 < num3 || num2 + num3 < num1 || num1 + num3 < num2){
      return document.write("<h1>The side lengths don't make up a triangle, try again :)</h1>");
    }

    if(num1===num2 && num2===num3){
      document.write("<h1>It is an equilateral triangle</h1>");
    }else if(num1===num2 || num2===num3 || num1===num3){
      document.write("<h1>It is an isoceles triangle</h1>");
    }else{
      document.write("<h1>It is a scalene triangle</h1>");
    }

    const cos3= (Math.pow(num1,2) + Math.pow(num2,2) - Math.pow(num3,2))/(2*num1*num2);
    angle3= Math.acos(cos3)*180/Math.PI

    const cos1= (Math.pow(num2,2) + Math.pow(num3,2) - Math.pow(num1,2))/(2*num2*num3);
    angle1= Math.acos(cos1)*180/Math.PI

    const cos2= (Math.pow(num3,2) + Math.pow(num1,2) - Math.pow(num2,2))/(2*num3*num1);
    angle2= Math.acos(cos2)*180/Math.PI

    document.write("<h3>Angle 1: </h3>", angle1.toPrecision(3));
    document.write("<h3>Angle 2: </h3>", angle2.toPrecision(3));
    document.write("<h3>Angle 3: </h3>", angle3.toPrecision(3));

    //insert calculation for perimeter, area and type of triangle!!!
}
