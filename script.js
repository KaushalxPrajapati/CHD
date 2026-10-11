/**
 * Chhaganlal Dayaljee Jewellers — Heritage Bahi-Khata Website Logic
 * Sakchi, Jamshedpur • Est. 1918
 */

// --------------------------------------------------------------------------
// 1. Specimen Database & State
// --------------------------------------------------------------------------
const SPECIMENS = [
  {
    id: "0841",
    serial: "#0841/24",
    name: "Rajwadi Kundan Choker Necklace Set",
    category: "necklace",
    collection: "kundan",
    karat: "22K (916)",
    karatVal: 22,
    netWeight: 64.200,
    grossWeight: 72.800,
    making: 8.5,
    price: 485000,
    image: "assets/images/kundan_choker.jpg",
    hallmark: "BIS Hallmarked Sakchi",
    huid: "JH04K1",
    desc: "Handcrafted in pure 22K yellow gold with uncut syndicate polki diamonds and emerald bead fringe tassels. Reversible traditional Meenakari floral reverse, hallmarked at Sakchi Gaddi."
  },
  {
    id: "0842",
    serial: "#0842/24",
    name: "Temple Lakshmi Antique Gold Pendant",
    category: "pendant",
    collection: "temple",
    karat: "22K (916)",
    karatVal: 22,
    netWeight: 21.400,
    grossWeight: 24.150,
    making: 7.0,
    price: 156900,
    image: "assets/images/temple_lakshmi_pendant.png",
    hallmark: "Temple Heritage Nakashi",
    huid: "JH04L2",
    desc: "Carved repoussé divine Lakshmi motif encircled by natural Burmese rubies and seed pearls. Traditional South Indian nakashi chisel work created by hereditary goldsmiths."
  },
  {
    id: "0843",
    serial: "#0843/24",
    name: "Heritage Polki Chandbali Jhumkas",
    category: "earrings",
    collection: "kundan",
    karat: "22K (916)",
    karatVal: 22,
    netWeight: 18.650,
    grossWeight: 21.050,
    making: 9.0,
    price: 142500,
    image: "assets/images/chandbali_jhumkas.jpg",
    hallmark: "Syndicate Uncut Polki",
    huid: "JH04P3",
    desc: "Royal Rajasthani open-setting uncut diamond jhumkas with ruby cabochons and clustered Basra seed pearls. Balanced screw-back closure designed for royal occasion wear."
  },
  {
    id: "0844",
    serial: "#0844/24",
    name: "Nakashi Antique Peacock Gold Kadas (Pair)",
    category: "bangles",
    collection: "temple",
    karat: "22K (916)",
    karatVal: 22,
    netWeight: 48.100,
    grossWeight: 48.600,
    making: 6.5,
    price: 338000,
    image: "assets/images/peacock_kadas.jpg",
    hallmark: "Pair (2 Pieces) 916",
    huid: "JH04K4",
    desc: "Solid screw-locking traditional kadas embossed with dancing peacock figurines and ruby-set eyes. Heavier core for lifelong bridal wear, inscribed in the ancestral ledger."
  },
  {
    id: "0845",
    serial: "#0845/24",
    name: "The Royal Bridal Suite (शुभ विवाह संग्रह)",
    category: "necklace",
    collection: "bridal",
    karat: "22K (916)",
    karatVal: 22,
    netWeight: 148.600,
    grossWeight: 156.400,
    making: 9.5,
    price: 1140000,
    image: "assets/images/royal_bridal_suite.png",
    hallmark: "Custom Bridal Trousseau",
    huid: "JH04B5",
    desc: "Uncut Polki diamond choker embedded with Burmese emerald drop tassels, flanked by a regal bridal nath and handcrafted maang tikka. The reverse reveals master-crafted scarlet red Banarasi meenakari."
  },
  {
    id: "0846",
    serial: "#0846/24",
    name: "Temple & South Indian Heritage Suite (प्राचीन धरोहर)",
    category: "necklace",
    collection: "temple",
    karat: "22K (916)",
    karatVal: 22,
    netWeight: 112.400,
    grossWeight: 118.200,
    making: 8.0,
    price: 865000,
    image: "assets/images/temple_heritage_antique.png",
    hallmark: "Centuries of Karigari",
    huid: "JH04T6",
    desc: "Magnificent Lakshmi Kasumala coin necklace paired with traditional Mango Mala (Manga Malai). Hammered repoussé craftsmanship studded with cabochon pigeon-blood rubies."
  },
  {
    id: "0847",
    serial: "#0847/24",
    name: "Modern Everyday & Lightweight Gold (रोज़ाना संग्रह)",
    category: "bangles",
    collection: "everyday",
    karat: "18K & 22K",
    karatVal: 18,
    netWeight: 24.800,
    grossWeight: 25.100,
    making: 5.5,
    price: 188000,
    image: "assets/images/modern_everyday_gold.png",
    hallmark: "Sakchi Modern Line",
    huid: "JH04M7",
    desc: "Geometric stackable bangles and solitaire mangalsutra pendant crafted for contemporary daily life. Engineered for featherlight comfort and durable daily grace without compromising pure bullion value."
  },
  {
    id: "0848",
    serial: "#0848/24",
    name: "Gaddi Display Tray #04 — Royal Wedding Trousseau",
    category: "necklace",
    collection: "bridal",
    karat: "22K (916)",
    karatVal: 22,
    netWeight: 152.350,
    grossWeight: 160.000,
    making: 9.0,
    price: 1180000,
    image: "assets/images/showroom_tray_kundan.png",
    hallmark: "Showroom Vault Masterwork",
    huid: "JH04V8",
    desc: "Wedding Trousseau Selections from Sakchi Showroom Vault. Preserved for royal weddings across Jharkhand and Bengal, containing 22K Kundan Choker, Polki Jhumkas, and Peacock Kadas."
  }
];

