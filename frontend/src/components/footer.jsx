import styles from './footer.module.css';
import linkedin from '../assets/linkedin.png'
import insta from '../assets/insta.png'
import github from '../assets/github.png'
import facebook from '../assets/facebook.png'
function Footer() {
  return (
    <div className={styles.footer} style={{display:'flex'}}>
        <div style={{display: 'flex', backgroundColor: 'transparent'}}>
            <img style = {{height: '50px', marginTop: '100px', marginLeft: '20px', borderRadius: '30px'}} src={linkedin}alt="fault" />
            <img style = {{height: '50px', marginTop: '100px', marginLeft: '20px', borderRadius: '30px'}} src= {github} alt="" />
            <img style = {{height: '50px', marginTop: '100px', marginLeft: '20px', borderRadius: '30px'}} src={insta} alt="" />
            <img style = {{height: '50px', marginTop: '100px', marginLeft: '20px', borderRadius: '30px'}} src={facebook} alt="" />
        </div>
        <div style={{backgroundColor: 'transparent', color: 'white', textAlign: 'center', marginTop: '120px', marginLeft: '300px'}}>Made with love by Sayan</div>
    </div>
  );
}

export default Footer