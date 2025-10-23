import { Menu } from '../Menu.mjs'
import { Button } from '../Button.mjs'
import {RedactorData} from "./RedactorData.mjs"

//Attaching function to NoteRedactor - its works with context menu - so I add it here
RedactorData.NoteTextArea.DOM.addEventListener('contextmenu', (event) => {
    let TextArea = RedactorData.NoteTextArea.DOM;
    event.preventDefault();
    if(getComputedStyle(ContextMenu.DOM).display === "none"){
        ContextMenu.DOM.style.marginTop = Math.abs(TextArea.getBoundingClientRect().top - event.y - 72) + "px";
        ContextMenu.DOM.style.marginLeft = Math.abs(TextArea.getBoundingClientRect().left - event.x - 312) + "px";
        ContextMenu.DOM.style.display = "block";
    }else{
        ContextMenu.DOM.style.display = "none";
    }
});

//Creating functions to ContextMenu
//Array of Buttons for ContextMenu
let ContextMenuButtons = new Array();
//Function to add tags in text
function AddTag(e,RedactorData, Ltag,Rtag){
    let TextAreaDOM = RedactorData.NoteTextArea.DOM;
    if(TextAreaDOM.selectionStart !=TextAreaDOM.selectionEnd){
        let Left = TextAreaDOM.value.slice(0,RedactorData.NoteTextArea.LastSelectedTextPosStart);
        let Quote = TextAreaDOM.value.slice(RedactorData.NoteTextArea.LastSelectedTextPosStart,RedactorData.NoteTextArea.LastSelectedTextPosEnd);
        let Right = TextAreaDOM.value.slice(RedactorData.NoteTextArea.LastSelectedTextPosEnd,TextAreaDOM.value.length);
        let LeftTag = Ltag;
        let RightTag = Rtag;
        Left = Left + LeftTag;
        Right = RightTag + Right;
        TextAreaDOM.value = Left + Quote + Right;
    }
}
//QuoteButton
let QuoteButton = new Button("MenuButton","Quote");
QuoteButton.AddEventFunc("mousedown",QuoteAdd,RedactorData);
function QuoteAdd(e,RedactorData){
    let qLeft = ["<q>"];
    let qRight = ["</q>"];
    AddTag(e,RedactorData,qLeft,qRight);
}
ContextMenuButtons.push(QuoteButton);//pushing to array of Buttons
//BoldButton
let BoldButton = new Button("MenuButton","Bold");
BoldButton.AddEventFunc("mousedown",BoldAdd,RedactorData);
function BoldAdd(e,RedactorData){
    let qLeft = ["<b>"];
    let qRight = ["</b>"];
    AddTag(e,RedactorData,qLeft,qRight);
}
ContextMenuButtons.push(BoldButton);//pushing to array of Buttons
//ItalicsButton
let ItalicsButton = new Button("MenuButton","Italics");
ItalicsButton.AddEventFunc("mousedown",ItalicsAdd,RedactorData);
function ItalicsAdd(e,RedactorData){
    let qLeft = ["<i>"];
    let qRight = ["</i>"];
    AddTag(e,RedactorData,qLeft,qRight);
}
ContextMenuButtons.push(ItalicsButton);//pushing to array of Buttons
//UnderlinedButton
let UnderlinedButton = new Button("MenuButton","Underlined");
UnderlinedButton.AddEventFunc("mousedown",UnderlinedAdd,RedactorData);
function UnderlinedAdd(e,RedactorData){
    let qLeft = ["<u>"];
    let qRight = ["</u>"];
    AddTag(e,RedactorData,qLeft,qRight);
}
ContextMenuButtons.push(UnderlinedButton);//pushing to array of Buttons
//CrossedOutButton
let CrossedOutButton = new Button("MenuButton","CrossedOut");
CrossedOutButton.AddEventFunc("mousedown",CrossedOutAdd,RedactorData);
function CrossedOutAdd(e,RedactorData){
    let qLeft = ["<s>"];
    let qRight = ["</s>"];
    AddTag(e,RedactorData,qLeft,qRight);
}
ContextMenuButtons.push(CrossedOutButton);//pushing to array of Buttons
//CopyButton
let CopyButton = new Button("MenuButton","Copy");
function Copy(){
    
}
ContextMenuButtons.push(CopyButton);//pushing to array of Buttons
//InsertButton
let InsertButton = new Button("MenuButton","Insert");
function Insert(){
    
}
ContextMenuButtons.push(InsertButton);//pushing to array of Buttons
//CutButton
let CutButton = new Button("MenuButton","Cut");
function Cut(){
    
}
ContextMenuButtons.push(CutButton);//pushing to array of Buttons
//ColorButton
let ColorButton = new Button("MenuButton","Color");
function ColorAdd(){
    
}
ContextMenuButtons.push(ColorButton);//pushing to array of Buttons
//FontButton
let FontButton = new Button("MenuButton","Font");
function FontAdd(){
    
}
ContextMenuButtons.push(FontButton);//pushing to array of Buttons
//ImgButton
let ImgButton = new Button("MenuButton","Img");
function ImgAdd(){
    
}
ContextMenuButtons.push(ImgButton);//pushing to array of Buttons

//Class Menu
export let ContextMenu = new Menu("ContextMenu",ContextMenuButtons);
//Creation function for Menu
function ContextMenuFunc(){
 ContextMenu.DOM.addEventListener("contextmenu",
    (event) => {event.preventDefault;});
 }
ContextMenu.BindFuncToMenu("contextmenu", ContextMenuFunc, []);//Attaching function to Menu
