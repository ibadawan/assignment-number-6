//task1

//var date = new Date()
//document.write(date)



//task2


//var date = new Date()
//var mon= date.getMonth()
//if (mon==0){
//   document.write("Current month is : January")
//}else if(mon==1){
//  document.write("Current month is : Feburary")
//}else if(mon==2){
//  document.write("Current month is : March")
//}else if(mon==3){
//  document.write("Current month is : April")
//}else if(mon==4){
//   document.write("Current month is : May")
//}else if(mon==5){
//   document.write("Current month is : June")
//}else if(mon==6){
//  document.write("Current month is : July")
//}else if(mon==7){
//  document.write("Current month is : August ")
//}else if(mon==8){
//  document.write("Current month is : September")
//}else if(mon==9){
//   document.write("Current month is : Octuber")
//}else if(mon==10){
//   document.write("Current month is : November")
//}else if(mon==11){
//  document.write("Current month is : December")
//}



//task3

//var date = new Date()
//var day= date.getDay()
//if(day==0){
//   document.write("Today is Sun")
//} else if(day==1){
//   document.write('Today is Mon')
//}else if(day==2){
//    document.write('Today is Tue')
//}else if (day==3){
//    document.write('Today is Wed')
//}else if(day==4){
//    document.write('Today is Thur')
//}else if(day==5){
//    document.write('Today is Fri')
//}else if(day==6){
//   document.write('Today is Sat')
//}


//task4

//var date = new Date()
//var day= date.getDay()
//if(day==6){
//  document.write("Today is fun day")
//}else if(day==0){
//    document.write("Today is fun day")
//}


//task5

//var date = new Date()
//var day= date.getDate()
//if(day<16){
//   document.write("First fifteen day of the month")
//}
//else{
//   document.write("Last days of the month")
//}


//task6

//var date = new Date()
//document.write(date)
//document.write("<br>")
//var ti = date.getTime()
//document.write("Elapsed milliseconds since january 1, 1970: "  + ti)
//document.write("<br>")
//a=(ti/1000)/60
//document.write("Elapsed minutes since january 1, 1970:" + a)


//task7

//var date = new Date()
//var hour = date.getHours()
//document.write(hour)
//if(hour<12){
//   alert('it is A.M')
//}else{
//   alert('it is P.M')
//}


//task8

//var laterdate = new Date("December 31, 2020 00:00:00");
//document.write(laterdate)


//task9

//var date = new Date();
//var newdate = new Date("June 18, 2015")
//var msdate = date.getTime();
//var msnewdate= newdate.getTime();
//document.write("<br>")
//var msdiff= msdate-msnewdate;
//var daydiff = msdiff / (1000*60*60*24)
//var daydiff = Math.floor(daydiff)
//document.write(daydiff + " " + " days have passed since 1st Ramdan 2015. ")

//task10

//var referdate = new Date("December 5, 2015 22:50:16")
//var beggdate = new Date("january 1, 2015 00:00:00")
//var msrefdate = referdate.getTime()
//var msbegdate=beggdate.getTime()
//var msdiff = msrefdate-msbegdate
//var sdiff= msdiff/ (1000*60)
//var sdiff= Math.floor(sdiff)
//document.write("On refference date" + " " + referdate + " " +" ," + " <br> " + sdiff + " seconds has passed since beggining of 2015.")


//task11
//var date = new Date();
//document.write(date)
//var newh = date.getFullYear()-6
//document.write(newh)

//task12
//var date = new Date();
//document.write("Current date is:" + " " + date)
//document.write("<br>")
//date.setFullYear(2020-100)
//document.write("100 years back it was " + " " +  date)

//task13

//var age = prompt (" enter your age" )
//var presentyear =2020
//document.write("Your age is " + age)
//var years = presentyear-age;
//document.write("<br>")
//document.write("Your birth year is " + years)


//task14

//var str = " Hashim nadeem"
//document.write("Consumer Name: " +  str)
//document.write("<br>")
//var date = "June"
//document.write("Current Month: " +  date)
//document.write("<br>")
//var units = 410
//document.write("Number Of unit :" + units)
//document.write("<br>")
//var charge = 16
//document.write("Chargeg per unit:" + charge)
//document.write("<br>")
//document.write("<br>")
//var nap = units*charge;
//document.write("Net amount payable (within due date): " + nap)
//document.write("<br>")
//var latepayment = 350;
//document.write("Late payment surcharge: " + latepayment)
//document.write("<br>")
//var gap =nap+latepayment;
//document.write("Gross amount payable (after due date): " + gap)









