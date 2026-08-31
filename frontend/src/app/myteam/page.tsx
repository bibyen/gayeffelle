import React from "react";

export default function MyTeam() {
  return (
    <html>
      <body>
        <div style={styles.container}>
          <h1>Woohoo!</h1>
          <p>this is your team</p>

          {/* Simple AFL Oval Field */}
          <div style={styles.field}>
            <div style={styles.centerSquare}>
              <div style={styles.centerCircle}></div>
            </div>
            <div style={{ ...styles.goalRow, top: 10 }}>
              <div style={styles.behindPost}></div>
              <div style={styles.goalPost}></div>
              <div style={styles.goalPost}></div>
              <div style={styles.behindPost}></div>
            </div>
            <div style={{ ...styles.goalRow, bottom: 10 }}>
              <div style={styles.behindPost}></div>
              <div style={styles.goalPost}></div>
              <div style={styles.goalPost}></div>
              <div style={styles.behindPost}></div>
            </div>
          </div>
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
  field: {
    position: "relative",
    width: "300px",
    height: "400px",
    backgroundColor: "#357a38",
    borderRadius: "50%",
    border: "3px solid white",
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  centerSquare: {
    width: "80px",
    height: "80px",
    border: "2px solid rgba(255,255,255,0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  centerCircle: {
    width: "20px",
    height: "20px",
    border: "2px solid rgba(255,255,255,0.6)",
    borderRadius: "50%",
  },
  goalRow: {
    position: "absolute",
    display: "flex",
    gap: "12px",
  },
  goalPost: {
    width: "4px",
    height: "30px",
    backgroundColor: "white",
  },
  behindPost: {
    width: "4px",
    height: "20px",
    backgroundColor: "white",
  },
};
