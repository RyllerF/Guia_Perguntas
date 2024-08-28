const express = require("express"); // importando modulo express

const app = express(); // criando uma instancia do express

app.set ('view engine' , 'ejs'); // avisa ao express pra usar a EJS como View engine (renderizador)

app.get("/", (req,res) => {
    res.send("Bem vindo")
})


app.get("/:nome/:time", (req, res) =>{
    var nome = req.params.nome;
    var time = req.params.time;
    var idade = "22"
    var cidade = "Sao Cristovao"
    var mensagem = false;
    // renderiza o index. caso eu queira criar uma pasta dentro de views e carregar os arquivos dentro dela uso "nomedapasta/nomedoarquivo"
    res.render("index", {
        nome: nome,
        time: time,
        idade: idade,
        cidade: cidade,
        msg: mensagem
    }) 
});

app.listen(8080, () =>{console.log("App rodando");

});