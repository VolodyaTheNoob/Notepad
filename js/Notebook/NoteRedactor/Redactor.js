import {RedactorData} from "./RedactorData.mjs"
import { ContextMenu } from './ContextMenu/ContextMenu.mjs';
import { downloadAsTextFile, downloadAsTextFileJSON } from '../Files.mjs';

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


