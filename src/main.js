const alunosNotas = [
    {
        nome: "Gustavo",
        nota: 5
    }, {
        nome: "Pedro",
        nota: 3
    }, {
        nome: "Rennan",
        nota: 7
    }, {
        nome: "Leyla",
        nota: 6
    }
]
let alunosNotasAcimaMedia = '';

function retornaNotas(){
    alunosNotas.map((aluno) => {
        if(aluno.nota >= 6){
            console.log(aluno)
        }
    })
}

retornaNotas();