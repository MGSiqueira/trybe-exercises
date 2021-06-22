import './App.css';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const compromissos = [
  'Lavar a louça',
  'Passear com o cachorro',
  'Dominar o mundo'
];

function App() {
  return <ul>{ compromissos.map(compromisso => Task(compromisso)) }</ul>;
}

export default App;
