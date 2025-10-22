export class Menu{
    constructor(ID, Class){
        this.ID = ID
        this.DOM = document.getElementById(ID);
        this.Buttons = document.getElementsByClassName(Class)
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
    BindFuncByButtonId(event,ID, func){
        let Position = this.FindButtonPosition(ID);
        this.ButtonsEventsFunctions[Position] = new Object();
        this.ButtonsEventsFunctions[Position][event] = func;
        this.Buttons[Position].addEventListener(event, (e)=>{
            this.ButtonsEventsFunctions[Position][event]();
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
       
    }
}