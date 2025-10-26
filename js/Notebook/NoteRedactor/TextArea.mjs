export class TextAreaClass{
    constructor(TextAreaID){
        this.DOM = document.getElementById(TextAreaID);
        this.LastSelectedText = "";
        this.LastSelectedTextPosStart = undefined;
        this.LastSelectedTextPosEnd = undefined;
        this.EventFunc = new Object()
        this.CopyBuffer = "";
        this.ForwardBuffer = [];
        this.BackwardBuffer = [];
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
    GetTextArea(){
        return this.DOM.value;
    }
    //Note textarea functions block
    AddTextAreaFunc(event,Func,FuncArgs){
        this.EventFunc[event] = new Object();
        this.EventFunc[event] = Func;
        this.EventFunc[event]["Args"] = FuncArgs;
        this.DOM.addEventListener(event, (e) => {
            this.EventFunc[event](e,this.EventFunc[event]["Args"]);
        });
    }
    ChangeTextAreaFunc(event,Func,FuncArgs){
        this.DOM.removeEventListener('event', this.EventsFunctions[event]);
        this.EventFunc[event] = Func;
        this.EventFunc[event]["Args"] = FuncArgs;
                this.DOM.addEventListener(event, (e) => {
            this.EventFunc[event](e,this.EventFunc[event]["Args"]);
        });
    }
    DeleteTextAreaFunc(event){
        this.DOM.removeEventListener('event', this.EventsFunctions[event]);
        this.EventFunc[event] = undefined;
        this.EventFunc[event]["Args"] = undefined; 
    }
    AddOnSelectListener(){
        this.DOM.onselect = (e)=>{
        if (this.DOM.selectionStart == this.DOM.selectionEnd) {
                this.LastSelectedText = "";
                return; 
            }
            this.LastSelectedTextPosStart = this.DOM.selectionStart;
            this.LastSelectedTextPosEnd = this.DOM.selectionEnd;
            let Selected = this.DOM.value.slice(this.DOM.selectionStart,this.DOM.selectionEnd);
            this.LastSelectedText = Selected;
        };
    }
}