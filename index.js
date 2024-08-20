const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;
const xlsx=require('xlsx')
const cors =require('cors')
 
app.use(cors())

let wb= xlsx.readFile("restodata.xlsx");
let ws1 = wb.Sheets["Sheet1"]
let data = xlsx.utils.sheet_to_json(ws1)


let wb2= xlsx.readFile("waffledata.xlsx");
let ws2 = wb2.Sheets["Sheet1"]
let dataw = xlsx.utils.sheet_to_json(ws2)

let wb3= xlsx.readFile("PANCAKESDATA.xlsx");
let ws3 = wb3.Sheets["Sheet1"]
let datap = xlsx.utils.sheet_to_json(ws3)

let wb4= xlsx.readFile("sushiboat.xlsx");
let ws4 = wb4.Sheets["Sheet1"]
let datab = xlsx.utils.sheet_to_json(ws4)


app.get('/', function (req, res) {
    res.send(data)
  })

app.get('/waffles', function (req, res) {
    res.send(dataw)
  })

app.get('/pancakes', function (req, res) {
    res.send(datap)
  })

app.get('/sushiboat', function (req, res) {
    res.send(datab)
  })
 
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
