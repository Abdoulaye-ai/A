// Fichier : js/auth.js
function checkAuth() {
  const token = localStorage.getItem('auth_token');
  const currentPath = window.location.pathname;
  
  // Si sur page d'accueil et déjà connecté
  if (token && currentPath.endsWith('index.html')) {
    window.location.href = 'app/index.html';
  }
  
  // Si sur page app et non connecté
  if (!token && currentPath.includes('/app/')) {
    window.location.href = '../index.html';
  }
}

// Appeler au chargement
document.addEventListener('DOMContentLoaded', checkAuth);

