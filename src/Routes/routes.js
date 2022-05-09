import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from '../components/nav/Nav'
import ConversoD from '../pages/convsorDolar';
import ConversoE from '../pages/convertEuro';
import ConversoB from '../pages/convertBTC';
import ConversoA from '../pages/convertARS';
import ConversoAU from '../pages/convertAUD';
import ConversoCA from '../pages/convertCAD';
import ConversoCH from '../pages/convertCHF';
import ConversoC from '../pages/convertCNY';
import ConversoDOG from '../pages/convertDOGE';
import ConversoETH from '../pages/convertETH';
import ConversoGBP from '../pages/convertGBP';
import ConversoILS from '../pages/convertILS';
import ConversoJPY from '../pages/convertJPY';
import ConversoLTC from '../pages/convertLTC';
import ConversoUSDT from '../pages/convertUSDT';
import ConversoXRP from '../pages/convertXRP';
import AppProvider from '../context/ContextProvider'

const RotasAdmin = () => {

    return (
        <AppProvider>
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route path="/" exact element={<ConversoD />} />
                    <Route path="/xrp" exact element={<ConversoXRP />} />
                    <Route path="/eur" element={<ConversoE />} />
                    <Route path="/btc" element={<ConversoB />} />
                    <Route path="/ars" element={<ConversoA />} />
                    <Route path="/aud" element={<ConversoAU />} />
                    <Route path="/ils" element={<ConversoILS />} />
                    <Route path="/gbp" element={<ConversoGBP />} />
                    <Route path="/chf" element={<ConversoCH />} />
                    <Route path="/cad" element={<ConversoCA />} />
                    <Route path="/cny" element={<ConversoC />} />
                    <Route path="/doge" element={<ConversoDOG />} />
                    <Route path="/eth" element={<ConversoETH />} />
                    <Route path="/jpy" element={<ConversoJPY />} />
                    <Route path="/ltc" element={<ConversoLTC />} />
                    <Route path="/" element={<ConversoUSDT />} />
                </Routes>
            </BrowserRouter>
        </AppProvider>
    );
}

export default RotasAdmin;