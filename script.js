const routeProfiles = {
  general: {
    nodes: ["ipf", "jpa", "local"]
  },
  student: {
    nodes: ["ipf", "jpa", "student"]
  },
  highschool: {
    nodes: ["ipf", "jpa", "highschool"]
  },
  company: {
    nodes: ["ipf", "jpa", "local", "company"]
  },
  para: {
    nodes: ["wppo", "jppf", "para-national", "para-local"]
  },
  pushpull: {
    nodes: ["jpff"]
  }
};

const routeButtons = [...document.querySelectorAll(".route-button")];
const diagramNodes = [...document.querySelectorAll("[data-node]")];

document.addEventListener("click", (event) => {
  const link = event.target.closest("a[href]");
  const selection = window.getSelection();
  if (!link || !selection || selection.isCollapsed || !selection.toString().trim()) return;

  const selectionTouchesLink = link.contains(selection.anchorNode) || link.contains(selection.focusNode);
  if (selectionTouchesLink) event.preventDefault();
});

function setProfile(profileName) {
  const profile = routeProfiles[profileName];
  if (!profile) return;

  routeButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.profile === profileName));
  });

  diagramNodes.forEach((node) => {
    const active = profile.nodes.includes(node.dataset.node);
    node.classList.toggle("is-active", active);
    node.classList.toggle("is-dimmed", !active);
  });

}

routeButtons.forEach((button) => {
  button.addEventListener("click", () => setProfile(button.dataset.profile));
});

document.querySelectorAll("[data-jump-profile]").forEach((node) => {
  node.addEventListener("click", () => setProfile(node.dataset.jumpProfile));
});

setProfile("general");
