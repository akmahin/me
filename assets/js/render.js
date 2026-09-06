import { siteData } from './config.js';

/**
 * Renders centralized data into the DOM.
 * Eliminates hardcoding across UI templates while keeping HTML valid and SEO-friendly.
 */
export function initContentRenderer() {
  renderProfile(siteData.profile);
  renderContact(siteData.contact);
  renderSocial(siteData.social);
  renderNavigation(siteData.navigation);
  renderAbout(siteData.about);
  renderCapabilities(siteData.capabilities);
  renderExperience(siteData.experience);
  renderContactSection(siteData.contact, siteData.social);
}

/**
 * Hydrates profile details: Name, title, statement, avatar, location micro-label.
 */
function renderProfile(profile) {
  if (!profile) return;

  // Document Title & Meta Description
  if (profile.fullName && profile.title) {
    document.title = `${profile.fullName} | ${profile.title}`;
  }

  // Identity Card Name
  const nameEl = document.querySelector('.person-name');
  if (nameEl && profile.fullName) {
    nameEl.textContent = profile.fullName;
  }

  // Professional Title
  const titleEl = document.querySelector('.person-title');
  if (titleEl && profile.title) {
    titleEl.textContent = profile.title;
  }

  // Positioning Statement
  const statementEl = document.querySelector('.positioning-statement');
  if (statementEl && profile.positioningStatement) {
    statementEl.textContent = profile.positioningStatement;
  }

  // Status Badge
  const statusBadgeEl = document.querySelector('.status-badge-pill span:last-child');
  if (statusBadgeEl && profile.statusBadge) {
    statusBadgeEl.textContent = profile.statusBadge;
  }

  // Avatar Image
  const avatarEl = document.querySelector('.avatar-img');
  if (avatarEl && profile.avatar) {
    avatarEl.src = profile.avatar;
    avatarEl.alt = `Portrait of ${profile.fullName}`;
  }

  // Bottom Location Micro-Label
  const locationEl = document.querySelector('.micro-label--end');
  if (locationEl && profile.location) {
    locationEl.textContent = profile.location;
  }
}

/**
 * Hydrates direct contact channels: WhatsApp CTA, Call, Email.
 */
function renderContact(contact) {
  if (!contact) return;

  // Primary WhatsApp CTA on Glass Card
  const heroWhatsapp = document.querySelector('.cta-whatsapp');
  if (heroWhatsapp && contact.whatsappUrl) {
    heroWhatsapp.href = contact.whatsappUrl;
    const labelSpan = heroWhatsapp.querySelector('span');
    if (labelSpan && contact.whatsappCtaLabel) {
      labelSpan.textContent = contact.whatsappCtaLabel;
    }
  }

  // Secondary WhatsApp in Navigation
  const navWhatsapp = document.querySelector('.nav-action-btn--whatsapp');
  if (navWhatsapp && contact.whatsappUrl) {
    navWhatsapp.href = contact.whatsappUrl;
  }

  // Call Button in Navigation
  const callBtn = document.querySelector('.nav-action-btn[href^="tel:"]');
  if (callBtn && contact.callUrl) {
    callBtn.href = contact.callUrl;
  }

  // Email Button in Navigation
  const emailBtn = document.querySelector('.nav-action-btn[href^="mailto:"]');
  if (emailBtn && contact.emailUrl) {
    emailBtn.href = contact.emailUrl;
  }
}

/**
 * Hydrates social media profile links.
 */
function renderSocial(socialList) {
  if (!Array.isArray(socialList)) return;

  socialList.forEach((item) => {
    const selector = `.socials-container a[title="${item.label}"]`;
    const linkEl = document.querySelector(selector);
    if (linkEl && item.url) {
      linkEl.href = item.url;
      linkEl.setAttribute('aria-label', `${item.label} Profile`);
    }
  });
}

/**
 * Hydrates the large editorial navigation list from centralized config.
 */
function renderNavigation(navItems) {
  if (!Array.isArray(navItems)) return;

  const navList = document.querySelector('.nav-editorial-list');
  if (!navList) return;

  // Generate items dynamically from centralized config
  navList.innerHTML = navItems.map((item) => `
    <li class="nav-editorial-item" role="none">
      <a href="${item.href}" class="nav-editorial-link" role="menuitem">
        <span class="nav-item-num" aria-hidden="true">${item.index}</span>
        <span class="nav-item-text">${item.label}</span>
      </a>
    </li>
  `).join('');
}

/**
 * Hydrates the About section:
 * 01 - Intro narrative & closing statement
 * 02 - How I Think continuum sequence
 * 03 - Strategic Philosophy 4 pillars
 * 04 - Closing manifesto statement
 */
