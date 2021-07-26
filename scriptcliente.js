let form = document.getElementById('formulario');

form.addEventListener('submit', (e) => {
    e.preventDefault();

   

    let nome = document.getElementById('nome').value;
    let cpf = document.getElementById('cpf').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;

    let dados = {
        nome,
        cpf,
        email,
        telefone
    };



    if (dados.cpf.length !== 11) {
        swal('CPF incorreto!', 'Por favor, digite um CPF correto!', 'error');
    } else if (dados.telefone.length !== 11) {
        swal('Telefone incorreto!', 'Por favor, digite um telefone correto!', 'error');
    } else {
        let valoresDados = Object.values(dados);

        let tbody = document.getElementById('tabela-clientes');
        let tr = document.createElement('tr');
        tbody.append(tr);

        valoresDados.forEach(valor => {
            let td = document.createElement('td');
            tr.append(td);
            td.append(valor);
        });

       

        let clientes = JSON.parse(localStorage.getItem('cliente')) ?? [];

        clientes.push(dados);

        let clientesConvertidos = JSON.stringify(clientes);

        localStorage.setItem('cliente', clientesConvertidos);

        swal('☕!', 'Cadastrado efetuado!', 'success');
    }
});