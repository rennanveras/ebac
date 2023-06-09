function Pessoa(nome, idade, endereco, ganhoMensal){
    this.nome = nome;
    this.idade = idade;
    this.endereco = endereco;
    let _ganhosMensais = ganhoMensal;

    this.getGanhosMensais = function() {
        return _ganhosMensais
    }

    this.setGanhosMensais = function(valor){
        if(typeof valor === 'number') {
            _ganhosMensais = valor;
        }
    }

    this.deBoasVindas = function(){
        console.log(`Bem vindo ${nome}`)
    }
}

function PessoaFisica(nome, idade, endereco, ganhoMensal, cpf){
    Pessoa.call(this, nome, idade, endereco, ganhoMensal);

    this.cpf = cpf;
    this.deBoasVindas();
}

function PessoaJuridica(nome, idade, endereco,ganhoMensal, cnpj, nomeEmpresa){
    Pessoa.call(this, nome, idade, endereco, ganhoMensal);

    this.cnpj = cnpj;
    this.nomeEmpresa = nomeEmpresa;
    this.deBoasVindas();
}

const pessoa1 = new PessoaFisica("Rennan", 19, "rua vs-code", 1000, "000-000-000-00")
console.log(pessoa1)

const pessoa2 = new PessoaJuridica("Julio", 27, "rua javascript",15000, "11.111.111/1111-29", "Doceria do Julio")
console.log(pessoa2)

pessoa1.setGanhosMensais(2000);
