/* cria app express */
const express = require("express");
const app = express();

//Habilitamos o processamento do JSON
app.use(express.json());

/* chama app */
app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.get("/oi", function (req, res) {
  res.send("ola mundo");
});

//Endpoints de herois
const lista = ["Mulher Maravilha", "Capitã Marvel", "Homem de Ferro"];
//                 0                 1               2

//Read All (rota principal) -> GET /herois
app.get("/herois", function (req, res) {
  res.send(lista);
});

//Create -> POST /herois
app.post("/herois", function (req, res) {
  //  console.log(req.body, typeof req.body);
  // Extrai o nome do Body da Request
  const item = req.body.nome;
  //res.send("Criar registro")

  //Inserir o item na lista
  lista.push(item);

  // Enviamos uma resposta de sucesso
  res.send("Item criado com sucesso!");

});

//Read by ID -> GET /herios/:id
app.get("/herois/:id", function (req, res) {
  //Pegamos o parametro de rota ID
  const id = req.params.id - 1;
  
  //Pegamos a informação da lista
const item= lista[id];

//Exibimos o item na resposta do endpoit
res.send(item);
  });



/* app listen  - mostra o app*/
app.listen(3000);
