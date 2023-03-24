import logo from './logo.svg';
import './App.css';
import './Form.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Form.css';


function Fomulaire() {
  return (
    <div className='Form'>
         <Form>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Entrer email" className='input'/>
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control type="password" placeholder="Mot de passe"  className='input' />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button type="submit" className='btn btn-primary btn-lg'>
            Envoyer
          </Button>
        </Form>
    </div>
 
  );
}

export default Fomulaire;
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


// export default App;
