const GAME_TIME = 45;

const products = [
  { id: 1, name: 'Game Card', price: 120, stock: 5, category: 'ไอที & เกม', clue: 'ของเล็ก ๆ ที่ทำหน้าที่เติมพลังให้เกมเริ่มต้นโดยไม่ต้องใช้มือควบคุม' },
  { id: 2, name: 'Mouse', price: 220, stock: 4, category: 'อุปกรณ์คอมพิวเตอร์', clue: 'สิ่งที่ยืนบนโต๊ะและช่วยให้มือเคลื่อนไหวแบบไร้เสียงแต่แม่นยำ' },
  { id: 3, name: 'Headset', price: 350, stock: 3, category: 'อุปกรณ์สื่อสาร', clue: 'สิ่งที่คลุมหูและปล่อยให้เสียงจากโลกกายต้องผ่านตัวมันก่อนถึงหู' },
  { id: 4, name: 'Keyboard', price: 480, stock: 2, category: 'อุปกรณ์พิมพ์', clue: 'บล็อกของปุ่มที่มีเรื่องเล่าด้วยเสียงกดและคำสั่งที่รวดเร็ว' },
  { id: 5, name: 'Console', price: 680, stock: 2, category: 'อุปกรณ์เกม', clue: 'ห้องควบคุมที่อยู่กลางบ้านและเปิดประตูสู่โลกจินตนาการ' },
  { id: 6, name: 'Controller', price: 290, stock: 3, category: 'อุปกรณ์เกม', clue: 'มือจำลองที่อยู่ในฝ่ามือและคอยบอกให้โลกเสมือนเคลื่อนไหว' },
  { id: 7, name: 'Monitor', price: 560, stock: 3, category: 'ไอที', clue: 'หน้าจอที่ยืนพิงอยู่กับแท่นแล้วคอยถ่ายทอดภาพจากโลกดิจิทัล' },
  { id: 8, name: 'USB Drive', price: 150, stock: 6, category: 'อุปกรณ์จัดเก็บ', clue: 'ของเล็ก ๆ ที่กลายเป็นกระเป๋าขยะข้อมูลสำหรับทุกเล็กทุกน้อย' },
  { id: 9, name: 'Laptop Stand', price: 310, stock: 4, category: 'อุปกรณ์สำนักงาน', clue: 'สิ่งที่ยกเครื่องคิดเลขอัจฉริยะให้สูงขึ้นเพื่อให้มือและคอผ่อนคลาย' },
  { id: 10, name: 'Webcam', price: 420, stock: 3, category: 'กล้อง', clue: 'ตาเล็ก ๆ ที่ยืนเฝ้าห้องและปล่อยภาพออกไปยังคนอื่น' },
  { id: 11, name: 'Chair', price: 740, stock: 2, category: 'เฟอร์นิเจอร์', clue: 'ที่นั่งที่มีชีวิตเพื่อรับมือกับอาการปวดหลังหลังทำงานทั้งคืน' },
  { id: 12, name: 'Microphone', price: 390, stock: 4, category: 'อุปกรณ์เสียง', clue: 'ความเงียบต้องมีคนคอยจับและส่งเสียงกลับออกไปให้ฟัง' },
  { id: 13, name: 'Desk Lamp', price: 180, stock: 5, category: 'ของใช้ในบ้าน', clue: 'แสงที่ยืนอยู่ข้างโต๊ะและทำงานเฉพาะตอนที่ทุกอย่างมืดลง' },
  { id: 14, name: 'Router', price: 520, stock: 3, category: 'โครงข่าย', clue: 'คนส่งสารที่ยืนอยู่กึ่งกลางห้องและกระจายข่าวสารไปทุกมุม' },
  { id: 15, name: 'Speaker', price: 260, stock: 5, category: 'อุปกรณ์เสียง', clue: 'ถังเสียงที่ทำหน้าที่พาเพลงออกจากจุดหนึ่งไปทั่วห้อง' },
  { id: 16, name: 'Backpack', price: 420, stock: 4, category: 'เดินทาง', clue: 'กระเป๋าที่ยกทุกสิ่งของขึ้นมาแล้วพกติดตัวไปทุกที่' },
  { id: 17, name: 'Tablet', price: 610, stock: 3, category: 'อุปกรณ์พกพา', clue: 'หน้าจอที่มีความฉลาดมากกว่าหนังสือแต่เล็กกว่าคอมพิวเตอร์' },
  { id: 18, name: 'Smartwatch', price: 470, stock: 5, category: 'อุปกรณ์สวมใส่', clue: 'นาฬิกาที่ไม่ใช่แค่ดูเวลา แต่ยังคอยติดตามทุกก้าวที่คุณทำ' }
];

