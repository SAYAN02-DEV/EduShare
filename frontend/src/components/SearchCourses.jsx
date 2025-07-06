import React, { useState } from 'react';
import styles from './searchcourses.module.css';

const sampleCourses = [
  { id: 1, image: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg', title: 'Course 1' },
  { id: 2, image: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg', title: 'Course 2' },
  { id: 3, image: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg', title: 'Course 3' },
  { id: 4, image: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg', title: 'Course 4' },
  { id: 5, image: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg', title: 'Course 5' },
  { id: 6, image: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg', title: 'Course 6' },
];

function SearchCourses() {
  const [query, setQuery] = useState('');

  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles.searchBar}
        placeholder="Search courses..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className={styles.cardGrid}>
        {sampleCourses.map(course => (
          <div key={course.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img
                src={course.image}
                alt={course.title}
                className={styles.cardImage}
              />
            </div>
            <div className={styles.cardTitle}>{course.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchCourses;
