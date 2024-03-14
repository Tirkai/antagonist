import {
  Switch,
  TestComponent,
  ThemeProvider,
  themes,
} from "@tirkai/antagonist-ui";
import { styles } from "./App.css";

const App = () => {
  return (
    <ThemeProvider theme={themes.dark}>
      <div className={styles.app}>
        <TestComponent />
        <Switch />
      </div>
    </ThemeProvider>
  );
};

export default App;
