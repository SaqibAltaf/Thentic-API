import "./App.css";
import CreateWallet from "./components/create-wallet";
import {
    BrowserRouter,
    Routes, // instead of "Switch"
    Route,
} from "react-router-dom";
import "sweetalert2/src/sweetalert2.scss";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CreateWallet />} />
                <Route path="*" exact={true} component={CreateWallet} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
