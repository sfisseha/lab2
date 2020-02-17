function compareNum(){
    var num1 = document.getElementById("first_num").value;
    var num2 = document.getElementById("second_num").value;
    var num3 = document.getElementById("third_num").value;

    num1= parseInt(num1);
    num2= parseInt(num2);
    num3= parseInt(num3);

    var sum1= num1 + num2;
    var sum2= num2 + num3;
    var sum3= num1 + num3;

    if(num1 < 1 || num2 < 1 || num3 < 1){
      return document.write("<h1>Not a Valid Triangle</h1>");
    }

    if( (sum1 > num3) && (sum2 > num1) && (sum3 > num2) ){
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

      if(angle1 < 90 && angle2 < 90 && angle3 < 90){
        document.write("<h3> It is an acute triangle</h3>");
      }

      if(angle1 > 90 || angle2 > 90 || angle3 > 90){
        document.write("<h3> It is an obtuse triangle</h3>");
      }

      if(angle1=== 90 || angle2 === 90 || angle3 === 90){
        document.write("<h3> It is an right triangle</h3>");
      }

      var perimeter= num1 + num2 + num3;
      document.write("<h3>The perimeter is ", perimeter);

      //using Heron's formula
      var p= perimeter/2;
      var area= Math.sqrt(p*(p-num1)*(p-num2)*(p-num3)).toPrecision(3);
      document.write("<h3>The Area is ", area);

      }else{
          return document.write("<h1>The side lengths don't make up a triangle, try again :)</h1>");
    }

}
