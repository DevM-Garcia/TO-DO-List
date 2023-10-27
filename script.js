const localStorageKey = 'to-do-list';

function validarNovaTarefa() {
    let valores = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    let inputValue = document.getElementById('input-new').value;
    let existe = valores.find(x => x.name == inputValue);

    return !existe ? false : true
}

function novaTarefa() {
    let input = document.getElementById('input-new');
    input.style.border = ''

    // validação

    if (!input.value) {

        input.style.border = '1px solid red'
        alert('Digite algo para inserir em sua lista')

    }

    else if (validarNovaTarefa()) {
        alert('Já existe uma tarefa coma essa descrição')
    }

    // Incrementando no localStorage
    else {
        let valores = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
        valores.push({
            name: input.value
        })
        localStorage.setItem(localStorageKey, JSON.stringify(valores))
        adiconaValoresLista()
    }
    input.value = ''
}

function adiconaValoresLista() {
    let valores = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let lista = document.getElementById('to-dolist');
    lista.innerHTML = '';

    for (let i = 0; i < valores.length; i++) {
        lista.innerHTML += ` <li>${valores[i]['name']}<button id='btn-ok' onclick='removeItem("${valores[i]['name']}")'><i class='bx bx-check-circle'></i></button> </li>`
    }
}

function removeItem(data) {
    let valores = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let index = valores.findIndex(x => x.name == data)
    valores.splice(index, 1)
    localStorage.setItem(localStorageKey, JSON.stringify(valores))
    adiconaValoresLista()
}
adiconaValoresLista()