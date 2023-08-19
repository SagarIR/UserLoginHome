import React from "react";
import Header from "./Header/header";
import styles from "./main.module.css";

const Main = () => {
  return (
    <>
      <Header />
      <div className={styles.mainContainer}>
        <div className={styles.contentContainer}>
          <h1>Welcome to Our Job Portal</h1>
          <p>We connect job seekers with their dream job roles.</p>
          <button className={styles.ctaButton}>Browse Jobs</button>
        </div>
      </div>
      <div className={styles.featuredJobsContainer}>
        <h2>Featured Jobs</h2>
        <div className={styles.jobCard}>
          <h3>Software Engineer</h3>
          <p>
            Join our innovative team to build cutting-edge software solutions.
          </p>
          <button className={styles.applyButton}>Apply Now</button>
        </div>
        <div className={styles.jobCard}>
          <h3>Marketing Specialist</h3>
          <p>
            Help us spread the word about our amazing products and services.
          </p>
          <button className={styles.applyButton}>Apply Now</button>
        </div>
        <div className={styles.jobCard}>
          <h3>Customer Support Representative</h3>
          <p>Provide exceptional support and assist our valued customers.</p>
          <button className={styles.applyButton}>Apply Now</button>
        </div>
      </div>
      <div className={styles.testimonialsContainer}>
        <h2>What Our Applicants Say</h2>
        <div className={styles.testimonial}>
          <p>
            "Thanks to this portal, I found my dream job within days. Highly
            recommended!"
          </p>
          <p>- John Doe, Software Developer</p>
        </div>
        <div className={styles.testimonial}>
          <p>
            "The job matching algorithm here is fantastic. I'm now in a role I
            truly enjoy."
          </p>
          <p>- Jane Smith, Marketing Professional</p>
        </div>
      </div>
    </>
  );
};

export default Main;
