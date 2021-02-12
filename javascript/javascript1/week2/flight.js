function getFullname(firstname, surname, useFormalName)
{
    if(useFormalName = true){
        return 'Lord ' + firstname + ' ' + surname
    }
    else{
        return firstname + ' ' + surname;
    }   
}
