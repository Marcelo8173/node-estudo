### modulos

- na função nativa dos modulos o module.exports é retornado
- existe sempre uma referencia para p this.exports 
- dessa forma ele sobrescreve os outros metodos - this. exports
- o require sempre tenta encontrar um cor module primeiro ou seja o modulo do node vai ter prefencia por um modulo criado pelo desenvolvedor
- no algortimo de busca do required ele tenta procurar primeiro o .js, depois ele acrescenta para tentar achar
    -   Por isso colocar o .js tem mais performance
- para criar uma variavel global é usado o global.{name} = {value}
- se declarar uma variavel sem as palavras reservadas (var, let, const), ela vira uma variavel de estado global



### extras
* pwd traz o caminho absoluto da pagina