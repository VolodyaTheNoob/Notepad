export let NoteTitleDiv = document.getElementById("NoteTitle");
export let NoteDiv = document.getElementById("Note");
export let LastSelectedText;
export let LastSelectedTextPosStart;
export let LastSelectedTextPosEnd;

//So we can change global data only in module - thats why functions with GlobalData modification will be there
//Getting last selected Note text
NoteDiv.onselect = () =>{
    if (NoteDiv.selectionStart == NoteDiv.selectionEnd) {
        LastSelectedText = "";
        return; 
    }
    LastSelectedTextPosStart = NoteDiv.selectionStart;
    LastSelectedTextPosEnd = NoteDiv.selectionEnd;
    let Selected = NoteDiv.value.slice(NoteDiv.selectionStart,NoteDiv.selectionEnd);
    LastSelectedText = Selected;
};