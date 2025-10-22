export function downloadAsTextFileJSON(Title, Text) {
    let text = JSON.stringify({title: Title,text: Text});
    let a = document.createElement("a");
    let file = new Blob([text], {type: 'application/json'});
    a.href = URL.createObjectURL(file);
    a.download = Title + ".json";
    a.click();
}

export function downloadAsTextFile(Title, Text) {
    let text = Title + "\n" + Text
    let a = document.createElement("a");
    let file = new Blob([text], {type: 'text/plain'});
    a.href = URL.createObjectURL(file);
    a.download = Title + ".txt";
    a.click();
}