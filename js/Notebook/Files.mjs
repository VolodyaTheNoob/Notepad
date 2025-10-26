export function downloadAsTextFile(Title, Text) {
    let text = Title + "\n" + Text
    let a = document.createElement("a");
    let file = new Blob([text], {type: 'text/plain'});
    a.href = URL.createObjectURL(file);
    a.download = Title + ".txt";
    a.click();
}
export function downloadAsTextFileJSON(Title, Text) {
    let text = JSON.stringify({title: Title,text: Text});
    let a = document.createElement("a");
    let file = new Blob([text], {type: 'application/json'});
    a.href = URL.createObjectURL(file);
    a.download = Title + ".json";
    a.click();
}

export function downloadAsWORDFile(Title, Text){
 
}
export function downloadAsPDFFile(Title, Text){
    
}
export function downloadAsHtmlFile(Title, Text){
    let text = "<div id='Title'>" + Title + "</div>" + "<div id='Text' style='max-width: 600px;max-height: 400px; overflow-y:auto;'>" + Text + "</div>";
    let a = document.createElement("a");
    let file = new Blob([text], {type: "text/html"});
    a.href = URL.createObjectURL(file);
    a.download = Title + ".html";
    a.click();
}