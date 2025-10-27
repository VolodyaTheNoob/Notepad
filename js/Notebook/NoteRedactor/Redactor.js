import {RedactorData} from "./RedactorData.mjs"
import { ContextMenu } from './ContextMenu/ContextMenu.mjs';
import { Button } from "../Button.mjs";
import {SaveMenu, SaveFileButton} from "./SaveMenu.mjs"
import { downloadAsTextFile, downloadAsTextFileJSON } from '../Files.mjs';

const OpenRedactorButtonID = "OpenRedactorButton";
const CloseRedactorButtonID = "RedactorExitButton";
let OpenRedactorButton = new Button("",OpenRedactorButtonID);
OpenRedactorButton.AddEventFunc("mousedown",OpenRedactor,OpenRedactorButton);
function OpenRedactor(e,[OpenRedactorButton]){
    const RedactorID = "Redactor";
    const RedactorWrapID = "RedactorWrap";
    const RedactorDOM = document.getElementById(RedactorID);
    const RedactorWrapDOM = document.getElementById(RedactorWrapID);
    console.log(RedactorWrapDOM);
    RedactorDOM.style.display = "flex";
    RedactorWrapDOM.style.display = "flex";
    OpenRedactorButton.DOM.style.display = "none";
}
let CloseRedactorButton = new Button("", CloseRedactorButtonID);
CloseRedactorButton.AddEventFunc("mousedown",CloseRedactor,OpenRedactorButton);
function CloseRedactor(e,[OpenRedactorButton]){
    const RedactorID = "Redactor";
    const RedactorWrapID = "RedactorWrap";
    const RedactorDOM = document.getElementById(RedactorID);
    const RedactorWrapDOM = document.getElementById(RedactorWrapID);
    RedactorDOM.style.display = "none";
    RedactorWrapDOM.style.display = "none";
    OpenRedactorButton.DOM.style.display = "block";
}