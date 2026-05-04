// ── PAGE NAVIGATION ──
function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  var target = document.getElementById(page + '-page');
  target.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'instant' });

  // Trigger hero entrance animation on new page
  var heroContent = target.querySelector('.page-hero-content');
  if (heroContent) {
    heroContent.classList.remove('hero-entered');
    void heroContent.offsetWidth;
    heroContent.classList.add('hero-entered');
  }

  setTimeout(initReveal, 80);
}

function scrollToSection(id) {
  setTimeout(function() {
    var el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 80);
}

function scrollToFooter() {
  document.getElementById('site-footer').scrollIntoView({ behavior: 'smooth' });
}

// ── MOBILE MENU ──
function toggleMobile() {
  var menu = document.getElementById('mobile-menu');
  var hamburger = document.getElementById('hamburger');
  menu.classList.toggle('open');
  hamburger.classList.toggle('open');
}

document.addEventListener('click', function(e) {
  var menu = document.getElementById('mobile-menu');
  var hamburger = document.getElementById('hamburger');
  if (menu && menu.classList.contains('open') &&
      !menu.contains(e.target) &&
      hamburger && !hamburger.contains(e.target)) {
    menu.classList.remove('open');
    hamburger.classList.remove('open');
  }
});

// ── SERVICES OVERLAY PANEL ──
function openServices() {
  var panel = document.getElementById('services-panel');
  if (!panel) return;
  document.body.classList.add('panel-open');
  panel.classList.add('active');
  setTimeout(function() {
    panel.querySelectorAll('.svc-card').forEach(function(card, i) {
      card.style.transitionDelay = (i * 0.06) + 's';
      card.classList.add('visible');
    });
  }, 250);
}

function closeServices() {
  var panel = document.getElementById('services-panel');
  if (!panel) return;
  panel.querySelectorAll('.svc-card').forEach(function(card) {
    card.style.transitionDelay = '0s';
    card.classList.remove('visible');
  });
  setTimeout(function() {
    panel.classList.remove('active');
    document.body.classList.remove('panel-open');
  }, 180);
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeServices();
});

// ── NAV DROPDOWNS ──
function toggleDropdown(id) {
  var item = document.getElementById(id);
  if (!item) return;
  var isOpen = item.classList.contains('open');
  // Close all first
  closeAllDropdowns();
  // If it wasn't open, open it
  if (!isOpen) item.classList.add('open');
}

function closeAllDropdowns() {
  document.querySelectorAll('.nav-item-dropdown.open').forEach(function(el) {
    el.classList.remove('open');
  });
}

// Close dropdowns when clicking outside navbar
document.addEventListener('click', function(e) {
  var navbar = document.getElementById('navbar');
  if (navbar && !navbar.contains(e.target)) {
    closeAllDropdowns();
  }
});

// ── MOBILE ACCORDION ──
function toggleMobAccordion(id) {
  var panel = document.getElementById(id);
  var btn = document.getElementById(id + '-btn');
  if (!panel || !btn) return;
  var isOpen = panel.classList.contains('open');
  // Close all accordions first
  document.querySelectorAll('.mob-sub-links').forEach(function(p) { p.classList.remove('open'); });
  document.querySelectorAll('.mob-accordion-btn').forEach(function(b) { b.classList.remove('open'); });
  // Toggle clicked one
  if (!isOpen) {
    panel.classList.add('open');
    btn.classList.add('open');
  }
}

// ── GALLERY FILTER ──
function filterGallery(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(function(b) { b.classList.remove('active'); });
  btn.classList.add('active');
  document.querySelectorAll('.gallery-item').forEach(function(item) {
    item.style.display = (cat === 'all' || item.dataset.cat === cat) ? '' : 'none';
  });
}

// ── SCROLL REVEAL ──
function initReveal() {
  var reveals = document.querySelectorAll('.reveal:not(.visible)');
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });
  reveals.forEach(function(el) { observer.observe(el); });
}

