const Post = require("./Post");

class Author {
    constructor(nome) {
        this.nome = nome;
        this.posts = [];
    }

    criarPost(titulo, conteudo) {
        const post = new Post(titulo, conteudo, this);
        this.posts.push(post);
        return post;            
    }
}

module.exports = Author;
