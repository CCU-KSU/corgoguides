async function signup() {
  const username = document.getElementById('new-username').value;
  const password = document.getElementById('new-password').value;
  const status = document.getElementById('signup-status');

  const response = await fetch('/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });

  const result = await response.json();
  status.textContent = result.success
    ? "Signup successful! You can now log in."
    : `Signup failed: ${result.error}`;
}

async function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const status = document.getElementById('login-status');

  const response = await fetch('/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });

  const result = await response.json();
  if (result.success) {
    status.textContent = "Login successful!";
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('interests').disabled = false;
    document.getElementById('appCatalog').disabled = false;
  } else {
    status.textContent = "Login failed. Try again.";
  }
}

async function matchApps() {
  const interestsInput = document.getElementById('interests').value;
  const catalogInput = document.getElementById('appCatalog').value;
  const resultsDiv = document.getElementById('results');

  let interests = interestsInput.split(',').map(i => i.trim()).filter(i => i);
  let appCatalog;

  try {
    appCatalog = JSON.parse(catalogInput);
  } catch (e) {
    resultsDiv.innerHTML = "<p style='color:red;'>Invalid JSON format in App Catalog.</p>";
    return;
  }

  const response = await fetch('/match-apps', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ interests, appCatalog })
  });

  const data = await response.json();
  if (data.error) {
    resultsDiv.innerHTML = `<p style='color:red;'>${data.error}</p>`;
  } else {
    resultsDiv.innerHTML = `<h2>Matched Apps:</h2>` + data.matchedApps.map(app =>
      `<div class="app"><strong>${app.name}</strong><br/>Tags: ${app.tags.join(', ')}</div>`
    ).join('');
  }
}