const categoryOrder = [...new Set(products.map((product) => product.category))];

const state = {
  score: 0,
  totalPrice: 0,
  level: 1,
  round: 1,
  targetId: null,
  selectedCategory: null,
  progressionMode: false,
  currentCategory: categoryOrder[0],
  successfulOrders: 0,
  streak: 0,
  timer: GAME_TIME,
  gameOver: false,
  started: false,
  muted: false,
  language: 'th',
  lastStatus: 'Ready to order!',
  history: [],
  timerId: null,
  audioContext: null
};

const texts = {
  th: {
    startRound: 'เริ่มรอบ',
    soundOn: 'เสียง: เปิด',
    soundOff: 'เสียง: ปิด',
    resetGame: 'รีเซ็ตเกม',
    score: 'คะแนน',
    totalPrice: 'รวมราคา',
    level: 'เลเวล',
    round: 'รอบ',
    timeLeft: 'เวลาเหลือ',
    combo: 'คอมโบ',
    questTarget: 'เป้าหมาย',
      ready: 'พร้อมสั่งสินค้า! กดเริ่มรอบเพื่อเริ่มเล่น',
    startRoundStatus: 'เริ่มรอบแล้ว! ใช้คำใบ้เพื่อหาสินค้าที่ถูกต้อง',
    chooseCategory: 'เลือกหมวดหมู่สินค้า',
    allCategories: 'หมวดหมู่ทั้งหมด',
    backToAll: 'กลับไปหมวดหมู่ทั้งหมด',
    howToPlay: 'วิธีเล่น',
    help1: 'กดปุ่ม <strong>เริ่มรอบ</strong> เพื่อเริ่มนับเวลา',
    help2: 'ใช้คำใบ้จาก <strong>เป้าหมาย</strong> ด้านบนเพื่อเดาสินค้าที่ต้องสั่ง',
    help3: 'กดปุ่ม <strong>ซื้อ</strong> ของสินค้าที่ตรงกับคำใบ้',
    help4: 'ซื้อผิดหรือซื้อสินค้าที่หมด stock จะเสียคะแนนและ combo จะ reset',
    help5: 'ซื้อถูกต่อเนื่องจะเพิ่ม combo และคะแนนมากขึ้น',
    products: 'สินค้า',
    history: 'ประวัติการซื้อ',
    records: 'รายการ',
    buy: 'ซื้อ',
    stock: 'สต็อก',
    soldOut: 'หมด',
    roundLabel: 'รอบ',
    pressStart: 'กรุณาเริ่มรอบก่อนซื้อสินค้า',
    gameOver: 'เกมจบ! เวลาหมด คะแนนสุดท้าย:',
    roundStarted: 'เริ่มรอบแล้ว! ใช้คำใบ้เพื่อหาสินค้าที่ถูกต้อง',
    allSoldOut: 'สินค้าหมดแล้ว กดรีเซ็ตเกมเพื่อเล่นใหม่',
    pleaseStart: 'กดเริ่มรอบก่อนซื้อสินค้า',
    gameReset: 'รีเซ็ตเกมแล้ว กดเริ่มรอบเพื่อเริ่มเล่น',
    noHistory: 'ยังไม่มีประวัติการซื้อ',
    loading: 'กำลังโหลด...'
  },
  en: {
    startRound: 'Start Round',
    soundOn: 'Sound: On',
    soundOff: 'Sound: Off',
    resetGame: 'Reset Game',
    score: 'Score',
    totalPrice: 'Total Price',
    level: 'Level',
    round: 'Round',
    timeLeft: 'Time Left',
    combo: 'Combo',
    questTarget: 'Quest Target',
    ready: 'Ready to order! Press Start Round to begin.',
    startRoundStatus: 'Round started! Use the clue to find the right item!',
    chooseCategory: 'Choose a category',
    allCategories: 'All Categories',
    backToAll: 'Back to All Categories',
    howToPlay: 'How to Play',
    help1: 'Press <strong>Start Round</strong> to begin the timer',
    help2: 'Use the clue from <strong>Quest Target</strong> to guess the correct item',
    help3: 'Press <strong>Buy</strong> on the item that matches the clue',
    help4: 'Wrong purchases or out-of-stock items reduce score and reset the combo',
    help5: 'Correct streaks increase combo and score faster',
    products: 'Products',
    history: 'Purchase History',
    records: 'records',
    buy: 'Buy',
    stock: 'Stock',
    soldOut: 'Sold Out',
    roundLabel: 'Round',
    pressStart: 'Please press Start Round before buying.',
    gameOver: 'Game Over! Time is up. Final score:',
    roundStarted: 'Round started! Use the clue to find the right item!',
    allSoldOut: 'All products are sold out. Press Reset Game to play again!',
    pleaseStart: 'Please press Start Round before buying.',
    gameReset: 'Game reset. Press Start Round to begin!',
    noHistory: 'No purchase history yet.',
    loading: 'Loading...'
  }
};

