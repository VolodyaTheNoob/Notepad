export class Button{
    constructor(Class, ID){
        this.Class = Class;
        this.ID = ID;
        if(ID != undefined){
            this.DOM = document.getElementById(ID);
        }
        this.EventsFunctions = new Object();
    }
    get Class(){
        return this._Class;
    }
    set Class(value){
        this._Class = value;
    }
    get ID(){
        return this._ID;
    }
    set ID(value){
        this._ID = value;
    }
    get DOM(){
        return this._DOM;
    }
    set DOM(value){
        this._DOM = value;
    }
    AddEventFunc(event, Func, FuncArgs){
        this.EventsFunctions[event] = new Object();
        this.EventsFunctions[event] = Func;
        this.EventsFunctions[event]["Args"] = FuncArgs;
        this.DOM.addEventListener(event, (e) => {
            this.EventsFunctions[event](e,this.EventsFunctions[event]["Args"]);
        });
    }
    ReplaceEventFunc(event, Func, FuncArgs){
        this.DOM.removeEventListener('event', this.EventsFunctions[event]);
        this.EventsFunctions[event] = Func;
        this.EventsFunctions[event]["Args"] = FuncArgs;
        this.DOM.addEventListener(event, (e) => {
            this.EventsFunctions[event](e,this.EventsFunctions[event]["Args"]);
        });
    }
    DeleteEventFunc(event){
        this.DOM.removeEventListener('event', this.EventsFunctions[event]);
        this.EventsFunctions[event] = undefined;
        this.EventsFunctions[event]["Args"] = undefined; 
    }
}