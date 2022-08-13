
import Header from "./Header/Header";
import Container  from '@mui/material/Container';
import { Route, Routes } from 'react-router-dom';
import Contacts from './Contacts/Contacts';
import FormContact from './FormContact/FormContact';
import Home from "./Home/Home";



const App = () => {
    return (
        <>
        <Header />
        <Container>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='contacts' element={<Contacts />} />
                <Route path='contacts/:id' element={<FormContact  />} />
                <Route path='contacts/create' element={<FormContact />} />
            </Routes>
        </Container>
        </>
    );
}

export default App;

