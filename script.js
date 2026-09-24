const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
menuBtn.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, {threshold: 0.12});
reveals.forEach(el => observer.observe(el));

document.getElementById('year').textContent = new Date().getFullYear();

const data = {
  cctv: {
    title: 'CCTV Installation — GMF AeroAsia',
    text: 'Hands-on installation work across 32 CCTV points at GMF AeroAsia. The work involved cable routing, device installation, connectivity checking and troubleshooting to support the security monitoring system.'
  },
  lan: {
    title: 'LAN Network Implementation',
    text: 'A small-office LAN project concept using a switch, UTP cabling, IP addressing, DHCP and gateway configuration. The project demonstrates basic network planning and implementation skills.'
  },
  cabling: {
    title: 'Fiber & UTP Installation',
    text: 'Hands-on experience routing and installing network and fiber-optic cables to support connectivity and IT infrastructure, including basic checking and troubleshooting.'
  }
};

const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalText = document.getElementById('modalText');

document.querySelectorAll('.project-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = data[btn.dataset.project];
    modalTitle.textContent = item.title;
    modalText.textContent = item.text;
    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
  });
});

function closeModal() {
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden', 'true');
}
document.getElementById('closeModal').addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
