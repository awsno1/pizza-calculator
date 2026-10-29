// Function that calculates ingredient amounts based on Baker's Percentages
function calculateDough() {
  // 1. Get the numbers entered by the user
  const numBalls = parseFloat(document.getElementById('numBalls').value) || 0;
  const ballWeight = parseFloat(document.getElementById('ballWeight').value) || 0;
  const hydration = parseFloat(document.getElementById('hydration').value) || 0;
  const salt = parseFloat(document.getElementById('salt').value) || 0;
  const yeast = parseFloat(document.getElementById('yeast').value) || 0;

  // 2. Calculate Total Dough Weight needed
  const totalWeight = numBalls * ballWeight;

  // 3. Calculate Baker's Percentages formula
  // Total % = 100% (Flour) + Hydration % + Salt % + Yeast %
  const totalPercentage = 100 + hydration + salt + yeast;

  // Flour (g) = Total Weight / (Total Percentage / 100)
  const flour = totalWeight / (totalPercentage / 100);

  // Other ingredients are calculated relative to Flour weight
  const water = flour * (hydration / 100);
  const saltWeight = flour * (salt / 100);
  const yeastWeight = flour * (yeast / 100);

  // 4. Update the numbers displayed on the web page (rounded to 1 decimal place)
  document.getElementById('totalWeight').innerText = totalWeight.toFixed(1);
  document.getElementById('flourWeight').innerText = flour.toFixed(1);
  document.getElementById('waterWeight').innerText = water.toFixed(1);
  document.getElementById('saltWeight').innerText = saltWeight.toFixed(1);
  document.getElementById('yeastWeight').innerText = yeastWeight.toFixed(1);

  // 5. Update the numbers inside the Method Instructions text dynamically
  document.getElementById('methodNumBalls').innerText = numBalls;
  document.getElementById('methodBallWeight').innerText = ballWeight;
}

// Attach event listeners so the calculation runs automatically whenever any input value changes
document.getElementById('numBalls').addEventListener('input', calculateDough);
document.getElementById('ballWeight').addEventListener('input', calculateDough);
document.getElementById('hydration').addEventListener('input', calculateDough);
document.getElementById('salt').addEventListener('input', calculateDough);
document.getElementById('yeast').addEventListener('input', calculateDough);

// Run the calculation once immediately when the page loads
calculateDough();