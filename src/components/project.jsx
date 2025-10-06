"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function ProjectsGallery() {
  const t = useTranslations("HomePage.project");

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeProjectId, setActiveProjectId] = useState(null);
  const [categories, setCategories] = useState([]);

  const BASE_URL =
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:4000/api/v1";

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(`${BASE_URL}/projects?lang=en`);
        const data = await res.json();

        if (data.success && Array.isArray(data.data)) {
          setProjects(data.data);

          const uniqueCategories = [
            "All",
            ...new Set(
              data.data.map((proj) => proj.category?.name).filter(Boolean)
            ),
          ];
          setCategories(uniqueCategories);
        }
      } catch (err) {
        console.error("Error fetching projects:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category?.name === selectedCategory);

  const handleClick = (id) => {
    if (window.innerWidth < 768) {
      setActiveProjectId(id === activeProjectId ? null : id);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[300px]">
        {/* <p>{t("loading") || "Loading projects..."}</p> */}
      </div>
    );
  }

  return (
    <section className="md:py-16 py-4 max-w-[1200px] m-auto px-4 text-right">
      {/* ===== العناوين ===== */}
      <div className="grid md:grid-cols-3 grid-cols-1">
        <div className="flex w-full text-start md:-translate-y-8 flex-col gap-2">
          <p className="mb-2">{t("title")}</p>
          <h2 className="text-3xl text-start gap-1 font-bold mb-8">
            {t("line1")}
            <span className="text-[#2B00FF]"> {t("line2")} </span>
            <br />
            {t("line3")}
          </h2>
        </div>
        <p className="text-start">{t("desc1")}</p>
        <p className="text-start">{t("desc2")}</p>
      </div>

      {/* ===== الأزرار ===== */}
      <div className="flex md:justify-center justify-around md:gap-4 gap-1 md:my-10 my-4 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`md:px-4 px-2 py-2 md:text-lg text-[11px] hover:bg-[#2B00FF] hover:text-[#fff] cursor-pointer rounded font-semibold border transition-all duration-200 ${
              selectedCategory === cat
                ? "bg-[#2B00FF] text-white"
                : "bg-white text-black border-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProjects.map((project) => {
          const isActive = activeProjectId === project.id;


          const projectLink =
            project.projectUrl && project.projectUrl.trim() !== ""
              ? project.projectUrl
              : "#";

          return (
            <Link
              key={project.id}
              href={projectLink}
              target={projectLink === "#" ? "_self" : "_blank"}
              rel="noopener noreferrer"
            >
              <div
                onClick={() => handleClick(project.id)}
                style={{ boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.5)" }}
                className={`overflow-hidden rounded-lg shadow-md group relative w-full cursor-pointer ${
                  isActive ? "md:h-[400px] h-[300px]" : "md:h-[400px] h-[300px]"
                }`}
              >
                <div className="w-full h-full overflow-hidden">
                  <Image
                    src={`${BASE_URL.replace("/api/v1", "")}${project.image}`}
                    alt={project.title}
                    width={400}
                    height={400}
                    className="w-full h-auto block object-cover transition-transform duration-[3000ms] ease-in-out group-hover:translate-y-[-150px]"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-white text-lg md:text-xl font-semibold text-center px-2">
                    {project.title}
                  </h3>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
