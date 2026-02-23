// REALM DAY NIGHT CYCLE
function setRealmState() {
    const hour = new Date().getHours();
    document.body.classList.remove("realm-day","realm-dusk","realm-night");

    if (hour >= 6 && hour < 17) {
        document.body.classList.add("realm-day");
    } else if (hour >= 17 && hour < 20) {
        document.body.classList.add("realm-dusk");
    } else {
        document.body.classList.add("realm-night");
    }
}
setRealmState();

// GOLD PARTICLES
const field = document.querySelector(".particle-field");

if (field) {
    for (let i = 0; i < 40; i++) {
        const p = document.createElement("div");
        p.className = "gold-particle";
        p.style.left = Math.random() * 100 + "vw";
        p.style.animationDuration = (12 + Math.random() * 18) + "s";
        p.style.animationDelay = Math.random() * 10 + "s";
        field.appendChild(p);
    }
}

// SCROLL REVEAL
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach(el => {
    observer.observe(el);
});

// ECONOMY TABS
document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.nav-link');
    const panels = document.querySelectorAll('.tab-panel');

    tabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            if (!tab.dataset.tab) return;

            tabs.forEach(t => t.classList.remove('active'));
            panels.forEach(p => p.classList.remove('active'));

            const target = document.getElementById(tab.getAttribute('data-tab'));
            tab.classList.add('active');
            target.classList.add('active');
        });
    });
});

// Create torch sconces
['left','right'].forEach(side=>{
    for(let i=0;i<3;i++){
        const s = document.createElement('div');
        s.className='torch-sconce torch-'+side;
        s.style.top=20+i*25+'%';
        document.body.appendChild(s);
    }
});