function renderAbout(about) {
  if (!about) return;
  const container = document.getElementById('about');
  if (!container) return;

  const { intro, howIThink, philosophy, closing } = about;

  container.innerHTML = `
    <!-- 01 — INTRO -->
    <article class="about-intro-block" aria-labelledby="about-intro-heading">
      <span class="about-eyebrow reveal-blur">${intro.eyebrow}</span>
      <h2 class="about-headline reveal-blur reveal-delay-1" id="about-intro-heading">${intro.headline}</h2>
      
      <div class="about-paragraphs">
        ${intro.paragraphs.map((p, idx) => `
          <p class="about-p reveal-blur reveal-delay-${(idx % 4) + 1}">${p}</p>
        `).join('')}
      </div>

      <div class="about-intro-statement reveal-blur reveal-delay-2">
        ${intro.closingStatement.map(line => `
          <span class="about-intro-statement-line">${line}</span>
        `).join('')}
      </div>
    </article>

    <!-- 02 — HOW I THINK -->
    <article class="about-thinking-block" aria-labelledby="about-thinking-heading">
      <span class="about-eyebrow reveal-blur">${howIThink.eyebrow}</span>
      <h2 class="about-headline reveal-blur reveal-delay-1" id="about-thinking-heading">${howIThink.headline}</h2>

      <div class="thinking-continuum" role="list">
        ${howIThink.steps.map((step, idx) => `
          <div class="thinking-station reveal-blur reveal-delay-${(idx % 4) + 1}" role="listitem">
            <div class="thinking-station-head">
              <span class="thinking-step-num">${step.step}</span>
              <h3 class="thinking-station-name">${step.name}</h3>
            </div>
            <p class="thinking-station-desc">${step.description}</p>
          </div>
        `).join('')}
      </div>
    </article>

    <!-- 03 — STRATEGIC PHILOSOPHY -->
    <article class="about-philosophy-block" aria-labelledby="about-phil-heading">
      <span class="about-eyebrow reveal-blur">${philosophy.eyebrow}</span>
      <h2 class="about-headline reveal-blur reveal-delay-1" id="about-phil-heading">${philosophy.headline}</h2>
      <p class="philosophy-subtext reveal-blur reveal-delay-2">${philosophy.note}</p>

      <div class="philosophy-grid">
        ${philosophy.principles.map((p, idx) => `
          <div class="philosophy-card reveal-blur reveal-delay-${(idx % 4) + 1}">
            <span class="philosophy-card-pillar">${p.name}</span>
            <p class="philosophy-card-quote">“${p.quote}”</p>
          </div>
        `).join('')}
      </div>
    </article>

    <!-- 04 — CLOSING STATEMENT (Manifesto) -->
    <article class="about-closing-block" aria-labelledby="about-manifesto-heading">
      <span class="about-eyebrow reveal-blur">${closing.eyebrow}</span>
      <div class="manifesto-typography" id="about-manifesto-heading">
        ${closing.lines.map((line, idx) => `
          <span class="manifesto-line reveal-blur reveal-delay-${idx + 1}">${line}</span>
        `).join('')}
      </div>
    </article>
  `;
}

/**
 * Hydrates the Capabilities section:
 * 03 - CAPABILITIES: Where strategy takes form.
 */
function renderCapabilities(capabilities) {
  if (!capabilities) return;
  const container = document.getElementById('capabilities');
  if (!container) return;

  const { eyebrow, headline, subtext, items } = capabilities;

  container.innerHTML = `
    <header class="capabilities-header">
      <span class="capabilities-eyebrow reveal-blur">${eyebrow}</span>
      <h2 class="capabilities-headline reveal-blur reveal-delay-1">${headline}</h2>
      ${subtext ? `<p class="capabilities-subtext reveal-blur reveal-delay-2">${subtext}</p>` : ''}
    </header>

    <ul class="capabilities-list" role="list">
      ${items.map((item, idx) => `
        <li class="capability-row reveal-blur reveal-delay-${(idx % 4) + 1}">
          <div class="capability-header">
            <span class="capability-index">${item.index}</span>
            <h3 class="capability-title">${item.title}</h3>
          </div>
          <p class="capability-desc">${item.description}</p>
        </li>
      `).join('')}
    </ul>
  `;
}

/**
 * Hydrates the Experience section:
 * 04 - EXPERIENCE: Where experience meets perspective.
 */
function renderExperience(experience) {
  if (!experience) return;
  const container = document.getElementById('experience');
  if (!container) return;

  const { eyebrow, headline, items } = experience;

  container.innerHTML = `
    <header class="experience-header">
      <span class="experience-eyebrow reveal-blur">${eyebrow}</span>
      <h2 class="experience-headline reveal-blur reveal-delay-1">${headline}</h2>
    </header>

    <div class="experience-timeline" role="list">
      ${items.map((item, idx) => `
        <article class="experience-item ${item.isCurrent ? 'experience-item--active' : ''} reveal-blur reveal-delay-${(idx % 4) + 1}" role="listitem">
          <div class="timeline-node ${item.isCurrent ? 'timeline-node--active' : ''}" aria-hidden="true">
            <span class="timeline-dot"></span>
            ${item.isCurrent ? '<span class="timeline-pulse-ring"></span>' : ''}
          </div>

          <div class="experience-content">
            <div class="experience-meta-bar">
              <span class="experience-period ${item.isCurrent ? 'experience-period--active' : ''}">
                ${item.isCurrent ? '<span class="active-live-dot" aria-hidden="true"></span>' : ''}
                ${item.period}
              </span>
              <span class="meta-sep" aria-hidden="true">•</span>
              <span class="experience-location">${item.location}</span>
            </div>

            <h3 class="experience-org">${item.organization}</h3>

            <div class="experience-roles">
              ${(item.roles || [item.role]).map(role => `
                <div class="experience-role-row">
                  <span class="role-accent-marker" aria-hidden="true">↳</span>
                  <span class="role-title">${role}</span>
                </div>
              `).join('')}
            </div>

            <p class="experience-desc">${item.description}</p>
          </div>
        </article>
      `).join('')}
    </div>
  `;
}

