import {Link} from 'react-router-dom';
import './index.css'
import logo from '../../logo.svg';

export default function Header(){
    return(
        <>
    <header>
        <img src={logo} className="logo" alt="Logo"/>
    </header>
    </>
    )
}