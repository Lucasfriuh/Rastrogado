document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Obrigado! Sua mensagem foi enviada com sucesso.');
    this.reset(); // Limpa o formulário
});
