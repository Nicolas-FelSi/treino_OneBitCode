const Comment = require("./Comment");

class Post {
    constructor(titulo, conteudo, autor) {
        this.titulo = titulo;
        this.conteudo = conteudo;
        this.autor = autor;
        this.comentarios = [];
        this.dataCriacao = new Date();
    }

    addComentario(nome, conteudo) {
        this.comentarios.push(new Comment(nome, conteudo));
    }
}

module.exports = Post;

