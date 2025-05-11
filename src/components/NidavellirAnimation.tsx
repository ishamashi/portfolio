// components/NidavellirAnimation.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import type p5Types from "p5"; // Impor tipe p5

const NidavellirAnimation: React.FC = () => {
  const sketchRef = useRef<HTMLDivElement>(null);
  const p5InstanceRef = useRef<p5Types | null>(null); // Ref untuk menyimpan instance p5 agar bisa di-cleanup
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Tandai bahwa kita sudah di sisi klien
  }, []);

  useEffect(() => {
    // Jangan jalankan apa-apa jika belum di client, ref belum ada, atau instance p5 sudah ada
    if (!isClient || !sketchRef.current || p5InstanceRef.current) {
      return;
    }

    // Dynamic import p5.js
    import("p5")
      .then((p5Module) => {
        const P5 = p5Module.default; // P5 constructor

        const sketch = (p: p5Types) => {
          let particles: Particle[] = [];
          let texts: FloatingText[] = [];
          let lastTextSpawnTime = 0;
          const textSpawnInterval = 2500; // ms

          // Objek untuk menyimpan warna tema, diambil dari CSS Variables
          const themeColors = {
            background: "#0A0A0A", // Fallback
            anvil: "#96A3B8", // Fallback
            anvilHighlight: "#CBD5E1", // Fallback
            particle: "#60A5FA", // Fallback (accent)
            text: "#EDEDED", // Fallback (foreground)
            rune: "#60A5FA", // Fallback (accent)
          };

          // Fungsi untuk mengambil nilai variabel CSS
          function getCssVar(varName: string, fallbackColor: string): string {
            if (typeof window !== "undefined" && document.documentElement) {
              const value = getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
              return value || fallbackColor;
            }
            return fallbackColor;
          }

          p.setup = () => {
            const container = sketchRef.current;
            if (container && container.offsetWidth > 0 && container.offsetHeight > 0) {
              const canvas = p.createCanvas(container.offsetWidth, container.offsetHeight);
              canvas.parent(container);
              p.textFont("JetBrains Mono"); // Pastikan font ini dimuat global atau via @font-face

              // Update warna tema setelah p5 setup dan DOM siap
              themeColors.background = getCssVar("--background", themeColors.background);
              themeColors.anvil = getCssVar("--color-border", themeColors.anvil); // Menggunakan --color-border
              themeColors.anvilHighlight = getCssVar("--foreground", themeColors.anvilHighlight);
              themeColors.particle = getCssVar("--color-accent", themeColors.particle);
              themeColors.text = getCssVar("--foreground", themeColors.text);
              themeColors.rune = getCssVar("--color-accent", themeColors.rune);

              lastTextSpawnTime = p.millis();
              console.log("P5 Setup Complete. Container:", container.offsetWidth, "x", container.offsetHeight);
            } else {
              console.warn("P5 Setup: Container not ready or has no dimensions.", container);
            }
          };

          p.draw = () => {
            if (!p.width || !p.height) return; // Jangan gambar jika canvas belum siap

            p.background(p.color(themeColors.background)); // Gunakan p.color() untuk parsing
            const centerX = p.width / 2;
            const centerY = p.height / 2;

            // 1. Gambar Anvil Digital
            p.noStroke();
            const isHoveringCanvas = p.mouseX > 0 && p.mouseY > 0 && p.mouseX < p.width && p.mouseY < p.height;
            p.fill(isHoveringCanvas ? p.color(themeColors.anvilHighlight) : p.color(themeColors.anvil));
            p.beginShape();
            p.vertex(centerX - 50, centerY - 10);
            p.vertex(centerX - 60, centerY - 20);
            p.vertex(centerX - 60, centerY + 20);
            p.vertex(centerX - 20, centerY + 40);
            p.vertex(centerX + 20, centerY + 40);
            p.vertex(centerX + 60, centerY + 20);
            p.vertex(centerX + 60, centerY - 20);
            p.vertex(centerX + 50, centerY - 10);
            p.endShape(p.CLOSE);
            p.rect(centerX - 20, centerY + 40, 40, 15);

            // 2. Partikel
            if (isHoveringCanvas) {
              for (let i = 0; i < 2; i++) {
                particles.push(new Particle(p.mouseX, p.mouseY, centerX, centerY, p.color(themeColors.particle), p));
              }
            }
            for (let i = particles.length - 1; i >= 0; i--) {
              particles[i].update();
              particles[i].display();
              if (particles[i].isFinished()) {
                particles.splice(i, 1);
              }
            }

            // 3. Teks Mengambang
            if (p.millis() - lastTextSpawnTime > textSpawnInterval) {
              spawnRandomText(p, texts, p.color(themeColors.text));
              lastTextSpawnTime = p.millis();
            }
            for (let i = texts.length - 1; i >= 0; i--) {
              texts[i].update();
              texts[i].display();
              if (texts[i].isFinished()) {
                texts.splice(i, 1);
              }
            }

            // 4. Tulisan "SleepyHead" saat idle
            if (!isHoveringCanvas && p.frameCount % 180 < 90) {
              p.fill(p.color(themeColors.text));
              p.textSize(12);
              p.textAlign(p.CENTER, p.CENTER);
              p.text("Niðavellir_Forge: Standby // SleepyHead mode", centerX, centerY - 60);
            }

            // 5. Gambar Rune di sekitar anvil
            drawRunes(p, centerX, centerY, p.color(themeColors.rune));
          };

          p.windowResized = () => {
            const container = sketchRef.current;
            if (container && container.offsetWidth > 0 && container.offsetHeight > 0) {
              p.resizeCanvas(container.offsetWidth, container.offsetHeight);
              console.log("P5 Resized to:", container.offsetWidth, container.offsetHeight);
            } else {
              console.warn("P5 Resize: Container not ready or has no dimensions.");
            }
          };

          // --- Helper Classes & Functions ---
          class Particle {
            pos: p5Types.Vector;
            vel: p5Types.Vector;
            target: p5Types.Vector;
            lifespan: number;
            pColor: p5Types.Color;
            pInst: p5Types;
            size: number;

            constructor(x: number, y: number, tx: number, ty: number, pColor: p5Types.Color, pInst: p5Types) {
              this.pInst = pInst;
              this.pos = this.pInst.createVector(x, y);
              this.target = this.pInst.createVector(tx, ty);
              const angle = this.pInst.atan2(ty - y, tx - x);
              const speed = this.pInst.random(2, 5);
              this.vel = P5.Vector.fromAngle(angle).mult(speed); // Gunakan P5 global untuk Vector statis
              this.lifespan = 100;
              this.pColor = pColor;
              this.size = this.pInst.random(2, 5);
            }

            update() {
              this.pos.add(this.vel);
              this.lifespan -= 2;
              let force = P5.Vector.sub(this.target, this.pos);
              force.setMag(0.1);
              this.vel.add(force);
              this.vel.limit(4);
            }

            display() {
              this.pInst.noStroke();
              // Buat warna baru dengan alpha yang diubah, jangan modifikasi pColor asli
              const displayColor = this.pInst.color(this.pInst.red(this.pColor), this.pInst.green(this.pColor), this.pInst.blue(this.pColor), this.pInst.map(this.lifespan, 0, 100, 0, this.pInst.alpha(this.pColor)));
              this.pInst.fill(displayColor);
              this.pInst.ellipse(this.pos.x, this.pos.y, this.size, this.size);
            }

            isFinished() {
              return this.lifespan < 0 || P5.Vector.dist(this.pos, this.target) < 5;
            }
          }

          class FloatingText {
            text: string;
            pos: p5Types.Vector;
            vel: p5Types.Vector;
            lifespan: number = 255;
            textColor: p5Types.Color;
            pInst: p5Types;

            constructor(text: string, x: number, y: number, textColor: p5Types.Color, pInst: p5Types) {
              this.pInst = pInst;
              this.text = text;
              this.pos = this.pInst.createVector(x, y);
              this.vel = P5.Vector.random2D().mult(this.pInst.random(0.2, 0.8));
              this.textColor = textColor;
            }

            update() {
              this.pos.add(this.vel);
              this.lifespan -= 1.5;
            }

            display() {
              this.pInst.textSize(10);
              this.pInst.textAlign(this.pInst.CENTER, this.pInst.CENTER);
              const displayColor = this.pInst.color(this.pInst.red(this.textColor), this.pInst.green(this.textColor), this.pInst.blue(this.textColor), this.lifespan);
              this.pInst.fill(displayColor);
              this.pInst.text(this.text, this.pos.x, this.pos.y);
            }

            isFinished() {
              return this.lifespan < 0;
            }
          }

          function spawnRandomText(p: p5Types, textsArr: FloatingText[], textColor: p5Types.Color) {
            const infoTexts = [
              "Alias: SleepyHead",
              "Forging digital solutions...",
              "Inspired by Eitri & Brokkr",
              "Niðavellir Systems Online",
              "Runes: React, Node, TS", // Lebih singkat
              "Precision. Craft. Code.",
              "echo 'Icho Ishamashi'",
              "Dwarf-crafted Web Apps",
            ];
            const randomText = p.random(infoTexts);
            const x = p.random(p.width * 0.1, p.width * 0.9); // Jangkauan lebih luas
            const y = p.random(p.height * 0.1, p.height * 0.9);
            textsArr.push(new FloatingText(randomText, x, y, textColor, p));
          }

          function drawRunes(p: p5Types, cx: number, cy: number, runeColor: p5Types.Color) {
            const runes = ["ᚠ", "ᚢ", "ᚦ", "ᚨ", "ᚱ", "ᚲ", "ᚷ", "ᚹ"]; // Elder Futhark
            p.fill(runeColor);
            p.textSize(18); // Sedikit lebih besar
            p.textAlign(p.CENTER, p.CENTER);
            runes.forEach((rune, i) => {
              const angle = p.radians(i * (360 / runes.length) + p.frameCount * 0.05); // Rotasi lebih lambat
              const r = p.min(p.width, p.height) * 0.35; // Jarak relatif terhadap ukuran canvas
              const x = cx + r * p.cos(angle);
              const y = cy + r * p.sin(angle);
              p.text(rune, x, y);
            });
          }
        }; // Akhir dari fungsi sketch

        // Buat instance P5 hanya jika kontainer ada dan belum ada canvas di dalamnya
        if (sketchRef.current && sketchRef.current.offsetWidth > 0 && !sketchRef.current.querySelector("canvas")) {
          p5InstanceRef.current = new P5(sketch, sketchRef.current);
        } else if (sketchRef.current && sketchRef.current.offsetWidth === 0) {
          console.warn("P5 instance not created: Container has zero width.");
        }
      })
      .catch((error) => {
        console.error("Failed to load p5.js module:", error);
      });

    // Cleanup function untuk menghapus instance p5 saat komponen unmount
    return () => {
      if (p5InstanceRef.current) {
        p5InstanceRef.current.remove();
        p5InstanceRef.current = null;
        console.log("P5 Instance Removed");
      }
    };
  }, [isClient]); // Jalankan useEffect ini hanya ketika isClient berubah (sekali setelah mount)

  // Render div container. P5 akan menempelkan canvas di sini.
  // Menampilkan loader jika belum di client atau p5 belum siap (opsional)
  if (!isClient) {
    return (
      <div ref={sketchRef} className="h-full w-full flex items-center justify-center bg-surface">
        <p className="font-mono text-foreground/50 animate-pulse">Initializing Forge...</p>
      </div>
    );
  }

  return <div ref={sketchRef} className="h-full w-full bg-transparent"></div>; // bg-transparent agar background dari p5 yang terlihat
};

export default NidavellirAnimation;