const scoreValue = document.getElementById('scoreValue');
const totalPriceValue = document.getElementById('totalPriceValue');
const levelValue = document.getElementById('levelValue');
const roundValue = document.getElementById('roundValue');
const timerValue = document.getElementById('timerValue');
const streakValue = document.getElementById('streakValue');
const targetProduct = document.getElementById('targetProduct');
const statusBox = document.getElementById('statusBox');
const productGrid = document.getElementById('productGrid');
const stockSummary = document.getElementById('stockSummary');
const historyList = document.getElementById('historyList');
const historyCount = document.getElementById('historyCount');
const startBtn = document.getElementById('startBtn');
const soundBtn = document.getElementById('soundBtn');
const langBtn = document.getElementById('langBtn');
const resetBtn = document.getElementById('resetBtn');
const questTargetLabel = document.getElementById('questTargetLabel');
const productsTitle = document.getElementById('productsTitle');
const purchaseHistoryTitle = document.getElementById('purchaseHistoryTitle');
const howToPlayTitle = document.getElementById('howToPlayTitle');
const help1 = document.getElementById('help1');
const help2 = document.getElementById('help2');
const help3 = document.getElementById('help3');
const help4 = document.getElementById('help4');
const help5 = document.getElementById('help5');
const categoryTabs = document.getElementById('categoryTabs');
const backToCategoriesBtn = document.getElementById('backToCategoriesBtn');

function getThemeClass(category) {
  const themeMap = {
    'ไอที & เกม': 'theme-tech',
    'อุปกรณ์คอมพิวเตอร์': 'theme-computer',
    'อุปกรณ์สื่อสาร': 'theme-communication',
    'อุปกรณ์พิมพ์': 'theme-print',
    'อุปกรณ์เกม': 'theme-gaming',
    'ไอที': 'theme-tech',
    'อุปกรณ์จัดเก็บ': 'theme-storage',
    'อุปกรณ์สำนักงาน': 'theme-office',
    'กล้อง': 'theme-camera',
    'เฟอร์นิเจอร์': 'theme-furniture',
    'อุปกรณ์เสียง': 'theme-audio',
    'ของใช้ในบ้าน': 'theme-home',
    'โครงข่าย': 'theme-network',
    'เดินทาง': 'theme-travel',
    'อุปกรณ์พกพา': 'theme-mobile',
    'อุปกรณ์สวมใส่': 'theme-wearable'
  };

  return themeMap[category] || 'theme-generic';
}

function getVisibleProducts() {
  if (!state.selectedCategory) {
    return [];
  }

  return products.filter((product) => product.category === state.selectedCategory);
}

