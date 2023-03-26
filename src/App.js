import './App.css';
import PrimeReact from 'primereact/api';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

function App() {

  function mostrar(evento) {
    evento.preventDefault();
    const texto = evento.target.texto.value;
    let contador = 0;
    let letra = '';
    for (let i = 0; i < texto.length; i++) {
      letra = texto.charAt(i).toLowerCase();
      switch (letra) {
        case 'a':
          contador++;
          break;

        case 'e':
          contador++;
          break;

        case 'i':
          contador++;
          break;

        case 'o':
          contador++;
          break;

        case 'u':
          contador++;
          break;

        default:
          break;
      }
    }

    alert('Usted escribio: ' + contador + ' vocal/es');
  }


  return (
    <div className="App">
      <form onSubmit={mostrar}>
        <p className="Texto">Ingrese un texto:</p>
        <InputText type="text" name="texto" placeholder="Ingrese una palabra" />
        <Button className="Form" label="Mostrar" />
      </form>
    </div>
  );
}

export default App;