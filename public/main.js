document.getElementById("createFileBtn").addEventListener("click", createFile);

function createFile() {
    var fileName = prompt("Enter the name of the new file:");

    if (fileName) {
        fetch(`/createFile?fileName=${fileName}`)
            .then(response => response.text())
            .then(content => {
                var blob = new Blob([content], { type: "text/plain;charset=utf-8" });
                saveAs(blob, fileName + ".txt");
            });
    }
}

function saveAs(blob, filename) {
    var link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = filename;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
}
