import react from "react";
import RoutePage from "./Routes/RoutePage";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <div className="mainWrapper">
        <RoutePage />
      </div>
    </LanguageProvider>
  );
}

export default App;
