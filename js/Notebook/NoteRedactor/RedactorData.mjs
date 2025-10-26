import { TextAreaDOMClass } from "./TextAreaDOM.mjs";

//Creating our redactor TextAreas
let _titleTextArea = new TextAreaDOMClass("NoteTitle");
let _noteTextArea = new TextAreaDOMClass("Note");
//turnning on listeners for note redactor
_titleTextArea.AddOnSelectListener();
_titleTextArea.AddPreventDefault();
_noteTextArea.AddOnSelectListener(); 
_noteTextArea.AddPreventDefault();
_noteTextArea.AddCursorPositionCheck();

export class RedactorDataClass{
    constructor(titleTextArea, noteTextArea){
        /*
        For now we contain both textareas in one class and work with them right in class
        probably I should add more abstraction in future - create wrap for textareas 
        */
        this.TitleTextArea = titleTextArea;
        this.NoteTextArea = noteTextArea;
    }
}
export let RedactorData = new RedactorDataClass(_titleTextArea,_noteTextArea);

