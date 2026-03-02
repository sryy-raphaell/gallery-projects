const projects = {
  "personal-web": {
    title: "Personal Website",
    description: "personal-web v1.1 (minor update)",
  },
  "celestial-navi": {
    title: "Celestial Navigation",
    description: `Celestial navigation is the ancient, independent practice of
            determining a vessel's position on Earth by measuring the angles
            between the horizon and celestial bodies (the Sun, Moon, stars, and
            planets) using a sextant.`,
  },
  "smart-monitoring": {
    title: "Smart Monitoring Device",
    description:
      "AESP32 based monitoring system for plants with LCD and sensors.",
  },
};

function openProject(id) {
  localStorage.setItem("selectedProject", id);
  window.location.href = "project.html";
}

function goBack() {
  window.location.href = "index.html";
}

if (document.getElementById("project-title")) {
  const id = localStorage.getItem("selectedProject");
  const project = projects[id];

  document.getElementById("project-title").innerText = project.title;
  document.getElementById("project-description").innerText =
    project.description;
}
