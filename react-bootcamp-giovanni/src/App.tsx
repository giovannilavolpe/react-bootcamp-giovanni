import { ThemeProvider } from "./clase8.2/Context.tsx"
import Theme from "./clase8.2/CounterContext.tsx"
import "./App.css"

function App() {

  return (
    <div>
      {/* <CountDown/> */}
      {/* <ContadorProvider>
        <CounterContext/>
      </ContadorProvider> */}
      <ThemeProvider>
        <Theme/>
      </ThemeProvider>
    </div>
  )
}

export default App
