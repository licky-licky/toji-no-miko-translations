import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import EpisodesPreview from '../components/EpisodesPreview';
import Timer, { isOver } from "../components/Timer";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className="container2">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="WHY"><span className={isOver() ? "hero__subtitle" : ''}>{siteConfig.tagline}</span></p>
          {isOver() ? '' : <p>Time until termination: <br /><Timer /> </p>}
          <p className="READ">Read Mihono's story:</p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/Part 1/Prologue_-_The_Beginning">
              Part 1: Formation
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/docs/Part 2/2-1_On_a_New_Mission">
              Part 2: Complication
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/docs/Part 3/3-1_Assembly">
              Part 3: Turmoil
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/docs/Part 4/4-1_The_Raging_Thunder_God">
              Part 4: Bonds
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/docs/Part 5/5-1_Kashuu_Kiyomitsu">
              Part 5: Fog at First Light
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/docs/Part 6/6-1_The_Morning_Fog_Clears">
              Part 6: Beacon
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="a website for dumb homos">
      <HomepageHeader />
      <main>
        <EpisodesPreview />
      </main>
    </Layout>
  );
}
