import { TextAreaClass } from "./TextArea.mjs";
export class TextAreaDOMClass extends TextAreaClass{
        constructor(TextAreaID){
            super(TextAreaID);
            this.LastSelectedRange = new Range();
            this.CursorPostionStart;
            this.CursorPostionEnd;
            this.LastCursorPosition;
        }
        get SelectedRange(){
            return this._SelectedRange;
        }
        set SelectedRange(value){
            this._SelectedRange = value;
        }
        deleteContents() {
            this.LastSelectedRange.deleteContents();
            this.LastSelectedRange = null;
        }
        extractContents() {
            //DocumentFragment
            let content = this.LastSelectedRange.extractContents();
            this.LastSelectedRange = null;
        }
        cloneContents() {
            //DocumentFragment
            let content = this.LastSelectedRange.cloneContents();
            this.LastSelectedRange = null;
        }
        insertNode(Element, StyleType, StyleValue, Text = "") {
                let newNode = document.createElement(Element);
                newNode.style[StyleType] = StyleValue;
                newNode.innerHTML = Text;
                this.LastSelectedRange.insertNode(newNode);
                this.LastSelectedRange = null;
        }
        insertNodeDirectly(newNode){
                this.LastSelectedRange.setStart(this.CursorPostionStart[0], this.CursorPostionStart[1]);
                this.LastSelectedRange.setEnd(this.CursorPostionEnd[0], this.CursorPostionEnd[1]);
                this.LastSelectedRange.insertNode(newNode);
        }
        surroundContents(Tag, InnerStyleType, InnerStyleValue) {
            let newNode = document.createElement(Tag);
            newNode.style[InnerStyleType] = InnerStyleValue;
            console.log(newNode);
            try {
                this.LastSelectedRange.surroundContents(newNode);
            } catch(e) { 
                console.log("TextAlreadyWrappedWithTag")
             }
             this.LastSelectedRange = null;
        }
        AddOnSelectListener(){
        document.onselectionchange = (e) =>{
            let selection = window.getSelection();
            if (!selection.isCollapsed && this.DOM && this.DOM.contains(selection.focusNode)) {
                this.LastSelectedRange = selection.getRangeAt(0);
                this.LastSelectedText = selection.toString();
            } 
        }; 
    }
        AddCursorPositionCheck(){
            this.DOM.onmouseup = (e) => {
                let {anchorNode, anchorOffset, focusNode, focusOffset} = document.getSelection();
                this.CursorPostionStart = [anchorNode, anchorOffset];
                this.CursorPostionEnd = [focusNode, focusOffset];
                this.LastCursorPosition = this.CursorPostionEnd;
            }
        }
}