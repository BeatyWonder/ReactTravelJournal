import Nav from "./Comp/Navbar"
import './App.css';
import Card from "./Comp/Cards"
import data from "./data";

function App() {
  const dataItems = data.map((cardData)=>
  {
    return(
      <Card
      key ={cardData.id}
      cardData = {cardData}
      />
    )
  })

  return (
    <div>
      <Nav />
      <section className="cardsList">
      {dataItems}

      </section>
   


</div>
  )

}

export default App;