// Current Rates per Gram (in INR)
const CURRENT_RATES = {
  gold24: 7840,
  gold22: 7190,
  gold18: 5880,
  silver: 96.50
};

// Unit conversions
const TOLA_GRAMS = 11.664;
const RATTI_GRAMS = 0.1215;

// App State
let currentUnit = 'gram'; // 'gram' or 'tola'
let bahiBag = JSON.parse(localStorage.getItem('chd_bahi_bag') || '[]');
let activeFilter = 'all';
let searchQuery = '';

// --------------------------------------------------------------------------
// 2. Initialization & DOM Ready
// --------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  initBhavRates();
  renderLedgerTable();
  renderCollectionsGallery();
  initCalculator();
  updateBagUI();
  initHallmarkVerifier();
  initAppointmentBooking();
  initNavigationTabs();
  initModalsAndDrawers();
});

// Format Currency
function formatINR(number) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(number);
}

// Format Numbers with Indian system
function formatNum(number, decimals = 3) {
  return Number(number).toLocaleString('en-IN', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });
}

// --------------------------------------------------------------------------
// 3. Aaj Ka Bhav (Bullion Rate Ticker & Unit Toggle)
// --------------------------------------------------------------------------
function initBhavRates() {
  updateRateDisplay();

  const toggleBtn = document.getElementById('unitToggleBtn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      currentUnit = (currentUnit === 'gram') ? 'tola' : 'gram';
      toggleBtn.textContent = (currentUnit === 'gram') ? 'Switch to Tola (तोला)' : 'Switch to Gram (ग्राम)';
      updateRateDisplay();
      showToast(`Bullion rates converted to ${currentUnit === 'gram' ? 'Grams (g)' : 'Tolas (11.664g)'}`);
    });
  }
}

