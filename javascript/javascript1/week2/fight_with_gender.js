//we might add a radio button in the html file for the gender get only male or female
const gender = female;
function getFullname(gender,firstname, surname, useFormalName)
{
    if((useFormalName == true) && (gender == true)){
        return 'Lady ' + firstname + ' ' + surname
    }
    else if ((useFormalName = true) && (gender = false)){
        return 'Lord ' + firstname + ' ' + surname
    }
    else{
        return firstname + ' ' + surname;
    }   
}
const fullname1 = getFullname("first", "last", true);
const fullname2 = getFullname("first1", "last1");
console.log(fullname1);
console.log(fullname2);
