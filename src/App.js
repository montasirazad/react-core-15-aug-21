import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React core </h1>
        <Name name='S.M'/>
        <Name name='Dhrubo'/>
        <Name name='montasir'/>
         
        
      </header>
    </div>
  );
function Name(props) {
  const nameStyle = {

  }
 return (
  <div style ={{border:'5px dotted yellow',
  padding:'10px',margin:'8px'}}>
  {/* <h1>Name: AZAD</h1> */}
  <h2>Name:{props.name}</h2>
</div> 
 )
}

}

export default App;
