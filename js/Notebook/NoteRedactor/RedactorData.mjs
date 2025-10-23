import { TextAreaClass } from "./TextArea.mjs";

let _titleTextArea = new TextAreaClass("NoteTitle");
let _noteTextArea = new TextAreaClass("Note");
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
