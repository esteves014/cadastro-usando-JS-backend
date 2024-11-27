//Cadastro

const formCadastro = document.getElementById('submitFormCadastro');

formCadastro.addEventListener('click', async (event) => {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Coleta os dados do formulário
    const formData = {
        name: document.getElementById('nameCadastro').value,
        password: document.getElementById('passwordCadastro').value,  // Não converta para float, já que é uma senha (string)
    };

    try {
        // Envia os dados via fetch como JSON
        const response = await fetch('php/cadastrar-pessoa.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Define o formato de envio como JSON
            },
            body: JSON.stringify(formData), // Envia os dados como JSON
        });

        // Verifica se a resposta é OK (status 2xx)
        const result = await response.json();
        if (response.ok) {
            // document.getElementById('response').innerText = result.message;
            const alertHNtml = document.getElementById('text-modal');
            alertHNtml.innerText = result.message;

            // Exibe o modal
            const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
            modal.show();
        } else {

            // document.getElementById('response').innerText = result.message;
            const alertHNtml = document.getElementById('text-modal');
            alertHNtml.innerText = `Erro: ${result.error || 'Desconhecido'}`;

            // Exibe o modal
            const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
            modal.show();
        }
    } catch (error) {
        // Se houver um erro na requisição, exibe uma mensagem para o usuário
        console.error('Erro ao cadastrar o produto:', error);
        document.getElementById('response').innerText = 'Erro ao conectar com o servidor.';
    }
});

//login

const formLogin = document.getElementById('submitFormLogin');

formLogin.addEventListener('click', async (event) => {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Coleta os dados do formulário
    const formData = {
        name: document.getElementById('nameLogin').value,
        password: document.getElementById('passwordLogin').value,  // Não converta para float, já que é uma senha (string)
    };

    try {
        // Envia os dados via fetch como JSON
        const response = await fetch('php/login-pessoa.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Define o formato de envio como JSON
            },
            body: JSON.stringify(formData), // Envia os dados como JSON
        });

        // Verifica se a resposta é OK (status 2xx)
        const result = await response.json();
        if (response.ok) {
            // document.getElementById('response').innerText = result.message;
            const alertHNtml = document.getElementById('text-modal');
            alertHNtml.innerText = result.message;

            // Exibe o modal
            const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
            modal.show();
        } else {

            // document.getElementById('response').innerText = result.message;
            const alertHNtml = document.getElementById('text-modal');
            alertHNtml.innerText = `Erro: ${result.error || 'Desconhecido'}`;

            // Exibe o modal
            const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
            modal.show();
        }
    } catch (error) {
        // Se houver um erro na requisição, exibe uma mensagem para o usuário
        console.error('Erro ao cadastrar o produto:', error);
        document.getElementById('response').innerText = 'Erro ao conectar com o servidor.';
    }
});