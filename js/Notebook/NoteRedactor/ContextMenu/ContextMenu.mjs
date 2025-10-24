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
//Open pick color menu
let ColorButton = new Button("MenuButton","Color");
ColorButton.AddEventFunc("mousedown",OpenColorPickMenu,RedactorData," ");
function OpenColorPickMenu(e,RedactorData){
    let ColorPickMenu = document.getElementById("ColorPickMenu");
    if(getComputedStyle(ColorPickMenu).display === "none"){
        ColorPickMenu.style.display = "block";
    }else{
        ColorPickMenu.style.display = "none";
    }
}
ContextMenuButtons.push(ColorButton);//pushing to array of Buttons
//Pick color for text
let TextColorChosenButton = new Button("MenuButton","TextColorChosen");
TextColorChosenButton.AddEventFunc("mousedown",TextColorAdd,RedactorData," ");
function TextColorAdd(e,RedactorData){
    let Color = document.getElementById("TextColorPickInput").value;
    if(RedactorData.NoteTextArea.LastSelectedTextPosStart != RedactorData.NoteTextArea.LastSelectedTextPosEnd){
        let Left = "<span style='color:'" + Color + "'>";
        let Right = "</span>";
        AddTag(e,RedactorData,Left,Right);
    }
}
ContextMenuButtons.push(TextColorChosenButton);//pushing to array of Buttons
//Pick color for backgorund text
let BackgroundTextColorChosenButton = new Button("MenuButton","BackgroundTextColorChosen");
BackgroundTextColorChosenButton.AddEventFunc("mousedown",BackgroundTextColorAdd,RedactorData," ");
function BackgroundTextColorAdd(e,RedactorData){
    let Color = document.getElementById("BackgroundTextColorPickInput").value;
    if(RedactorData.NoteTextArea.LastSelectedTextPosStart != RedactorData.NoteTextArea.LastSelectedTextPosEnd){
        let Left = "<span style='background-color:'" + Color + "'>";
        let Right = "</span>";
        AddTag(e,RedactorData,Left,Right);
    }
}
ContextMenuButtons.push(BackgroundTextColorChosenButton);//pushing to array of Buttons
//FontButtonMenuOpen
let FontSizeButtonMenuOpen = new Button("MenuButton","Font");
FontSizeButtonMenuOpen.AddEventFunc("mousedown",OpenFontPickMenu,RedactorData,"");
function OpenFontPickMenu(e,RedactorData){
      let FontPickMenu = document.getElementById("FontSizePickMenu");
    if(getComputedStyle(FontPickMenu).display === "none"){
        FontPickMenu.style.display = "block";
    }else{
        FontPickMenu.style.display = "none";
    }
}
ContextMenuButtons.push(FontSizeButtonMenuOpen);//pushing to array of Buttons
//Adding for each font size button listener;
let FontSizeChangeButtonsDom = document.getElementsByClassName("FontSizeToPick");
let FontSizeChangeButtons = new Array(FontSizeChangeButtonsDom.length);
for(let i = 0; i < FontSizeChangeButtons.length;i++){
    FontSizeChangeButtons[i] = new Button("MenuButton","FontSizeToPick-"+FontSizeChangeButtonsDom[i].innerHTML);
    FontSizeChangeButtons[i].DOM.addEventListener("mousedown", (e) =>{
        FontAdd(e,RedactorData,FontSizeChangeButtonsDom[i].innerHTML);
    });
}
function FontAdd(e,RedactorData,fontsize){
    if(RedactorData.NoteTextArea.LastSelectedTextPosStart != RedactorData.NoteTextArea.LastSelectedTextPosEnd){
        let Left = "<span style='font-size:'" + fontsize + "'>";
        let Right = "</span>";
        AddTag(e,RedactorData,Left,Right);
    }
}
ContextMenuButtons.push();//pushing to array of Buttons
//ImgagePickMenuOpen
let ImgButton = new Button("MenuButton","Image");
ImgButton.AddEventFunc("mousedown",ImagePickMenuOpen,RedactorData,"");
function ImagePickMenuOpen(e,RedactorData){
    let ImagePickMenu = document.getElementById("ImagePickMenu");
    if(getComputedStyle(ImagePickMenu).display === "none"){
        ImagePickMenu.style.display = "block";
    }else{
        ImagePickMenu.style.display = "none";
    }
}
ContextMenuButtons.push(ImgButton);//pushing to array of Buttons
//ImagePickMenu
let ImageInputReader = new FileReader();
let ImageInput = document.getElementById("LoadedImage");
ImageInputReader.addEventListener('load', e => {
  ImageInput.src = e.target.result;
});
document.addEventListener('DOMContentLoaded', e => {
  document.forms.ImagePickForm.ImagePickInput.addEventListener('change', e => {
    ImageInputReader.readAsDataURL(e.target.files[0]); 
  });
});
//ImageAddButton
let ImageAddButton = new Button("MenuButton","ImageChosen");
ImageAddButton.AddEventFunc("mousedown",ImgAdd,RedactorData,"");
function ImgAdd(e,RedactorData){
    let ImgBase64 = document.getElementById("LoadedImage").src;
    let Left = "<img src='" + ImgBase64  + "'>";
    let Right = "</img>";
    AddTag(e,RedactorData,Left,Right);
}
ContextMenuButtons.push(ImageAddButton);//pushing to array of Buttons
//Class Menu
export let ContextMenu = new Menu("ContextMenu",ContextMenuButtons);
//Creation function for Menu
function ContextMenuFunc(){
 ContextMenu.DOM.addEventListener("contextmenu",
    (event) => {event.preventDefault;});
 }
ContextMenu.BindFuncToMenu("contextmenu", ContextMenuFunc, []);//Attaching function to Menu
