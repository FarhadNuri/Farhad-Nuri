import React from 'react'

export const SectionHeader = ({ label, title, vis, children }) => {
    return (
        <>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 48, flexWrap: "wrap", gap: 16 }}>
                <div>
                    <div style={{ fontSize: 12, color: "var(--accent)", fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", marginBottom: "8" }}
                    >{label}</div>

                    <h2 style={{ fontSize: "clamp(26px,4vw,44px)", fontWeight: 800, opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(20px)", transition: "all 0.6s ease" }}>
                        <span className='grad'>{title.split(" ")[0]}</span> {title.split(" ").slice(1).join(" ")}
                    </h2>
                </div>
                {children}
            </div>
        </>
    )
}