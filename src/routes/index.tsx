import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../features/home/Home';
import Test from '../features/test/Test';
import Result from '../features/result/Result';

// 加载状态组件
const PageLoading = () => (
  <div style={{ 
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }}>
    加载中...
  </div>
);

export default function AppRoutes() {
  return (
    <Suspense fallback={<PageLoading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/result/:type" element={<Result />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
} 