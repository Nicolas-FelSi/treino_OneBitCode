class Comment {
    constructor(nome, conteudo) {
        this.nome = nome;
        this.conteudo = conteudo;
        this.dataComentario = new Date();
    }
}

module.exports = Comment;
