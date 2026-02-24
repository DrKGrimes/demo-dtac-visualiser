import { useState } from "react";

const NHSBlue = "#003087";
const NHSDarkBlue = "#002266";
const NHSGreen = "#009639";
const NHSAmber = "#da6d00";
const NHSRed = "#d5281b";
const NHSGrey = "#768692";
const NHSLightGrey = "#f0f4f5";

const DTACLabel = () => {
  const [expanded, setExpanded] = useState(null);
  const [expandedItem, setExpandedItem] = useState(null);

  const product = {
    name: "Melo",
    company: "Decently Limited",
    type: "SaaS",
    version: "2025/26",
  };

  const categories = [
    {
      id: "clinical",
      label: "Clinical Safety",
      status: "pass",
      statusLabel: "Pass",
      icon: (
        <svg viewBox="0 0 64 64" fill="none" stroke={NHSBlue} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
          <circle cx="32" cy="16" r="8" />
          <path d="M20 52V44c0-6.627 5.373-12 12-12s12 5.373 12 12v8" />
          <circle cx="44" cy="48" r="8" fill="none" />
          <path d="M44 44v8M40 48h8" />
        </svg>
      ),
      items: [
        { label: "DCB0129 Compliance", value: "Yes", met: true, detail: "Decently Limited has undertaken Clinical Risk Management activities for Melo which comply with DCB0129. Documentation includes Clinical Risk Management Standard, Clinical Event & Security Incident Reporting Process, and Clinical Change Management Policy." },
        { label: "Clinical Safety Officer", value: "Named", met: true, detail: "Dr Stephen Mullin — HCPC: PYL17468, BPS: 85168. Completed NHS Digital Clinical Safety Officer training." },
        { label: "Safety Case Report", value: "Published", met: true, detail: "Clinical safety case report is available and documents identified hazards, risk assessments, and mitigations for the Melo product." },
        { label: "Hazard Log", value: "Published", met: true, detail: "A maintained hazard log accompanies the clinical safety case report, documenting all identified clinical risks and their current status." },
        { label: "MHRA Registration", value: "N/A", met: null, detail: "Not applicable — Melo falls outside the scope of UK Medical Devices Regulations 2002." },
        { label: "3rd Party Risk Managed", value: "Yes", met: true, detail: "Clinical risks associated with integrated third-party products are documented within the clinical safety case report and hazard log." },
      ],
    },
    {
      id: "data",
      label: "Data Protection",
      status: "pass",
      statusLabel: "Pass",
      icon: (
        <svg viewBox="0 0 64 64" fill="none" stroke={NHSBlue} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
          <path d="M20 28V22c0-6.627 5.373-12 12-12s12 5.373 12 12v6" />
          <rect x="16" y="28" width="32" height="24" rx="3" />
          <circle cx="32" cy="40" r="4" />
          <path d="M32 44v4" />
        </svg>
      ),
      items: [
        { label: "ICO Registration", value: "ZB388781", met: true, detail: "Registered with the Information Commissioner's Office. Reference: ZB388781. Renewal confirmed for 2025–2026." },
        { label: "Data Protection Officer", value: "Named", met: true, detail: "James Burch (hello@decently.co.uk) serves as Data Protection Officer for Decently Limited." },
        { label: "DSPT Assessment", value: "Compliant", met: true, detail: "Confirmed as compliant with the annual Data Security and Protection Toolkit (DSPT) Assessment." },
        { label: "DPIA", value: "Published", met: true, detail: "A Data Protection Impact Assessment template is provided by Decently and is available upon request. The product accesses personally identifiable and NHS-held patient data." },
        { label: "DPO Sign-off", value: "Confirmed", met: true, detail: "DPO has signed off on risk assessments, mitigations, access controls, and system security policies." },
        { label: "Data Storage", value: "UK (AWS)", met: true, detail: "UK cloud storage via AWS through Laravel Cloud. Architecture includes Laravel and Kinde authentication layers. Data Processing Agreements obtained for all third-party processors. International data processing complies with UK GDPR requirements." },
      ],
    },
    {
      id: "security",
      label: "Technical Assurance",
      status: "pass",
      statusLabel: "Pass",
      icon: (
        <svg viewBox="0 0 64 64" fill="none" stroke={NHSBlue} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
          <rect x="12" y="8" width="40" height="48" rx="3" />
          <line x1="20" y1="20" x2="44" y2="20" />
          <line x1="20" y1="28" x2="44" y2="28" />
          <line x1="20" y1="36" x2="44" y2="36" />
          <line x1="20" y1="44" x2="36" y2="44" />
          <polyline points="18,20 22,24 30,16" strokeWidth="2.5" stroke={NHSGreen} />
          <polyline points="18,28 22,32 30,24" strokeWidth="2.5" stroke={NHSGreen} />
          <polyline points="18,36 22,40 30,32" strokeWidth="2.5" stroke={NHSGreen} />
        </svg>
      ),
      items: [
        { label: "Cyber Essentials", value: "Certified", met: true, detail: "Current Cyber Essentials certification is maintained." },
        { label: "Penetration Testing", value: "Annual", met: true, detail: "Annual external penetration testing conducted by CybaVerse (31 March – 2 April 2025, reassessed 22 April 2025). No critical, high, or medium-risk vulnerabilities were identified. Cross-tenant security was found to be well implemented and robust. Overall assessment: security posture exceeds industry standards." },
        { label: "OWASP Top 10", value: "Tested", met: true, detail: "Penetration testing was based on OWASP Top 10 guidelines. No critical, high, or medium-risk vulnerabilities were identified." },
        { label: "Code Security Review", value: "Yes", met: true, detail: "Internal code review process follows a security development lifecycle with OWASP Top 10 considerations." },
        { label: "MFA (Privileged)", value: "Yes", met: true, detail: "All privileged accounts have appropriate Multi-Factor Authentication enabled." },
        { label: "Logging & Reporting", value: "Yes", met: true, detail: "API calls are recorded and logged. Code changes are dated, timestamped, and attributed to individuals." },
        { label: "Load Testing", value: "Yes", met: true, detail: "Load testing has been completed to confirm the platform can handle expected usage levels." },
      ],
    },
    {
      id: "interop",
      label: "Interoperability",
      status: "pass",
      statusLabel: "Pass",
      icon: (
        <svg viewBox="0 0 64 64" fill="none" stroke={NHSBlue} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
          <circle cx="32" cy="32" r="6" />
          <circle cx="14" cy="14" r="5" />
          <circle cx="50" cy="14" r="5" />
          <circle cx="14" cy="50" r="5" />
          <circle cx="50" cy="50" r="5" />
          <line x1="27" y1="27" x2="18" y2="18" />
          <line x1="37" y1="27" x2="46" y2="18" />
          <line x1="27" y1="37" x2="18" y2="46" />
          <line x1="37" y1="37" x2="46" y2="46" />
        </svg>
      ),
      items: [
        { label: "APIs Exposed", value: "No", met: false, detail: "API exposure is not yet implemented." },
        { label: "NHS Number Used", value: "Yes", met: true, detail: "NHS Number is used within the product, currently via manual entry rather than NHS Login." },
        { label: "NHS Login", value: "No", met: false, detail: "NHS Login integration is not yet available." },
        { label: "EHR Read/Write", value: "Planned", met: false, detail: "Electronic Health Record read/write integration is not yet available but is in development for the future roadmap." },
        { label: "Wearable Integration", value: "N/A", met: null, detail: "Wearable and device integration is not applicable to this product." },
      ],
    },
    {
      id: "usability",
      label: "Usability & Accessibility",
      status: "partial",
      statusLabel: "90%",
      icon: (
        <svg viewBox="0 0 64 64" fill="none" stroke={NHSBlue} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
          <rect x="14" y="6" width="28" height="48" rx="4" />
          <circle cx="28" cy="46" r="3" />
          <line x1="14" y1="14" x2="42" y2="14" />
          <line x1="14" y1="38" x2="42" y2="38" />
          <circle cx="50" cy="32" r="8" />
          <path d="M50 28v4h4" />
        </svg>
      ),
      items: [
        { label: "WCAG 2.1 AA", value: "Compliant", met: true, detail: "Melo is fully compliant with the Web Content Accessibility Guidelines version 2.1 AA standard. Features include browser colour, contrast, and font customisation support; zoom capability to 400% without text overflow; keyboard and speech recognition navigation; and screen reader compatibility (JAWS, NVDA, VoiceOver). Simplified language is used throughout the interface." },
        { label: "User Research", value: "Ongoing", met: true, detail: "User research is conducted throughout development and live deployment. This includes periodic PPI listening sessions via the UK Acquired Brain Injury Forum and NIHR Brain Injury MedTech Co-operative, and weekly clinician feedback sessions via video calls with co-founders, product, and development teams. Real-world product analytics are also monitored." },
        { label: "User Acceptance Testing", value: "Yes", met: true, detail: "User Acceptance Testing has been undertaken, with examples provided to demonstrate validation of the product against user requirements." },
        { label: "User Journeys Mapped", value: "Yes", met: true, detail: "User journeys have been documented and validated as part of the design and development process." },
        { label: "PPI Engagement", value: "Yes", met: true, detail: "Patient and Public Involvement engagement is conducted through periodic listening sessions via the UK Acquired Brain Injury Forum and NIHR Brain Injury MedTech Co-operative." },
      ],
    },
  ];

  const getStatusBg = (status) => {
    if (status === "pass") return NHSBlue;
    if (status === "partial") return NHSBlue;
    return NHSRed;
  };

  const getItemIcon = (met) => {
    if (met === true) return { symbol: "✓", color: NHSGreen };
    if (met === false) return { symbol: "✗", color: NHSRed };
    return { symbol: "—", color: NHSGrey };
  };

  const totalMet = categories.flatMap((c) => c.items).filter((i) => i.met === true).length;
  const totalItems = categories.flatMap((c) => c.items).filter((i) => i.met !== null).length;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#fff",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "0",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <div style={{ width: "100%", maxWidth: "900px", background: "#fff" }}>
        {/* NHS Blue Header */}
        <div
          style={{
            background: NHSBlue,
            padding: "24px 32px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                color: "#fff",
                fontSize: "32px",
                fontWeight: "700",
                lineHeight: 1.2,
              }}
            >
              Digital Technology Assessment
            </div>
          </div>
          {/* NHS-style logo area */}
          <div
            style={{
              background: "#fff",
              color: NHSBlue,
              padding: "6px 14px",
              fontWeight: "800",
              fontSize: "14px",
              letterSpacing: "0.5px",
            }}
          >
            DTAC
          </div>
        </div>

        {/* Product bar + overall outcome */}
        <div style={{ padding: "20px 32px 12px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              flexWrap: "wrap",
              gap: "8px",
            }}
          >
            <div>
              <span
                style={{
                  fontSize: "22px",
                  fontWeight: "700",
                  color: "#212b32",
                }}
              >
                {product.name}
              </span>
              <span
                style={{
                  fontSize: "16px",
                  color: NHSGrey,
                  marginLeft: "12px",
                }}
              >
                {product.company} · {product.type} ·{" "}
                <a
                  href="https://www.melo.health/dtac"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: NHSBlue,
                    textDecoration: "underline",
                    fontSize: "16px",
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  melo.health/dtac
                </a>
              </span>
            </div>
            <div
              style={{
                fontSize: "18px",
                fontWeight: "700",
                color: "#212b32",
              }}
            >
              Overall outcome:{" "}
              <span style={{ color: NHSGreen }}>Pass</span>
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: "400",
                  color: NHSGrey,
                  marginLeft: "8px",
                }}
              >
                ({totalMet}/{totalItems} criteria met)
              </span>
            </div>
          </div>
        </div>

        {/* Five category cards */}
        <div
          style={{
            padding: "8px 32px 24px",
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "12px",
          }}
        >
          {categories.map((cat) => {
            const isExpanded = expanded === cat.id;
            return (
              <div
                key={cat.id}
                onClick={() => {
                  setExpanded(isExpanded ? null : cat.id);
                  setExpandedItem(null);
                }}
                style={{
                  border: `2.5px solid ${NHSBlue}`,
                  borderRadius: "8px",
                  cursor: "pointer",
                  transition: "box-shadow 0.2s, transform 0.15s",
                  boxShadow: isExpanded
                    ? `0 0 0 2px ${NHSBlue}33, 0 4px 16px ${NHSBlue}22`
                    : "none",
                  transform: isExpanded ? "translateY(-2px)" : "none",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Icon area */}
                <div
                  style={{
                    padding: "20px 12px 12px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    flexGrow: 1,
                    minHeight: "110px",
                    background: isExpanded ? "#f0f4f5" : "#fff",
                    transition: "background 0.2s",
                  }}
                >
                  <div style={{ marginBottom: "10px" }}>{cat.icon}</div>
                  <div
                    style={{
                      fontSize: "13px",
                      fontWeight: "700",
                      color: "#212b32",
                      textAlign: "center",
                      lineHeight: 1.3,
                    }}
                  >
                    {cat.label}
                  </div>
                </div>
                {/* Status badge */}
                <div
                  style={{
                    background: getStatusBg(cat.status),
                    color: "#fff",
                    textAlign: "center",
                    padding: "8px 4px",
                    fontSize: "16px",
                    fontWeight: "700",
                    letterSpacing: "0.3px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                  }}
                >
                  {cat.statusLabel}
                  <span
                    style={{
                      fontSize: "10px",
                      opacity: 0.8,
                      transition: "transform 0.2s",
                      transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    ▼
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Expanded detail panel */}
        {expanded && (
          <div
            style={{
              margin: "0 32px 24px",
              border: `2px solid ${NHSBlue}`,
              borderRadius: "8px",
              overflow: "hidden",
              animation: "fadeIn 0.2s ease",
            }}
          >
            <div
              style={{
                background: NHSBlue,
                color: "#fff",
                padding: "12px 20px",
                fontSize: "15px",
                fontWeight: "700",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>
                {categories.find((c) => c.id === expanded)?.icon &&
                  categories.find((c) => c.id === expanded)?.label}{" "}
                — Detail
              </span>
              <span
                onClick={() => setExpanded(null)}
                style={{
                  cursor: "pointer",
                  fontSize: "12px",
                  opacity: 0.8,
                  padding: "2px 8px",
                  border: "1px solid rgba(255,255,255,0.4)",
                  borderRadius: "4px",
                }}
              >
                Close ✕
              </span>
            </div>
            <div style={{ padding: "4px 0" }}>
              {categories
                .find((c) => c.id === expanded)
                ?.items.map((item, i, arr) => {
                  const icon = getItemIcon(item.met);
                  const itemKey = `${expanded}-${i}`;
                  const isItemExpanded = expandedItem === itemKey;
                  return (
                    <div key={i}>
                      <div
                        onClick={() =>
                          setExpandedItem(isItemExpanded ? null : itemKey)
                        }
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          padding: "10px 20px",
                          background: i % 2 === 0 ? "#fff" : NHSLightGrey,
                          borderBottom:
                            !isItemExpanded && i < arr.length - 1
                              ? "1px solid #e8edee"
                              : "none",
                          cursor: item.detail ? "pointer" : "default",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "14px",
                            color: "#212b32",
                            fontWeight: "400",
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                          }}
                        >
                          {item.label}
                          {item.detail && (
                            <span
                              style={{
                                fontSize: "9px",
                                color: NHSGrey,
                                transition: "transform 0.2s",
                                transform: isItemExpanded
                                  ? "rotate(180deg)"
                                  : "rotate(0deg)",
                              }}
                            >
                              ▼
                            </span>
                          )}
                        </span>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "14px",
                              color: NHSGrey,
                              fontWeight: "600",
                            }}
                          >
                            {item.value}
                          </span>
                          <span
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: "24px",
                              height: "24px",
                              borderRadius: "50%",
                              background: icon.color + "18",
                              color: icon.color,
                              fontWeight: "900",
                              fontSize: "14px",
                            }}
                          >
                            {icon.symbol}
                          </span>
                        </div>
                      </div>
                      {isItemExpanded && item.detail && (
                        <div
                          style={{
                            padding: "8px 20px 12px 20px",
                            fontSize: "13px",
                            lineHeight: 1.6,
                            color: "#425563",
                            background: i % 2 === 0 ? "#f8fafb" : "#e8eef0",
                            borderBottom:
                              i < arr.length - 1
                                ? "1px solid #e8edee"
                                : "none",
                          }}
                        >
                          {item.detail}
                        </div>
                      )}
                    </div>
                  );
                })}
            </div>
          </div>
        )}

        {/* Footer */}
        <div
          style={{
            borderTop: `2px solid ${NHSLightGrey}`,
            padding: "16px 32px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ fontSize: "12px", color: NHSGrey, lineHeight: 1.5 }}>
            Based on NHS England DTAC framework. Self-declared by manufacturer.
            <br />
            Click any category card for line-item detail.
          </div>
          <div
            style={{
              fontSize: "11px",
              fontWeight: "700",
              color: NHSRed,
              textAlign: "center",
              padding: "4px 12px",
              border: `1px solid ${NHSRed}`,
              borderRadius: "4px",
            }}
          >
            FOR DEMONSTRATION PURPOSES ONLY
          </div>
          <div
            style={{
              fontSize: "12px",
              color: NHSGrey,
              textAlign: "right",
              lineHeight: 1.5,
            }}
          >
            Concept: Dr Keith Grimes
            <br />
            curistica.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default DTACLabel;
