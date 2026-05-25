const reasons = [
  {
    title: "Your smile",
    text: "The way it changes the temperature of a room - and of me.",
  },
  {
    title: "Your kindness",
    text: "Soft, steady, and somehow always there when I need it most.",
  },
  {
    title: "The way you understand me",
    text: "Sometimes without me having to say a single word.",
  },
  {
    title: "The peace I feel with you",
    text: "Like everything finally slows down to a gentle rhythm.",
  },
  {
    title: "Ordinary moments",
    text: "You turn the smallest things into memories I want to keep.",
  },
  {
    title: "Your voice",
    text: "My favorite sound. Quietly, completely, without trying.",
  },
  {
    title: "Your heart",
    text: "Warm in a way that makes me believe in soft, good things.",
  },
  {
    title: "The way you exist in my world",
    text: "Like a window left open on a perfect spring morning.",
  },
];

const gallery = [
  {
    src: "./assets/memories/photo-01.jfif",
    caption: "My favorite kind of selfie",
    detail: "She looks effortlessly pretty here, and being beside her makes even an ordinary day feel like somewhere I belong.",
  },
  {
    src: "./assets/memories/photo-02.jfif",
    caption: "The mirror kept a soft moment",
    detail: "Her calm eyes make the whole photo gentle; she means peace to me, even when the world is loud.",
  },
  {
    src: "./assets/memories/photo-03.jfif",
    caption: "Sunlight, trees, and her smile",
    detail: "She looks so beautiful in the daylight, like the kind of person who can make a busy street feel quiet.",
  },
  {
    src: "./assets/memories/photo-04.jfif",
    caption: "Close enough to feel like home",
    detail: "There is a softness in her face here that reminds me how lucky I am to be loved by someone like her.",
  },
  {
    src: "./assets/memories/photo-05.jfif",
    caption: "A sunlit little memory",
    detail: "Even in a simple candid, she has this glow that stays with me long after the moment passes.",
  },
  {
    src: "./assets/memories/photo-06.jfif",
    caption: "Dressed beautifully, smiling softly",
    detail: "She looks graceful in a way that feels natural, and my heart feels proud just standing next to her.",
  },
  {
    src: "./assets/memories/photo-07.jfif",
    caption: "The hand I never want to let go",
    detail: "This picture means promise to me; her hand in mine feels like the safest little truth in my life.",
  },
  {
    src: "./assets/memories/photo-08.jfif",
    caption: "City noise, quiet us",
    detail: "She looks beautiful against the rush of the city, and somehow she is still the only thing I notice.",
  },
  {
    src: "./assets/memories/photo-09.jfif",
    caption: "A black-and-white kind of forever",
    detail: "Without color, her beauty still speaks clearly; she is the part of my life that never needs extra decoration.",
  },
  {
    src: "./assets/memories/photo-10.jfif",
    caption: "Her shy little glance",
    detail: "That one eye, that soft hiding, that quiet sweetness; she means tenderness to me in its purest form.",
  },
  {
    src: "./assets/memories/photo-11.jfif",
    caption: "Flowers above, her beside me",
    detail: "She looks delicate and thoughtful here, and I love how even silence feels full when she is near.",
  },
  {
    src: "./assets/memories/photo-12.jfif",
    caption: "Time stopped in our hands",
    detail: "This photo feels like a tiny vow; she is the person I want beside me through every passing hour.",
  },
  {
    src: "./assets/memories/photo-13.jfif",
    caption: "A flower tucked into a perfect day",
    detail: "She looks sweet and bright, the kind of pretty that makes a memory feel warm around the edges.",
  },
  {
    src: "./assets/memories/photo-14.jfif",
    caption: "A funny angle, a real smile",
    detail: "Even when the photo is imperfect, she makes it precious; she turns random moments into things I keep.",
  },
  {
    src: "./assets/memories/photo-15.jfif",
    caption: "Matching silliness, matching hearts",
    detail: "She looks adorable here, and this little playful moment reminds me that love can be light and easy too.",
  },
  {
    src: "./assets/memories/photo-16.jfif",
    caption: "The soft old-film feeling",
    detail: "She looks timeless in this frame, like a memory I would recognize in every version of my life.",
  },
  {
    src: "./assets/memories/photo-17.jfif",
    caption: "January kept us smiling",
    detail: "Her smile makes this photo feel warmer than the date on it; she is my favorite beginning again and again.",
  },
  {
    src: "./assets/memories/photo-18.jfif",
    caption: "A bright smile in a cozy place",
    detail: "She looks so sweet here, and every time she smiles like that, my whole day becomes easier to love.",
  },
  {
    src: "./assets/memories/photo-19.jfif",
    caption: "The clearest little sparkle",
    detail: "Her eyes hold so much warmth in this photo; she means comfort, beauty, and home all at once.",
  },
  {
    src: "./assets/memories/photo-20.jfif",
    caption: "Her hand, my happiest face",
    detail: "This one feels playful and precious; she makes me smile in ways I do not even try to hide.",
  },
  {
    src: "./assets/memories/photo-21.jfif",
    caption: "Green around us, peace between us",
    detail: "She looks elegant and calm, and being with her makes the world feel softer than it really is.",
  },
  {
    src: "./assets/memories/photo-22.jfif",
    caption: "Warm colors, warmer heart",
    detail: "She looks radiant here, and I love how her presence makes every place feel a little more alive.",
  },
  {
    src: "./assets/memories/photo-23.jfif",
    caption: "A tilted memory I still love",
    detail: "Even sideways, she is the center of the picture for me; she is what my heart keeps looking for.",
  },
  {
    src: "./assets/memories/photo-24.jfif",
    caption: "Too close, perfectly close",
    detail: "Her face fills the frame with sweetness, and it reminds me how beautiful the smallest closeness can be.",
  },
  {
    src: "./assets/memories/photo-25.jfif",
    caption: "Soft pink and a soft smile",
    detail: "She looks gentle and lovely here, like the kind of calm I want to come back to every day.",
  },
  {
    src: "./assets/memories/photo-26.jfif",
    caption: "A little celebration in one frame",
    detail: "She looks stunning in red, and this picture feels like happiness choosing to sit right next to me.",
  },
  {
    src: "./assets/memories/photo-27.jfif",
    caption: "Vintage light, modern love",
    detail: "She looks beautiful in that warm film glow, and she makes every memory feel worth saving.",
  },
  {
    src: "./assets/memories/photo-28.jfif",
    caption: "A cozy memory turned sideways",
    detail: "Her face is soft and familiar here; she means the kind of love that feels close even in a crowded room.",
  },
  {
    src: "./assets/memories/photo-29.jfif",
    caption: "Under a cloudy sky, still bright",
    detail: "She looks peaceful and pretty, and even the sky feels gentler when she is sitting beside me.",
  },
  {
    src: "./assets/memories/photo-30.jfif",
    caption: "The newest favorite memory",
    detail: "She looks so soft and beautiful here; this picture feels like one more reason my heart keeps choosing her.",
  },
];

