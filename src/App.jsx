import "./index.css";
import ThemeProvider, { useTheme } from "./contexts/ThemeContext";

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Mudar para {darkMode ? "Light" : "Dark"} Mode
    </button>
  );
};

const MainContent = () => {
  const { darkMode } = useTheme();

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <h1>{darkMode ? "Modo Escuro" : "Modo Claro"}</h1>
      <ThemeToggle />
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  );
}
