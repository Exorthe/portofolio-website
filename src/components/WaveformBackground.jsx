import React, { useEffect, useRef, useState } from 'react';

export default function WaveformBackground(){
    const canvasRef = useRef(null);

    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      let animationFrameId;
      let time = 0;

      const resize = () => {
        // Set actual size in memory (scaled for retina displays)
        const dpr = window.devicePixelRatio || 1;
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        ctx.scale(dpr, dpr);
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;
      };

      window.addEventListener('resize', resize);
      resize();

      const render = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        ctx.clearRect(0, 0, width, height);
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';

        const centerY = height / 2;
        const numLines = 4; // Lapisan gelombang untuk efek organik/holografis

        for (let i = 0; i < numLines; i++) {
          ctx.beginPath();

          // Menggunakan warna Indigo/Ethereal Kamitsubaki/KAFU (#6366F1)
          const opacity = 0.15 + (i * 0.1);
          ctx.strokeStyle = `rgba(99, 102, 241, ${opacity})`;
          ctx.lineWidth = i === 0 ? 3 : 1.5; // Garis utama lebih tebal

          for (let x = 0; x < width; x += 3) {
            // Gelombang lambat lebar
            const wave1 = Math.sin(x * 0.002 + time + (i * 0.2)) * 60;
            // Gelombang cepat medium
            const wave2 = Math.sin(x * 0.005 - time * 1.5 + (i * 0.1)) * 30;

            // Gelombang "Husky" - merepresentasikan tekstur suara KAFU yang sedikit raspy
            const huskyTexture = Math.sin(x * 0.05 + time * 3) * 3;

            // Gelombang "breathing"
            const wave3 = Math.sin(x * 0.001 + time * 0.5) * 40;

            // Damping agar pinggiran layar meredam dengan sangat halus
            const distanceToCenter = Math.abs(x - width / 2);
            const damping = Math.max(0, 1 - Math.pow(distanceToCenter / (width / 1.2), 2));

            const y = centerY + (wave1 + wave2 + wave3 + huskyTexture) * damping;

            if (x === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          }
          ctx.stroke();
        }

        time += 0.015;
        animationFrameId = requestAnimationFrame(render);
      };

      render();

      return () => {
        window.removeEventListener('resize', resize);
        cancelAnimationFrame(animationFrameId);
      };
    }, []);

    return (
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none mix-blend-screen"
        style={{ opacity: 0.7 }}
      />
    );
}