const progress = document.querySelector(".page-progress span");
const reasonFeature = document.querySelector(".reason-feature");
const reasonDots = document.querySelector(".reason-dots");
const previousReason = document.querySelector("[data-reason-prev]");
const nextReason = document.querySelector("[data-reason-next]");
const letterModal = document.querySelector("[data-letter-modal]");
const galleryModal = document.querySelector("[data-gallery-modal]");
const galleryImage = document.querySelector("[data-gallery-image]");
const galleryCaption = document.querySelector("[data-gallery-caption]");
const memoryGrid = document.querySelector("[data-memory-grid]");
const toast = document.querySelector("[data-toast]");
const noButton = document.querySelector("[data-no]");
const flowerScene = document.querySelector("[data-flower-scene]");
const flowerYesButton = document.querySelector("[data-flower-yes]");
let activeReason = 0;

function updateProgress() {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const percent = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
  progress.style.width = `${Math.min(percent, 100)}%`;
}

function renderReason(index) {
  activeReason = (index + reasons.length) % reasons.length;
  const reason = reasons[activeReason];
  reasonFeature.innerHTML = `
    <span class="reason-count">${String(activeReason + 1).padStart(2, "0")} / ${String(reasons.length).padStart(2, "0")}</span>
    <h3>${reason.title}</h3>
    <p>${reason.text}</p>
  `;

  reasonDots.querySelectorAll("button").forEach((dot, dotIndex) => {
    dot.setAttribute("aria-current", String(dotIndex === activeReason));
  });
}

