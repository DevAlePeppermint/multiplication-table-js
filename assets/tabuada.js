function calculaTabuada(){


    //Obentendo do DOM o tbody da tabela
    let tabuada = document.querySelector("#tabuada tbody");
    //obtendo o valor A do campo imput e convertendo ele em inteiro
    let valorA = parseInt(document.querySelector("#valorA").value);
    //limpando o conteudo do tbody

    tabuada.innerHTML = '';

    //criando um laço de repetição de 0 a 10
    for(let valorB = 0; valorB <= 10; valorB++) {

        //calculando
        let resultado = valorA * valorB;

        //criando template das columas da linha atual
        let template = `                
            
                <td>${valorA}</td>
                <td>x</td>
                <td>${valorB}</td>
                <td>=</td>
                <td>${resultado}</td>
            
            `;
        //criando o elemento tr
        let tr = document.createElement('tr')
        //inserindo as colunas na linha
        tr.innerHTML = template;
        //inserindo a linha na tabela.
        tabuada.append(tr);

        
    }//fechando o for

}//fechando a função

//chamando a função
calculaTabuada()

//adicionando o evento de alteração ao campo numero
document.querySelector("#valorA").addEventListener('change', calculaTabuada);