function getTargetProduct() {
  const productPool = state.selectedCategory ? getVisibleProducts() : products;
  const availableProducts = productPool.filter((product) => product.stock > 0);
  if (!availableProducts.length) {
    return null;
  }
  return availableProducts[Math.floor(Math.random() * availableProducts.length)];
}

function setSelectedCategory(categoryName) {
  const validCategory = categoryOrder.includes(categoryName) ? categoryName : null;
  state.selectedCategory = validCategory;

  if (validCategory) {
    const nextTarget = getTargetProduct();
    state.targetId = nextTarget ? nextTarget.id : null;
    productsTitle.textContent = validCategory;
    const label = state.language === 'th' ? 'หมวดที่เลือก' : 'Selected category';
    updateStatus(`${label}: ${validCategory}`, 'neutral');
  } else {
    state.targetId = null;
    productsTitle.textContent = state.language === 'th' ? 'หมวดหมู่ทั้งหมด' : 'All Categories';
    updateStatus(state.language === 'th' ? 'เลือกหมวดหมู่สินค้า' : 'Choose a category', 'neutral');
  }

  render();
}

function advanceProgressionCategory() {
  if (!state.progressionMode) return;

  const currentIndex = categoryOrder.indexOf(state.currentCategory || categoryOrder[0]);
  const nextIndex = (currentIndex + 1) % categoryOrder.length;
  state.currentCategory = categoryOrder[nextIndex];
}

function updateStatus(message, type = 'neutral') {
  state.lastStatus = message;
  statusBox.textContent = message;
  statusBox.className = `status-box ${type}`;
}

function setSoundState() {
  const current = texts[state.language];
  soundBtn.textContent = state.muted ? current.soundOff : current.soundOn;
}

function ensureAudio() {
  if (state.muted) return null;

  const AudioCtor = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtor) return null;

  if (!state.audioContext) {
    state.audioContext = new AudioCtor();
  }

  if (state.audioContext.state === 'suspended') {
    state.audioContext.resume();
  }

  return state.audioContext;
}

function playTone(frequency, duration, type = 'sine', volume = 0.04, delay = 0) {
  const context = ensureAudio();
  if (!context) return;

  const oscillator = context.createOscillator();
  const gain = context.createGain();

  oscillator.type = type;
  oscillator.frequency.value = frequency;
  gain.gain.value = volume;

  oscillator.connect(gain);
  gain.connect(context.destination);

  const startTime = context.currentTime + delay;
  oscillator.start(startTime);
  oscillator.stop(startTime + duration);

  gain.gain.setValueAtTime(volume, startTime);
  gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
}

function playSfx(type) {
  if (type === 'success') {
    playTone(660, 0.12, 'triangle', 0.05);
    setTimeout(() => playTone(880, 0.14, 'triangle', 0.04), 110);
  } else if (type === 'error') {
    playTone(240, 0.18, 'sawtooth', 0.06);
    setTimeout(() => playTone(170, 0.18, 'sawtooth', 0.05), 80);
  } else if (type === 'warning') {
    playTone(310, 0.12, 'square', 0.05);
  }
}

function getTargetClue() {
  const target = products.find((product) => product.id === state.targetId);

  if (!target) {
    return 'No stock left';
  }

  return `คำใบ้: ${target.clue}`;
}

function t(key) {
  return texts[state.language][key] || texts.en[key] || key;
}

