document.getElementById('form-contato').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const mensagem = document.getElementById('mensagem');
    
    if (!nome.value || !email.value || !mensagem.value) {
        alert('Preencha todos os campos!');
        return;
    }
    
    fetch('https://formspree.io/f/xpwrvnwo', {
        method: 'POST',
        body: new FormData(this),
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            alert('Mensagem enviada!');
            this.reset();
        } else {
            alert('Erro ao enviar. Tente novamente.');
        }
    })
    .catch(() => {
        alert('Erro de conexão. Tente mais tarde.');
    });
});