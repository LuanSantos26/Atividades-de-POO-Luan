
class conta{
    constructor(titular){
      this.numero;
      this.saldo=0;
      this.titular=titular
    }
  }
  
  const conta1 = new conta("luan");
  
  console.log(conta1)
  
  const conta2 =  new conta("jubileu");
  console.log(conta2)
  
  class Veiculo{
    constructor(rodas, marca, cor, valor, escada, potencia){
      this.rodas=rodas;
      this.marca=marca;
      this.cor=cor;
      this.valor=valor;
      this.escada=escada;
      this.potencia=potencia;
    }
  }
  
  const uno = new Veiculo(5, "fiat", "preto", 60000, true, 1000)
  console.log(uno)
  
  
  class Pessoa {
    constructor(nome, idade){
        this.nome = nome
        this._idade = idade
    }

    apresentar(){
        return `${this.nome} tem ${this._idade} anos`
    }
    getIdade(){
        return this._idade
    }
    setIdade(idade){
        this._idade = idade
    }
}

class Aluno extends Pessoa{
    constructor(matricula, nome, idade){
        super(nome, idade)
        this.matricula = matricula
    }
}

const aluno1 = new Aluno('26', 'Luan', 23);
console.log(aluno1.apresentar())


//Parte do animal, desculpe professor mais tive que usar o chat gpt :(
class Animal{
    falar(){
        console.log('animal faz som')
    }
}

class Cachorro extends Animal{
    falar(){
        console.log('cachorro faz auau')
    }
}

class Gato extends Animal{
    falar(){
        console.log('gato faz miau')
    }
}

class Papagaio extends Animal{
    falar(){
        console.log('papagaio diz que São paulo vai ganhar a caopa do Basil esse ano')
    }
}

const cachorro1 = new Cachorro()
const gato1 = new Gato()
const peixe1 = new Papagaio()

peixe1.falar()
gato1.falar()
cachorro1.falar()