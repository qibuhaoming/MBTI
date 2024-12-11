import React from 'react';
import { useParams } from 'react-router-dom';
import { personalityTraits, PersonalityType } from './personality-traits';
import styles from './Result.module.css';

export default function Result() {
  const { type } = useParams<{ type: string }>();
  const personality = type ? personalityTraits[type as PersonalityType] : null;

  if (!personality || !type) {
    return <div>未知的性格类型</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* 左侧：标题和口头禅 */}
        <div className={styles.leftSection}>
          <div className={styles.titleArea}>
            <h1 className={styles.mbtiType}>{type}</h1>
            <h2 className={styles.title}>{personality.title}</h2>
          </div>
          <div className={styles.quoteArea}>
            <div className={styles.quote}>"{personality.catchPhrase}"</div>
          </div>
        </div>

        {/* 右侧：特征描述 */}
        <div className={styles.rightSection}>
          {/* 核心特点 */}
          <div className={styles.traitsArea}>
            <h3 className={styles.sectionTitle}>核心特点</h3>
            <div className={styles.traitsList}>
              {personality.coreTraits.map((trait, index) => (
                <div key={index} className={styles.traitItem}>
                  {trait}
                </div>
              ))}
            </div>
          </div>

          {/* 优势和弱点 */}
          <div className={styles.strengthsWeaknesses}>
            <div className={styles.column}>
              <h3 className={styles.sectionTitle}>优势</h3>
              <ul className={styles.list}>
                {personality.strengths.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className={styles.column}>
              <h3 className={styles.sectionTitle}>弱点</h3>
              <ul className={styles.list}>
                {personality.weaknesses.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* 性格描述 */}
          <div className={styles.description}>
            {personality.description}
          </div>
        </div>
      </div>
    </div>
  );
} 