const SOCIAL_ICONS = {
  instagram: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`,
  facebook: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.6 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z"/></svg>`,
  behance: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-4.085 0-5.875-3.016-5.875-5.918 0-3.084 1.964-6.082 5.75-6.082 4.417 0 5.485 3.518 5.093 6.452h-8.084c.05 1.472.934 2.898 2.917 2.898 1.468 0 2.274-.698 2.658-1.35h2.642zm-7.976-4.5h5.333c-.055-1.122-.72-2.35-2.548-2.35-1.745 0-2.585 1.15-2.785 2.35zm-11.75-6.5h4.636c2.518 0 4.114 1.111 4.114 3.016 0 1.291-.762 2.213-1.896 2.607 1.521.439 2.386 1.584 2.386 3.195 0 2.454-2.062 3.682-4.664 3.682h-4.576v-12.5zm3.844 5.051c1.077 0 1.831-.479 1.831-1.424 0-.898-.679-1.37-1.831-1.37h-1.493v2.794h1.493zm.215 5.309c1.238 0 2.069-.538 2.069-1.579 0-1.078-.857-1.579-2.138-1.579h-1.638v3.158h1.707z"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>`
};

/**
 * Hydrates the final Contact section:
 * 05 - CONTACT: Let's make something meaningful.
 */
function renderContactSection(contact, social) {
  if (!contact) return;
  const container = document.getElementById('contact');
  if (!container) return;

  const { eyebrow, headline, supportingCopy, whatsappUrl, whatsappCtaLabel, callUrl, emailUrl, footerIdentity } = contact;

  const socialHtml = Array.isArray(social) ? social.map(item => `
    <a 
      href="${item.url}" 
      target="_blank" 
      rel="noopener noreferrer" 
      class="contact-social-btn" 
      aria-label="${item.label} Profile"
      title="${item.label}"
    >
      ${SOCIAL_ICONS[item.id] || ''}
    </a>
  `).join('') : '';

  container.innerHTML = `
    <div class="contact-container">
      <header class="contact-header">
        <span class="contact-eyebrow reveal-blur">${eyebrow}</span>
        <h2 class="contact-headline reveal-blur reveal-delay-1">${headline}</h2>
        <p class="contact-subtext reveal-blur reveal-delay-2">${supportingCopy}</p>
      </header>

      <div class="contact-glass-surface reveal-blur reveal-delay-3" id="contact-glass-surface">
        <div class="contact-glass-sheen" aria-hidden="true"></div>

        <!-- Dominant Primary Action: WhatsApp -->
        <a 
          href="${whatsappUrl}" 
          class="contact-cta-whatsapp" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Start a conversation with Abdul Kadir Mohiuddin on WhatsApp"
        >
          <svg class="whatsapp-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.42 0-2.82-.37-4.06-1.07l-.29-.17-3.12.82.83-3.04-.19-.3a8.217 8.217 0 0 1-1.26-4.48c0-4.54 3.7-8.23 8.24-8.23m4.52 11.64c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43l-.48-.01c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.78.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.3"/>
          </svg>
          <span>${whatsappCtaLabel}</span>
        </a>

        <!-- Secondary Actions: Call & Email -->
        <div class="contact-secondary-actions">
          <a href="${callUrl}" class="contact-action-btn" aria-label="Call Abdul Kadir Mohiuddin">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="15" height="15" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            <span>CALL</span>
          </a>

          <a href="${emailUrl}" class="contact-action-btn" aria-label="Email Abdul Kadir Mohiuddin">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="15" height="15" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            <span>EMAIL</span>
          </a>
        </div>

        <div class="contact-card-divider" aria-hidden="true"></div>

        <!-- Understated Social Presence -->
        <div class="contact-social-row">
          <span class="social-row-label">CONNECT</span>
          <div class="contact-social-icons">
            ${socialHtml}
          </div>
        </div>
      </div>

      <!-- Footer Identity -->
      ${footerIdentity ? `
        <footer class="contact-footer-identity reveal-blur reveal-delay-4">
          <div class="footer-identity-name">${footerIdentity.name}</div>
          <div class="footer-identity-role">${footerIdentity.title}</div>
          <div class="footer-identity-meta">${footerIdentity.location}</div>
        </footer>
      ` : ''}
    </div>
  `;
}