function updateLanguageUI() {
  const current = texts[state.language];
  startBtn.textContent = current.startRound;
  soundBtn.textContent = state.muted ? current.soundOff : current.soundOn;
  langBtn.textContent = state.language === 'th' ? 'ไทย / EN' : 'EN / ไทย';
  resetBtn.textContent = current.resetGame;
  scoreValue.closest('.stat-box').querySelector('span').textContent = current.score;
  totalPriceValue.closest('.stat-box').querySelector('span').textContent = current.totalPrice;
  levelValue.closest('.stat-box').querySelector('span').textContent = current.level;
  roundValue.closest('.stat-box').querySelector('span').textContent = current.round;
  timerValue.closest('.stat-box').querySelector('span').textContent = current.timeLeft;
  streakValue.closest('.stat-box').querySelector('span').textContent = current.combo;
  questTargetLabel.textContent = current.questTarget;
  howToPlayTitle.textContent = current.howToPlay;
  productsTitle.textContent = state.selectedCategory ? state.selectedCategory : current.allCategories;
  purchaseHistoryTitle.textContent = current.history;

  help1.innerHTML = current.help1;
  help2.innerHTML = current.help2;
  help3.innerHTML = current.help3;
  help4.textContent = current.help4;
  help5.textContent = current.help5;

  const totalStock = products.reduce((sum, product) => sum + product.stock, 0);
  stockSummary.textContent = `${totalStock} ${current.records.toLowerCase() === 'records' ? 'items in stock' : 'สินค้าในคลัง'}`;

  if (!state.history.length) {
    historyCount.textContent = `0 ${current.records}`;
  } else {
    historyCount.textContent = `${state.history.length} ${current.records}`;
  }

  if (!state.started && !state.gameOver) {
    updateStatus(current.ready, 'neutral');
  }
}

function renderCategoryTabs() {
  categoryTabs.innerHTML = '';

  categoryOrder.forEach((category) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `category-tab ${state.selectedCategory === category ? 'active' : ''}`;
    button.textContent = category;
    button.addEventListener('click', () => setSelectedCategory(category));
    categoryTabs.appendChild(button);
  });

  productsTitle.textContent = state.selectedCategory ? state.selectedCategory : (state.language === 'th' ? 'หมวดหมู่ทั้งหมด' : 'All Categories');
  backToCategoriesBtn.style.display = state.selectedCategory ? 'inline-flex' : 'none';
  backToCategoriesBtn.textContent = state.language === 'th' ? 'กลับไปหมวดหมู่ทั้งหมด' : 'Back to All Categories';
}

function renderCategoryOverview() {
  productGrid.innerHTML = '';

  categoryOrder.forEach((category) => {
    const categoryProducts = products.filter((product) => product.category === category);
    const card = document.createElement('button');
    card.type = 'button';
    card.className = `category-overview-card ${getThemeClass(category)}`;
    card.innerHTML = `
      <span class="category-overview-name">${category}</span>
      <span class="category-overview-count">${categoryProducts.length} ${state.language === 'th' ? 'สินค้า' : 'items'}</span>
    `;

    card.addEventListener('click', () => setSelectedCategory(category));
    productGrid.appendChild(card);
  });
}

function renderStats() {
  scoreValue.textContent = state.score;
  totalPriceValue.textContent = `$${state.totalPrice}`;
  levelValue.textContent = state.level;
  roundValue.textContent = state.round;
  timerValue.textContent = `${state.timer}s`;
  streakValue.textContent = `${state.streak}x`;

  if (state.timer <= 10) {
    timerValue.classList.add('low-time');
  } else {
    timerValue.classList.remove('low-time');
  }

  if (!state.selectedCategory) {
    targetProduct.textContent = state.language === 'th' ? 'เลือกหมวดหมู่สินค้า' : 'Choose a category';
  } else {
    targetProduct.textContent = getTargetClue();
  }

  const displayedProducts = state.selectedCategory ? getVisibleProducts() : products;
  const totalStock = displayedProducts.reduce((sum, product) => sum + product.stock, 0);
  const stockLabel = state.language === 'th' ? 'สินค้าในคลัง' : 'items in stock';
  stockSummary.textContent = `${totalStock} ${stockLabel}`;
}

