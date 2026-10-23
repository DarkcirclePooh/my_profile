const languageLinks =
  document.querySelectorAll<HTMLAnchorElement>('[data-language]');
const sections = Array.from(
  document.querySelectorAll<HTMLElement>('[data-section]'),
);
const experiences = Array.from(
  document.querySelectorAll<HTMLElement>('[data-experience]'),
);
const navigationLinks =
  document.querySelectorAll<HTMLAnchorElement>('[data-nav]');
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');

let currentSection = '';

function updateLanguageLinks(section: string) {
  for (const link of languageLinks) {
    const url = new URL(link.href);
    url.hash = section;
    link.href = url.href;
  }
}

function updatePosition() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress =
    scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
  document.documentElement.style.setProperty(
    '--reading-progress',
    String(progress),
  );
  // Keep the original artwork completely still for visitors who reduce motion.
  const rotation = motionPreference.matches ? 0 : progress * 14;
  document.documentElement.style.setProperty(
    '--signal-rotation',
    `${rotation}deg`,
  );

  const activationLine = Math.min(window.innerHeight * 0.38, 280);
  let active = '';
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= activationLine)
      active = section.id;
  }
  if (
    window.innerHeight + window.scrollY >=
    document.documentElement.scrollHeight - 4
  ) {
    active = sections.at(-1)?.id ?? '';
  }
  if (active !== currentSection) {
    currentSection = active;
    updateLanguageLinks(active);
    for (const link of navigationLinks) {
      if (link.dataset.nav === active)
        link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
  }

  let activeExperience: HTMLElement | undefined;
  const headerBottom =
    document.querySelector('header')?.getBoundingClientRect().bottom ?? 0;
  const readingLine = headerBottom + window.innerHeight * 0.18;
  for (const experience of experiences) {
    if (experience.getBoundingClientRect().top <= readingLine) {
      activeExperience = experience;
    }
  }
  // On a narrow screen the introduction can fill most of the viewport.
  // Highlight the first visible chapter before it reaches the reading line.
  activeExperience ??= experiences.find((experience) => {
    const bounds = experience.getBoundingClientRect();
    return bounds.top < window.innerHeight && bounds.bottom > headerBottom;
  });
  for (const experience of experiences) {
    experience.classList.toggle('is-active', experience === activeExperience);
  }
}

let framePending = false;
function scheduleUpdate() {
  if (framePending) return;
  framePending = true;
  requestAnimationFrame(() => {
    updatePosition();
    framePending = false;
  });
}

window.addEventListener('scroll', scheduleUpdate, { passive: true });
window.addEventListener('resize', scheduleUpdate);
window.addEventListener('pageshow', scheduleUpdate);
motionPreference.addEventListener('change', scheduleUpdate);
window.addEventListener('hashchange', () => {
  updateLanguageLinks(window.location.hash.slice(1));
  scheduleUpdate();
});

// Set this before the first scroll event, including direct visits to a section.
updateLanguageLinks(window.location.hash.slice(1));
updatePosition();

export {};
