//# 3 Escrevendo as classses de um Jogo
//O que deve ser utilizado 

/* Variaveis 
Operadores 
Laços de repetições
Estrutas de decisões
Funções
Classes e Objetos */ 

// Objetivo: 
/*Crie uma classe generica que represente um heroi de uma aventura e que possua as seguintes propriedades: 
nome
idade
tipo (ex: guerreiro, mago, monge, ninja)

alem disso, deve ter um método chamado atacar que devera atender os seguintes requisitos: 

exibir a mensagem: ' o {tipo} atacou usando {ataque}')
aonde o {tipo} deve ser concatenando o tipo que está na propriedade a classe
e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo: 

se mago -> no ataque exibir(usou magia)
se guerreiro -> no ataque exibir (usuou espada)
se monge -> usou astes marciais
se ninja -> shuriken

Ao final deve ser exebido uma mensgem: 

"o {tipo} atacou usando {ataque}"
ex: magou ataou usando magia*/


class heroi{
    constructor(nome, idade, tipo, arma){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.arma = arma
    }
    atacar(){  
    console.log(`O ${this.tipo} atacou usando ${this.arma}.`)
    }
}


let novoHeroi = new heroi(" Pimpolho", 20,"ninja", "shuriken")
novoHeroi.atacar()



