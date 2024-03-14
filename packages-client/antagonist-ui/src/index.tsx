const TestComponent = () => {
  return <>Hi guys. I am here! There!</>
}
import { ThemeProvider } from "./providers/ThemeProvider"
import { Button } from "./components/Button/Button"
import { Switch } from "./components/Switch/Switch"
import { themes } from "./themes"

export {
  TestComponent,
  ThemeProvider,
  Button,
  Switch,
  themes
}