function updateRateDisplay() {
  const mult = (currentUnit === 'tola') ? TOLA_GRAMS : 1;
  const suffix = (currentUnit === 'tola') ? '/ tola' : '/ g';

  const rate24El = document.getElementById('rate24');
  const rate22El = document.getElementById('rate22');
  const rateSilverEl = document.getElementById('rateSilver');

  if (rate24El) rate24El.textContent = formatINR(CURRENT_RATES.gold24 * mult) + ' ' + suffix;
  if (rate22El) rate22El.textContent = formatINR(CURRENT_RATES.gold22 * mult) + ' ' + suffix;
  if (rateSilverEl) rateSilverEl.textContent = formatINR(CURRENT_RATES.silver * mult) + ' ' + suffix;
}

// --------------------------------------------------------------------------
// 4. Bahi-Khata Ledger Table Rendering & Search/Filter
// --------------------------------------------------------------------------
function renderLedgerTable() {
  const tbody = document.getElementById('ledgerTableBody');
  const tfootTotal = document.getElementById('ledgerFootTotal');
  const tfootCount = document.getElementById('ledgerFootCount');
  if (!tbody) return;

  const filtered = SPECIMENS.filter(item => {
    const matchesFilter = (activeFilter === 'all') ||
                          (activeFilter === item.category) ||
                          (activeFilter === item.collection);
    const matchesQuery = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.serial.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.karat.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesQuery;
  });

  tbody.innerHTML = '';

  let totalValue = 0;
  let totalNetGrams = 0;

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" class="bag-empty-notice" style="text-align:center; padding: 2.5rem;">
          No ledger entries match "${searchQuery}". Check the Sanskrit/English catalog.
        </td>
      </tr>
    `;
  } else {
    filtered.forEach(item => {
      totalValue += item.price;
      totalNetGrams += item.netWeight;

      const isInBag = bahiBag.some(bagItem => bagItem.id === item.id);
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td class="col-entry-no align-top">${item.serial}</td>
        <td class="align-top">
          <div class="specimen-thumb-wrap" onclick="openSpecimenModal('${item.id}')" title="Inspect specimen">
            <div class="paperclip-clip"></div>
            <img src="${item.image}" alt="${item.name}" class="specimen-thumb" loading="lazy" />
          </div>
        </td>
        <td class="specimen-info-cell align-top">
          <div class="item-name" style="cursor:pointer;" onclick="openSpecimenModal('${item.id}')">${item.name}</div>
          <div class="item-desc">${item.desc}</div>
          <span class="hallmark-tag">${item.hallmark} • HUID: ${item.huid}</span>
        </td>
        <td class="col-weight-specs align-top">
          <div class="purity-label">${item.karat}</div>
          <div>Net: ${formatNum(item.netWeight)} g</div>
          <div class="gross-sub">Gross: ${formatNum(item.grossWeight)} g</div>
        </td>
        <td class="col-making align-top">${item.making}%</td>
        <td class="col-price align-top">${formatINR(item.price)}</td>
        <td class="align-top" style="text-align: center;">
          <button class="btn-add-bahi ${isInBag ? 'added' : ''}" onclick="toggleBagItem('${item.id}')" id="btn-add-${item.id}">
            ${isInBag ? '✓ In Bahi' : 'Add to Bahi'}
          </button>
        </td>
      `;
      tbody.appendChild(tr);
    });
  }

  if (tfootTotal) tfootTotal.textContent = formatINR(totalValue);
  if (tfootCount) tfootCount.textContent = `Total Folio Register Value (${filtered.length} Specimen Items • ${formatNum(totalNetGrams)}g Pure Bullion):`;
}

// Filter button handling
window.setLedgerFilter = function(category, element) {
  activeFilter = category;
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
  if (element) element.classList.add('active');
  renderLedgerTable();
};

window.handleLedgerSearch = function(event) {
  searchQuery = event.target.value.trim();
  renderLedgerTable();
};

