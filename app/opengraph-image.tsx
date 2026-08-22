import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const runtime = "nodejs";
export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0B1F33",
          color: "#F4F1EA",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 40, fontWeight: 700 }}>
          Norte<span style={{ color: "#B87945" }}>One</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 54,
            fontWeight: 700,
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          Transformamos desafios empresariais em soluções digitais.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 26,
            color: "#D8E1E8",
            maxWidth: 800,
          }}
        >
          Tecnologia aplicada ao que realmente importa: o seu negócio.
        </div>
      </div>
    ),
    { ...size }
  );
}
