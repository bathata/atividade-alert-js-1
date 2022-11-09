/*nesta funcção esta declarando o parametro da idade(anos) por pessoa,
quando passar uma certa quantidade de anos, a função soma os anos que
se passaram com a idade da pessoa (também tem declarada a pessoa neh)
e assim identifica quem vai ter a idade atualizada*/

/*aqui cria a calculadora que faz a soma das idades
determinando a função que é idade+anos que se passam=idade que a pessoa terá
o this é esse (ou seja, esse ser humano terá tal idade) que foi usado para pegar a
propriedade que ta fora do escopo bloco
*/
function CalculadoraIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
    // crase é usada para string com trecho de código
};
//Ele declara a constante que é em forma de objeto=
// nome da pessoa e a idade dela são os valores e as propriedades apos o :
const pessoa1 = {
    nome: 'Amelia',
    idade: 23,
};

const pessoa2 = {
    nome: 'Márcia',
    idade: 20,
};

const pessoa3 = {
    nome: 'Joana',
    idade: 13,
};
{
//Imprime o nome com a idade no console
alert(CalculadoraIdade.call(pessoa3, 40));}
//o .call liga o objeto com o parametro
{alert(CalculadoraIdade.apply(pessoa2, [24]));
//aplica=implementa a ray
}
