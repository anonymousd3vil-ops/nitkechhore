import { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";
import MainLayout from "../../../layout/mainLayout.jsx";
import {
  roadmap,
  topicInfo,
} from "../../../constants/codingConstants/roadmaps/backendTopicDetails.js";
import { TopicModal } from "../../../components/coding/roadmap/topicModal.jsx";
import RoadmapTitle from "../../../components/coding/roadmap/RoadmapTitle.jsx";

export default function BackendRoadmap() {
  const containerRef = useRef(null);

  const [selectedTopic, setSelectedTopic] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const detectTheme = () => {
      const html = document.documentElement;

      const dataTheme = html.getAttribute("data-theme");

      const darkThemes = [
        "dark",
        "night",
        "business",
        "coffee",
        "dracula",
        "halloween",
        "forest",
        "luxury",
        "black",
      ];

      if (dataTheme) {
        setIsDarkMode(darkThemes.includes(dataTheme));
        return;
      }

      setIsDarkMode(html.classList.contains("dark"));
    };

    detectTheme();

    const observer = new MutationObserver(() => {
      detectTheme();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme", "class"],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    let cancelled = false;

    const renderRoadmap = async () => {
      if (!containerRef.current) {
        return;
      }

      try {
        mermaid.initialize({
          startOnLoad: false,
          securityLevel: "loose",
          theme: "base",
          themeVariables: {
            babackground: isDarkMode ? "#0f172a" : "#ffffff",
            primaryColor: isDarkMode ? "#1e293b" : "#f8fafc",
            primaryTextColor: isDarkMode ? "#f8fafc" : "#0f172a",
            primaryBorderColor: isDarkMode ? "#64748b" : "#cbd5e1",
            lineColor: isDarkMode ? "#64748b" : "#94a3b8",
            secondaryColor: isDarkMode ? "#312e81" : "#eef2ff",
            tertiaryColor: isDarkMode ? "#172033" : "#f8fafc",
            clusterBkg: isDarkMode ? "#111827" : "#f8fafc",
            clusterBorder: isDarkMode ? "#334155" : "#cbd5e1",
            edgeLabelBackground: isDarkMode ? "#0f172a" : "#ffffff",
            fontSize: "13px",
          },
          flowchart: {
            useMaxWidth: false,
            htmlLabels: true,
          },
        });

        const uniqueId = `backend-roadmap-${Date.now()}`;

        const result = await mermaid.render(uniqueId, roadmap);

        if (cancelled) {
          return;
        }

        if (!containerRef.current) {
          return;
        }

        containerRef.current.innerHTML = result.svg;

        if (typeof result.bindFunctions === "function") {
          result.bindFunctions(containerRef.current);
        }

        const handleNodeClick = (event) => {
          const node = event.target.closest(".node");

          if (!node) {
            return;
          }

          const label = node.querySelector(".nodeLabel");

          if (!label) {
            return;
          }

          let nodeName = label.textContent?.trim().replace(/\s+/g, " ");

          if (!nodeName) {
            return;
          }

          console.log("Clicked Mermaid node:", nodeName);

          /*
        =================================================
        HANDLE SPECIAL LABEL MAPPINGS
        =================================================

        Some Mermaid labels are slightly different
        from the keys in topicInfo.
        */

          const topicKeyMap = {
            "OWASP Risks": "OWASP",

            "Server-Sent Events": "Server Sent Events",

            "Influx DB": "Influx DB",

            TimeScale: "TimeScale",

            "MS IIS": "MS IIS",

            "Open API Specs": "Open API Specs",

            "Cookie Based Auth": "Cookie Based Auth",

            "JSON APIs": "JSON APIs",

            "N+1 Problem": "N+1 Problem",

            "GOF Design Patterns": "GOF Design Patterns",

            "Domain Driven Design": "Domain Driven Design",

            "Test Driven Development": "Test Driven Development",

            "Monolithic Apps": "Monolithic Apps",

            "Twelve Factor Apps": "Twelve Factor Apps",

            "Basic Infrastructure Knowledge": "Basic Infrastructure Knowledge",
          };

          const topicKey = topicKeyMap[nodeName] || nodeName;

          const topic = topicInfo[topicKey];

          if (!topic) {
            console.warn("No topicInfo found for:", nodeName);

            return;
          }

          console.log("Opening topic:", topic);

          setSelectedTopic(topic);
        };

        containerRef.current.addEventListener("click", handleNodeClick);

        const nodes = containerRef.current.querySelectorAll(".node");

        nodes.forEach((node) => {
          node.style.cursor = "pointer";

          node.addEventListener("mouseenter", () => {
            node.style.opacity = "0.85";
          });

          node.addEventListener("mouseleave", () => {
            node.style.opacity = "1";
          });
        });

        return () => {
          if (containerRef.current) {
            containerRef.current.removeEventListener("click", handleNodeClick);
          }
        };
      } catch (error) {
        console.error("Failed to render Mermaid roadmap:", error);
      }
    };

    renderRoadmap();

    return () => {
      cancelled = true;

      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [isDarkMode]);

  const closeModal = () => {
    setSelectedTopic(null);
  };

  return (
    <MainLayout>
      <div
        className="
                    min-h-screen
                    bg-base-300
                    text-base-content
                    flex
                    flex-col
                    items-center
                    py-10
                    px-4
                "
      >
        <RoadmapTitle title="Backend Developer Roadmap" />

        {/* =================================================
                    ROADMAP CONTAINER
                ================================================= */}

        <div
          className="
                        w-full
                        overflow-x-auto
                        rounded-xl
                        bg-base-200
                    "
        >
          <div
            ref={containerRef}
            className="
                            mx-auto
                            flex
                            min-w-[900px]
                            justify-center
                            py-4
                        "
          />
        </div>

        {/* =================================================
                    TOPIC MODAL
                ================================================= */}

        {selectedTopic && (
          <TopicModal
            key={selectedTopic.title}
            title={selectedTopic.title}
            level={selectedTopic.level}
            description={selectedTopic.description}
            closeModal={closeModal}
          />
        )}
      </div>
    </MainLayout>
  );
}
