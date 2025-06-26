
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
  color: string;
}

interface Meteor {
  x: number;
  y: number;
  vx: number;
  vy: number;
  length: number;
  opacity: number;
}

const CosmicBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const meteorsRef = useRef<Meteor[]>([]);
  const animationFrameRef = useRef<number>();
  const [supernova, setSupernova] = useState({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createStars = () => {
      const stars: Star[] = [];
      const colors = ['#ffffff', '#fbbf24', '#3b82f6', '#ec4899', '#10b981'];
      
      for (let i = 0; i < 300; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 0.5,
          opacity: Math.random() * 0.8 + 0.2,
          twinkleSpeed: Math.random() * 0.02 + 0.01,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
      
      starsRef.current = stars;
    };

    const createMeteor = () => {
      const meteor: Meteor = {
        x: Math.random() * canvas.width,
        y: -10,
        vx: (Math.random() - 0.5) * 4,
        vy: Math.random() * 3 + 2,
        length: Math.random() * 100 + 50,
        opacity: 1
      };
      meteorsRef.current.push(meteor);
    };

    const updateStars = () => {
      starsRef.current.forEach(star => {
        star.opacity += Math.sin(Date.now() * star.twinkleSpeed) * 0.01;
        star.opacity = Math.max(0.1, Math.min(1, star.opacity));
      });
    };

    const updateMeteors = () => {
      meteorsRef.current = meteorsRef.current.filter(meteor => {
        meteor.x += meteor.vx;
        meteor.y += meteor.vy;
        meteor.opacity -= 0.01;
        
        return meteor.opacity > 0 && meteor.y < canvas.height + 50;
      });
    };

    const drawStars = () => {
      starsRef.current.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = star.opacity;
        ctx.fill();
        
        // Twinkling effect
        if (star.opacity > 0.7) {
          ctx.shadowColor = star.color;
          ctx.shadowBlur = star.size * 3;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });
      ctx.globalAlpha = 1;
    };

    const drawMeteors = () => {
      meteorsRef.current.forEach(meteor => {
        const gradient = ctx.createLinearGradient(
          meteor.x, meteor.y,
          meteor.x - meteor.vx * 10, meteor.y - meteor.vy * 10
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${meteor.opacity})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(meteor.x, meteor.y);
        ctx.lineTo(meteor.x - meteor.vx * 10, meteor.y - meteor.vy * 10);
        ctx.stroke();
      });
    };

    const drawSupernova = () => {
      if (!supernova.active) return;
      
      const gradient = ctx.createRadialGradient(
        supernova.x, supernova.y, 0,
        supernova.x, supernova.y, 200
      );
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
      gradient.addColorStop(0.3, 'rgba(255, 191, 36, 0.4)');
      gradient.addColorStop(0.6, 'rgba(59, 130, 246, 0.2)');
      gradient.addColorStop(1, 'rgba(236, 72, 153, 0)');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(supernova.x, supernova.y, 200, 0, Math.PI * 2);
      ctx.fill();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      updateStars();
      updateMeteors();
      
      drawStars();
      drawMeteors();
      drawSupernova();
      
      // Random meteor creation
      if (Math.random() < 0.003) {
        createMeteor();
      }
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const handleClick = (e: MouseEvent) => {
      setSupernova({
        x: e.clientX,
        y: e.clientY,
        active: true
      });
      
      setTimeout(() => {
        setSupernova(prev => ({ ...prev, active: false }));
      }, 2000);
    };

    const handleResize = () => {
      resizeCanvas();
      createStars();
    };

    resizeCanvas();
    createStars();
    animate();

    canvas.addEventListener('click', handleClick);
    window.addEventListener('resize', handleResize);

    return () => {
      canvas.removeEventListener('click', handleClick);
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [supernova.active]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-auto z-0"
      style={{ background: 'linear-gradient(to bottom, #0f0f23, #1a1a2e, #16213e)' }}
    />
  );
};

export default CosmicBackground;
