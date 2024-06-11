const button = document.querySelector('.button-add-task');
const input = document.querySelector('.input-task');
const listaCompleta = document.querySelector('.list-tasks');

let minhaListaDeItens = [];

function adicionarNovaTarefa() {
    if (input.value.trim() !== '') {
        minhaListaDeItens.push({
            tarefa: input.value,
            concluida: false
        });
        input.value = '';
        mostrarTarefas();
    }
}

function mostrarTarefas() {
    let novaLi = '';
    minhaListaDeItens.forEach((item, index) => {
        novaLi += `
            <li class="task">    
                <img src="img/checked.png" alt="check-na-tarefa" onclick="concluirTarefa(${index})" style="opacity: ${item.concluida ? 1 : 0.5}">
                <p style="text-decoration: ${item.concluida ? 'line-through' : 'none'}">${item.tarefa}</p>
                <img src="img/trash.png" alt="tarefa-para-lixo" onclick="deletarItem(${index})">
            </li>
        `;
    });
    listaCompleta.innerHTML = novaLi;
}

function concluirTarefa(index) {
    minhaListaDeItens[index].concluida = !minhaListaDeItens[index].concluida;
    mostrarTarefas();
}

function deletarItem(index) {
    minhaListaDeItens.splice(index, 1);
    mostrarTarefas();
}

button.addEventListener('click', adicionarNovaTarefa);
