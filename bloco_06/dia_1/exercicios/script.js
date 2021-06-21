function addEstados() {
  let estados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernanbuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
  let un = ['ac', 'al', 'ap', 'am', 'ba', 'ce', 'df', 'es', 'go', 'ma', 'mt', 'ms', 'mg', 'pa', 'pb', 'pr', 'pe', 'pi', 'rj', 'rn', 'rs', 'ro', 'rr', 'sc', 'sp', 'se', 'to'];
  let select = document.getElementById('select-estado');
  for (let i = 0; i < estados.length; i++) {
    let option = document.createElement('option');
    option.value = un[i];
    let opcao = option.innerHTML = estados[i];
    select.appendChild(option);
    if (opcao === 'São Paulo') { option.selected = 'true' }
  }
}
addEstados();

const submitButton = document.getElementById('submit-button');

function prevent() {
  event.preventDefault();
}

const nome = document.getElementById('input-name');
const email = document.getElementById('input-email');
const cpf = document.getElementById('input-cpf');
const endereco = document.getElementById('input-endereco')
const cidade = document.getElementById('input-cidade');

function addNome() {
  let p = document.createElement('p');
  let div = document.getElementById('resultado')
  p.innerText = `Nome: ${nome.value}`;
  div.appendChild(p)
}

function addEmail() {
  let p = document.createElement('p');
  let div = document.getElementById('resultado')
  p.innerText = `Email: ${email.value}`;
  div.appendChild(p)
}

function addCpf() {
  let p = document.createElement('p');
  let div = document.getElementById('resultado')
  p.innerText = `CPF: ${cpf.value}`;
  div.appendChild(p)
}

function addEndereco() {
  let p = document.createElement('p');
  let div = document.getElementById('resultado')
  p.innerText = `Endereço: ${endereco.value}`;
  div.appendChild(p)
}

function addCidade() {
  let p = document.createElement('p');
  let div = document.getElementById('resultado')
  p.innerText = `Cidade: ${cidade.value}`;
  div.appendChild(p)
}

submitButton.addEventListener('click', prevent);
submitButton.addEventListener('click', addNome);
submitButton.addEventListener('click', addEmail);
submitButton.addEventListener('click', addCpf);
submitButton.addEventListener('click', addEndereco);
submitButton.addEventListener('click', addCidade);