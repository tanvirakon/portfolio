"use client";

import React, { useEffect, useRef } from "react";

export const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Initial mouse position (center)
    mouseRef.current = { x: width / 2, y: height / 2 };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Offset by scroll position if needed, but for fixed background usually clientX/Y is enough
      // If the canvas is absolute/fixed to viewport:
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    // Particle Config
    const particleCount = 80;
    const particles: Particle[] = [];
    const connectionDistance = 150;
    const interactionDistance = 200;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      baseX: number;
      baseY: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.baseX = this.x;
        this.baseY = this.y;
        this.vx = (Math.random() - 0.5) * 1.5;
        this.vy = (Math.random() - 0.5) * 1.5;
        this.size = Math.random() * 2 + 1;
        // Theme colors: Blue, Purple, White
        const colors = [
            "rgba(59, 130, 246,", // Blue-500
            "rgba(147, 51, 234,", // Purple-600
            "rgba(100, 116, 139," // Slate-500
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Mouse Interaction
        const dx = mouseRef.current.x - this.x;
        const dy = mouseRef.current.y - this.y;
        const distance = Math.sqrt(dx*dx + dy*dy);

        if (distance < interactionDistance) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (interactionDistance - distance) / interactionDistance;
            
            // Attract (Antigravity-ish / Magnetic)
            // If we want Repel, invert sign.
            // User said "moves with it", which implies attraction or following.
            // Let's do a gentle attraction so it feels like they are following the cursor.
            const strength = 0.5; // Smooth
            this.vx += forceDirectionX * force * strength;
            this.vy += forceDirectionY * force * strength; // Corrected from force * strength
        } else {
            // Add friction to return to normal speed? 
            // Or just let them float.
            // Limit speed
            const speed = Math.sqrt(this.vx*this.vx + this.vy*this.vy);
            if(speed > 2) {
                this.vx *= 0.98;
                this.vy *= 0.98;
            }
        }
      }

      draw() {
          if(!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        // Fade opacity based on theme
        ctx.fillStyle = `${this.color} 0.6)`; 
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.update();
        p.draw();

        // Connections
        for (let j = i; j < particles.length; j++) {
            const p2 = particles[j];
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const dist = Math.sqrt(dx*dx + dy*dy);

            if (dist < connectionDistance) {
                ctx.beginPath();
                // Opacity based on distance
                const opacity = 1 - dist / connectionDistance;
                ctx.strokeStyle = `rgba(150, 150, 150, ${opacity * 0.2})`; 
                ctx.lineWidth = 1;
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
            }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />;
};
