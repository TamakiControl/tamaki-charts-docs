import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Ignition Focused',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        The Tamaki Charts Module is built with Ignition in mind.
        It plugs directly in and lets you manage all configuration using Ignition's built-in tools. 
      </>
    ),
  },
  {
    title: 'Highly Extensible',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Built with extensibility in mind, our module allows users to easily customize and extend the
        functionality of Apache eCharts within Ignition Perspective.
      </>
    ),
  },
  {
    title: 'Powered by Apache eCharts',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Leveraging the power and flexibility of Apache eCharts, our module offers
        advanced charting capabilities directly within Ignition Perspective.
        Users benefit from the rich set of features and functionalities that Apache eCharts provides,
        including interactive charts, dynamic data updates, and customizable styling options.
        This integration ensures that Ignition users can enjoy the benefits of Apache eCharts
        without having to switch platforms, making it a powerful tool for data visualization and analysis.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
