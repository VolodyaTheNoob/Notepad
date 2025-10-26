import { Menu } from '../../Menu.mjs'
import { Button } from '../../Button.mjs'
import {RedactorData} from "../RedactorData.mjs"

//Creating functions to ContextMenu
//Array of Buttons for ContextMenu
let ContextMenuButtons = new Array();
//Function to add tags in text
function AddTag(e,RedactorData, Tag, InnerStyleType = "", InnerStyleValue = ""){
    RedactorData.NoteTextArea.surroundContents(Tag, InnerStyleType, InnerStyleValue);
}
//QuoteButton
let QuoteButton = new Button("MenuButton","Quote");
QuoteButton.AddEventFunc("mousedown",QuoteAdd,RedactorData);
function QuoteAdd(e,RedactorData){
    let Tag = "q";
    AddTag(e,RedactorData,Tag);
}
ContextMenuButtons.push(QuoteButton);//pushing to array of Buttons
//BoldButton
let BoldButton = new Button("MenuButton","Bold");
BoldButton.AddEventFunc("mousedown",BoldAdd,RedactorData);
function BoldAdd(e,RedactorData){
    let Tag = "b";
    AddTag(e,RedactorData, Tag);
}
ContextMenuButtons.push(BoldButton);//pushing to array of Buttons
//ItalicsButton
let ItalicsButton = new Button("MenuButton","Italics");
ItalicsButton.AddEventFunc("mousedown",ItalicsAdd,RedactorData);
function ItalicsAdd(e,RedactorData){
    let Tag = "i";
    AddTag(e,RedactorData, Tag);
}
ContextMenuButtons.push(ItalicsButton);//pushing to array of Buttons
//UnderlinedButton
let UnderlinedButton = new Button("MenuButton","Underlined");
UnderlinedButton.AddEventFunc("mousedown",UnderlinedAdd,RedactorData);
function UnderlinedAdd(e,RedactorData){
    let Tag = "u";
    AddTag(e,RedactorData, Tag);
}
ContextMenuButtons.push(UnderlinedButton);//pushing to array of Buttons
//CrossedOutButton
let CrossedOutButton = new Button("MenuButton","CrossedOut");
CrossedOutButton.AddEventFunc("mousedown",CrossedOutAdd,RedactorData);
function CrossedOutAdd(e,RedactorData){
    let Tag = "s";
    AddTag(e,RedactorData, Tag);
}
ContextMenuButtons.push(CrossedOutButton);//pushing to array of Buttons
//CopyButton
let CopyButton = new Button("MenuButton","Copy");
CopyButton.AddEventFunc("mousedown",Copy,RedactorData);
function Copy(e,RedactorData){
    RedactorData.NoteTextArea.insertNodeInBuffer();
}
ContextMenuButtons.push(CopyButton);//pushing to array of Buttons
//InsertButton
let InsertButton = new Button("MenuButton","Insert");
InsertButton.AddEventFunc("mousedown",Insert,RedactorData);
function Insert(e,RedactorData){
    RedactorData.NoteTextArea.insertNodeFromBuffer();
}
ContextMenuButtons.push(InsertButton);//pushing to array of Buttons
//CutButton
let CutButton = new Button("MenuButton","Cut");
CutButton.AddEventFunc("mousedown",Cut,RedactorData);
function Cut(e,RedactorData){
    RedactorData.NoteTextArea.deleteContents();
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
    let Tag = "span"
    let InnerStyleType = "color"
    let InnerStyleValue = Color;
    AddTag(e,RedactorData,Tag, InnerStyleType, InnerStyleValue);
}
ContextMenuButtons.push(TextColorChosenButton);//pushing to array of Buttons
//Pick color for backgorund text
let BackgroundTextColorChosenButton = new Button("MenuButton","BackgroundTextColorChosen");
BackgroundTextColorChosenButton.AddEventFunc("mousedown",BackgroundTextColorAdd,RedactorData," ");
function BackgroundTextColorAdd(e,RedactorData){
    let Color = document.getElementById("BackgroundTextColorPickInput").value;
    let Tag = "span"
    let InnerStyleType = "background-color"
    let InnerStyleValue = Color;
    AddTag(e,RedactorData,Tag, InnerStyleType, InnerStyleValue);
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
    let Tag = "span";
    let InnerStyleType = "font-size";
    let InnerStyleValue = fontsize + "px";
    AddTag(e,RedactorData, Tag, InnerStyleType, InnerStyleValue);
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
    const MaxWidth = 600;
    const MaxHeight = 400;
    let ImgWidth = document.getElementById("ImageWidthInput").value;
    let ImgHeight = document.getElementById("ImageHeightInput").value;
    if(!isNaN(ImgWidth) && !isNaN(ImgHeight)){
        if(ImgWidth > MaxWidth){
            ImgWidth = MaxWidth;
        }
        if(ImgHeight > MaxHeight){
            ImgHeight = MaxHeight;
        }
    }else{
        //Just AverageValue for Redactor size
        ImgWidth = 300;
        ImgHeight = 200;
    }
    let NewImageNodeDiv = document.createElement("div");
    let NewImageNode = document.createElement("img");
    let ImgBase64 = document.getElementById("LoadedImage").src;
    NewImageNode.src = ImgBase64;
    NewImageNode.style["maxWidth"] = MaxWidth + "px";
    NewImageNode.style["maxHeight"] = MaxHeight + "px";
    NewImageNode.style["width"] = ImgWidth + "px";
    NewImageNode.style["height"] = ImgHeight + "px";
    NewImageNodeDiv.append(NewImageNode);
    NewImageNodeDiv.style["width"] = ImgWidth;
    NewImageNodeDiv.style["height"] = ImgHeight;
    RedactorData.NoteTextArea.insertNodeDirectly(NewImageNodeDiv);
}
ContextMenuButtons.push(ImageAddButton);//pushing to array of Buttons
//Class Menu
export let ContextMenu = new Menu("ContextMenu",ContextMenuButtons);
//Creat function for Menu
ContextMenu.AddPreventDefault();
RedactorData.NoteTextArea.DOM.addEventListener("contextmenu", (e) =>{
        e.preventDefault();
        if(getComputedStyle(ContextMenu.DOM).display == "none"){
            ContextMenu.DOM.style.display = "block";
            let ClientX = e.clientX;
            let ClientY = e.clientY;
            ContextMenu.DOM.style.left = ClientX + "px";
            ContextMenu.DOM.style.top = ClientY + "px";
        }else{
            ContextMenu.DOM.style.display = "none";
        }
});