function renderProducts() {
  productGrid.innerHTML = '';

  if (!state.selectedCategory) {
    renderCategoryOverview();
    return;
  }

  const visibleProducts = getVisibleProducts();
  if (!visibleProducts.length) {
    const empty = document.createElement('div');
    empty.className = 'status-box warning';
    empty.textContent = state.language === 'th' ? 'ไม่มีสินค้าในหมวดนี้' : 'No products in this category';
    productGrid.appendChild(empty);
    return;
  }

  visibleProducts.forEach((product) => {
    const card = document.createElement('article');
    card.className = `product-card ${getThemeClass(product.category)} ${product.stock === 0 ? 'out-of-stock' : ''}`;

    const isDisabled = product.stock === 0 || state.gameOver || !state.started;
    const buyLabel = t('buy');
    const stockLabel = `${t('stock')}: ${product.stock}`;
    const badgeText = product.stock === 0 ? t('soldOut') : product.category;
    card.innerHTML = `
      <div class="product-badge">${badgeText}</div>
      <h4>${product.name}</h4>
      <div class="product-meta">${t('roundLabel')} ${state.round}</div>
      <div class="product-price">$${product.price}</div>
      <div class="product-actions">
        <span class="stock-tag">${stockLabel}</span>
        <button class="order-btn" ${isDisabled ? 'disabled' : ''}>${buyLabel}</button>
      </div>
    `;

    const button = card.querySelector('.order-btn');
    button.addEventListener('click', () => buyProduct(product.id));

    productGrid.appendChild(card);
  });
}

function addHistory(type, message) {
  state.history.unshift({
    type,
    message,
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
  });

  state.history = state.history.slice(0, 10);
}

function renderHistory() {
  historyCount.textContent = `${state.history.length} ${state.language === 'th' ? 'รายการ' : 'records'}`;
  historyList.innerHTML = '';

  if (!state.history.length) {
    const emptyItem = document.createElement('li');
    emptyItem.className = 'history-item warning';
    emptyItem.innerHTML = `<span class="history-message">${t('noHistory')}</span>`;
    historyList.appendChild(emptyItem);
    return;
  }

  state.history.forEach((entry) => {
    const item = document.createElement('li');
    item.className = `history-item ${entry.type}`;
    item.innerHTML = `
      <span class="history-message">${entry.message}</span>
      <span class="history-time">${entry.time}</span>
    `;
    historyList.appendChild(item);
  });
}

function endGame() {
  state.gameOver = true;
  state.started = false;
  clearInterval(state.timerId);
  const message = `${t('gameOver')} ${state.score}.`;
  updateStatus(message, 'error');
  addHistory('error', message);
  render();
  playSfx('error');
}

function startTimer() {
  if (state.gameOver) {
    return;
  }

  clearInterval(state.timerId);
  state.started = true;
  updateStatus(t('startRoundStatus'), 'neutral');

  state.timerId = setInterval(() => {
    if (state.gameOver || !state.started) {
      return;
    }

    state.timer -= 1;

    if (state.timer <= 0) {
      state.timer = 0;
      endGame();
      return;
    }

    renderStats();
  }, 1000);
}

