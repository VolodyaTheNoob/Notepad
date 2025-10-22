import { downloadAsTextFile, downloadAsTextFileJSON } from '../Files.mjs';
import { Menu } from '../Menu.mjs'

let body = null;

let NoteTitleDiv = document.getElementById("NoteTitle");
let NoteDiv = document.getElementById("Note");
let ContextMenu = document.getElementById("ContextMenu");

NoteDiv.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    if(getComputedStyle(ContextMenu).display === "none"){
        ContextMenu.style.marginTop = Math.abs(NoteDiv.getBoundingClientRect().top - event.y - 72) + "px";
        ContextMenu.style.marginLeft = Math.abs(NoteDiv.getBoundingClientRect().left - event.x - 312) + "px";
        ContextMenu.style.display = "block";
    }else{
        ContextMenu.style.display = "none";
    }
});

let LastSelectedText;
NoteDiv.onselect = (selected) =>{
    if (NoteDiv.selectionStart == NoteDiv.selectionEnd) {
        LastSelectedText = "";
        return; 
    }
    let Selected = NoteDiv.value.slice(NoteDiv.selectionStart,NoteDiv.selectionEnd);
    LastSelectedText = Selected;
};
ContextMenu.addEventListener('contextmenu', function(event){
    event.preventDefault();
});

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

let CntxMenu = new Menu("ContextMenu","MenuButton");
CntxMenu.BindFuncByButtonId("mousedown","Quote",test);

function test(){
    console.log("hi");
}