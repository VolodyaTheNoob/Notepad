export class RedactorDataClass{
    constructor(TitleTextAreaID, NoteTextAreaID){
        /*
        For now we contain both textareas in one class and work with them right in class
        probably I should add more abstraction in future - create wrap for textareas 
        */
        this.TitleTextArea = document.getElementById(TitleTextAreaID)
        this.NoteTextArea = document.getElementById(NoteTextAreaID);
        this.LastSelectedText = "";
        this.LastSelectedTextPosStart = undefined;
        this.LastSelectedTextPosEnd = undefined;
        this.TitleEventFunc = new Object();
        this.TextAreaEventFunc = new Object()
    }
    get TitleTextArea(){
        return this._TitleTextArea;
    }
    set TitleTextArea(value){
        this._TitleTextArea = value;
    }
    get NoteTextArea(){
        return this._NoteTextArea;
    }
    set NoteTextArea(value){
        this._NoteTextArea = value;
    }
    get LastSelectedText(){
        return this._LastSelectedText;
    }
    set LastSelectedText(value){
        this._LastSelectedText = value;
    }
    get LastSelectedTextPosStart(){
        return this._LastSelectedTextPosStart;
    }
    set LastSelectedTextPosStart(value){
        this._LastSelectedTextPosStart = value;
    }
    get LastSelectedTextPosEnd(){
        return this._LastSelectedTextPosEnd;
    }
    set LastSelectedTextPosEnd(value){
        this._LastSelectedTextPosEnd = value;
    }
    GetTitleTextArea(){
        return this.TitleTextArea.value;
    }
    GetNoteTextArea(){
        return this.NoteTextArea.value;
    }
    //Title textarea functions block
    AddTitleFunc(event,Func,FuncArgs){
        this.TitleEventFunc[event] = new Object();
        this.TitleEventFunc[event] = Func;
        this.TitleEventFunc[event]["Args"] = FuncArgs;
        this.TitleTextArea.addEventListener(event, (e) => {
            this.TitleEventFunc[event](e,this.TitleEventFunc[event]["Args"]);
        });
    }
    ChangeTitleFunc(event,Func,FuncArgs){
        this.TitleTextArea.removeEventListener('event', this.EventsFunctions[event]);
        this.TitleEventFunc[event] = Func;
        this.TitleEventFunc[event]["Args"] = FuncArgs;
        this.TitleTextArea.addEventListener(event, (e) => {
            this.TitleEventFunc[event](e,this.TitleEventFunc[event]["Args"]);
        });
    }
    DeleteTitleFunc(event){
        this.TitleTextArea.removeEventListener('event', this.EventsFunctions[event]);
        this.TitleEventFunc[event] = undefined;
        this.TitleEventFunc[event]["Args"] = undefined; 
    }
    //Note textarea functions block
    AddTextAreaFunc(event,Func,FuncArgs){
        this.TextAreaEventFunc[event] = new Object();
        this.TextAreaEventFunc[event] = Func;
        this.TextAreaEventFunc[event]["Args"] = FuncArgs;
        this.NoteTextArea.addEventListener(event, (e) => {
            this.TextAreaEventFunc[event](e,this.TextAreaEventFunc[event]["Args"]);
        });
    }
    ChangeTextAreaFunc(event,Func,FuncArgs){
        this.NoteTextArea.removeEventListener('event', this.EventsFunctions[event]);
        this.TextAreaEventFunc[event] = Func;
        this.TextAreaEventFunc[event]["Args"] = FuncArgs;
                this.NoteTextArea.addEventListener(event, (e) => {
            this.TextAreaEventFunc[event](e,this.TextAreaEventFunc[event]["Args"]);
        });
    }
    DeleteTextAreaFunc(event){
        this.NoteTextArea.removeEventListener('event', this.EventsFunctions[event]);
        this.TextAreaEventFunc[event] = undefined;
        this.TextAreaEventFunc[event]["Args"] = undefined; 
    }
}

export let RedactorData = new RedactorDataClass("NoteTitle","Note");
RedactorData.NoteTextArea.onselect = ()=>{
    if (RedactorData.NoteTextArea.selectionStart == RedactorData.NoteTextArea.selectionEnd) {
            RedactorData.LastSelectedText = "";
            return; 
        }
        RedactorData.LastSelectedTextPosStart = RedactorData.NoteTextArea.selectionStart;
        RedactorData.LastSelectedTextPosEnd = RedactorData.NoteTextArea.selectionEnd;
        let Selected = RedactorData.NoteTextArea.value.slice(RedactorData.NoteTextArea.selectionStart,RedactorData.NoteTextArea.selectionEnd);
        RedactorData.LastSelectedText = Selected;
    };