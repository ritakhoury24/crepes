const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;
const xlsx=require('xlsx')
const cors =require('cors')
 
app.use(cors())

let wb= xlsx.readFile("restodata.xlsx");
let ws1 = wb.Sheets["Sheet1"]
let data = xlsx.utils.sheet_to_json(ws1)


app.get('/', function (req, res) {
    res.send(data)
  })


app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