// --------------------------------------------------------------------------
// 5. Collections Gallery (Virasat & Sangrah Folios)
// --------------------------------------------------------------------------
function renderCollectionsGallery() {
  const container = document.getElementById('collectionsGalleryGrid');
  if (!container) return;

  const specimensToDisplay = SPECIMENS.filter(item => ['0845', '0846', '0847', '0842'].includes(item.id));

  container.innerHTML = specimensToDisplay.map(item => `
    <article class="folio-specimen-card">
      <div>
        <div class="card-top-meta">
          <span class="card-entry-code">Entry ${item.serial}</span>
          <span class="card-collection-badge">${item.hallmark}</span>
        </div>
        <div class="card-photo-mount">
          <img src="${item.image}" alt="${item.name}" class="card-photo" loading="lazy" />
          <div class="card-purity-tag">${item.karat}</div>
        </div>
        <h2 class="card-specimen-title">${item.name}</h2>
        <p class="card-specimen-desc">${item.desc}</p>
        <div class="card-spec-table">
          <div class="card-spec-row">
            <span class="spec-label">Purity Grade:</span>
            <span>${item.karat}</span>
          </div>
          <div class="card-spec-row">
            <span class="spec-label">Net Metal Weight:</span>
            <span style="font-weight:700; color:var(--color-primary);">${formatNum(item.netWeight)} Grams (${formatNum(item.netWeight / TOLA_GRAMS, 2)} Tola)</span>
          </div>
          <div class="card-spec-row">
            <span class="spec-label">HUID Certificate:</span>
            <span style="color:var(--color-stamp-red); font-weight:700;">${item.huid} (Assayer #JH-04)</span>
          </div>
        </div>
      </div>
      <div class="card-action-bar">
        <button class="btn-inspect-specimen" onclick="openSpecimenModal('${item.id}')">
          <span class="material-symbols-outlined" style="font-size:18px;">history_edu</span>
          Inspect Folio
        </button>
        <span class="card-ref-code">Ref: CHD-${item.id}</span>
      </div>
    </article>
  `).join('');
}

// --------------------------------------------------------------------------
// 6. Interactive Gold Rate Calculator & Traditional Estimate Slip
// --------------------------------------------------------------------------
let calcKarat = 22;
let calcWeight = 32.500;
let calcMaking = 8.5;

function initCalculator() {
  const karatBtns = document.querySelectorAll('.karat-btn');
  const weightSlider = document.getElementById('calcWeightSlider');
  const weightInput = document.getElementById('calcWeightInput');
  const makingSlider = document.getElementById('calcMakingSlider');
  const makingInput = document.getElementById('calcMakingInput');

  karatBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      karatBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      calcKarat = parseInt(btn.dataset.karat, 10);
      recalculateEstimate();
    });
  });

  if (weightSlider && weightInput) {
    weightSlider.addEventListener('input', (e) => {
      calcWeight = parseFloat(e.target.value);
      weightInput.value = calcWeight.toFixed(2);
      recalculateEstimate();
    });
    weightInput.addEventListener('change', (e) => {
      let val = parseFloat(e.target.value) || 1;
      val = Math.max(0.5, Math.min(val, 250));
      calcWeight = val;
      weightSlider.value = val;
      weightInput.value = val.toFixed(2);
      recalculateEstimate();
    });
  }

  if (makingSlider && makingInput) {
    makingSlider.addEventListener('input', (e) => {
      calcMaking = parseFloat(e.target.value);
      makingInput.value = calcMaking.toFixed(1);
      recalculateEstimate();
    });
    makingInput.addEventListener('change', (e) => {
      let val = parseFloat(e.target.value) || 5;
      val = Math.max(5, Math.min(val, 16));
      calcMaking = val;
      makingSlider.value = val;
      makingInput.value = val.toFixed(1);
      recalculateEstimate();
    });
  }

  recalculateEstimate();
}

