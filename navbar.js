document.getElementById('navbar').innerHTML = `
<nav class="navbar">
  <a href="/Portfolio/" class="logo">
    <img src="/Portfolio/images/chukaufo.PNG" alt="Chuka logo" class="logo-img">
    Chuka
  </a>
  <ul class="nav-links">
    <li class="dropdown">
      <button class="dropdown-toggle" type="button">
        <span class="nav-link-inner">
          <i class="bi bi-code-slash"></i>
          <span>Work</span>
          <i class="bi bi-chevron-down"></i>
        </span>
      </button>
      <ul class="dropdown-menu">
        <li><a href="/Portfolio/work/">Projects</a></li>
        <li><a href="/Portfolio/work/#experience">Experience</a></li>
        <li><a href="/Portfolio/work/#skills">Skills</a></li>
      </ul>
    </li>
    <li>
      <a href="/Portfolio/writing/">
        <i class="bi bi-pencil-square"></i>
        <span>Writing</span>
      </a>
    </li>
    <li>
      <a href="/Portfolio/resume/">
        <i class="bi bi-file-earmark-text"></i>
        <span>Resume</span>
      </a>
    </li>
  </ul>
</nav>
`;

// Highlight active nav link based on current path
const path = window.location.pathname;
document.querySelectorAll('.nav-links a').forEach(link => {
  const href = link.getAttribute('href');
  if (href !== '/Portfolio/' && path.includes(href)) {
    link.classList.add('active');
  }
});

// Dropdown toggle
document.addEventListener('click', function(e) {
  const toggle = e.target.closest('.dropdown-toggle');
  const dropdown = e.target.closest('.dropdown');

  document.querySelectorAll('.dropdown').forEach(d => {
    if (d !== dropdown) d.classList.remove('open');
  });

  if (toggle) {
    toggle.closest('.dropdown').classList.toggle('open');
  } else if (!dropdown) {
    document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('open'));
  }
});