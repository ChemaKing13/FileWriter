const express = require("express");
const fs = require("fs").promises;

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/createFile", async (req, res) => {
    const fileName = req.query.fileName;
    const fileContent = "This is the content of the new file.";

    try {
        await fs.writeFile(fileName, fileContent);
        res.send(fileContent);
    } catch (error) {
        res.status(500).send("Error creating file.");
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