function recalculateEstimate() {
  let ratePerGram = CURRENT_RATES.gold22;
  let karatLabel = "22K Standard (916 Hallmarked)";
  if (calcKarat === 24) {
    ratePerGram = CURRENT_RATES.gold24;
    karatLabel = "24K Pure (999 Bullion)";
  } else if (calcKarat === 18) {
    ratePerGram = CURRENT_RATES.gold18;
    karatLabel = "18K Diamond Standard (750)";
  }

  const baseBullionCost = Math.round(calcWeight * ratePerGram);
  const makingCharges = Math.round(baseBullionCost * (calcMaking / 100));
  const subtotal = baseBullionCost + makingCharges;
  const gstAmount = Math.round(subtotal * 0.03); // 3% statutory jewellery GST
  const grandTotal = subtotal + gstAmount;

  // Update DOM elements on Estimate Slip
  const elDate = document.getElementById('parchaDate');
  const elKarat = document.getElementById('parchaKarat');
  const elWeight = document.getElementById('parchaWeight');
  const elRate = document.getElementById('parchaRate');
  const elBase = document.getElementById('parchaBase');
  const elMaking = document.getElementById('parchaMaking');
  const elSubtotal = document.getElementById('parchaSubtotal');
  const elGST = document.getElementById('parchaGST');
  const elGrand = document.getElementById('parchaGrand');

  const today = new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
  if (elDate) elDate.textContent = today;
  if (elKarat) elKarat.textContent = karatLabel;
  if (elWeight) elWeight.textContent = `${formatNum(calcWeight, 3)} g (${formatNum(calcWeight / TOLA_GRAMS, 2)} Tola)`;
  if (elRate) elRate.textContent = `${formatINR(ratePerGram)} / g`;
  if (elBase) elBase.textContent = formatINR(baseBullionCost);
  if (elMaking) elMaking.textContent = `${formatINR(makingCharges)} (${calcMaking}%)`;
  if (elSubtotal) elSubtotal.textContent = formatINR(subtotal);
  if (elGST) elGST.textContent = `${formatINR(gstAmount)} (3%)`;
  if (elGrand) elGrand.textContent = formatINR(grandTotal);

  // Store estimate for sharing
  window.lastCalculatedEstimate = {
    karatLabel,
    weight: calcWeight,
    rate: ratePerGram,
    base: baseBullionCost,
    making: makingCharges,
    grand: grandTotal
  };
}

window.printEstimateSlip = function() {
  window.print();
};

window.sendEstimateWhatsApp = function() {
  const est = window.lastCalculatedEstimate;
  if (!est) return;
  const msg = `*Namaskar Chhaganlal Dayaljee Jewellers (Sakchi Gaddi)*%0A%0AI have calculated an estimate for custom jewellery:%0A- Purity: ${est.karatLabel}%0A- Net Weight: ${est.weight}g%0A- Metal Base: ${formatINR(est.base)}%0A- Making Charges: ${formatINR(est.making)}%0A- *Total Estimated Lekha:* ${formatINR(est.grand)}%0A%0APlease let me know your showroom availability for consultation.`;
  window.open(`https://wa.me/919835112345?text=${msg}`, '_blank');
};

// --------------------------------------------------------------------------
// 7. Bahi Bag (Shopping Ledger Drawer & Cart Actions)
// --------------------------------------------------------------------------
window.toggleBagItem = function(id) {
  const specimen = SPECIMENS.find(item => item.id === id);
  if (!specimen) return;

  const index = bahiBag.findIndex(item => item.id === id);
  if (index >= 0) {
    bahiBag.splice(index, 1);
    showToast(`Removed from Bahi: ${specimen.name}`);
  } else {
    bahiBag.push(specimen);
    showToast(`Inscribed in Bahi: ${specimen.name}`);
  }

  localStorage.setItem('chd_bahi_bag', JSON.stringify(bahiBag));
  updateBagUI();
  renderLedgerTable();
};

window.removeBagItem = function(id) {
  bahiBag = bahiBag.filter(item => item.id !== id);
  localStorage.setItem('chd_bahi_bag', JSON.stringify(bahiBag));
  updateBagUI();
  renderLedgerTable();
};

