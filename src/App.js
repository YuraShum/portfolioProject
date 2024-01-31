import Nav from './components/Nav';
import Card from './components/Card';
import data from './data.js'

function App() {
  const elementCard = data.map((elem, ind)=>{
    return(
      <Card
      {...elem}
      key = {ind}/>
      )
  })
  return (
    <div className='content'>
      <Nav/>
      {elementCard}

    </div>
  );
}

export default App;
