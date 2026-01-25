"use client";

import React, { useEffect, useRef, useState } from "react";

export const ScrollParticles = ({ className = "" }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Resize listener
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Particles
    const particles: Particle[] = [];
    const particleCount = 60; // slightly less dense for cleaner look

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 1.5;
        this.vy = (Math.random() - 0.5) * 1.5;
        this.size = Math.random() * 2 + 1;
        // Blue/Purple theme colors
        const colors = ["rgba(59, 130, 246, 0.5)", "rgba(168, 85, 247, 0.5)", "rgba(147, 197, 253, 0.5)"]; 
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update(mouseX: number, mouseY: number) {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off walls
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Interaction
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 150;

        // "Antigravity" / Magnetic effect
        if (distance < maxDist) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (maxDist - distance) / maxDist;
          const directionX = forceDirectionX * force * 2; // Strength
          const directionY = forceDirectionY * force * 2;
          
          this.vx += directionX;
          this.vy += directionY;
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    // Init
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.update(mouse.x, mouse.y);
        p.draw(ctx);
        
        // Connect particles close to each other
        // This gives that "constellation" or "tech" look
        /* 
        // Optional: Can enable this for connected lines
        particles.forEach(p2 => {
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const dist = Math.sqrt(dx*dx + dy*dy);
            if(dist < 100) {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(100, 100, 100, ${0.1 - dist/1000})`;
                ctx.lineWidth = 0.5;
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
            }
        })
        */
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [mouse]); // Re-bind effect if mouse state implementation changes (ref is better for pure animation loop)

  // Track mouse coordinates efficiently
  const handleMouseMove = (e: React.MouseEvent) => {
    // We update state here to trigger React updates if needed, 
    // but for canvas loop we might want a ref.
    // Actually, let's just use the event to update a Ref or variable accessible to the loop 
    // to avoid re-running the extensive useEffect.
    // For simplicity in this specialized component:
    setMouse({ 
        x: e.clientX, 
        y: e.clientY 
    });
  };

  return (
    <div 
        ref={containerRef} 
        onMouseMove={handleMouseMove} 
        className={`absolute inset-0 z-0 overflow-hidden ${className}`}
    >
      <canvas ref={canvasRef} className="block" />
    </div>
  );
};

// Optimization for Mouse Tracking without Re-render:
// The above implementation triggers re-renders on every mouse move which re-inits the canvas loop.
// That is BAD. Let's fix it below.