function updateBagUI() {
  const badge = document.getElementById('bagBadgeCount');
  const tabBadge = document.getElementById('tabBagCount');
  const drawerList = document.getElementById('drawerItemList');
  const drawerTotalWeight = document.getElementById('drawerTotalWeight');
  const drawerGrandTotal = document.getElementById('drawerGrandTotal');
  const drawerWaLink = document.getElementById('drawerWhatsAppBtn');

  if (badge) badge.textContent = bahiBag.length;
  if (tabBadge) tabBadge.textContent = `Bag (${bahiBag.length})`;

  if (!drawerList) return;

  if (bahiBag.length === 0) {
    drawerList.innerHTML = `
      <div class="bag-empty-notice">
        <span class="material-symbols-outlined" style="font-size: 42px; color: var(--color-stamp-red); display:block; margin-bottom: 0.5rem;">menu_book</span>
        Your Bahi ledger register is currently clear.<br/>
        Add heirloom specimens from the Vault Inward Register.
      </div>
    `;
    if (drawerTotalWeight) drawerTotalWeight.textContent = "0.000 g";
    if (drawerGrandTotal) drawerGrandTotal.textContent = formatINR(0);
    if (drawerWaLink) drawerWaLink.href = "javascript:void(0)";
    return;
  }

  let totalWeight = 0;
  let totalPrice = 0;

  drawerList.innerHTML = bahiBag.map(item => {
    totalWeight += item.netWeight;
    totalPrice += item.price;
    return `
      <div class="bag-item-card">
        <button class="btn-remove-item" onclick="removeBagItem('${item.id}')" title="Strike from ledger">✕</button>
        <div class="bag-item-title">${item.name}</div>
        <div class="bag-item-specs">
          ${item.karat} • Net: ${formatNum(item.netWeight)}g • ${item.hallmark}
        </div>
        <div class="bag-item-price">${formatINR(item.price)}</div>
      </div>
    `;
  }).join('');

  if (drawerTotalWeight) drawerTotalWeight.textContent = `${formatNum(totalWeight)} g (${formatNum(totalWeight / TOLA_GRAMS, 2)} Tola)`;
  if (drawerGrandTotal) drawerGrandTotal.textContent = formatINR(totalPrice);

  if (drawerWaLink) {
    const itemsSummary = bahiBag.map(i => `• ${i.name} (${i.serial}) - ${i.netWeight}g [${formatINR(i.price)}]`).join('%0A');
    const msg = `*Namaskar Chhaganlal Dayaljee Jewellers (Sakchi Gaddi)*%0A%0AI would like to inspect the following items from the Bahi-Khata ledger:%0A${itemsSummary}%0A%0A*Total Weight:* ${formatNum(totalWeight)}g%0A*Estimated Total:* ${formatINR(totalPrice)}%0A%0APlease confirm if these pieces are ready for preview at Sakchi showroom.`;
    drawerWaLink.href = `https://wa.me/919835112345?text=${msg}`;
  }
}

// --------------------------------------------------------------------------
// 8. Modals, Drawers & Trays Inspector
// --------------------------------------------------------------------------
function initModalsAndDrawers() {
  const drawerOverlay = document.getElementById('bahiDrawerOverlay');
  const bagOpenBtns = document.querySelectorAll('.open-bag-btn');
  const bagCloseBtn = document.getElementById('drawerCloseBtn');

  bagOpenBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (drawerOverlay) drawerOverlay.classList.add('open');
    });
  });

  if (bagCloseBtn && drawerOverlay) {
    bagCloseBtn.addEventListener('click', () => {
      drawerOverlay.classList.remove('open');
    });
    drawerOverlay.addEventListener('click', (e) => {
      if (e.target === drawerOverlay) {
        drawerOverlay.classList.remove('open');
      }
    });
  }

  // Specimen Inspect Modal
  const modalOverlay = document.getElementById('specimenModalOverlay');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  if (modalCloseBtn && modalOverlay) {
    modalCloseBtn.addEventListener('click', () => {
      modalOverlay.classList.remove('open');
    });
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('open');
      }
    });
  }
}

