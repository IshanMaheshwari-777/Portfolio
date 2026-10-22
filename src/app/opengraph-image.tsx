import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Ishan Maheshwari — Full-Stack & AI Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
          background: "#050508",
          backgroundImage:
            "radial-gradient(circle at 50% 40%, rgba(124, 58, 237, 0.25), transparent 60%)",
          color: "#F8FAFC",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            padding: "8px 24px",
            borderRadius: 9999,
            border: "1px solid rgba(124, 58, 237, 0.5)",
            background: "rgba(124, 58, 237, 0.12)",
            color: "#a78bfa",
            fontSize: 28,
            marginBottom: 32,
          }}
        >
          SDE Intern @ DegreeBaba · SDE-TA @ Newton School
        </div>
        <div style={{ display: "flex", fontSize: 96, fontWeight: 700, letterSpacing: -2 }}>
          Ishan Maheshwari
        </div>
        <div style={{ display: "flex", fontSize: 36, color: "rgba(248, 250, 252, 0.7)", marginTop: 24 }}>
          I build intelligence, then make it beautiful.
        </div>
      </div>
    ),
    { ...size }
  );
}
