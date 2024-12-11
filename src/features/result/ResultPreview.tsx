import React from 'react';
import styles from './Result.module.css';

// 仅用于预览的示例数据
const previewData = {
  type: 'ENTP',
  title: '辩论家',
  traits: [
    '请先听我说，不要马上评判我的想法。不要否定我，而是要鼓励我继续思考。',
    '请认可我很有创造力，几乎对任何问题都能想出解决方法。',
    '请与我交流！给我讲讲你自己，听我说说我自己。',
    '永远不要公开贬低我的能力，也不要取笑我。在这一点上，我很容易受伤。'
  ]
};

export default function ResultPreview() {
  return (
    <div className={styles.container}>
      <div className={styles.resultCard}>
        {/* 标题部分 */}
        <div className={styles.header}>
          <h1 className={styles.type}>{previewData.type}</h1>
          <h2 className={styles.title}>{previewData.title}</h2>
        </div>

        {/* 四维度指标 */}
        <div className={styles.dimensions}>
          <div className={styles.dimensionItem}>
            <span className={styles.active}>E 外向</span>
            <span className={styles.inactive}>I 内向</span>
          </div>
          <div className={styles.dimensionItem}>
            <span className={styles.inactive}>S 实感</span>
            <span className={styles.active}>N 直觉</span>
          </div>
          <div className={styles.dimensionItem}>
            <span className={styles.active}>T 理智</span>
            <span className={styles.inactive}>F 情感</span>
          </div>
          <div className={styles.dimensionItem}>
            <span className={styles.inactive}>J 判断</span>
            <span className={styles.active}>P 理解</span>
          </div>
        </div>

        {/* 个人使用说明书 */}
        <div className={styles.manual}>
          <h3>个人使用说明书:</h3>
          <ul>
            {previewData.traits.map((trait, index) => (
              <li key={index}>◆ {trait}</li>
            ))}
          </ul>
        </div>

        {/* 稀有度 */}
        <div className={styles.rarity}>
          稀有度: 2.7%
        </div>

        {/* 重新测试按钮 */}
        <button className={styles.retakeButton}>
          重新测试
        </button>
      </div>
    </div>
  );
} 