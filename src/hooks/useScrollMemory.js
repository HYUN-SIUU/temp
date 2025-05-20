import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const scrollPositions = {};

export default function useScrollMemory() {
  const location = useLocation();

  // 페이지 떠나기 전에 현재 위치 저장
  useEffect(() => {
    return () => {
      scrollPositions[location.pathname] = window.scrollY;
    };
  }, [location.pathname]);

  // 새 페이지 진입하면 이전 위치 복원
  useEffect(() => {
    const y = scrollPositions[location.pathname] || 0;
    window.scrollTo(0, y);
  }, [location.pathname]);
}