// ── NAVBAR SCROLL SHADOW ──
window.addEventListener('scroll', function() {
  var nav = document.getElementById('navbar');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// ── INIT ON LOAD ──
document.addEventListener('DOMContentLoaded', function() {
  var homeHero = document.querySelector('#home-page .hero-inner');
  if (homeHero) {
    requestAnimationFrame(function() {
      homeHero.classList.add('hero-entered');
    });
  }
  initReveal();
});

// ── GALLERY PANEL DATA ──
var galleryData = {
  culture: {
    title: 'Culture & Events',
    desc: 'Celebrations, festivals, and moments that define the LKQ India spirit.',
    photos: [
      { url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80&auto=format', cap: 'Annual Day 2024' },
      { url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80&auto=format', cap: 'Diwali Celebrations' },
      { url: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600&q=80&auto=format', cap: 'Team Lunch' },
      { url: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&q=80&auto=format', cap: 'Cultural Fest 2024' },
      { url: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&q=80&auto=format', cap: 'Music Night' },
      { url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80&auto=format', cap: 'Holi 2024' },
      { url: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=600&q=80&auto=format', cap: 'Christmas Party' },
      { url: 'https://images.unsplash.com/photo-1496337589254-7e19d01cec44?w=600&q=80&auto=format', cap: 'Independence Day' },
      { url: 'https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=600&q=80&auto=format', cap: 'Farewell Bash' },
      { url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format', cap: 'Onam Celebrations' },
      { url: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600&q=80&auto=format', cap: 'New Year 2025' },
      { url: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80&auto=format', cap: 'Birthday Celebrations' },
      { url: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&q=80&auto=format', cap: 'Eid Celebrations' },
      { url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80&auto=format', cap: 'Town Hall 2024' },
      { url: 'https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?w=600&q=80&auto=format', cap: 'Leadership Meet' }
    ]
  },
  workspace: {
    title: 'Workspace',
    desc: 'Our modern Bengaluru campus — designed for collaboration and focus.',
    photos: [
      { url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80&auto=format', cap: 'Main Office Floor' },
      { url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80&auto=format', cap: 'Collaboration Zone' },
      { url: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80&auto=format', cap: 'Breakout Area' },
      { url: 'https://images.unsplash.com/photo-1462826303086-329426d1aef5?w=600&q=80&auto=format', cap: 'Meeting Room' },
      { url: 'https://images.unsplash.com/photo-1568992688065-536aad8a12f6?w=600&q=80&auto=format', cap: 'Tech Hub' },
      { url: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=600&q=80&auto=format', cap: 'Innovation Lab' },
      { url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80&auto=format', cap: 'Cafeteria' },
      { url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80&auto=format', cap: 'Board Room' },
      { url: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=600&q=80&auto=format', cap: 'Open Workspace' },
      { url: 'https://images.unsplash.com/photo-1523908511403-7fc7b25592f4?w=600&q=80&auto=format', cap: 'Training Room' },
      { url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80&auto=format', cap: 'Server Room' },
      { url: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=600&q=80&auto=format', cap: 'Reception' },
      { url: 'https://images.unsplash.com/photo-1571624436279-b272aff752b5?w=600&q=80&auto=format', cap: 'Rooftop Deck' },
      { url: 'https://images.unsplash.com/photo-1585634917202-6f1a1b8d42e3?w=600&q=80&auto=format', cap: 'Wellness Room' },
      { url: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80&auto=format', cap: 'War Room' }
    ]
  },
  csr: {
    title: 'CSR & Community',
    desc: 'Giving back to Bengaluru and communities across India.',
    photos: [
      { url: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80&auto=format', cap: 'Tree Plantation Drive' },
      { url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80&auto=format', cap: 'Education Outreach' },
      { url: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&q=80&auto=format', cap: 'Blood Donation Camp' },
      { url: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&q=80&auto=format', cap: 'Food Distribution' },
      { url: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&q=80&auto=format', cap: 'Beach Clean-up' },
      { url: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=600&q=80&auto=format', cap: 'Volunteering Day' },
      { url: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&q=80&auto=format', cap: 'Community Kitchen' },
      { url: 'https://images.unsplash.com/photo-1604156788856-2e8af3e98e4a?w=600&q=80&auto=format', cap: 'Skill Development' },
      { url: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&q=80&auto=format', cap: 'Rural Schools' },
      { url: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=600&q=80&auto=format', cap: 'Healthcare Camp' },
      { url: 'https://images.unsplash.com/photo-1504159506876-f8338247a14a?w=600&q=80&auto=format', cap: 'Digital Literacy' },
      { url: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80&auto=format', cap: 'Women Empowerment' },
      { url: 'https://images.unsplash.com/photo-1550353175-a3611868086b?w=600&q=80&auto=format', cap: 'Eco Drive 2024' },
      { url: 'https://images.unsplash.com/photo-1560252829-804f1aedf1be?w=600&q=80&auto=format', cap: 'Park Restoration' },
      { url: 'https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?w=600&q=80&auto=format', cap: 'Animal Welfare' }
    ]
  },
  milestones: {
    title: 'Milestones',
    desc: 'Celebrating the achievements and landmarks in our journey.',
    photos: [
      { url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80&auto=format', cap: 'Great Place to Work 2024' },
      { url: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=600&q=80&auto=format', cap: '15 Years of LKQ India' },
      { url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80&auto=format', cap: '1000 Employees Mark' },
      { url: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80&auto=format', cap: 'New Office Launch' },
      { url: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80&auto=format', cap: 'ISO Certification' },
      { url: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&q=80&auto=format', cap: 'Top GCC Award' },
      { url: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80&auto=format', cap: '1600 Team Members' },
      { url: 'https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?w=600&q=80&auto=format', cap: 'D&I Excellence Award' },
      { url: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80&auto=format', cap: 'LKQ Corp Recognition' },
      { url: 'https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?w=600&q=80&auto=format', cap: 'Best Employer 2023' },
      { url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80&auto=format', cap: 'Digital Innovation Award' },
      { url: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80&auto=format', cap: 'New Tech Platform' },
      { url: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=600&q=80&auto=format', cap: '10 Year Anniversary' },
      { url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80&auto=format', cap: 'Finance Excellence' },
      { url: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&q=80&auto=format', cap: 'Sustainability Award' }
    ]
  },
  sports: {
    title: 'Sports & Fun',
    desc: 'Because winning together on the field matters as much as in the office.',
    photos: [
      { url: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&q=80&auto=format', cap: 'LKQ Cricket League' },
      { url: 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=600&q=80&auto=format', cap: 'Badminton Tournament' },
      { url: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80&auto=format', cap: 'Football Fiesta' },
      { url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80&auto=format', cap: 'Running Club' },
      { url: 'https://images.unsplash.com/photo-1547941126-3d5322b218b0?w=600&q=80&auto=format', cap: 'TT Championship' },
      { url: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=600&q=80&auto=format', cap: 'Carrom Tournament' },
      { url: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&q=80&auto=format', cap: 'Cycling Day' },
      { url: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&q=80&auto=format', cap: 'Yoga Day' },
      { url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80&auto=format', cap: 'Team Outing' },
      { url: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=600&q=80&auto=format', cap: 'Chess Club' },
      { url: 'https://images.unsplash.com/photo-1540479859555-17af45c78602?w=600&q=80&auto=format', cap: 'Hackathon 2024' },
      { url: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600&q=80&auto=format', cap: 'Basketball Match' },
      { url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format', cap: 'Annual Sports Day' },
      { url: 'https://images.unsplash.com/photo-1587329310686-91414b8e3cb7?w=600&q=80&auto=format', cap: 'Swimming Gala' },
      { url: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&q=80&auto=format', cap: 'Skiing Trip' }
    ]
  }
};

// ── OPEN GALLERY PANEL ──
function openGalleryPanel(cat) {
  var data = galleryData[cat];
  if (!data) return;

  document.getElementById('gal-panel-eyebrow').textContent = 'Gallery';
  document.getElementById('gal-panel-title').textContent = data.title;
  document.getElementById('gal-panel-desc').textContent = data.photos.length + ' photos';

  var grid = document.getElementById('gal-photo-grid');
  grid.innerHTML = '';
  data.photos.forEach(function(photo, idx) {
    var item = document.createElement('div');
    item.className = 'gal-photo-item';
    item.innerHTML = '<img src="' + photo.url + '" alt="' + photo.cap + '" loading="lazy"><div class="gal-photo-item__cap"><span>' + photo.cap + '</span></div>';
    item.addEventListener('click', function(e) {
      e.stopPropagation();
      openLightbox(data.photos, idx);
    });
    grid.appendChild(item);
  });

  var panel = document.getElementById('gallery-panel');
  document.body.classList.add('panel-open');
  panel.classList.add('active');

  setTimeout(function() {
    grid.querySelectorAll('.gal-photo-item').forEach(function(item, i) {
      item.style.opacity = '0';
      item.style.transform = 'translateY(16px)';
      item.style.transition = 'opacity 0.4s ease ' + (i * 0.03) + 's, transform 0.4s ease ' + (i * 0.03) + 's';
      requestAnimationFrame(function() {
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
      });
    });
  }, 300);
}

function closeGalleryPanel() {
  var panel = document.getElementById('gallery-panel');
  panel.classList.remove('active');
  document.body.classList.remove('panel-open');
}

// ── LIGHTBOX ──
var lightboxPhotos = [];
var lightboxIndex = 0;

function openLightbox(photos, index) {
  lightboxPhotos = photos;
  lightboxIndex = index;
  renderLightbox();
  document.getElementById('lightbox').classList.add('active');
  document.body.classList.add('panel-open');
}

function closeLightbox() {
  var lb = document.getElementById('lightbox');
  lb.classList.remove('active');
  // Don't remove panel-open — gallery panel may still be open
  if (!document.getElementById('gallery-panel').classList.contains('active')) {
    document.body.classList.remove('panel-open');
  }
}

function lightboxNav(dir) {
  lightboxIndex = (lightboxIndex + dir + lightboxPhotos.length) % lightboxPhotos.length;
  var img = document.getElementById('lightbox-img');
  // Fade out, swap, fade in
  img.style.opacity = '0';
  img.style.transform = 'scale(0.95)';
  setTimeout(function() {
    renderLightbox();
  }, 150);
}

function renderLightbox() {
  var photo = lightboxPhotos[lightboxIndex];
  var img = document.getElementById('lightbox-img');
  img.src = photo.url.replace('w=600', 'w=1400');
  img.alt = photo.cap;
  img.style.opacity = '0';
  img.style.transform = 'scale(0.95)';
  img.onload = function() {
    img.style.opacity = '1';
    img.style.transform = 'scale(1)';
  };
  document.getElementById('lightbox-cap').textContent = photo.cap;
  document.getElementById('lightbox-counter').textContent = (lightboxIndex + 1) + ' / ' + lightboxPhotos.length;
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
  var lb = document.getElementById('lightbox');
  if (!lb || !lb.classList.contains('active')) return;
  if (e.key === 'ArrowRight') lightboxNav(1);
  if (e.key === 'ArrowLeft')  lightboxNav(-1);
  if (e.key === 'Escape')     closeLightbox();
});

// Click backdrop to close lightbox
document.addEventListener('click', function(e) {
  var lb = document.getElementById('lightbox');
  if (lb && lb.classList.contains('active') && e.target === lb) {
    closeLightbox();
  }
});
