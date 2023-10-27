module.exports.generate = () => {
    console.log('Modulo')
}

exports.teste = () => {
    console.info('Outra função')
}

this.terceira = () => {
    console.log('this')
}


module.exports = {
    msg: "Ele sobrescreve os outros"
}