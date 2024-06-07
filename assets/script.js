document.getElementById('cepForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const cep = document.getElementById('cep').value;
  const url = `https://viacep.com.br/ws/${cep}/json/`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.erro) {
        alert('CEP não encontrado!');
      } else {
        document.getElementById('endereco').textContent = data.logradouro;
        document.getElementById('bairro').textContent = data.bairro;
        document.getElementById('cidade').textContent = data.localidade;
        document.getElementById('estado').textContent = data.uf;
        document.getElementById('result').style.display = 'block';
      }
    })
    .catch(error => {
      alert('Erro ao buscar CEP! Tente novamente mais tarde.');
      console.error('Erro:', error);
    });    
});