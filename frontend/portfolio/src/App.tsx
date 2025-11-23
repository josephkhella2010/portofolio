import { useSelector } from "react-redux";
import RoutePage from "./Routes/RoutePage";
import { LanguageProvider } from "./context/LanguageContext";
import SendingEmailContainer from "./pages/sendingEmailPage/SendingEmailContainer";
import { RootState } from "./store";

function App() {
  const { isSending } = useSelector((state: RootState) => state.SendingSlice);
  return (
    <LanguageProvider>
      <div className="mainWrapper">
        {isSending ? <SendingEmailContainer /> : ""}
        <RoutePage />
      </div>
    </LanguageProvider>
  );
}

export default App;
