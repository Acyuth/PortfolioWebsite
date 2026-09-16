import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const alt = `${profile.name} — Business & Data Analytics`;
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
          justifyContent: "space-between",
          backgroundColor: "#080c16",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div style={{ width: "48px", height: "2px", backgroundColor: "#c4a35a" }} />
          <div
            style={{
              color: "#c4a35a",
              fontSize: "22px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            Business Analytics · Data Analytics
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#f3efe6",
              fontSize: "104px",
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: "-0.03em",
              textTransform: "uppercase",
            }}
          >
            Acyuth
          </div>
          <div
            style={{
              color: "#8b93a7",
              fontSize: "104px",
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: "-0.03em",
              textTransform: "uppercase",
            }}
          >
            Gopalakrishnan
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            borderTop: "1px solid #1c2433",
            paddingTop: "28px",
            color: "#8b93a7",
            fontSize: "24px",
          }}
        >
          <div>MS in Business Analytics — Carnegie Mellon University</div>
          <div>B.Tech Computer Science &amp; Engineering — VIT, Data Science</div>
        </div>
      </div>
    ),
    size,
  );
}
