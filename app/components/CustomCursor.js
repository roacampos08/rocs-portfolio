'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;

    if (!cursor || !cursorDot) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    // Seguir el mouse
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // El punto pequeño sigue directamente
      cursorDot.style.left = mouseX + 'px';
      cursorDot.style.top = mouseY + 'px';
    };

    // Animación suave para el círculo grande
    const animate = () => {
      // Interpolación suave (lerp)
      const speed = 0.45;
      cursorX += (mouseX - cursorX) * speed;
      cursorY += (mouseY - cursorY) * speed;

      cursor.style.left = cursorX + 'px';
      cursor.style.top = cursorY + 'px';

      requestAnimationFrame(animate);
    };

    // Efecto hover en elementos interactivos
    const handleMouseEnter = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
      cursor.style.borderColor = 'rgba(33, 150, 243, 0.8)';
    };

    const handleMouseLeave = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      cursor.style.borderColor = 'rgba(255, 255, 255, 0.5)';
    };

    // Agregar listeners
    window.addEventListener('mousemove', handleMouseMove);
    animate();

    // Detectar elementos interactivos
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Círculo grande con delay */}
      <div
        ref={cursorRef}
        className="custom-cursor fixed w-8 h-8 border-2 border-white/50 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: '0px',
          top: '0px',
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.2s ease-out, border-color 0.2s ease-out',
        }}
      />

      {/* Punto pequeño central */}
      <div
        ref={cursorDotRef}
        className="custom-cursor-dot fixed w-1 h-1 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: '0px',
          top: '0px',
          transform: 'translate(-50%, -50%)',
        }}
      />

      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>
    </>
  );
}