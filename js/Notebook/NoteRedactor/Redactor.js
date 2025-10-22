import { downloadAsTextFile, downloadAsTextFileJSON } from '../Files.mjs';
import { Menu } from '../Menu.mjs'

let NoteTitleDiv = document.getElementById("NoteTitle");
let NoteDiv = document.getElementById("Note");

//Class Menu
let ContextMenu = new Menu("ContextMenu","MenuButton");
//Creation function for Menu
function ContextMenuFunc(){
 ContextMenu.DOM.addEventListener("contextmenu",
    (event) => {event.preventDefault;});
 }
//Attaching function to Menu
ContextMenu.BindFuncToMenu("contextmenu", ContextMenuFunc, []);

//Attaching function to NoteRedactor
NoteDiv.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    if(getComputedStyle(ContextMenu.DOM).display === "none"){
        ContextMenu.DOM.style.marginTop = Math.abs(NoteDiv.getBoundingClientRect().top - event.y - 72) + "px";
        ContextMenu.DOM.style.marginLeft = Math.abs(NoteDiv.getBoundingClientRect().left - event.x - 312) + "px";
        ContextMenu.DOM.style.display = "block";
    }else{
        ContextMenu.DOM.style.display = "none";
    }
});

//Getting last selected Note text
let LastSelectedText;
NoteDiv.onselect = (selected) =>{
    if (NoteDiv.selectionStart == NoteDiv.selectionEnd) {
        LastSelectedText = "";
        return; 
    }
    let Selected = NoteDiv.value.slice(NoteDiv.selectionStart,NoteDiv.selectionEnd);
    LastSelectedText = Selected;
};

let SaveFileButton = document.getElementById("SaveButton");
let SaveMenu = document.getElementById("SaveMenu");

SaveFileButton.addEventListener("mousedown", (event) => {
    if(getComputedStyle(SaveMenu).display === "none"){
        SaveMenu.style.display = "block";
    }else{
        SaveMenu.style.display = "none";
    }
});

let SaveAsTextFileButton = document.getElementById("SaveAsTextFile");
let SaveAsTextFileJSONButton = document.getElementById("SaveAsTextFileJSON");

SaveAsTextFileButton.addEventListener("mousedown", (event) =>{
    downloadAsTextFile(NoteTitleDiv.value, NoteDiv.value);
});

SaveAsTextFileJSONButton.addEventListener("mousedown", (event) =>{
    downloadAsTextFileJSON(NoteTitleDiv.value, NoteDiv.value);
});


