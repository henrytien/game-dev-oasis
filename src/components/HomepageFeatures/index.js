import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '游戏开发绿洲',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        游戏开发过程中的技术分享，感谢您的阅读。
      </>
    ),
  },
  {
    title: '欢迎您分享',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        一起来分享一些有趣的事~ 可以提交到 <code>docs</code> 目录哦.
      </>
    ),
  },
  {
    title: '贡献您的力量吧~',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        欢迎您提交~
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
