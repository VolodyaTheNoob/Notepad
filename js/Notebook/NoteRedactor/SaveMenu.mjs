import { Menu } from "../Menu.mjs";
import { Button } from "../Button.mjs";
import { downloadAsTextFile, downloadAsTextFileJSON, downloadAsWORDFile, downloadAsPDFFile, downloadAsHtmlFile } from "../Files.mjs";
import { RedactorData } from "./RedactorData.mjs";

const SaveButtonID = "SaveButton";
const SaveMenuID = "SaveMenu";
const MenuButtonsClass = "MenuButton";
const CloseMenuButtonId = "CloseSaveMenu";
const SaveTextFileButtonID = "SaveAsTextFile";
const SaveJSONFileButtonID = "SaveAsJSONFile";
const SaveWordFileButtonID = "SaveAsWordFile";
const SavePDFFileButtonID = "SaveAsPdfFile";
const SaveHTMLFileButtonID = "SaveAsHtmlFile";
let SaveMenuButtons = new Array();
//Creating external button to open save menu
export let SaveFileButton = new Button("", SaveButtonID);
SaveFileButton.AddEventFunc("mousedown",OpenSaveMenu,RedactorData,SaveMenuID);
function OpenSaveMenu(e, [RedactorData,SaveMenuID]){
    let SaveMenu = document.getElementById(SaveMenuID);
    if(getComputedStyle(SaveMenu).display === "block"){
        SaveMenu.style.display = "none";
    }else{
        SaveMenu.style.display = "block";
    }
}
//Creating internal menu buttons
//Creating Close Button
let CloseMenuButton = new Button(MenuButtonsClass,CloseMenuButtonId);
CloseMenuButton.AddEventFunc("mousedown",CloseSaveMenu,RedactorData,SaveMenuID);
function CloseSaveMenu(e, [RedactorData,SaveMenuID]){
    let SaveMenu = document.getElementById(SaveMenuID);
    SaveMenu.style.display = "none";
}
SaveMenuButtons.push(CloseMenuButton);//pushing to SaveMenuButtons

//Creating download as Text File Button
let SaveAsTextFileButton = new Button(MenuButtonsClass,SaveTextFileButtonID);
SaveAsTextFileButton.AddEventFunc("mousedown",SaveAsTextFile,RedactorData);
function SaveAsTextFile(e, [RedactorData]){
    downloadAsTextFile(RedactorData.TitleTextArea.DOM.innerHTML,RedactorData.NoteTextArea.DOM.innerHTML);
}
SaveMenuButtons.push(SaveAsTextFileButton);//pushing to SaveMenuButtons
//Creating download as JSON File Button
let SaveAsJSONFileButton = new Button(MenuButtonsClass,SaveJSONFileButtonID);
SaveAsJSONFileButton.AddEventFunc("mousedown",SaveAsJSONFile,RedactorData);
function SaveAsJSONFile(e, [RedactorData]){
    downloadAsTextFileJSON(RedactorData.TitleTextArea.DOM.innerHTML,RedactorData.NoteTextArea.DOM.innerHTML);
}
SaveMenuButtons.push(SaveAsJSONFileButton);//pushing to SaveMenuButtons
//Creating download as WORD File Button
let SaveAsWORDFileButton = new Button(MenuButtonsClass,SaveWordFileButtonID);
SaveAsWORDFileButton.AddEventFunc("mousedown",SaveAsWordFile,RedactorData);
function SaveAsWordFile(e, [RedactorData]){
    
}
SaveMenuButtons.push(SaveAsWORDFileButton);//pushing to SaveMenuButtons
//Creating download as PDF File Button
let SaveAsPDFFileButton = new Button(MenuButtonsClass,SavePDFFileButtonID);
SaveAsPDFFileButton.AddEventFunc("mousedown",SaveAsPDFFile,RedactorData);
function SaveAsPDFFile(e, [RedactorData]){
    
}
SaveMenuButtons.push(SaveAsPDFFileButton);//pushing to SaveMenuButtons
//Creating download as HTML File Button
let SaveAsHTMLFileButton = new Button(MenuButtonsClass,SaveHTMLFileButtonID);
SaveAsHTMLFileButton.AddEventFunc("mousedown",SaveAsHTMLFile,RedactorData);
function SaveAsHTMLFile(e, [RedactorData]){
    downloadAsHtmlFile(RedactorData.TitleTextArea.DOM.innerHTML,RedactorData.NoteTextArea.DOM.innerHTML);
}
SaveMenuButtons.push(SaveAsHTMLFileButton);//pushing to SaveMenuButtons
//Attaching Buttons To SaveMenu
export let SaveMenu = new Menu(SaveMenuID,SaveMenuButtons);
