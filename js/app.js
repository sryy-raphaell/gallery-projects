const projects = {
  "iot-dashboard": {
    title: "IoT Hydroponic Monitoring",
    description:
      "Web dashboard connected to ESP32 for monitoring pH, humidity and temperature.",
  },
  "anime-portfolio": {
    title: "Anime Style Portfolio Website",
    description: "Responsive starry sky themed portfolio with grid layout.",
  },
  "smart-irrigation": {
    title: "Smart Irrigation System",
    description:
      "Automated irrigation system using soil moisture sensor and ESP32.",
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
