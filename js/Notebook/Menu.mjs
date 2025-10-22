export class Menu{
    constructor(ID, Class){
        this.ID = ID
        this.DOM = document.getElementById(ID);
        this.Buttons = document.getElementsByClassName(Class)
        this.EventsFunctions = new Object();
        this.ButtonsEventsFunctions = new Object();
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
    get Buttons(){
        return this._Buttons;
    }
    set Buttons(value){
        this._Buttons = value;
    }
    BindFuncToMenu(event, func, ...FuncArgs){
        this.EventsFunctions[event] = func;
        this.EventsFunctions[event]["args"] = new Object();
        console.log(this.EventsFunctions);
        this.EventsFunctions[event]["args"] = FuncArgs;
    }
    BindFuncByButtonId(event,ID, func, ...FuncArgs){
        let Position = this.FindButtonPosition(ID);
        this.ButtonsEventsFunctions[Position] = new Object();
        this.ButtonsEventsFunctions[Position][event] = func;
        this.ButtonsEventsFunctions[Position][event]["Args"] = new Object();
        for(let i = 0; i < FuncArgs.length;i++){
            this.ButtonsEventsFunctions[Position][event]["Args"][FuncArgs[i]] = FuncArgs[i];
        }
        console.log(this.ButtonsEventsFunctions[Position][event]["Args"]);
        this.Buttons[Position].addEventListener(event, (e)=>{
            this.ButtonsEventsFunctions[Position][event](this.ButtonsEventsFunctions[Position][event]["Args"]);
        });
    }
    FindButtonPosition(ID){
        let Position;
        for(let i = 0; i < this.Buttons.length; i++){
            if(this.Buttons[i].id == ID){
                Position = i;
            }
        }
        return Position;
    }
    BindFuncByButtonPosition(event, Position, func, FuncArgs){
        this.ButtonsEventsFunctions[Position] = new Object();
        this.ButtonsEventsFunctions[Position][event] = func;
        this.ButtonsEventsFunctions[Position][event]["Args"] = new Object();
        for(let i = 0; i < FuncArgs.length;i++){
            this.ButtonsEventsFunctions[Position][event]["Args"][FuncArgs[i]] = FuncArgs[i];
        }
        console.log(this.ButtonsEventsFunctions[Position][event]["Args"]);
        this.Buttons[Position].addEventListener(event, (e)=>{
            this.ButtonsEventsFunctions[Position][event](this.ButtonsEventsFunctions[Position][event]["Args"]);
        });
    }
}