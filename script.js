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

let tarefas = [];

// Carrega tarefas ao iniciar
carregarTarefasSalvas();

// ✅ Evento do botão "Adicionar"
botao.addEventListener('click', () => {
    const texto = input.value.trim();
    if (texto !== '') {
        adicionarTarefa(texto);
        input.value = '';
    }
});

function adicionarTarefa(texto, concluida = false) {
    tarefas.push({ texto, concluida });
    atualizarLista();
    salvarTarefas();
}

function atualizarLista() {
    lista.innerHTML = '';
    tarefas.forEach((tarefa, index) => {
        const item = criarElementoTarefa(tarefa, index);
        lista.appendChild(item);
    });
}

function criarElementoTarefa(tarefa, index) {
    const itemLista = document.createElement('li');

    const textoTarefa = document.createElement('span');
    textoTarefa.textContent = tarefa.texto;
    if (tarefa.concluida) {
        textoTarefa.classList.add('concluida');
    }

    const botaoConcluir = document.createElement('button');
    botaoConcluir.textContent = '✔️';
    botaoConcluir.classList.add('btn-concluir');

    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = '🗑️';
    botaoRemover.classList.add('btn-remover');

    botaoConcluir.addEventListener('click', () => {
        tarefas[index].concluida = !tarefas[index].concluida;
        salvarTarefas();
        atualizarLista();
    });

    botaoRemover.addEventListener('click', () => {
        tarefas.splice(index, 1);
        salvarTarefas();
        atualizarLista();
    });

    itemLista.appendChild(textoTarefa);
    itemLista.appendChild(botaoConcluir);
    itemLista.appendChild(botaoRemover);

    return itemLista;
}

function salvarTarefas() {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

function carregarTarefasSalvas() {
    const dados = localStorage.getItem('tarefas');
    if (dados) {
        tarefas = JSON.parse(dados);
        atualizarLista();
    }
}
