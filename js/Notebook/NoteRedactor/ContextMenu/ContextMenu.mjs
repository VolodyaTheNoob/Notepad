import { Menu } from '../../Menu.mjs'
import { Button } from '../../Button.mjs'
import {RedactorData} from "../RedactorData.mjs"

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
    let Left = ["<q>"];
    let Right = ["</q>"];
    AddTag(e,RedactorData,Left,Right);
}
ContextMenuButtons.push(QuoteButton);//pushing to array of Buttons
//BoldButton
let BoldButton = new Button("MenuButton","Bold");
BoldButton.AddEventFunc("mousedown",BoldAdd,RedactorData);
function BoldAdd(e,RedactorData){
    let Left = ["<b>"];
    let Right = ["</b>"];
    AddTag(e,RedactorData,Left,Right);
}
ContextMenuButtons.push(BoldButton);//pushing to array of Buttons
//ItalicsButton
let ItalicsButton = new Button("MenuButton","Italics");
ItalicsButton.AddEventFunc("mousedown",ItalicsAdd,RedactorData);
function ItalicsAdd(e,RedactorData){
    let Left = ["<i>"];
    let Right = ["</i>"];
    AddTag(e,RedactorData,Left,Right);
}
ContextMenuButtons.push(ItalicsButton);//pushing to array of Buttons
//UnderlinedButton
let UnderlinedButton = new Button("MenuButton","Underlined");
UnderlinedButton.AddEventFunc("mousedown",UnderlinedAdd,RedactorData);
function UnderlinedAdd(e,RedactorData){
    let Left = ["<u>"];
    let Right = ["</u>"];
    AddTag(e,RedactorData,Left,Right);
}
ContextMenuButtons.push(UnderlinedButton);//pushing to array of Buttons
//CrossedOutButton
let CrossedOutButton = new Button("MenuButton","CrossedOut");
CrossedOutButton.AddEventFunc("mousedown",CrossedOutAdd,RedactorData);
function CrossedOutAdd(e,RedactorData){
    let Left = ["<s>"];
    let Right = ["</s>"];
    AddTag(e,RedactorData,Left,Right);
}
ContextMenuButtons.push(CrossedOutButton);//pushing to array of Buttons
//CopyButton
let CopyButton = new Button("MenuButton","Copy");
CopyButton.AddEventFunc("mousedown",Copy,RedactorData);
function Copy(e,RedactorData){
    RedactorData.NoteTextArea.CopyBuffer = RedactorData.NoteTextArea.LastSelectedText;
}
ContextMenuButtons.push(CopyButton);//pushing to array of Buttons
//InsertButton
let InsertButton = new Button("MenuButton","Insert");
InsertButton.AddEventFunc("mousedown",Insert,RedactorData);
function Insert(e,RedactorData){
    let TextAreaDOM = RedactorData.NoteTextArea.DOM;
    let Left = TextAreaDOM.value.slice(0,RedactorData.NoteTextArea.LastSelectedTextPosStart);
    let Insert = RedactorData.NoteTextArea.CopyBuffer;
    let Right = TextAreaDOM.value.slice(RedactorData.NoteTextArea.LastSelectedTextPosEnd,TextAreaDOM.value.length);
    TextAreaDOM.value = Left + Insert + Right;
}
ContextMenuButtons.push(InsertButton);//pushing to array of Buttons
//CutButton
let CutButton = new Button("MenuButton","Cut");
CutButton.AddEventFunc("mousedown",Cut,RedactorData);
function Cut(e,RedactorData){
    if(RedactorData.NoteTextArea.LastSelectedTextPosStart != RedactorData.NoteTextArea.LastSelectedTextPosEnd){
        let TextAreaDOM = RedactorData.NoteTextArea.DOM;
        let Left = TextAreaDOM.value.slice(0,RedactorData.NoteTextArea.LastSelectedTextPosStart);
        let Right = TextAreaDOM.value.slice(RedactorData.NoteTextArea.LastSelectedTextPosEnd,TextAreaDOM.value.length);
        TextAreaDOM.value = Left + Right;
    }
}
ContextMenuButtons.push(CutButton);//pushing to array of Buttons
//ColorButton
let ColorButton = new Button("MenuButton","Color");
ColorButton.AddEventFunc("mousedown",ColorAdd,RedactorData,"");
function ColorAdd(e,RedactorData,color){
    if(color != ""){
        let Left = "<span style='color:'" + color + "'>";
        let Right = "</span>";
        AddTag(e,RedactorData,Left,Right);
    }
}
ContextMenuButtons.push(ColorButton);//pushing to array of Buttons
//FontButton
let FontButton = new Button("MenuButton","Font");
FontButton.AddEventFunc("mousedown",FontAdd,RedactorData,"");
function FontAdd(e,RedactorData,fontsize){
    if(fontsize != ""){
        let Left = "<span style='font-size:'" + fontsize + "'>";
        let Right = "</span>";
        AddTag(e,RedactorData,Left,Right);
    }
}
ContextMenuButtons.push(FontButton);//pushing to array of Buttons
//ImgButton
/*
let ImgButton = new Button("MenuButton","Img");
ImgButton.AddEventFunc("mousedown",ImgAdd,RedactorData,"");
function ImgAdd(e,RedactorData,imglink){
    if(imglink != ""){
        let Left = "<img src='" + imglink + "'>";
        let Right = "</img>";
        AddTag(e,RedactorData,Left,Right);
    }
}
ContextMenuButtons.push(ImgButton);//pushing to array of Buttons
*/

//Class Menu
export let ContextMenu = new Menu("ContextMenu",ContextMenuButtons);
//Creation function for Menu
function ContextMenuFunc(){
 ContextMenu.DOM.addEventListener("contextmenu",
    (event) => {event.preventDefault;});
 }
ContextMenu.BindFuncToMenu("contextmenu", ContextMenuFunc, []);//Attaching function to Menu
