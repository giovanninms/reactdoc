import './App.css';
import JogoDaVelha from './Board';
import Introdução from './Introducao';
import FiltroProdutos from './FiltroProdutos';

export default function App() {

  
  return (
    <div className="App">
      <Introdução />
      <div>
        <JogoDaVelha/>
      </div>
      <div className='filtroProdutos'>
      <FiltroProdutos/>
      </div>
        
    </div>
  );
}

