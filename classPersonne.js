class Personne {
    constructor(nom, age) {
        this.nom = nom;
        this.age = age;
    }
    salut() {
        console.log(`Mon nom est ${this.nom} et j'ai ${this.age} ans`)
    }
}
module.exports = Personne;