import styles from './HeroSection.module.css';
import DSCourse from '../assets/DSCourse.png';
import MLCourse from '../assets/MLCourse.png';
import WEB3Course from '../assets/WEB3Course.png';
import WebDevCourse from '../assets/webDevCourse.png';


function EdushareBecause() {
  return (
    <b className={styles.edushareBecause}>
      <span className={styles.edushare}>Edushare</span>
      <span>{`, `}</span>
      <span className={styles.because}>because</span>
    </b>
  );
}

function KnowledgeIsMeantToBeShared() {
  return (
    <b className={styles.knowledgeIsMeant}>
      knowledge is meant to be shared!
    </b>
  );
}

function Explore() {
  return (
    <div>
    <button className={styles.explore}>Explore Courses</button>
    </div>
  );
}
function Create() {
  return (
    <button className={styles.Create}>Create Courses</button>
  );
}

function Frame9() {
  return (
    <div className={styles.frameParent}>
      <div className={styles.courseImageWrapper}>
        <img className={styles.courseImage} alt="DS Course" src={DSCourse} />
      </div>
      <div className={styles.courseImageWrapper}>
        <img className={styles.courseImage} alt="ML Course" src={MLCourse} />
      </div>
      <div className={styles.courseImageWrapper}>
        <img className={styles.courseImage} alt="WEB3 Course" src={WEB3Course} />
      </div>
      <div className={styles.courseImageWrapper}>
        <img className={styles.courseImage} alt="Web Dev Course" src={WebDevCourse} />
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <EdushareBecause />
        <KnowledgeIsMeantToBeShared />
        <div style={{display: 'flex', gap: '20px'}}>
            <Explore/>
            <Create/>
        </div>
        <Frame9/>
      </div>
    </div>
  );
}

export default HeroSection;