function createDots() {
  reasons.forEach((reason, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.setAttribute("aria-label", `Show reason: ${reason.title}`);
    dot.addEventListener("click", () => renderReason(index));
    reasonDots.append(dot);
  });
}

function renderGallery() {
  memoryGrid.innerHTML = gallery
    .map(
      (item, index) => `
        <figure class="memory-card">
          <button type="button" data-gallery="${index}" aria-label="Open memory: ${item.caption}">
            <img src="${item.src}" alt="${item.caption}" loading="lazy" />
          </button>
          <figcaption>
            <span>${String(index + 1).padStart(2, "0")}</span>
            <strong>${item.caption}</strong>
            <p>${item.detail}</p>
          </figcaption>
        </figure>
      `,
    )
    .join("");
}

function openModal(modal) {
  if (typeof modal.showModal === "function") {
    modal.showModal();
    return;
  }

  modal.setAttribute("open", "");
}

function closeModal(modal) {
  if (typeof modal.close === "function") {
    modal.close();
    return;
  }

  modal.removeAttribute("open");
}

function openGallery(index) {
  const item = gallery[index];
  galleryImage.src = item.src;
  galleryImage.alt = item.caption;
  galleryCaption.innerHTML = `<strong>${item.caption}</strong><span>${item.detail}</span>`;
  openModal(galleryModal);
}

function floatHeart(x, y) {
  const heart = document.createElement("span");
  heart.className = "float-heart";
  heart.textContent = "♥";
  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;
  document.body.append(heart);
  heart.addEventListener("animationend", () => heart.remove());
}

function celebrate(event) {
  const rect = event.currentTarget.getBoundingClientRect();
  const startX = rect.left + rect.width / 2;
  const startY = rect.top + rect.height / 2;

  for (let i = 0; i < 16; i += 1) {
    window.setTimeout(() => {
      floatHeart(startX + Math.random() * 80 - 40, startY + Math.random() * 30 - 15);
    }, i * 35);
  }

  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 3400);
}

function showFlowerScene() {
  flowerScene.classList.remove("show");
  window.setTimeout(() => flowerScene.classList.add("show"), 20);
  window.setTimeout(() => flowerScene.classList.remove("show"), 5200);
}

function moveNoButton() {
  const rect = noButton.getBoundingClientRect();
  const padding = 28;
  const minX = padding + rect.width / 2;
  const minY = padding + rect.height / 2;
  const maxX = Math.max(window.innerWidth - padding - rect.width / 2, minX);
  const maxY = Math.max(window.innerHeight - padding - rect.height / 2, minY);
  const nextX = Math.floor(minX + Math.random() * (maxX - minX));
  const nextY = Math.floor(minY + Math.random() * (maxY - minY));

  noButton.classList.add("is-running");
  noButton.style.setProperty("--no-x", `${nextX}px`);
  noButton.style.setProperty("--no-y", `${nextY}px`);
}

function resetNoButton() {
  noButton.classList.remove("is-running");
  noButton.style.removeProperty("--no-x");
  noButton.style.removeProperty("--no-y");
}

createDots();
renderReason(0);
renderGallery();
updateProgress();

window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("scroll", resetNoButton, { passive: true });
window.addEventListener("resize", resetNoButton);
previousReason.addEventListener("click", () => renderReason(activeReason - 1));
nextReason.addEventListener("click", () => renderReason(activeReason + 1));

document.querySelector("[data-open-letter]").addEventListener("click", () => openModal(letterModal));
document.querySelector("[data-close-letter]").addEventListener("click", () => closeModal(letterModal));
document.querySelector("[data-close-gallery]").addEventListener("click", () => closeModal(galleryModal));

memoryGrid.querySelectorAll("[data-gallery]").forEach((button) => {
  button.addEventListener("click", () => openGallery(Number(button.dataset.gallery)));
});

document.querySelectorAll("[data-yes]").forEach((button) => {
  button.addEventListener("click", celebrate);
});

flowerYesButton.addEventListener("click", showFlowerScene);

["mouseenter", "pointerdown", "focus", "touchstart"].forEach((eventName) => {
  noButton.addEventListener(eventName, (event) => {
    event.preventDefault();
    moveNoButton();
  });
});

noButton.addEventListener("click", (event) => {
  event.preventDefault();
  moveNoButton();
});

[letterModal, galleryModal].forEach((modal) => {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal(modal);
    }
  });
});