window.openSpecimenModal = function(id) {
  const item = SPECIMENS.find(i => i.id === id);
  if (!item) return;

  const modal = document.getElementById('specimenModalOverlay');
  const imgEl = document.getElementById('modalImg');
  const titleEl = document.getElementById('modalTitle');
  const serialEl = document.getElementById('modalSerial');
  const descEl = document.getElementById('modalDesc');
  const karatEl = document.getElementById('modalKarat');
  const weightEl = document.getElementById('modalWeight');
  const makingEl = document.getElementById('modalMaking');
  const priceEl = document.getElementById('modalPrice');
  const huidEl = document.getElementById('modalHuid');
  const actionBtn = document.getElementById('modalAddBagBtn');
  const waBtn = document.getElementById('modalWhatsAppBtn');

  if (imgEl) imgEl.src = item.image;
  if (titleEl) titleEl.textContent = item.name;
  if (serialEl) serialEl.textContent = `${item.serial} • ${item.hallmark}`;
  if (descEl) descEl.textContent = item.desc;
  if (karatEl) karatEl.textContent = item.karat;
  if (weightEl) weightEl.textContent = `Net: ${formatNum(item.netWeight)}g | Gross: ${formatNum(item.grossWeight)}g`;
  if (makingEl) makingEl.textContent = `${item.making}%`;
  if (priceEl) priceEl.textContent = formatINR(item.price);
  if (huidEl) huidEl.textContent = `${item.huid} (Sakchi Hallmarking Centre #JH-04)`;

  if (actionBtn) {
    const isInBag = bahiBag.some(bagItem => bagItem.id === item.id);
    actionBtn.textContent = isInBag ? '✓ Inscribed in Bahi' : 'Add to Bahi Register';
    actionBtn.onclick = () => {
      toggleBagItem(item.id);
      openSpecimenModal(item.id); // refresh button text
    };
  }

  if (waBtn) {
    const msg = `*Namaskar Chhaganlal Dayaljee Jewellers (Sakchi Gaddi)*%0A%0AI would like to inspect specimen: *${item.name}* (${item.serial}).%0APurity: ${item.karat}%0AWeight: ${item.netWeight}g%0APrice: ${formatINR(item.price)}%0A%0APlease confirm appointment timing.`;
    waBtn.href = `https://wa.me/919835112345?text=${msg}`;
  }

  if (modal) modal.classList.add('open');
};

// --------------------------------------------------------------------------
// 9. BIS Hallmark & HUID Verifier Simulator
// --------------------------------------------------------------------------
function initHallmarkVerifier() {
  const verifyBtn = document.getElementById('btnVerifyHuid');
  const inputEl = document.getElementById('huidInput');
  const resultBox = document.getElementById('huidResultBox');

  if (!verifyBtn || !inputEl || !resultBox) return;

  verifyBtn.addEventListener('click', () => {
    const code = inputEl.value.trim().toUpperCase();
    if (!code || code.length < 5) {
      resultBox.innerHTML = `
        <span style="color:var(--color-stamp-red); font-weight:700;">⚠ Please enter a valid 6-character HUID hallmark code (e.g., JH04K1 or JH04B5).</span>
      `;
      resultBox.className = 'huid-result-box error';
      return;
    }

    const matched = SPECIMENS.find(s => s.huid === code);
    if (matched) {
      resultBox.innerHTML = `
        <div style="color:#1b6334; font-weight:700; margin-bottom:0.25rem;">
          ✓ VERIFIED BIS HALLMARKED RECORD — SAKCHI ASSAYER #JH-04
        </div>
        <div><strong>Specimen:</strong> ${matched.name} (${matched.serial})</div>
        <div><strong>Purity:</strong> ${matched.karat} (Bureau of Indian Standards Certified)</div>
        <div><strong>Net Bullion Weight:</strong> ${formatNum(matched.netWeight)} grams</div>
        <div><strong>Assayer Ledger Entry:</strong> Samvat 2081 • Sakchi Bazar Showroom Vault</div>
      `;
      resultBox.className = 'huid-result-box';
    } else {
      resultBox.innerHTML = `
        <div style="color:#1b6334; font-weight:700; margin-bottom:0.25rem;">
          ✓ OFFICIAL BIS HALLMARK VERIFIED
        </div>
        <div><strong>Assaying Centre:</strong> Sakchi Gold Testing & Hallmarking Centre (JH-04)</div>
        <div><strong>Jeweller:</strong> Chhaganlal Dayaljee Jewellers (CHD The Original)</div>
        <div><strong>Bullion Grade:</strong> 22KT (916 Standard) / 100% Assayed Purity</div>
        <div style="font-size:0.78rem; color:var(--color-on-surface-variant); margin-top:0.35rem;">
          Hallmark Unique Identification (HUID) code "${code}" is logged in accordance with BIS guidelines.
        </div>
      `;
      resultBox.className = 'huid-result-box';
    }
  });
}

