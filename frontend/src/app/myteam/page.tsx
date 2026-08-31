"use client";
import React, { useState } from "react";

export default function MyTeam() {
  // State tracking which player bobblehead was clicked
  const [clickedPlayer, setClickedPlayer] = useState<string | null>(null);

  // Core 18 standard AFL player positions
  const defaultPositions = [
    { id: "FB", label: "Full Back", top: "13%", left: "50%" },
    { id: "BP1", label: "Back Pocket", top: "15%", left: "25%" },
    { id: "BP2", label: "Back Pocket", top: "15%", left: "75%" },
    { id: "CHB", label: "Centre Half Back", top: "27%", left: "50%" },
    { id: "HBF1", label: "Half Back Flank", top: "28%", left: "20%" },
    { id: "HBF2", label: "Half Back Flank", top: "28%", left: "80%" },
    { id: "C", label: "Centre", top: "50%", left: "50%" },
    { id: "W1", label: "Wing", top: "50%", left: "15%" },
    { id: "W2", label: "Wing", top: "50%", left: "85%" },
    { id: "CHF", label: "Centre Half Forward", top: "73%", left: "50%" },
    { id: "HFF1", label: "Half Forward Flank", top: "72%", left: "20%" },
    { id: "HFF2", label: "Half Forward Flank", top: "72%", left: "80%" },
    { id: "FF", label: "Full Forward", top: "87%", left: "50%" },
    { id: "FP1", label: "Forward Pocket", top: "85%", left: "25%" },
    { id: "FP2", label: "Forward Pocket", top: "85%", left: "75%" },
    { id: "Ruck", label: "Ruck", top: "44%", left: "42%" },
    { id: "RR", label: "Ruck Rover", top: "46%", left: "58%" },
    { id: "Rover", label: "Rover", top: "54%", left: "46%" },
  ];

  return (
    <html>
      <body>
        <div>
          <header>
            <h1>Welcome to the east coat gang app!</h1>
            <p>The frontend is running perfectly.</p>
            {clickedPlayer && (
              <div style={styles.alert}>
                Clicked bobblehead position: <strong>{clickedPlayer}</strong>
              </div>
            )}
          </header>

          <main style={styles.main}>
            {/* Simple AFL Oval Field */}
            <div style={styles.field}>
              {/* Center Square & Circle */}
              <div style={styles.centerSquare}>
                <div style={styles.centerCircle}></div>
              </div>

              {/* Top Goal Row */}
              <div style={{ ...styles.goalRow, top: 10 }}>
                <div style={styles.behindPost}></div>
                <div style={styles.goalPost}></div>
                <div style={styles.goalPost}></div>
                <div style={styles.behindPost}></div>
              </div>

              {/* Bottom Goal Row */}
              <div style={{ ...styles.goalRow, bottom: 10 }}>
                <div style={styles.behindPost}></div>
                <div style={styles.goalPost}></div>
                <div style={styles.goalPost}></div>
                <div style={styles.behindPost}></div>
              </div>

              {/* Clickable Blank Bobbleheads */}
              {defaultPositions.map((player) => (
                <button
                  key={player.id}
                  onClick={() =>
                    setClickedPlayer(`${player.label} (${player.id})`)
                  }
                  title={player.label}
                  style={{
                    ...styles.bobblehead,
                    top: player.top,
                    left: player.left,
                  }}
                >
                  {/* Blank bobblehead face icon placeholder */}
                  <div style={styles.bobbleHeadCircle}></div>
                  <div style={styles.bobbleBody}></div>
                </button>
              ))}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: "20px",
    fontFamily: "sans-serif",
    textAlign: "center",
    backgroundColor: "#f0f0f0",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  alert: {
    backgroundColor: "#2e7d32",
    color: "#ffffff",
    padding: "8px 16px",
    borderRadius: "4px",
    display: "inline-block",
    fontSize: "0.9rem",
  },
  main: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  field: {
    position: "relative",
    width: "380px",
    height: "520px",
    backgroundColor: "#357a38",
    borderRadius: "50%",
    border: "3px solid white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  centerSquare: {
    width: "100px",
    height: "100px",
    border: "2px solid rgba(255,255,255,0.4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  centerCircle: {
    width: "24px",
    height: "24px",
    border: "2px solid rgba(255,255,255,0.4)",
    borderRadius: "50%",
  },
  goalRow: {
    position: "absolute",
    display: "flex",
    gap: "14px",
  },
  goalPost: {
    width: "4px",
    height: "35px",
    backgroundColor: "white",
  },
  behindPost: {
    width: "4px",
    height: "22px",
    backgroundColor: "white",
  },
  bobblehead: {
    position: "absolute",
    transform: "translate(-50%, -50%)",
    background: "none",
    border: "none",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 0,
    width: "24px",
    height: "28px",
    outline: "none",
    transition: "transform 0.1s ease",
  },
  bobbleHeadCircle: {
    width: "14px",
    height: "14px",
    backgroundColor: "#e0e0e0",
    borderRadius: "50%",
    border: "2px solid #333",
    boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
  },
  bobbleBody: {
    width: "18px",
    height: "10px",
    backgroundColor: "#1976d2",
    borderRadius: "4px 4px 0 0",
    border: "2px solid #333",
    borderTop: "none",
    marginTop: "-1px",
  },
};
