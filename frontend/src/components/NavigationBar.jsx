import { Link } from 'react-router-dom';
import styles from './NavigationBar.module.css';
// import { BrowserRouter, Routes, Route, Outlet, Link } from 'react-router-dom';

function LoginButton({ onClick }) {
    return (
        <button className={styles.loginButton} onClick={onClick}>
            Login
        </button>
    );
}

function RegisterButton({ onClick }) {
    return (
        <button className={styles.registerButton} onClick={onClick}>
            Register
        </button>
    );
}

function EduShare() {
    return <b className={styles.edushare}>EduShare</b>;
}

function NavigationBar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logoWrapper}>
                <Link to='/'>
                    <EduShare />
                </Link>
            </div>
            <div className={styles.buttonGroup}>
                <Link to= 'login'>
                    <LoginButton />
                </Link>
                <Link to = 'register'>
                    <RegisterButton />
                </Link>
            </div>
        </nav>
    );
}

export default NavigationBar;
