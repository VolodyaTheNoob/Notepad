import {RedactorData} from "./RedactorData.mjs"
import { ContextMenu } from './ContextMenu/ContextMenu.mjs';
import { Button } from "../Button.mjs";
import {SaveMenu, SaveFileButton} from "./SaveMenu.mjs"
import { downloadAsTextFile, downloadAsTextFileJSON } from '../Files.mjs';

//Open Chose how to add note menu
const AddNoteChoseMenuID = "ChoseHowToAddNotesWrap"
const OpenAddNoteChoseMenuButtonID = "OpeHowToAddNotesButton"
const ChoseRedactorButtonID = "ChoseRedactorButton";
const RedactorID = "RedactorWrap";
const CloseAddNoteChoseMenuButtonID = "CloseChcoseHowToAddMenu";
const CloseRedactorBttonID = "CloseRedactor";
const GoBackToChoseAddMenuButtonID = "RedactorExitButton";
const UploadNoteFromFileButtonID = "ChoseDownloadButton";
let OpenChoseHowToAddNoteButton = new Button("", OpenAddNoteChoseMenuButtonID);
OpenChoseHowToAddNoteButton.AddEventFunc("mousedown",OpenChoseHowToAddNoteMenu,AddNoteChoseMenuID)
function OpenChoseHowToAddNoteMenu(e,[AddNoteChoseMenuID]){
    const ChoseHowToAddNotesMenuDOM = document.getElementById(AddNoteChoseMenuID);
    ChoseHowToAddNotesMenuDOM.style.display = "flex";
}
//Close Chose how to add note menu
let CloseAddNoteChoseMenuButton = new Button("",CloseAddNoteChoseMenuButtonID);
CloseAddNoteChoseMenuButton.AddEventFunc("mousedown",CloseAddNoteChoseMenu,AddNoteChoseMenuID)
function CloseAddNoteChoseMenu(e,[AddNoteChoseMenuID]){
    const ChoseHowToAddNotesMenuDOM = document.getElementById(AddNoteChoseMenuID);
    ChoseHowToAddNotesMenuDOM.style.display = "none";
}
//Open redactor
let ChoseRedactorButton = new Button("",ChoseRedactorButtonID);
ChoseRedactorButton.AddEventFunc("mousedown",OpenRedactor, RedactorID,AddNoteChoseMenuID)
function OpenRedactor(e,[RedactorID,AddNoteChoseMenuID]){
    const AddNoteChoseMenuDOM = document.getElementById(AddNoteChoseMenuID);
    const RedactorDOM = document.getElementById(RedactorID);
    RedactorDOM.style.display = "flex";
    AddNoteChoseMenuDOM.style.display = "none";
}
//Close redactor
let CloseRedactorButton = new Button("",CloseRedactorBttonID);
CloseRedactorButton.AddEventFunc("mousedown",CloseRedactor,RedactorID);
function CloseRedactor(e, [RedactorID]){
    const RedactorDOM = document.getElementById(RedactorID);
    RedactorDOM.style.display = "none";
}
//Go back to chose menu from redactor
let GoBackToChoseAddMenuButton = new Button("", GoBackToChoseAddMenuButtonID);
GoBackToChoseAddMenuButton.AddEventFunc("mousedown",GoBack,RedactorID,AddNoteChoseMenuID);
function GoBack(e,[RedactorID,AddNoteChoseMenuID]){
    const AddNoteChoseMenuDOM = document.getElementById(AddNoteChoseMenuID);
    const RedactorDOM = document.getElementById(RedactorID);
    RedactorDOM.style.display = "none";
    AddNoteChoseMenuDOM.style.display = "flex"
}
//Open load note file menu
let UploadNoteFromFileButton = new Button("",UploadNoteFromFileButtonID);
UploadNoteFromFileButton.AddEventFunc("mousedown",UploadNoteFromFile);
function UploadNoteFromFile(e){
    console.log("Uploading")
}