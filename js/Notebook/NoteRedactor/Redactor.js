import {NoteTitleDiv, NoteDiv, LastSelectedText} from "./RedactorGlobalData.mjs"
import { downloadAsTextFile, downloadAsTextFileJSON } from '../Files.mjs';
import { Menu } from '../Menu.mjs'
import { Button } from '../Button.mjs'
import { ContextMenu } from './ContextMenu.mjs';

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


