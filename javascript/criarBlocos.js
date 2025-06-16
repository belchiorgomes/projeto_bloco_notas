const btnButton = document.querySelector('#btnButton');
const containerBlocos = document.querySelector('#containerBlocos');

let contadorNotas = 0;

btnButton.addEventListener('click', () => {
    //criar um novo elemento
    const novoAdesivo = document.createElement('div');

    //adicionar conteudo e atributo no novo elemento
    contadorNotas++;
    novoAdesivo.classList.add('notasDinamicas');
    novoAdesivo.textContent = `Adesivo dinamico #${contadorNotas}`;
    novoAdesivo.id = `adesivo-${contadorNotas}`;

    //Adiciona o novo elemento a pagina
    containerBlocos.appendChild(novoAdesivo);
    console.log(`Novo elemento ${novoElemento.id} criado e adicionado!`);
});