import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';

export default function Home() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/test');
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.titleArea}>
          <h1 className={styles.title}>
            MBTI
            <span className={styles.subtitle}>性格测试</span>
          </h1>
          <p className={styles.description}>
            探索你的性格类型，了解真实的自己
          </p>
        </div>

        <div className={styles.features}>
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>⚡</div>
            <div className={styles.featureText}>快速测试</div>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>🎯</div>
            <div className={styles.featureText}>准确分析</div>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>🔍</div>
            <div className={styles.featureText}>深入解读</div>
          </div>
        </div>

        <button 
          className={styles.startButton}
          onClick={handleStart}
        >
          开始测试
        </button>

        <div className={styles.tips}>
          <p>• 16种人格类型深度解析</p>
          <p>• 4个维度精准画像</p>
          <p>• 全方位性格特征分析</p>
        </div>
      </div>
    </div>
  );
} 
 