// =========================
// SCROLL ANIMATIONS (existing)
// =========================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

window.addEventListener('scroll', () => {
  document.querySelector('header').style.boxShadow =
    window.scrollY > 20
      ? '0 4px 24px rgba(13,27,42,0.08)'
      : 'none';
});


// =========================
// DOCTOR DATA (dynamic)
// =========================
const doctors = [
  { name: "Dr. Priya S.", spec: "Cardiologist", dist: "0.4 km" },
  { name: "Dr. Rajesh K.", spec: "General Physician", dist: "0.8 km" },
  { name: "Dr. Anita M.", spec: "Dentist", dist: "1.2 km" },
  { name: "Dr. Vikram N.", spec: "Neurologist", dist: "1.5 km" }
];


// =========================
// RENDER DOCTORS
// =========================
const container = document.querySelector('.doctor-cards');

function renderDoctors(list) {
  container.innerHTML = '';

  if (list.length === 0) {
    container.innerHTML = "<p>No doctors found.</p>";
    return;
  }

  list.forEach(doc => {
    const card = document.createElement('div');
    card.className = 'doc-card';

    card.innerHTML = `
      <div class="doc-avatar">👨‍⚕️</div>
      <div class="doc-info">
        <div class="doc-name">${doc.name}</div>
        <div class="doc-spec">${doc.spec}</div>
      </div>
      <div class="doc-dist">${doc.dist}</div>
    `;

    // Booking click
    card.addEventListener('click', () => {
      alert(`✅ Appointment booked with ${doc.name}`);
    });

    container.appendChild(card);
  });
}

// Initial render
renderDoctors(doctors);


// =========================
// SEARCH FUNCTIONALITY
// =========================
document.querySelector('.search-btn').addEventListener('click', () => {
  const specialty = document.querySelectorAll('.search-input')[0].value.toLowerCase();

  // Filter doctors by specialty
  const filtered = doctors.filter(doc =>
    doc.spec.toLowerCase().includes(specialty)
  );

  renderDoctors(filtered);

  // Scroll to results
  document.querySelector('.doctor-cards').scrollIntoView({
    behavior: 'smooth'
  });
});


// =========================
// GEOLOCATION (optional)
// =========================
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(pos => {
    console.log("Latitude:", pos.coords.latitude);
    console.log("Longitude:", pos.coords.longitude);
  });
}