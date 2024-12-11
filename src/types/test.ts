export interface Question {
  id: string;
  text: string;
  options: [string, string];
  next: [string, string]; // 下一个问题的ID
}

export interface TestResult {
  type: string;  // MBTI类型
  description: string;
  traits: string[];
  strengths: string[];
  weaknesses: string[];
}

export type AnswerRecord = Record<string, 0 | 1>;  // 0代表第一个选项,1代表第二个选项 