// --------------------------------------------------------------------------
// 10. Appointment Booking Form
// --------------------------------------------------------------------------
function initAppointmentBooking() {
  const form = document.getElementById('appointmentForm');
  const responseBox = document.getElementById('appointmentResponse');
  if (!form || !responseBox) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('aptName').value.trim();
    const phone = document.getElementById('aptPhone').value.trim();
    const date = document.getElementById('aptDate').value;
    const purpose = document.getElementById('aptPurpose').value;

    const tokenNumber = 'CHD-APT-' + Math.floor(1000 + Math.random() * 9000);

    responseBox.style.display = 'block';
    responseBox.innerHTML = `
      <div style="background:#fff9ee; border:2px dashed #b3262e; padding:1.25rem; margin-top:1rem; text-align:center;">
        <div style="font-family:var(--font-display); font-size:1.2rem; color:var(--color-primary); font-weight:700;">
          ॥ दर्शन समय निश्चित ॥ Appointment Confirmed
        </div>
        <div style="font-family:var(--font-mono); font-size:0.85rem; color:var(--color-stamp-red); font-weight:700; margin:0.5rem 0;">
          TOKEN: ${tokenNumber}
        </div>
        <p style="font-size:0.9rem; color:var(--color-ink-blueblack);">
          Respected <strong>${name}</strong>, your private preview for <em>${purpose}</em> has been entered in our Sakchi Bazar Gaddi calendar for <strong>${date}</strong>.
        </p>
        <p style="font-size:0.8rem; color:var(--color-on-surface-variant); margin-top:0.4rem;">
          A copy has been forwarded to ${phone}. We await your sacred visit.
        </p>
      </div>
    `;
    form.reset();
    showToast(`Appointment booked! Token: ${tokenNumber}`);
  });
}

// --------------------------------------------------------------------------
// 11. Staggered Ledger Index Tabs Navigation
// --------------------------------------------------------------------------
function initNavigationTabs() {
  const tabs = document.querySelectorAll('.index-tab');

  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      const targetId = tab.dataset.target;
      if (!targetId) return;
      e.preventDefault();

      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Highlight active tab on scroll
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 200;
    const sections = ['section-hero', 'section-ledger', 'section-gallery', 'section-calc', 'section-heritage', 'section-verifier', 'section-visit'];

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          tabs.forEach(t => {
            if (t.dataset.target === id) {
              tabs.forEach(tab => tab.classList.remove('active'));
              t.classList.add('active');
            }
          });
        }
      }
    });
  });
}

// --------------------------------------------------------------------------
// 12. Utility Toast Notifications
// --------------------------------------------------------------------------
function showToast(message) {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span class="material-symbols-outlined" style="font-size:18px; color:var(--color-secondary-gold);">verified</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}
