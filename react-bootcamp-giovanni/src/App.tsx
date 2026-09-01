import "./App.css"
/* import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Clase3Page from "./pages/clase3"
import Clase4Page from "./pages/clase4"
import Clase5Page from "./pages/clase5"
import Clase6Page from "./pages/clase6"
import Clase7Page from "./pages/clase7"
import Clase8Page from "./pages/clase8"
import Clase9Page from "./pages/clase9"
import { ContadorProvider } from "./clase8/Context"
import Clase8_2Page from "./pages/clase8_2"
import { ThemeProvider } from "./clase8_2/Context"
import InfoTask from "./clase10/TaskList" */
import Content from "./clase10/Content"

function App() {

  return (
    <div>
      <Content/>
    </div>
  )
}

export default App


/*
    <BrowserRouter>
    <ContadorProvider>
      <ThemeProvider>

      <nav style={{backgroundColor: "white", borderRadius: '10px', color: 'black', textDecoration: 'none', marginBottom: '20px'}}>
        <Link to={'/clase3/Content'} style={{ margin: '20px' }}>Clase 3</Link>
        <Link to={'/clase4/Content'} style={{ margin: '20px' }}>Clase 4</Link>
        <Link to={'/clase5/Content'} style={{ margin: '20px' }}>Clase 5</Link>
        <Link to={'/clase6/Content'} style={{ margin: '20px' }}>Clase 6</Link>
        <Link to={'/clase7/Content'} style={{ margin: '20px' }}>Clase 7</Link>
        <Link to={'/clase8/CounterContext'} style={{ margin: '20px' }}>Clase 8</Link>
        <Link to={'/clase8_2/CounterContext'} style={{ margin: '20px' }}>Clase 8.2</Link>
        <Link to={'/clase9/Content'} style={{ margin: '20px' }}>Clase 9</Link>
      </nav>
        <Routes>
          <Route path="/" element={<div style={{height: 200, width:200, backgroundColor: 'red'}}/>} />
          <Route path="/clase3/Content" element={<Clase3Page/>} />
          <Route path="/clase4/Content" element={<Clase4Page/>} />
          <Route path="/clase5/Content" element={<Clase5Page/>} />
          <Route path="/clase6/Content" element={<Clase6Page/>} />
          <Route path="/clase7/Content" element={<Clase7Page/>} />
          <Route path="/clase8/CounterContext" element={<Clase8Page/>} />
          <Route path="/clase8_2/CounterContext" element={<Clase8_2Page/>} />
          <Route path="/clase9/Content" element={<Clase9Page/>} />
        </Routes>
        </ThemeProvider>
    </ContadorProvider>
    </BrowserRouter>
*/