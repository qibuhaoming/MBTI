import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Test.module.css';

// 定义问题类型
interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    dimension: 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';
  }[];
}

// 测试题目
const questions: Question[] = [
  {
    id: 1,
    text: "在社交场合，你通常会：",
    options: [
      { text: "主动与他人交谈，享受社交", dimension: 'E' },
      { text: "更喜欢与少数人深入交流", dimension: 'I' }
    ]
  },
  {
    id: 2,
    text: "面对新信息时，你倾向于：",
    options: [
      { text: "关注具体的细节和事实", dimension: 'S' },
      { text: "思考可能性和潜在含义", dimension: 'N' }
    ]
  },
  {
    id: 3,
    text: "做决定时，你更看重：",
    options: [
      { text: "逻辑分析和客观事实", dimension: 'T' },
      { text: "个人价值观和他人感受", dimension: 'F' }
    ]
  },
  {
    id: 4,
    text: "你的生活方式更倾向于：",
    options: [
      { text: "计划和安排明确", dimension: 'J' },
      { text: "灵活随性，随遇而安", dimension: 'P' }
    ]
  }
];

export default function Test() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleAnswer = (dimension: string) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion]: dimension
    }));

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      // 计算结果
      const result = calculateResult(answers);
      navigate(`/result/${result}`);
    }
  };

  const calculateResult = (answers: Record<string, string>) => {
    const dimensions = {
      E: 0, I: 0,
      S: 0, N: 0,
      T: 0, F: 0,
      J: 0, P: 0
    };

    // 统计每个维度的选择次数
    Object.values(answers).forEach(dimension => {
      dimensions[dimension as keyof typeof dimensions]++;
    });

    // 确定每个维度的倾向
    const type = [
      dimensions.E > dimensions.I ? 'E' : 'I',
      dimensions.S > dimensions.N ? 'S' : 'N',
      dimensions.T > dimensions.F ? 'T' : 'F',
      dimensions.J > dimensions.P ? 'J' : 'P'
    ].join('');

    return type;
  };

  const question = questions[currentQuestion];

  return (
    <div className={styles.container}>
      <div className={styles.progress}>
        <div 
          className={styles.progressBar}
          style={{ width: `${(currentQuestion + 1) / questions.length * 100}%` }}
        />
      </div>

      <div className={styles.questionCard}>
        <h2 className={styles.questionText}>{question.text}</h2>
        <div className={styles.options}>
          {question.options.map((option, index) => (
            <button
              key={index}
              className={styles.optionButton}
              onClick={() => handleAnswer(option.dimension)}
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
} 