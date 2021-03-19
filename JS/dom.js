const lista = document.querySelector('#lista');
const form = document.querySelector('#adicionar');
const menu = document.querySelector("#menu");
console.log(menu)



const removerDado = async (id, midias) => {

    const res = await fetch(`http://localhost:3000/maquinas/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({midias})
    });


    if (res.status === 201) {

        const item = lista.querySelector(`[data-id="${id}"]`);

        lista.removeChild(item);
    }
}


const criarItemLista = (id, nome, descricao, midias) => {

    const li = document.createElement('li');

    li.classList.add('card');

    li.setAttribute('data-id', id);

    const button = document.createElement('button');

    button.innerText = 'Excluir';

    button.classList.add('btn');

    button.addEventListener('click', () => removerDado(id, midias));



    const h2 = document.createElement('h2');

    h2.innerText = nome;



    const p = document.createElement('p');

    p.innerText = descricao;

    li.appendChild(button);

    li.appendChild(h2);

    li.appendChild(p);


    midias.forEach(({ caminho, titulo }) => {
        const img = document.createElement('img');

        img.setAttribute('src', `http://localhost:3000/${caminho}`);

        img.setAttribute('alt', titulo);

        li.appendChild(img);

    });

    return li;
}


const buscarDados = async () => {

    const res = await fetch('http://localhost:3000/maquinas');


    if (res.status === 200) {

        lista.innerHTML = '';

        const dados = await res.json();


        dados.forEach(({ id, nome, descricao, midias }) => {

            const itemLista = criarItemLista(id, nome, descricao, midias);

            lista.appendChild(itemLista);

            const itemMenu = criarMenu(nome);
            menu.appendChild(itemMenu)

        });
    }
}


buscarDados();

const adicionarDados = async (body) => {

    console.log('Enviando...');

    const res = await fetch('http://localhost:3000/maquinas', { method: 'POST', body });

    console.log('Enviou...');

    if (res.status === 201) {

        const campos = form.querySelectorAll('[name]');

        campos.forEach((campo) => campo.value = '');

        campos[0].focus();


        buscarDados();
    }
}


form.addEventListener('submit', (e) => {

    e.preventDefault();


    const formDados = new FormData();

    const midias = Array.from(document.querySelector('#midias_maquina').files);

    midias.forEach((file) => {

        formDados.append("midias", file);

    });

    formDados.append('nome', document.querySelector('#nome_maquina').value);

    formDados.append('descricao', document.querySelector('#descricao_maquina').value);

    adicionarDados(formDados);
});
    
function criarMenu(nome){

    const li = document.createElement('li');
    const link = document.createElement('a');
    link.classList.add("maquina");
    link.setAttribute('href','/dom/dom.html');
    link.innerText = nome;
    li.appendChild(link);
    
    return li;
}