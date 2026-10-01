(() => {
  const members = [
    { name: 'Engr. Nonito Molijon Jr.', image: 'nonito.jpg', role: 'Founder / CEO', about: 'Leads AC, guides project direction, manages client collaboration, oversees research and planning, and drives growth and innovation.' },
    { name: 'Ken Chester Felongco', image: 'ken.png', role: 'CTO / Lead Developer', about: 'Leads full-stack development, backend systems, databases, APIs, Firebase integration, architecture, and code quality.' },
    { name: 'Junelyn Bertudazo', image: 'Junelyn.png', role: 'Finance & HR Officer', about: 'Manages finance records, payroll, recruitment, employee documentation, attendance, and administrative coordination.' },
    { name: 'Ronnel Labata', image: 'ronnel.png', role: 'Senior Developer', about: 'Builds web and mobile apps, IoT solutions, embedded systems, hardware prototypes, and device integrations.' },
    { name: 'JannLemor Malakad', image: 'jannlemor.png', role: 'Web Developer', about: 'Specializes in web systems, backend development, databases, API integration, performance, and security.' },
    { name: 'John Paul Terania', image: 'john-paul-terania.png', role: 'UI/UX Designer', about: 'Creates user-friendly interfaces, wireframes, prototypes, visual branding, icons, and digital graphics.' },
    { name: 'Eljay', image: 'eljay.png', role: 'Frontend Developer', about: 'Builds responsive interfaces with React, Vite, Bootstrap, and JavaScript, with a focus on accessible user experiences.' },
    { name: 'Madel', image: 'madel.png', role: 'Quality Assurance', about: 'Supports responsive design, feature testing, documentation, and detail-oriented software delivery.' },
    { name: 'Nachie', image: 'nachie.png', role: 'Project Coordinator', about: 'Coordinates team communication, marketing, client support, project documentation, records, and promotions.' },
  ];
  const defaultIndex = 2;

  function mountRing() {
    const host = document.querySelector('.hero-gallery-layer');
    if (!host || host.querySelector('.home-3d-image-ring')) return Boolean(host);

    const accordion = host.querySelector('.home-accordion-gallery');
    if (accordion) accordion.remove();

    const ring = document.createElement('div');
    ring.className = 'home-3d-image-ring is-auto-rotating';
    ring.setAttribute('role', 'region');
    ring.setAttribute('aria-label', 'Team photo carousel');
    let activeIndex = defaultIndex;
    ring.style.setProperty('--ring-start', `${(360 / members.length) * activeIndex}deg`);

    const track = document.createElement('div');
    track.className = 'home-3d-image-ring-track';

    members.forEach((member, index) => {
      const card = document.createElement('button');
      card.type = 'button';
      card.className = 'home-3d-image-ring-card';
      card.setAttribute('aria-label', `Show ${member.name}'s profile`);
      card.setAttribute('aria-pressed', 'false');
      card.style.setProperty('--ring-angle', `${(360 / members.length) * index}deg`);
      card.addEventListener('click', () => {
        activeIndex = index === activeIndex ? (activeIndex + 1) % members.length : index;
        showMember(activeIndex);
      });

      const photo = document.createElement('img');
      photo.src = `./images/${member.image}`;
      photo.alt = member.name;
      photo.loading = index < 5 ? 'eager' : 'lazy';

      const label = document.createElement('span');
      label.textContent = member.name;
      card.append(photo, label);
      track.append(card);
    });

    const shade = document.createElement('div');
    shade.className = 'home-3d-image-ring-shade';
    ring.append(track, shade);
    const about = document.createElement('div');
    about.className = 'home-3d-image-ring-about';
    about.setAttribute('aria-live', 'polite');
    const role = document.createElement('span');
    role.className = 'home-3d-image-ring-role';
    const heading = document.createElement('h2');
    const description = document.createElement('p');
    about.append(role, heading, description);

    function showMember(index) {
      const member = members[index];
      role.textContent = member.role;
      heading.textContent = member.name;
      description.textContent = member.about;
      ring.style.setProperty('--ring-start', `${(360 / members.length) * index}deg`);
      track.querySelectorAll('.home-3d-image-ring-card').forEach((card, cardIndex) => {
        card.classList.toggle('is-selected', cardIndex === index);
        card.setAttribute('aria-pressed', String(cardIndex === index));
      });
    }

    ring.append(about);
    showMember(activeIndex);
    host.append(ring);
    return true;
  }

  if (!mountRing()) {
    const observer = new MutationObserver(() => {
      if (mountRing()) observer.disconnect();
    });
    observer.observe(document.getElementById('root') || document.body, { childList: true, subtree: true });
  }
})();