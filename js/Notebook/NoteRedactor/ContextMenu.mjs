import { Menu } from '../Menu.mjs'
import { Button } from '../Button.mjs'
import {NoteTitleDiv, NoteDiv, LastSelectedText, LastSelectedTextPosStart, LastSelectedTextPosEnd} from "./RedactorGlobalData.mjs"

//Creating functions to ContextMenu
//Array of Buttons for ContextMenu
let ContextMenuButtons = new Array();
//QuoteButton
let QuoteButton = new Button("MenuButton","Quote");
QuoteButton.AddEventFunc("mousedown",QuoteAdd,null);
function QuoteAdd(){
    let Left = NoteDiv.value.slice(0,LastSelectedTextPosStart);
    let Quote = NoteDiv.value.slice(LastSelectedTextPosStart,LastSelectedTextPosEnd);
    let Right = NoteDiv.value.slice(LastSelectedTextPosEnd,NoteDiv.value.length);
    let qLeft = ["<q>"];
    let qRight = ["</q>"];
    Left = Left + qLeft;
    Right = qRight + Right;
    NoteDiv.value = Left + Quote + Right;
}
ContextMenuButtons.push(QuoteButton);//pushing to array of Buttons
//BoldButton
let BoldButton = new Button("MenuButton","Bold");
function BoldAdd(){
    
}
ContextMenuButtons.push(BoldButton);//pushing to array of Buttons
//ItalicsButton
let ItalicsButton = new Button("MenuButton","Italics");
function ItalicsAdd(){
    
}
ContextMenuButtons.push(ItalicsButton);//pushing to array of Buttons
//UnderlinedButton
let UnderlinedButton = new Button("MenuButton","Underlined");
function UnderlinedAdd(){
    
}
ContextMenuButtons.push(UnderlinedButton);//pushing to array of Buttons
//CrossedOutButton
let CrossedOutButton = new Button("MenuButton","CrossedOut");
function CrossedOutAdd(){
    
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
