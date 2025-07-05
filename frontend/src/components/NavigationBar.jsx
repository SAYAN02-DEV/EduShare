import styles from './NavigationBar.module.css';

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
                <EduShare />
            </div>
            <div className={styles.buttonGroup}>
                <LoginButton />
                <RegisterButton />
            </div>
        </nav>
    );
}

export default NavigationBar;
