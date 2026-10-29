function calculateDough() {
  // 1. Get user inputs from the text boxes
  const numBalls = parseFloat(document.getElementById('numBalls').value) || 0;
  const ballWeight = parseFloat(document.getElementById('ballWeight').value) || 0;
  const hydration = parseFloat(document.getElementById('hydration').value) || 0;
  const saltPct = parseFloat(document.getElementById('salt').value) || 0;
  const oilPct = parseFloat(document.getElementById('oil').value) || 0;
  const sugarPct = parseFloat(document.getElementById('sugar').value) || 0;
  const yeastPct = parseFloat(document.getElementById('yeast').value) || 0;

  // 2. Calculate Total Target Dough Mass
  const totalDoughWeight = numBalls * ballWeight;

  // 3. Calculate Baker's Percentages (Flour = 100%)
  const totalPercentage = 100 + hydration + saltPct + oilPct + sugarPct + yeastPct;
  const totalFlour = totalDoughWeight / (totalPercentage / 100);

  // 4. Split Flours (70% Tipo 00 / 30% Bread Flour)
  const tipo00 = totalFlour * 0.70;
  const breadFlour = totalFlour * 0.30;

  // 5. Calculate Total Water and split (95% Main Water / 5% Reserved Water)
  const totalWater = totalFlour * (hydration / 100);
  const mainWater = totalWater * 0.95;
  const reservedWater = totalWater * 0.05;

  // 6. Calculate Other Ingredients relative to total flour
  const salt = totalFlour * (saltPct / 100);
  const oil = totalFlour * (oilPct / 100);
  const sugar = totalFlour * (sugarPct / 100);
  const yeast = totalFlour * (yeastPct / 100);

  // 7. Update numbers inside the Ingredients Card
  document.getElementById('totalWeight').innerText = totalDoughWeight.toFixed(1);
  document.getElementById('tipo00').innerText = tipo00.toFixed(1);
  document.getElementById('breadFlour').innerText = breadFlour.toFixed(1);
  document.getElementById('totalFlour').innerText = totalFlour.toFixed(1);
  document.getElementById('mainWater').innerText = mainWater.toFixed(1);
  document.getElementById('reservedWater').innerText = reservedWater.toFixed(1);
  document.getElementById('totalWater').innerText = totalWater.toFixed(1);
  document.getElementById('saltWeight').innerText = salt.toFixed(1);
  document.getElementById('oilWeight').innerText = oil.toFixed(1);
  document.getElementById('sugarWeight').innerText = sugar.toFixed(1);
  document.getElementById('yeastWeight').innerText = yeast.toFixed(1);

  // 8. Update numbers inside the Method Instructions text dynamically
  document.getElementById('mMainWater').innerText = mainWater.toFixed(1);
  document.getElementById('mReservedWater').innerText = reservedWater.toFixed(1);
  document.getElementById('mYeast').innerText = yeast.toFixed(1);
  document.getElementById('mTipo00').innerText = tipo00.toFixed(1);
  document.getElementById('mBreadFlour').innerText = breadFlour.toFixed(1);
  document.getElementById('mOil').innerText = oil.toFixed(1);
  document.getElementById('mSalt').innerText = salt.toFixed(1);
  document.getElementById('mSugar').innerText = sugar.toFixed(1);
  document.getElementById('mNumBalls').innerText = numBalls;
  document.getElementById('mBallWeight').innerText = ballWeight;
}

// Attach event listeners to input fields
const inputs = ['numBalls', 'ballWeight', 'hydration', 'salt', 'oil', 'sugar', 'yeast'];
inputs.forEach(id => {
  document.getElementById(id).addEventListener('input', calculateDough);
});

// Run once on initial page load
calculateDough();