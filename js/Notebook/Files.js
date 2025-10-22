function downloadAsFile(Title, Text) {
    let text = JSON.stringify({title: Title,text: Text});
    let a = document.createElement("a");
    let file = new Blob([text], {type: 'application/json'});
    a.href = URL.createObjectURL(file);
    a.download = Title + ".txt";
    a.click();
}