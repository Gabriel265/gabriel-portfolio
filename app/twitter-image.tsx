import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Gabriel Kadiwa — Fullstack Developer, IT Consultant, Designer, Tutor";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0f0f17",
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 4px)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "56px 72px",
            border: "6px solid #f5f5f5",
            boxShadow: "8px 8px 0 0 #f5f5f5",
            backgroundColor: "#1a1a26",
          }}
        >
          <div style={{ color: "#4ecdc4", fontSize: 22, letterSpacing: 4, marginBottom: 20 }}>
            PLAYER 1 — PORTFOLIO
          </div>
          <div style={{ color: "#ff914d", fontSize: 64, fontWeight: 700, letterSpacing: 2 }}>
            GABRIEL KADIWA
          </div>
          <div style={{ color: "#e2e2eb", fontSize: 26, marginTop: 28, letterSpacing: 1 }}>
            Fullstack Developer · IT Consultant · Designer · Tutor
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
