const express = require("express"); // importando modulo express

const app = express(); // criando uma instancia do express

app.set ('view engine' , 'ejs'); // avisa ao express pra usar a EJS como View engine (renderizador)
app.get("/", (req, res) =>{
    res.render("index") // renderiza o index. caso eu queira criar uma pasta dentro de views e carregar os arquivos dentro dela uso "nomedapasta/nomedoarquivo"
});

app.listen(8080, () =>{console.log("App rodando");

});