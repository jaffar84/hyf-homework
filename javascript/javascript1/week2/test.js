const class07Students = ['butros', 'john','samoiel','julia','mary'];
function addStudentToClass([studentName]) 
{
  // You write code here
    var idx = class07Students.indexOf(studentName);
    //already in class
    if (idx != -1) {
        class07Students.push(studentName);
        idx = class07Students.indexOf(studentName, idx);
        console.log ('Student ' + studentName+' is already in class 07!');
         
    }   
    // new students, but only 6 in total
    else if ((idx = -1) && (class07Students.length < 6)) {
        class07Students.push(studentName);
        idx = class07Students.indexOf(studentName);
        console.log(class07Students);
         
    } 
    // additional place for the Queen
    else if((class07Students.length = 6) && (studentName == 'Queen')) {
        class07Students.push(studentName);
        idx = class07Students.indexOf(studentName);
        console.log(class07Students);

    }  
    //no more students 
    else if (class07Students.length >= 6){
        class07Students.push(studentName);
        console.log('Cannot add '+ studentName+' or more students to class 07');
    }
}
addStudentToClass(['sofie']);
addStudentToClass(['john']);
addStudentToClass(['loreena']);
addStudentToClass(['Queen']);

//console.log (class07Students[])
//++++++++++++++++++++++++++++++++++++++++++++++++++++
function getNumberOfStudents(numberOfStudents) {
  // You write code here
  numberOfStudents = console.log(class07Students.length)
}
getNumberOfStudents();