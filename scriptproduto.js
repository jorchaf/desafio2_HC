let form = document.getElementById('formulario');

form.addEventListener('submit', (e) => {
    e.preventDefault();

  

    let categoria = document.getElementById('categoria').value;
    let nome = document.getElementById('nome').value;
    let marca = document.getElementById('marca').value;
    let quantidade = document.getElementById('quantidade').value;

    let dados = {
        categoria,
        nome,
        marca,
        quantidade
    };

    let valDados = Object.values(dados);

    let tbody = document.getElementById('tabela-produtos');
    let tr = document.createElement('tr');
    tbody.append(tr);

    valDados.forEach(valor => {
        let td = document.createElement('td');
        tr.append(td);
        td.append(valor);
    });


    let produtos = JSON.parse(localStorage.getItem('produto')) ?? [];

    produtos.push(dados);

    let prodFinalizados = JSON.stringify(produtos);

    localStorage.setItem('produto', prodFinalizados);

    swal('☕', 'Cadastro efetuado!', 'success');
});