function buyProduct(productId) {
  if (!state.started) {
    updateStatus(t('pressStart'), 'warning');
    playSfx('warning');
    return;
  }

  if (state.gameOver) {
    return;
  }

  const product = products.find((item) => item.id === productId);

  if (!product) {
    updateStatus('Product not found.', 'error');
    playSfx('error');
    return;
  }

  if (product.stock <= 0) {
    const message = state.language === 'th' ? `สินค้าหมด: ${product.name} โปรดเลือกสินค้าอื่น` : `Out of stock: ${product.name}. Try another item.`;
    updateStatus(message, 'warning');
    addHistory('warning', message);
    state.score = Math.max(0, state.score - 10);
    state.streak = 0;
    playSfx('warning');
    render();
    return;
  }

  if (product.id !== state.targetId) {
    const penalty = 3 + Math.min(7, state.streak);
    state.timer = Math.max(0, state.timer - penalty);
    const targetName = products.find((item) => item.id === state.targetId)?.name || 'unknown';
    const message = state.language === 'th'
      ? `ซื้อผิด! คุณซื้อ ${product.name} แต่เป้าหมายคือ ${targetName}. (-${penalty}s)`
      : `ซื้อผิด! You ordered ${product.name}, but the target was ${targetName}. (-${penalty}s)`;
    updateStatus(message, 'error');
    addHistory('error', message);
    state.score = Math.max(0, state.score - 20);
    state.streak = 0;
    playSfx('error');

    if (state.timer <= 0) {
      endGame();
      return;
    }

    render();
    return;
  }

  product.stock -= 1;
  state.totalPrice += product.price;
  state.streak += 1;
  const timeBonus = 3 + Math.min(7, state.streak);
  state.timer = Math.min(GAME_TIME + 15, state.timer + timeBonus);
  const comboBonus = state.streak > 1 ? state.streak * 15 : 0;
  state.score += product.price + 25 + comboBonus;
  state.successfulOrders += 1;

  const comboText = state.streak > 1 ? ` Combo x${state.streak}!` : '';
  const message = state.language === 'th'
    ? `ซื้อสำเร็จ! ${product.name} ถูกสั่งเรียบร้อยแล้ว.${comboText} (+${timeBonus}s)`
    : `ซื้อสำเร็จ! ${product.name} has been ordered.${comboText} (+${timeBonus}s)`;
  updateStatus(message, 'success');
  addHistory('success', message);
  playSfx('success');

  if (state.successfulOrders >= 3) {
    state.level += 1;
    state.round += 1;
    state.successfulOrders = 0;
    const levelUpMessage = state.language === 'th'
      ? `เลเวลขึ้น! คุณถึงเลเวล ${state.level} แล้ว`
      : `Level up! You reached level ${state.level}.`;
    updateStatus(levelUpMessage, 'success');
    addHistory('success', levelUpMessage);
  }

  if (state.progressionMode) {
    advanceProgressionCategory();
  }

  const nextTarget = getTargetProduct();
  state.targetId = nextTarget ? nextTarget.id : null;

  if (!state.targetId) {
    const soldOutMessage = state.language === 'th'
      ? 'สินค้าหมดแล้ว กดรีเซ็ตเกมเพื่อเล่นใหม่' 
      : 'All products are sold out. Press Reset Game to play again!';
    updateStatus(soldOutMessage, 'warning');
    addHistory('warning', soldOutMessage);
  }

  render();
}

function render() {
  renderCategoryTabs();
  renderStats();
  renderProducts();
  renderHistory();
}

function resetGame() {
  clearInterval(state.timerId);

  products.forEach((product) => {
    product.stock = 5;
    if (product.id === 4 || product.id === 5) product.stock = 2;
    if (product.id === 6) product.stock = 3;
  });

  state.score = 0;
  state.totalPrice = 0;
  state.level = 1;
  state.round = 1;
  state.successfulOrders = 0;
  state.streak = 0;
  state.timer = GAME_TIME;
  state.gameOver = false;
  state.started = false;
  state.history = [];
  state.selectedCategory = null;
  state.targetId = null;

  if (state.progressionMode) {
    state.currentCategory = categoryOrder[0];
  }

  addHistory('success', t('gameReset'));
  updateStatus(t('ready'), 'neutral');
}

startBtn.addEventListener('click', () => {
  if (state.started && !state.gameOver) {
    updateStatus(state.language === 'th' ? 'รอบกำลังทำงานอยู่' : 'The round is already running.', 'neutral');
    return;
  }

  if (state.gameOver) {
    resetGame();
  }

  if (!state.selectedCategory) {
    state.selectedCategory = categoryOrder[0];
    const nextTarget = getTargetProduct();
    state.targetId = nextTarget ? nextTarget.id : null;
  }

  ensureAudio();
  startTimer();
  render();
});

soundBtn.addEventListener('click', () => {
  state.muted = !state.muted;
  setSoundState();
  updateLanguageUI();
});

langBtn.addEventListener('click', () => {
  state.language = state.language === 'th' ? 'en' : 'th';
  updateLanguageUI();
  render();
});

resetBtn.addEventListener('click', () => {
  ensureAudio();
  resetGame();
});

backToCategoriesBtn.addEventListener('click', () => {
  state.selectedCategory = null;
  state.targetId = null;
  productsTitle.textContent = state.language === 'th' ? 'หมวดหมู่ทั้งหมด' : 'All Categories';
  updateStatus(state.language === 'th' ? 'กลับไปหมวดหมู่ทั้งหมด' : 'Back to all categories', 'neutral');
  render();
});

setSoundState();
updateLanguageUI();
resetGame();
render();
