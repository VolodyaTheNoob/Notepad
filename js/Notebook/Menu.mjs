export class Menu{
    constructor(ID, Buttons){
        this.ID = ID
        this.DOM = document.getElementById(ID);
        if(this.Buttons !== undefined){
            this.Buttons = [...Buttons];
        }else{
            this.Buttons = new Array();
        }
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
        this.EventsFunctions[event]["Args"] = new Object();
        this.EventsFunctions[event]["Args"] = FuncArgs;
        this.DOM.addEventListener(event, (e) => {
            this.EventsFunctions[event](e,this.EventsFunctions[event]["Args"]);
        });
    }
    BindFuncByButtonId(event,ID, func, ...FuncArgs){
        let Position = this.FindButtonPosition(ID);
        this.Buttons[Position].addEventFunc(event, func, FuncArgs);
    }
    FindButtonPosition(ID){
        let Position;
        for(let i = 0; i < this.Buttons.length; i++){
            if(this.Buttons[i].ID == ID){
                Position = i;
            }
        }
        return Position;
    }
    BindFuncByButtonPosition(event, Position, func, ...FuncArgs){
        this.Buttons[Position].addEventFunc(event, func, FuncArgs);
    }
    AddButton(Button){
        this.Buttons.push(Button);
    }
    AddButtons(ButtonsArr){
        this.Buttons = [...ButtonsArr];
    }
    AddPreventDefault(){
        this.DOM.addEventListener('contextmenu', (event) => {
            event.preventDefault();
        });
    }
    //Also should add ReplaceFunctions and DeleteFunctions - becouse when we need to change function we dont need to use "new Object()" method
}