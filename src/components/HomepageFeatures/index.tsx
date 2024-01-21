import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "InfoSec",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Have you ever wanted to learn how to hack into computers or phish
        someone through email ? Perhaps you’d like to learn about best
        information security practices to protect yourself and others?
      </>
    ),
  },
  {
    title: "Web Dev",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        If you're passionate about web development and eager to gain hands-on
        experience while building new connections, this is the perfect
        opportunity for you.
      </>
    ),
  },
  {
    title: "Tutoring",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        We offer tutoring for a wide range of courses in the CS undergraduate
        course catalogue, from 1000 level to 3000!
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

export default function HomepageFeatures(): JSX.Element {
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
