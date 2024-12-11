import { Question } from '../../types/test';
import type { AnswerRecord } from '../../types/test';

export const questions: Record<string, Question> = {
  'start': {
    id: 'start',
    text: '你奇怪吗?',
    options: ['有点', '不'],
    next: ['social', 'rules']
  },
  'social': {
    id: 'social',
    text: '社恐?',
    options: ['是', '不'],
    next: ['rational', 'difficult']
  },
  'rational': {
    id: 'rational',
    text: '理性吗?',
    options: ['是', '不是'],
    next: ['confirm', 'emotional']
  },
  'confirm': {
    id: 'confirm',
    text: '确定?',
    options: ['是', '好吧难说'],
    next: ['iron_heart', 'heavy_machine']
  },
  'iron_heart': {
    id: 'iron_heart',
    text: '铁石心肠',
    options: ['爱死了', '还好'],
    next: ['result_intj', 'result_istp']
  },
  'heavy_machine': {
    id: 'heavy_machine',
    text: '重型机械',
    options: ['爱死了', '还好'],
    next: ['result_istp', 'result_intp']
  },
  'emotional': {
    id: 'emotional',
    text: '感性吗?',
    options: ['是', '哭天喊地'],
    next: ['result_infj', 'result_infp']
  },
  'difficult': {
    id: 'difficult',
    text: '有点难相处吗?',
    options: ['是', '不'],
    next: ['astrology', 'result_entj']
  },
  'astrology': {
    id: 'astrology',
    text: '星座玄学',
    options: ['放屁', '信'],
    next: ['result_enfp', 'result_enfp']
  },
  'rules': {
    id: 'rules',
    text: '规则?',
    options: ['是用来打破的', '为了社会稳定是必须的', '不会抗拒别人就好'],
    next: ['extreme_sports', 'command', 'dating']
  },
  'extreme_sports': {
    id: 'extreme_sports',
    text: '被限运动',
    options: ['爱死了', '不喜欢'],
    next: ['result_estp', 'result_estp']
  },
  'command': {
    id: 'command',
    text: '通过大声命令执行?',
    options: ['是', '不'],
    next: ['result_estj', 'result_istj']
  },
  'dating': {
    id: 'dating',
    text: '约P?',
    options: ['可能会', '不可能!'],
    next: ['education', 'result_isfj']
  },
  'education': {
    id: 'education',
    text: '教育程度高?',
    options: ['是', '不'],
    next: ['gender_study', 'result_esfj']
  },
  'gender_study': {
    id: 'gender_study',
    text: '两性研究',
    options: ['是', '不'],
    next: ['result_enfj', 'result_enfj']
  },
  'fat_ghost': {
    id: 'fat_ghost',
    text: '我是肥小鬼',
    options: ['是', '不是'],
    next: ['quiet', 'quiet']
  },
  'quiet': {
    id: 'quiet',
    text: '安静?',
    options: ['是', '不'],
    next: ['result_isfp', 'result_esfp']
  }
};

// 结果判定逻辑
export function calculateResult(answers: AnswerRecord): string {
  const lastAnswer = Object.entries(answers).pop();
  if (!lastAnswer) return 'UNKNOWN';
  
  const [questionId, choice] = lastAnswer;
  const question = questions[questionId];
  
  // 获取下一个问题ID（即结果节点ID）
  const resultNodeId = question.next[choice];
  
  // 从结果节点ID中提取MBTI类型
  if (resultNodeId.startsWith('result_')) {
    return resultNodeId.replace('result_', '').toUpperCase();
  }
  
  return 'UNKNOWN';
} 