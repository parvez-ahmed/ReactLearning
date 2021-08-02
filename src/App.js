import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header.js';
import CompaignPage from './pages/CompaignPage/CampaignPage';
import { Provider } from "react-redux";
import { store } from './store/index'

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <div className="ContentWrapper">
          <CompaignPage />
        </div>
      </Provider>
    </>
  );
}

export default App;
