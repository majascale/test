// NEW
const express = require("express");
const app = express();

app.use(express.json());

let mcargs = [
  {msisdn: "38977772032", sc: "1990", text: "Test on Thursday", service_id: "2724"}
];

app.post("/mcargs", (req, res) => {
  //const { name } = req.body;
  //const id = mcargs.length + 1;
  //mcargs.push({msisdn, sc, text, service_id });
  //res.json({ id, name });
  call another service
  res.json(mcargs);
});


