import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header
			className={clsx('hero', styles.heroBanner)}
			style={{
				backgroundImage:
					'radial-gradient(circle, rgba(61, 61, 61, 0) 15%, rgba(0, 0, 0, 0.2) 78%),url(https://cdn.prod.website-files.com/5f3d8f0947c9a1f4b058e18b/5f773dee4b83a1c4a5d1077b_shutterstock_165228059.jpg)',
				backgroundPosition: '0 0,100% 0',
				backgroundSize: 'auto,cover',
				backgroundAttachment: 'scroll,scroll',
			}}
		>
			<div
				style={{
					position: 'absolute',
					top: 0,
					bottom: 0,
					left: 0,
					right: 0,
					backdropFilter: 'saturate(130%)',
				}}
			></div>
			<div className='container'>
				<Heading as='h1' className='hero__title'>
					<img src='img/tamaki-charts-logo.png' alt='Tamaki Charts Logo' />
				</Heading>
				{/* <p className='hero__subtitle'>{siteConfig.tagline}</p> */}
				<div className={styles.buttons}>
					<Link
						className='button button--primary button--lg mainButton'
						to='/docs/intro'
					>
						Read the docs!
					</Link>
				</div>
				<div className={styles.buttons}>
					<Link
					    className="button button--primary button--lg mainButton"
						style={{marginTop: 1 + 'rem'}}
						to='/issues/intro'
					>
						Report an Issue
					</Link>
				</div>
			</div>
		</header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
