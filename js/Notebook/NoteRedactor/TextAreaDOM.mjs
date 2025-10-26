import { TextAreaClass } from "./TextArea.mjs";
export class TextAreaDOMClass extends TextAreaClass{
        constructor(TextAreaID){
            super(TextAreaID);
            this.LastSelectedRange = new Range();
            this.CursorPostionStart;
            this.CursorPostionEnd;
            this.LastCursorPosition;
            this.Selection = window.getSelection();
        }
        get SelectedRange(){
            return this._SelectedRange;
        }
        set SelectedRange(value){
            this._SelectedRange = value;
        }
        deleteContents() {
            this.LastSelectedRange.deleteContents();
            this.UpdateSelection();
        }
        extractContents() {
            //DocumentFragment
            let content = this.LastSelectedRange.extractContents();
            this.UpdateSelection();
        }
        cloneContents() {
            //DocumentFragment
            let content = this.LastSelectedRange.cloneContents();
            this.UpdateSelection();
        }
        insertNode(Element, StyleType, StyleValue, Text = "") {
                let newNode = document.createElement(Element);
                newNode.style[StyleType] = StyleValue;
                newNode.innerHTML = Text;
                this.LastSelectedRange.insertNode(newNode);
                this.UpdateSelection();
        }
        insertNodeDirectly(newNode){
                this.LastSelectedRange.setStart(this.CursorPostionStart[0], this.CursorPostionStart[1]);
                this.LastSelectedRange.setEnd(this.CursorPostionEnd[0], this.CursorPostionEnd[1]);
                this.LastSelectedRange.insertNode(newNode);
        }
        insertNodeFromBuffer(){
            this.LastSelectedRange.insertNode(this.CopyBuffer);
            this.CopyBuffer = new Object(this.CopyBuffer);
        }
        insertNodeInBuffer(){
           this.CopyBuffer = this.LastSelectedRange.cloneContents();
           
        }
        surroundContents(Tag, InnerStyleType, InnerStyleValue) {
            let newNode = document.createElement(Tag);
            newNode.style[InnerStyleType] = InnerStyleValue;
            console.log(this.LastSelectedRange);
            try {
                this.LastSelectedRange.surroundContents(newNode);
                this.UpdateSelection();
            } catch(e) { 
                console.log("TextAlreadyWrappedWithTag")
             }
        }
        DeleteSelection(){
            window.getSelection().empty();
        }
        UpdateSelection(){
            this.Selection = document.getSelection();
            this.UpdateSelectionRange();
        }
        UpdateSelectionRange(){
            if(this.DOM && this.DOM.contains(this.Selection.focusNode)){
                this.LastSelectedRange = this.Selection.getRangeAt(0);
            }
        }
        EraseSelection(){
            this.Selection = null;
            this.LastSelectedRange = null;
        }
        SelectionToStart(){
            this.UpdateSelection();
            this.Selection.collapseToStart();
        }
        SelectionToEnd(){
            this.UpdateSelection();
            this.Selection.collapseToEnd();
        }
        AddOnSelectListener(){
        document.onselectionchange = (e) =>{
            this.UpdateSelection();
            let selection = this.Selection;
            if (!selection.isCollapsed && this.DOM && this.DOM.contains(selection.focusNode)) {
                this.LastSelectedRange = selection.getRangeAt(0);
                this.LastSelectedText = selection.toString();
            } 
        }; 
    }
        AddCursorPositionCheck(){
            this.DOM.onmouseup = (e) => {
                this.UpdateSelection();
                let {anchorNode, anchorOffset, focusNode, focusOffset} = this.Selection;
                this.CursorPostionStart = [anchorNode, anchorOffset];
                this.CursorPostionEnd = [focusNode, focusOffset];
                this.LastCursorPosition = this.CursorPostionEnd;
            }
        }
}