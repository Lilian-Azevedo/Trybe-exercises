function geraEstado () {
    const listaEstado = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espirito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
    const selectOption = document.querySelector('#estado');
    
    for (let index in listaEstado) {
        let optionEstado = document.createElement('option');
        optionEstado.innerHTML = listaEstado[index];
        optionEstado.value = listaEstado[index];
        selectOption.appendChild(optionEstado);
    }
}
geraEstado();

function buttonClear () {
    const button = document.querySelector('#limpar');
    button.addEventListener('click', function() {
        
    })
}