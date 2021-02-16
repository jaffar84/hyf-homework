//step 1
const notes = [];

function saveNote(content, id) 
{   content = ['pick up groceries', 'Do laundry'];
    id = [1,2];
    notes.push (
    {content: 'Pick up groceries', id: 1},
    {content: 'Do laundry', id: 2})   
}

saveNote();
console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

//step 2: Get a note
function getNote(id) {
       
    var lookup = {
        1: 'Pick up groceries',
        2: 'Do laundry',
      }
           
    
    for (id != 0; id<=Math.max(id); id++){
        if (isNaN(id) || (id ===null)) {
            result = console.log ('error');
            //return result
            
        }
        else {result = lookup[id];
            return result;}            
        }
    
}
const firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}
// step 3: Log out notes
function logOutNotesFormatted() {
    const yourNote = console.log ('The note with id: ' + id + ', has the following note text: '+ content);
  }
  
  logOutNotesFormatted(); 