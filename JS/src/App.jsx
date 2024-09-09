import Footer from "./Footer"
import Body from "./Body"
import Header from "./Header"

export default function App (){
  return(
    <>
    <Header />
    <Body name="Jeremy" food="pizza" isHealthy={false} age={23}/>
    <Footer /></>
)
  
}