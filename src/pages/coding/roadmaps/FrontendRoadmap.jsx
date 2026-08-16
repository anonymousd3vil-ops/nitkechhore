import { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";
import MainLayout from "../../../layout/mainLayout.jsx";
import { TOPIC_DETAILS, CHART_DEFINITION } from "../../../constants/codingConstants/roadmaps/frontendTopicDetails.js";
import { TopicModal } from "../../../components/coding/roadmap/topicModal.jsx";
import RoadmapTitle from "../../../components/coding/roadmap/RoadmapTitle.jsx";

export default function FrontendRoadmap() {
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

    window.onRoadmapClick = (nodeId) => {
      console.log("ROADMAP NODE CLICKED:", nodeId);

      const topic = TOPIC_DETAILS[nodeId];

      if (!topic) {
        console.warn("No topic found for node:", nodeId);
        return;
      }

      setSelectedTopic(topic);
    };

    const renderRoadmap = async () => {
      if (!containerRef.current) {
        return;
      }

      try {
        mermaid.initialize({
          startOnLoad: false,
          // REQUIRED FOR CLICK EVENTS
          securityLevel: "loose",
          theme: "base",
          themeVariables: {
            background: isDarkMode ? "#0f172a" : "#ffffff",
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

        const uniqueId = `frontend-roadmap-${Date.now()}`;

        const result = await mermaid.render(uniqueId, CHART_DEFINITION);

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

        const nodes = containerRef.current.querySelectorAll(".node");

        nodes.forEach((node) => {
          node.style.cursor = "pointer";
        });

        console.log("Mermaid roadmap rendered successfully.");
      } catch (error) {
        console.error("Failed to render Mermaid roadmap:", error);
      }
    };

    renderRoadmap();

    return () => {
		cancelled = true;

		delete window.onRoadmapClick;

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
    	<div className="min-h-screen bg-base-300 text-base-content flex flex-col items-center py-10 px-4">
			<RoadmapTitle title={'Frontend Developer Roadmap'}/>

			<div className="card w-full max-w-6xl bg-base-100 shadow-2xl border border-base-200">
			<div className="card-body p-4 sm:p-8">
				<div className="w-full overflow-x-auto">
				<div
					ref={containerRef}
					className=" w-full flex min-w-187.5 py-4"
				/>
				</div>
			</div>
			</div>

			{selectedTopic && (
			<TopicModal
				key={selectedTopic.title}
				title={selectedTopic.title}
				level={selectedTopic.level}
				closeModal={closeModal}
				description={selectedTopic.description}
			/>
			)}
		</div>
    </MainLayout>
  );
}
