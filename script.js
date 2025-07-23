// 1. Capturar os elementos do HTML
// const input = ...
// const botao = ...
// const lista = ...
// 2. Adicionar o evento de clique no botão
// botao.addEventListener('click', function() {
// 3. Pegar o valor digitado no input
// const tarefa = ...

// 4. Criar um novo elemento <li>
// const itemLista = document.createElement('li');
// itemLista.textContent = tarefa;

// 5. Adicionar o <li> dentro da <ul>
// lista.appendChild(itemLista);

// 6. Limpar o input
// input.value = '';
// });
const input = document.querySelector('.input');
const botao = document.querySelector('.botao');
const lista = document.querySelector('.lista');

//Eventos
botao.addEventListener('click', function () {
    const tarefa = input.value;

    if (tarefa.trim() !== '') {//Evita adicionar tarefa vazia
        const itemLista = document.createElement('li');

        //Cria um span com o texto da tarefa
        const textoTarefa = document.createElement('span');
        textoTarefa.textContent = tarefa;

        //cria botão CONCLUIR
        const botaoConcluir = document.createElement('button');
        botaoConcluir.textContent = '✔️';
        botaoConcluir.classList.add('btn-concluir');

        //Cria botao REMOVER
        const botaoRemover = document.createElement('button')
        botaoRemover.textContent = '🗑️';
        botaoRemover.classList.add('btn-remover');

        //Evento para riscar a tarefa
        botaoConcluir.addEventListener('click', function () {
            textoTarefa.classList.toggle('concluida'); //alterna a classae
        })

        //Evento para remover a Tarefa
        botaoRemover.addEventListener('click', function () {
            lista.removeChild(itemLista);
        })

        // ✅ Montar o <li> com os elementos criados
        itemLista.appendChild(textoTarefa);
        itemLista.appendChild(botaoConcluir);
        itemLista.appendChild(botaoRemover);

        lista.appendChild(itemLista);
        input.value = '';
    }
});

