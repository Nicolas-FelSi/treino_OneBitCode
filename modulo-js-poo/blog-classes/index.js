const Author = require("./Author");

const nicolas = new Author("Nicolas");
const post = nicolas.criarPost("Senhor dos Anéis", "Muitas histórias interessantes.");
const post2 = nicolas.criarPost("Harry Potter", "Outra saga de histórias interessantes.");

post.addComentario("Ricardo", "Achei muito interessante o blog");
post.addComentario("Roberto", "Adoro senhor dos anéis");

console.log(nicolas);