import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Dr. Anshul Singhal — Oral & Maxillofacial Surgeon";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0F2A43",
          padding: "72px 80px",
          color: "#FFFFFF",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              backgroundColor: "#0F5C63",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "22px",
              fontWeight: "bold",
              color: "#FAF8F4",
            }}
          >
            AS
          </div>
          <span style={{ fontSize: "20px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#D9C7A8" }}>
            Oral & Maxillofacial Surgeon
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h1
            style={{
              fontSize: "64px",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              margin: 0,
              color: "#FFFFFF",
            }}
          >
            Dr. Anshul Singhal
          </h1>
          <p
            style={{
              fontSize: "26px",
              color: "#9BA7AE",
              margin: 0,
              maxWidth: "850px",
              lineHeight: 1.4,
            }}
          >
            Specialist surgical care for the face, mouth, and jaws. Focused on calm clarity, careful diagnosis, and patient dignity.
          </p>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid rgba(255,255,255,0.15)", paddingTop: "24px" }}>
          <span style={{ fontSize: "18px", color: "#DCEBEA" }}>
            New Delhi, India
          </span>
          <span style={{ fontSize: "16px", color: "#9BA7AE" }}>
            Consultation by appointment
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
