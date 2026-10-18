/**
 * ==========================================================================
 * VANSHIKA BANSAL — Product Design Portfolio Client Experience
 * Lightweight, accessible, and fast for hiring managers & design leads
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // ------------------------------------------------------------------------
  // 1. Toast Notification Utility
  // ------------------------------------------------------------------------
  const toastContainer = document.getElementById('toastContainer');

  function showToast(message) {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast-item';
    toast.style.cssText = `
      background: #181d2e;
      border: 1px solid #6366f1;
      padding: 0.75rem 1.25rem;
      border-radius: 10px;
      color: #ffffff;
      font-size: 0.88rem;
      font-weight: 500;
      box-shadow: 0 10px 30px rgba(0,0,0,0.6);
      display: flex;
      align-items: center;
      gap: 0.5rem;
    `;
    toast.innerHTML = `<span>✓</span> <span>${message}</span>`;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(8px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  }

  // ------------------------------------------------------------------------
  // 2. 1-Click Email Copy Handlers
  // ------------------------------------------------------------------------
  const emailBtns = document.querySelectorAll('.copy-email-btn');
  emailBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = 'vanshikabansal887@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast('Email copied: vanshikabansal887@gmail.com');
      });
    });
  });

  // ------------------------------------------------------------------------
  // 3. Category Filter Tabs
  // ------------------------------------------------------------------------
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.case-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterCategory = btn.getAttribute('data-filter');

      projectCards.forEach((card) => {
        const cardCategory = card.getAttribute('data-category');
        if (filterCategory === 'all' || cardCategory === filterCategory) {
          card.style.display = card.classList.contains('featured-wide') && window.innerWidth > 1024 ? 'grid' : 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ------------------------------------------------------------------------
  // 4. In-Depth Case Study Reader Data (Curated for Recruiters)
  // ------------------------------------------------------------------------
  const caseStudies = {
    medmitra: {
      categoryTag: 'Healthcare &bull; Accessibility &bull; India',
      title: 'MedMitra — Medication Adherence for Elderly & Caregivers',
      oneLiner: 'A dual-sided healthcare ecosystem solving medication errors for senior patients and easing anxiety for family caregivers.',
      role: 'Lead UX / UI Designer',
      tools: 'Figma, FigJam, Research Interviews',
      platforms: 'Android &bull; iOS Mobile',
      keyMetric: '56px Minimum Targets',
      problem: 'According to WHO data, ~50% of patients with chronic illnesses fail to adhere to long-term medication. In India, seniors taking 5+ daily pills face tiny English-only text, confusing regimens, and notification blindness, while adult children living in other cities resort to nagging "Maa, dawai li?" calls.',
      personas: '<strong>Savitri Devi (68, Lucknow, Patient):</strong> Retired teacher with diabetes and hypertension. Struggles with small typography, fears taking the wrong tablet, wants dignity and independence.<br><br><strong>Neha (34, Bengaluru, Caregiver):</strong> Software engineer daughter who calls daily but worries constantly during work meetings. Needs passive reassurance without invading her mother\'s autonomy.',
      solution: '<strong>01. One Screen, One Action:</strong> The patient app is intentionally quiet. The next upcoming dose is the sole hero with a giant "Le li ✓" confirmation button.<br><strong>02. Hinglish Microcopy:</strong> Replaced clinical jargon with warm natural phrasing ("Dawai ka time!", "Khaane ke baad").<br><strong>03. Strip Camera Scanner:</strong> Eliminates tedious medication name typing by auto-filling forms from strip packaging.<br><strong>04. 30-Minute Caregiver Escalation:</strong> Caregiver is only nudged if an urgent dose remains unconfirmed 30 minutes past the scheduled window, enabling one-tap calls.',
      screens: [
        { src: 'assets/projects/medmitra_p1.jpg', caption: '01. Overview: Patient reminder card with "Le li ✓" button' },
        { src: 'assets/projects/medmitra_p3.jpg', caption: '02. User Research: Savitri Devi (68) & Neha (34) Personas' },
        { src: 'assets/projects/medmitra_p4.jpg', caption: '03. Insights to Design Principles: Large by default, consent-first' },
        { src: 'assets/projects/medmitra_p5.jpg', caption: '04. User Flows: Setup loop, daily dose, and missed-dose escalation' },
        { src: 'assets/projects/medmitra_p7.jpg', caption: '05. High-Fi Patient App: Home, full-screen alert, strip scanner' },
        { src: 'assets/projects/medmitra_p8.jpg', caption: '06. High-Fi Caregiver App: Adherence streak, weekly report, stock' },
        { src: 'assets/projects/medmitra_p9.jpg', caption: '07. Design System: Teal 700, Amber 500, Red 600, accessible tokens' },
        { src: 'assets/projects/medmitra_p10.jpg', caption: '08. Key Design Decisions & Trade-offs considered' }
      ]
    },
    medlog: {
      categoryTag: 'Clinical Education &bull; HealthTech &bull; Logbook',
      title: 'MedLog — Clinical Fieldnotes & Competency Tracker',
      oneLiner: 'Pocket ward-round case logger with voice-to-text, competency progress metrics, and app-free QR supervisor sign-offs.',
      role: 'Product Designer (0-to-1)',
      tools: 'Figma Variables, FigJam, iOS HIG',
      platforms: 'Mobile App &bull; Web App',
      keyMetric: '30 Sec Case Capture',
      problem: 'Medical students on hospital surgical rotations face intense cognitive overload. Paper logbooks are easily damaged, clinical insights fade from memory hours after ward rounds, and physically chasing senior surgeons for paper sign-offs is exhausting.',
      personas: '<strong>Clinical Medical Student (Surgery Rotation, Wk 4):</strong> Needs to log observed appendicectomies and suturing before forgetting specific vitals and pain chronologies.<br><br><strong>Attending Surgeon (Dr. Mira Shah, Reviewer):</strong> Time-starved hospital consultant who does not want to install another clunky mobile app just to approve student competencies.',
      solution: '<strong>01. 30-Second Voice Logger:</strong> Tap-to-speak capture with medical templates, pre-filled vitals, and privacy de-identification.<br><strong>02. Competency Architecture:</strong> Real-time progress tracker measuring 28/36 required competencies (hands-on vs observed).<br><strong>03. OSCE Active Recall:</strong> Automatically converts logged cases into spaced-repetition viva flashcards with an "OSCE Examiner Lens".<br><strong>04. A Scan, A Sign-off:</strong> Student displays an encrypted QR code. The supervisor scans it on their own phone with 0 app installs required and signs off digitally.',
      screens: [
        { src: 'assets/projects/medlog_mobile_p1.jpg', caption: 'Mobile 4-Pillar Workflow: Capture, Progress, Recall, Sign-off' },
        { src: 'assets/projects/medlog_capture.jpg', caption: '01. Voice-to-Text Case Logger with auto-save & vitals' },
        { src: 'assets/projects/medlog_progress.jpg', caption: '02. Field Record: Rotation competency checklists' },
        { src: 'assets/projects/medlog_recall.jpg', caption: '03. Active Recall: Spaced repetition viva preparation' },
        { src: 'assets/projects/medlog_signoff.jpg', caption: '04. Instant QR Supervisor Review & Digital Signature' },
        { src: 'assets/projects/medlog_web_p1.jpg', caption: 'Desktop Web App Mode for hospital review' }
      ]
    },
    puranikitaab: {
      categoryTag: 'Campus Marketplace &bull; Peer-to-Peer &bull; Education',
      title: 'Purani Kitaab — P2P Campus Textbook Exchange',
      oneLiner: 'A campus-gated textbook exchange enabling university students to trade reference books at 62% savings with safe in-person meetups.',
      role: 'End-to-End Product Designer',
      tools: 'Figma, User Flows, Wireframing',
      platforms: 'Responsive Web &bull; Mobile',
      keyMetric: '62% Average Savings',
      problem: 'Engineering, Medical, and Law reference textbooks (e.g. B.S. Grewal, Gray\'s Anatomy) cost thousands of rupees each semester. Graduating seniors abandon them in hostel rooms, while juniors pay full retail price. Online marketplaces have high fraud rates and courier costs.',
      personas: '<strong>Buyer (Junior Student):</strong> Needs specific semester editions without spending an entire month\'s allowance.<br><br><strong>Seller (Senior Student):</strong> Wants to declutter hostel bookshelves and make instant cash without courier hassles.',
      solution: '<strong>01. College Email Verification (.edu.in):</strong> Eliminates scammers by restricting access exclusively to verified students.<br><strong>02. 4-Tier Condition Grading:</strong> Objective grades (A - Jaisi nayi, B - Achhi, C - Chalega, D - Ghisi hui) paired with transparent savings percentages.<br><strong>03. Campus Map Meetup Route:</strong> Built-in walking route map showing walking distances (e.g. 4 mins to Library steps) and a 4-digit OTP exchange ticket.<br><strong>04. Meri Almari Seller Hub:</strong> Visual dashboard tracking total student earnings and pending campus meetup requests.',
      screens: [
        { src: 'assets/projects/puranikitaab_p1.jpg', caption: '01. Homepage: Branch shelf selector & featured textbook drops' },
        { src: 'assets/projects/puranikitaab_p2.jpg', caption: '02. Kitaab List Karo: Condition grading & price recommendation slider' },
        { src: 'assets/projects/puranikitaab_p3.jpg', caption: '03. Campus Map: Meetup route to Library steps & OTP ticket' },
        { src: 'assets/projects/puranikitaab_p4.jpg', caption: '04. Filtered Catalog: Condition badges & campus distance' },
        { src: 'assets/projects/puranikitaab_p5.jpg', caption: '05. Meri Almari: Monthly earnings analytics & meetup requests' },
        { src: 'assets/projects/puranikitaab_p6.jpg', caption: '06. Book Detail Page: Condition report with seller photo evidence' },
        { src: 'assets/projects/puranikitaab_p7.jpg', caption: '07. Library Card Onboarding: Student domain verification' }
      ]
    },
    whirlpool: {
      categoryTag: 'Enterprise E-Commerce &bull; Design Systems',
      title: 'Whirlpool — E-Commerce Redesign & Edge-Case Architecture',
      oneLiner: 'Conversion-centered redesign of an enterprise appliance storefront, architected for complex logistics and edge cases.',
      role: 'UI/UX & Systems Designer',
      tools: 'Figma Design System, Wireframing',
      platforms: 'Responsive Web (Desktop &bull; Mobile)',
      keyMetric: '8 System States',
      problem: 'High-ticket home appliances have high abandonment rates online due to freight logistics uncertainty, abrupt out-of-stock hurdles, and unintuitive search filters.',
      personas: '<strong>Homeowner (Renovating Kitchen):</strong> Needs exact counter-depth refrigerator dimensions and guaranteed freight delivery date before paying $2,500.',
      solution: '<strong>01. Out-of-Stock Recovery:</strong> Unserviceable PDPs don\'t hit a dead end; they offer restock email alerts + immediate in-stock model alternatives.<br><strong>02. Postcode Delivery Validation in Checkout:</strong> Non-serviceable ZIP codes prompt graceful resolution without losing customer form data or payment details.<br><strong>03. Complete State System:</strong> Designed high-fidelity skeleton loaders, zero-result search recoveries, empty cart recommendations, and network error screens.',
      screens: [
        { src: 'assets/projects/whirlpool_homepage.jpg', caption: '01. Storefront Homepage: Appliance categories & seasonal highlights' },
        { src: 'assets/projects/whirlpool_plp.jpg', caption: '02. Product Listing Page (PLP): Smart filtering & stock availability' },
        { src: 'assets/projects/whirlpool_pdp.jpg', caption: '03. Out-of-Stock PDP: Restock alert form & in-stock model alternatives' },
        { src: 'assets/projects/whirlpool_checkout.jpg', caption: '04. Multi-Step Checkout: Freight delivery address validation' },
        { src: 'assets/projects/whirlpool_cart.jpg', caption: '05. Empty Cart State: Curated appliance recommendations' },
        { src: 'assets/projects/whirlpool_no_matches.jpg', caption: '06. Zero-Search Results: Filter reset chips & query suggestions' },
        { src: 'assets/projects/whirlpool_loading.jpg', caption: '07. High-Fidelity Skeleton Loader during API fetch' },
        { src: 'assets/projects/whirlpool_error.jpg', caption: '08. Network Connection Error recovery state' }
      ]
    },
    civicly: {
      categoryTag: 'Civic Tech &bull; Smart Cities &bull; GovTech',
      title: 'Civicly — Hyperlocal Civic Issue Reporting',
      oneLiner: 'Map-based citizen reporting platform transforming bureaucratic opacity into transparent neighborhood repairs.',
      role: 'Product Designer',
      tools: 'Figma, Mapbox UI, Design Systems',
      platforms: 'Web Dashboard &bull; Mobile',
      keyMetric: '92% Resolution Rate',
      problem: 'Urban residents who encounter broken streetlights, overflowing garbage bins, or dangerous potholes face opaque municipal hotlines with zero accountability.',
      personas: '<strong>South Delhi Resident:</strong> Wants streetlights fixed on their walking route without filing endless paper complaints.<br><br><strong>Municipal Cell Supervisor:</strong> Needs prioritized, GPS-tagged issue reports with verified resident upvotes.',
      solution: '<strong>01. Spatial Reporting Tool:</strong> Pinpoint issue locations on a live map with photo verification and category tags.<br><strong>02. Transparent Resolution Timeline:</strong> Residents watch the issue move from submission to municipal assignment and field technician dispatch.<br><strong>03. Community Upvoting:</strong> "I have the same issue" button aggregates community urgency without duplicate ticket spam.',
      screens: [
        { src: 'assets/projects/civicly_p1.jpg', caption: '01. Overview Dashboard: Live map, score (84), and recent reports' },
        { src: 'assets/projects/civicly_p2.jpg', caption: '02. Issue Reporting Flow: Category chips, photo drop & preview' },
        { src: 'assets/projects/civicly_p3.jpg', caption: '03. Interactive Area Map: Categorized pins & nearby issues' },
        { src: 'assets/projects/civicly_p4.jpg', caption: '04. Issue Details: 65% progress timeline & community support' },
        { src: 'assets/projects/civicly_p5.jpg', caption: '05. My Reports Tracker: Status percentage bars' },
        { src: 'assets/projects/civicly_p7.jpg', caption: '06. Neighbourhood Impact: Monthly resolution rate reports' }
      ]
    },
    unimate: {
      categoryTag: 'Campus Community &bull; Gen-Z &bull; Networking',
      title: 'UniMate — Campus Builder Matching & Hackathons',
      oneLiner: 'High-contrast mobile platform connecting student developers, designers, and creators for college hackathons.',
      role: 'Mobile Product Designer',
      tools: 'Figma, Mobile Interaction Specs',
      platforms: 'iOS &bull; Android Mobile',
      keyMetric: '3-in-1 Platform',
      problem: 'University hackathons fail to launch exciting projects because finding technical co-builders is fragmented across noisy campus WhatsApp groups.',
      personas: '<strong>Student Developer (IIT Delhi, 3rd Year):</strong> Building an AI climate app, needs a dedicated UI/UX designer and backend partner for HackIIT.',
      solution: '<strong>01. Swipeable Builder Cards:</strong> View mutual campus clubs, tech stacks (React, Node, UI/UX), and project ambitions.<br><strong>02. The Build Board:</strong> Side-project showcase feed where peers like and comment on ongoing builds.<br><strong>03. On the Calendar:</strong> 1-tap RSVP for campus hackathons and developer workshops with countdown timers.',
      screens: [
        { src: 'assets/projects/unimate_showcase.jpg', caption: 'Full 3-Screen Layout: Discovery, Build Board, Calendar' },
        { src: 'assets/projects/unimate_find_people.jpg', caption: '01. Find Your People: Swipeable profile card (Aanya Mehta)' },
        { src: 'assets/projects/unimate_build_board.jpg', caption: '02. The Build Board: Student side-project feed' },
        { src: 'assets/projects/unimate_calendar.jpg', caption: '03. On the Calendar: HackIIT 26 & AI workshops' }
      ]
    },
    jalsetu: {
      categoryTag: 'On-Demand Utilities &bull; Logistics &bull; Quality',
      title: 'JalSetu — Water Tanker Booking & Live GPS Tracking',
      oneLiner: 'On-demand water tanker booking for Delhi-NCR with 48-minute delivery, GPS tracking, and BIS lab water quality reports.',
      role: 'Product Designer',
      tools: 'Figma, Geolocation UI, Dashboard Design',
      platforms: 'Web &bull; RWA Dashboard &bull; Mobile',
      keyMetric: '48 Min Avg Delivery',
      problem: 'Summer water shortages in Delhi-NCR force residential societies to rely on unregulated tanker suppliers with unpredictable pricing and untested water purity.',
      personas: '<strong>RWA Secretary (Dwarka Society):</strong> Manages bulk water procurement for 150 flats with daily sump monitoring.<br><br><strong>Homeowner:</strong> Needs an urgent 3,000L tanker delivered before evening without phone bargaining.',
      solution: '<strong>01. 2-Minute Booking Engine:</strong> Transparent pricing by capacity (3k, 5k, 10k L) with scheduled time slots.<br><strong>02. Live GPS Telemetry:</strong> Real-time tanker map tracking with driver profile and delivery OTP.<br><strong>03. Pre-Delivery BIS Water Reports:</strong> Displays accredited lab test parameters (TDS, pH, turbidity, chlorine) before booking.<br><strong>04. RWA Management Hub:</strong> Society dashboard tracking water consumption and sump capacity alerts.',
      screens: [
        { src: 'assets/projects/jalsetu_p1.jpg', caption: '01. Landing Page: Instant 2-min booking widget & verified metrics' },
        { src: 'assets/projects/jalsetu_p2.jpg', caption: '02. Size & Delivery Window: Capacity selector & order summary' },
        { src: 'assets/projects/jalsetu_p3.jpg', caption: '03. Live GPS Tanker Tracking: 18 min ETA & 4-digit OTP' },
        { src: 'assets/projects/jalsetu_p4.jpg', caption: '04. Provider Marketplace: Price, rating & lab report filters' },
        { src: 'assets/projects/jalsetu_p5.jpg', caption: '05. RWA Society Hub: Daily consumption chart & sump alert' },
        { src: 'assets/projects/jalsetu_p6.jpg', caption: '06. BIS Water Quality Report check by tanker number' }
      ]
    }
  };

  // ------------------------------------------------------------------------
  // 5. Open Case Study Reader Modal
  // ------------------------------------------------------------------------
  const readerModal = document.getElementById('caseReaderModal');
  const readerCloseBtn = document.getElementById('readerCloseBtn');
  const readerCategoryTag = document.getElementById('readerCategoryTag');
  const readerProjectTitle = document.getElementById('readerProjectTitle');
  const readerOneLiner = document.getElementById('readerOneLiner');
  const readerRole = document.getElementById('readerRole');
  const readerTools = document.getElementById('readerTools');
  const readerPlatforms = document.getElementById('readerPlatforms');
  const readerKeyMetric = document.getElementById('readerKeyMetric');
  const readerProblemText = document.getElementById('readerProblemText');
  const readerPersonaText = document.getElementById('readerPersonaText');
  const readerSolutionText = document.getElementById('readerSolutionText');
  const readerGallery = document.getElementById('readerGallery');

  // Lightbox elements
  const lightbox = document.getElementById('screenLightbox');
  const lightboxImg = document.getElementById('lightboxImage');
  const lightboxClose = document.getElementById('lightboxClose');

  function openReader(key) {
    const study = caseStudies[key];
    if (!study || !readerModal) return;

    readerCategoryTag.innerHTML = study.categoryTag;
    readerProjectTitle.textContent = study.title;
    readerOneLiner.textContent = study.oneLiner;
    readerRole.textContent = study.role;
    readerTools.textContent = study.tools;
    readerPlatforms.innerHTML = study.platforms;
    readerKeyMetric.textContent = study.keyMetric;

    readerProblemText.innerHTML = study.problem;
    readerPersonaText.innerHTML = study.personas;
    readerSolutionText.innerHTML = study.solution;

    if (readerGallery) {
      readerGallery.innerHTML = study.screens.map((item) => `
        <div class="reader-gallery-item" data-full="${item.src}">
          <img src="${item.src}" alt="${item.caption}" loading="lazy">
          <div class="reader-gallery-caption">${item.caption}</div>
        </div>
      `).join('');

      readerGallery.querySelectorAll('.reader-gallery-item').forEach((item) => {
        item.addEventListener('click', () => {
          const src = item.getAttribute('data-full');
          if (lightbox && lightboxImg) {
            lightboxImg.src = src;
            lightbox.classList.add('active');
          }
        });
      });
    }

    readerModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeReader() {
    if (!readerModal) return;
    readerModal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  projectCards.forEach((card) => {
    card.addEventListener('click', () => {
      const key = card.getAttribute('data-project');
      openReader(key);
    });
  });

  if (readerCloseBtn) readerCloseBtn.addEventListener('click', closeReader);
  if (readerModal) {
    readerModal.addEventListener('click', (e) => {
      if (e.target === readerModal) closeReader();
    });
  }

  // Lightbox handlers
  if (lightboxClose) {
    lightboxClose.addEventListener('click', () => {
      lightbox.classList.remove('active');
    });
  }
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) lightbox.classList.remove('active');
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (lightbox && lightbox.classList.contains('active')) {
        lightbox.classList.remove('active');
      } else {
        closeReader();
      }
    }
  });
});
