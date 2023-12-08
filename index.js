class Heroi{
    
    constructor(nome,classe){
        this.classes={
            guerreiro:{ataque:"Demaciaa",nome:"guerreiro"},
            mago:{ataque:"Ice Spear",nome:"mago"},
            taoista:{ataque:"Chi charge",nome:"taoista"},
            ninja:{ataque:"Furtive die",nome:"ninja"}
        }
        for(let element in this.classes){
            if(element.includes(classe.toLowerCase())){
                this.existe=true
                this.nome=nome
                this.classe=this.classes[classe]
                this.ataque = this.classe.ataque
                this.nomeClasse = this.classe.nome
            }
        }
        if(!this.existe){
            console.log("Nome da classe incorreto as classes existentes são guerreiro,taoista,mago e ninja.")
        }
    }
}

let heroi = new Heroi("Pedro","guerreiro")

console.log(`O Heroi ${heroi.nome} da classe ${heroi.nomeClasse} uso o ataque ${heroi.ataque}`)