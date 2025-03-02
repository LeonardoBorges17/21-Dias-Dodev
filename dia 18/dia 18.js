class Livro {
    constructor(titulo, autor, editora, anoDePublicacao) {
        this.Titulo = titulo;
        this.Autor = autor;
        this.Editora = editora;
        this.AnoDePublicacao = anoDePublicacao;
        this.Disponibilidade = true;
    }
}

let livros = [];
livros.push(new Livro("livro1", "marcos", "editora A", 2001));
livros.push(new Livro("livro2", "marcos", "editora F", 1997));
livros.push(new Livro("livro3", "carlos", "editora F", 2010));
livros.push(new Livro("livro4", "joão", "editora A", 2005));
livros.push(new Livro("livro5", "fábio", "editora C", 2020));

class Biblioteca {
    constructor(nome, telefone, endereco, acervo) {
        this.Nome = nome;
        this.Telefone = telefone;
        this.Endereco = endereco;
        this.AcervoLivros = acervo;
    }

    BuscarLivroPeloTitulo(titulo) {
        let livroEncontrado = this.AcervoLivros.find(livro => livro.Titulo === titulo);
        if (livroEncontrado) {
            console.log(livroEncontrado);
        } else {
            console.log("Livro não encontrado");
        }
    }

    EmprestarLivro(titulo) {
        let livro = this.AcervoLivros.find(l => l.Titulo === titulo);
        if (livro && livro.Disponibilidade) {
            livro.Disponibilidade = false;
            return true;
        }
        return false;
    }

    DevolverLivro(titulo) {
        let livro = this.AcervoLivros.find(l => l.Titulo === titulo);
        if (livro) {
            livro.Disponibilidade = true;
            console.log("Livro devolvido");
        } else {
            console.log("Livro não encontrado no acervo");
        }
    }
}

let biblioteca = new Biblioteca("Biblioteca DoDev", "123456", "Rua 2", livros);

biblioteca.BuscarLivroPeloTitulo("livro2");
biblioteca.EmprestarLivro("livro1");
biblioteca.DevolverLivro("livro1");
