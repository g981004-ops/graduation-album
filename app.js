/* ===== Lyrics Data ===== */
const lyricsData = {
  1: [
    { label: 'Intro', lines: ['Yeah', 'NCNU IBS let\'s go'] },
    { label: 'Verse 1', lines: [
      '第一天走進來有點陌生', '抽直屬那刻命運開始發生',
      '名字記不住但感覺很真', '四年故事慢慢升溫', '',
      { names: '俊真 玉蒙 之一 又尼' }, { names: '解如 勝訊 芷偉 培杰' },
      { names: '應學 立加 彥成 一語' }, { names: '宏宇 子婷 紫量 雲之' }, '',
      { names: '宗彥 建議 珊榮 彩琴' }, { names: '雲成 玉山 欣妮 偉博' },
      { names: '信鞍 雨哲 品認 玉層' }, { names: '會移 若純 預期 雲方' }
    ]},
    { label: 'Hook', lines: [
      '我們慢慢靠近', '變成彼此的風景', '這段路不安靜', '卻走得很用心'
    ]},
    { label: 'Verse 2', lines: [
      '夜市吃粗飽 笑聲停不了', '划輕艇翻船還繼續鬧',
      '國企運動會 全場在叫', '鬼屋嚇到失控還在跑', '',
      '耶晚燈光閃到最高', '青春就在這一秒', '',
      { names: '運緊 庭云 楷升 郡良' }, { names: '飛娜 佳玲 帶玲 玉文' },
      { names: '俊祥 名花 順力 威威' }, { names: '岳秀 得洪 業浩 詳信' }, '',
      { names: '冰林 語折 匆節 嘉心' }, { names: '風量 衣停 移真 婕羽' },
      { names: '人家 佳俊 子成 斐如' }, { names: '彩君 普恩 仁章 建奇' }
    ]},
    { label: 'Hook 2', lines: [
      '那些瘋狂畫面', '現在變成紀念', '當時間往前', '才發現不會重演'
    ]},
    { label: 'Verse 3', lines: [
      '企專報告做到天亮', '改了幾版還是一樣慌',
      '但我們沒有投降', '因為身邊還有一群人在扛', '',
      '交換生活開始不一樣', '實習讓未來慢慢有形狀', '',
      { names: '建真 琪佑 思羽 紫訊' }, { names: '慶楊 姍以 聖新 葛飛' },
      { names: '凱倫 號文 聖贏 移贏' }, { names: '品涵 紫然 配懸 保真' }, '',
      { names: '永祥 書為 依寧 宜玲' }, { names: '信義 紫雲 碩換 威俊' },
      { names: '宣容 紫因 晉元 瑠玲' }, { names: '彩薇 惠瑜 羽芸 會愈' }
    ]},
    { label: 'Bridge', lines: [
      '時間走太快', '來不及重來', '那些普通日子', '現在最珍貴存在', '',
      { names: '只同 羽杰 愛佳 明揚' }
    ]},
    { label: 'Final Hook', lines: [
      '我們走到這裡', '帶著各自的記憶', '不是結束而已', '是走向新的自己'
    ]},
    { label: 'Outro', lines: ['NCNU IBS', 'we don\'t say goodbye'] }
  ],

  2: [
    { label: 'Intro', lines: ['2022 那年的秋天', '我們在這裡相遇'] },
    { label: 'Verse 1', lines: [
      '那年的風　吹過操場', '吹過我們抽中的直屬',
      '新生茶會的下午', '是我們故事的開頭', '',
      { names: '俊真 玉蒙 之一 又尼' }, { names: '解如 勝訊 芷偉 培杰' },
      { names: '應學 立加 彥成 一語' }, { names: '宏宇 子婷　都在這裡' }
    ]},
    { label: 'Pre-Chorus', lines: [
      '喔喔喔　時間轉得好快', '喔喔喔　我們長大成這樣', '數到三　我們一起喊出來'
    ]},
    { label: 'Drop', lines: [
      '我們的名字　寫在同一片天空',
      { names: 'Hey 紫量 Hey 雲之 Hey 宗彥 Hey 建議' },
      { names: '珊榮 彩琴 雲成 玉山' }, { names: '欣妮 偉博 信鞍' },
      'La la la la la', '是青春替我們留下　最深的問候'
    ]},
    { label: 'Verse 2', lines: [
      '大二那年系學會', '我們扛起了所有',
      '日月潭的太陽好大', '輕艇划過水花打在臉上', '',
      { names: '雨哲 品認 玉層 會移' }, { names: '若純 預期　都在那艘船上' }, '',
      '鬼屋的尖叫聲穿過校園', '誰是鬼誰是人都分不清',
      { names: '雲方 運緊 庭云 楷升' }, { names: '郡良 飛娜　笑到流淚' }, '',
      '那一夜我們去夜市吃粗飽', '一攤接著一攤　笑聲塞滿整條街',
      { names: '佳玲 帶玲 玉文 俊祥 名花 順力' }, '',
      '耶晚那一夜　禮物交換成回憶', '那是我們的大二'
    ]},
    { label: 'Pre-Chorus', lines: [
      '喔喔喔　時間轉得好快', '喔喔喔　我們長大成這樣', '數到三　我們一起喊出來'
    ]},
    { label: 'Drop 2', lines: [
      '我們的名字　寫在風裡也寫在心上',
      { names: 'Hey 威威 Hey 岳秀 Hey 得洪 Hey 業浩' },
      { names: '詳信 冰林 語折 匆節' }, { names: '嘉心 風量 衣停' },
      'La la la la la', '是時候啟程了　帶著彼此的勇敢'
    ]},
    { label: 'Bridge', lines: [
      '大三那年企業專題', '燈亮到天明', '簡報改了一遍又一遍', '我們抱著資料睡著', '',
      { names: '移真 婕羽 人家 佳俊' }, { names: '子成 斐如 彩君 普恩' },
      { names: '仁章 建奇 建真 琪佑' }, { names: '思羽 紫訊 慶楊 姍以' }, '',
      '大四那年　我們開始說再見', '有人飛向更遠的地方　有人進入實習',
      { names: '聖新啊　葛飛啊' }, { names: '凱倫 號文 聖贏 移贏' },
      '我們真的長大了'
    ]},
    { label: 'Build Up', lines: ['Three', 'Two', 'One', 'Let\'s go'] },
    { label: 'Final Drop', lines: [
      '我們的名字　寫在彼此的故事裡',
      { names: 'Hey 品涵 Hey 紫然 Hey 配懸 Hey 保真' },
      { names: '永祥 書為 依寧 宜玲' }, { names: '信義 紫雲 碩換 威俊' },
      'La la la la la', '是青春替我們刻下　最美的名字'
    ]},
    { label: 'Outro', lines: [
      { names: '宣容 紫因 晉元 瑠玲' }, { names: '彩薇 惠瑜 羽芸 會愈' },
      { names: '只同 羽杰 愛佳 明揚' }, '還有我們所有人', '',
      '若有一天　風又吹過這條走廊', '我們曾經一起', '把名字　寫進這首歌'
    ]}
  ],

  3: [
    { label: 'Intro', lines: [
      '那一年抽直屬的午後', '名字一個一個被念過',
      '我們還不懂未來是什麼', '卻一起走到了最後'
    ]},
    { label: 'Verse 1', lines: [
      '俊真在教室後排輕輕笑著', '玉蒙把第一堂課寫滿筆記',
      '之一望著窗外想著遠方', '又尼把夢悄悄放進心裡',
      '解如一步一步走得很穩', '勝訊總是讓氣氛變得溫暖',
      '芷偉把溫柔留在每一天', '培杰說未來不能簡單',
      '應學記得第一次點名', '立加在操場迎著風跑',
      '彥成把努力寫進考卷', '一語笑著說還早',
      '宏宇在球場揮汗的那天', '子婷在台下默默應援',
      '紫量說青春不能重來', '雲之把回憶慢慢裝滿',
      '宗彥在系學會忙到深夜', '建議說撐一下就會過',
      '珊榮記得那次吃粗飽', '彩琴笑著說再多一桌',
      '雲成在忙碌中不說累', '玉山陪著走過崩潰',
      '欣妮把日子過得細膩', '偉博說這段一定最珍貴'
    ]},
    { label: 'Pre-Chorus', lines: [
      '那些看似平凡的片刻', '慢慢變成捨不得', '我們都還來不及準備', '就走到了這一刻'
    ]},
    { label: 'Chorus', lines: [
      '我們是國企系的名字', '寫在彼此青春的故事',
      '從陌生走到如此', '變成一輩子的事',
      '划輕艇的那片湖', '還映著當時的笑容',
      '如果未來太匆促', '記得這份感動'
    ]},
    { label: 'Verse 2', lines: [
      '信鞍在深夜整理著報告', '雨哲說這次一定做到好',
      '品認把堅持當作依靠', '玉層靜靜撐過低潮',
      '會移像午後的一道光', '若純讓身邊變得明亮',
      '預期在壓力中成長', '雲方始終帶著希望',
      '運緊開始想未來方向', '庭云寫下新的願望',
      '楷升說世界很大', '郡良準備勇敢出發',
      '飛娜把行李收進夢裡', '佳玲說要去看看世界',
      '帶玲把不安藏起來', '玉文學會自己面對',
      '俊祥在遠方學著堅強', '名花把思念畫成模樣',
      '順力一步一步向上', '威威依然溫柔善良',
      '岳秀在實習中找答案', '得洪讓自己更勇敢',
      '業浩慢慢看清方向', '詳信開始不再迷惘'
    ]},
    { label: 'Bridge', lines: [
      '冰林跟著節奏用力吶喊', '語折在人群裡揮著手',
      '匆節讓笑聲停不下來', '嘉心記住這一刻的感動',
      '風量把熱血寫在臉上', '衣停把青春唱得響亮',
      '移真在人群中發光', '婕羽笑得那麼漂亮',
      '人家記得運動會的聲浪', '佳俊還在全力奔跑',
      '子成說這段不會忘', '斐如把回憶收好',
      '彩君陪著走過低谷', '普恩說未來不孤獨',
      '仁章一步一步追逐', '我們都在這條路',
      '建奇、建真還在努力', '琪佑寫下自己的軌跡',
      '思羽把故事延續', '紫訊記住每個相遇',
      '慶楊迎著光前行', '姍以輕聲說別停',
      '聖新在人群中回應', '葛飛把夢握緊',
      '凱倫、號文一起大笑', '聖贏讓回憶閃耀',
      '移贏說這一切剛好', '品涵把溫柔留下',
      '紫然走向更遠的地方', '配懸記得這段時光',
      '保真笑得很亮', '永祥準備展翅飛翔',
      '書為一步步成長', '依寧讓青春發光',
      '宜玲輕輕歌唱', '信義撐過那些不安',
      '紫雲勇敢向前看', '碩換說夢想很難',
      '但一定會實現', '威俊在人群中吶喊',
      '宣容記住每一晚', '紫因帶著笑臉',
      '晉元走向未來', '瑠玲把回憶收藏',
      '彩薇讓日子發光', '惠瑜記得這段時光',
      '羽芸輕輕歌唱', '會愈陪著走過',
      '只同說別難過', '羽杰還在努力著',
      '愛佳笑著看我', '明揚迎著風說——',
      '我們都會有以後'
    ]},
    { label: 'Final Chorus', lines: [
      '我們是國企系的名字', '把青春留在這個位置',
      '那些笑過哭過的日子', '再也回不去',
      '吃粗飽的那些夜晚', '耶誕晚會的燈光',
      '運動會吶喊的聲浪', '還在心上',
      '如果有一天走散在人海', '變成平凡的大人',
      '請記得當時的我們', '那麼認真'
    ]},
    { label: 'Outro', lines: [
      '大一抽直屬的那一天', '大二系學會的笑臉',
      '大三專題不眠的夜', '大四說再見的今天',
      '海外交換的藍天', '企業實習的起點',
      '我們終於走到這裡', '如果未來很遠',
      '請不要忘記——', '我們是國企系'
    ]}
  ]
};

/* ===== Render Lyrics ===== */
function renderLyrics() {
  for (const [trackId, sections] of Object.entries(lyricsData)) {
    const container = document.getElementById(`lyrics${trackId}`);
    if (!container) continue;

    let html = '';
    for (const section of sections) {
      html += '<div class="lyrics-section">';
      html += `<div class="lyrics-label">${section.label}</div>`;
      for (const line of section.lines) {
        if (line === '') {
          html += '<br>';
        } else if (typeof line === 'object' && line.names) {
          html += `<div class="lyrics-line names">${line.names}</div>`;
        } else {
          html += `<div class="lyrics-line">${line}</div>`;
        }
      }
      html += '</div>';
    }
    container.innerHTML = html;
  }
}

/* ===== Audio Player ===== */
const audios = [
  document.getElementById('audio1'),
  document.getElementById('audio2'),
  document.getElementById('audio3')
];

let currentPlaying = null;

function formatTime(sec) {
  if (isNaN(sec)) return '--:--';
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

function stopAll(except) {
  audios.forEach((audio, i) => {
    const idx = i + 1;
    if (idx !== except) {
      audio.pause();
      document.getElementById(`playBtn${idx}`).classList.remove('active');
      document.getElementById(`trackCard${idx}`).classList.remove('playing');
    }
  });
  if (except === null) {
    document.getElementById('vinylDisc').classList.remove('spinning');
  }
}

function togglePlay(trackIdx) {
  const audio = audios[trackIdx - 1];
  const btn = document.getElementById(`playBtn${trackIdx}`);
  const card = document.getElementById(`trackCard${trackIdx}`);
  const vinyl = document.getElementById('vinylDisc');

  if (audio.paused) {
    stopAll(trackIdx);
    audio.play();
    btn.classList.add('active');
    card.classList.add('playing');
    vinyl.classList.add('spinning');
    currentPlaying = trackIdx;
  } else {
    audio.pause();
    btn.classList.remove('active');
    card.classList.remove('playing');
    vinyl.classList.remove('spinning');
    currentPlaying = null;
  }
}

// Setup each audio
audios.forEach((audio, i) => {
  const idx = i + 1;

  // Play button
  document.getElementById(`playBtn${idx}`).addEventListener('click', () => togglePlay(idx));

  // Time update
  audio.addEventListener('timeupdate', () => {
    const fill = document.getElementById(`progressFill${idx}`);
    const current = document.getElementById(`currentTime${idx}`);
    if (audio.duration) {
      fill.style.width = (audio.currentTime / audio.duration * 100) + '%';
      current.textContent = formatTime(audio.currentTime);
    }
  });

  // Loaded metadata
  audio.addEventListener('loadedmetadata', () => {
    document.getElementById(`totalTime${idx}`).textContent = formatTime(audio.duration);
  });

  // Ended
  audio.addEventListener('ended', () => {
    document.getElementById(`playBtn${idx}`).classList.remove('active');
    document.getElementById(`trackCard${idx}`).classList.remove('playing');
    document.getElementById('vinylDisc').classList.remove('spinning');
    document.getElementById(`progressFill${idx}`).style.width = '0%';
    document.getElementById(`currentTime${idx}`).textContent = '0:00';
    currentPlaying = null;

    // Auto-play next
    if (idx < 3) {
      setTimeout(() => togglePlay(idx + 1), 800);
    }
  });

  // Click on progress bar to seek
  document.getElementById(`progressBar${idx}`).addEventListener('click', (e) => {
    if (!audio.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    audio.currentTime = ratio * audio.duration;
  });
});

/* ===== Lyrics Toggle ===== */
document.querySelectorAll('.lyrics-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.dataset.target;
    const content = document.getElementById(targetId);
    const isOpen = content.classList.toggle('expanded');
    btn.classList.toggle('open', isOpen);
    btn.querySelector('span').textContent = isOpen ? '收合歌詞' : '展開歌詞';
  });
});

/* ===== Scroll Fade-in ===== */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-section').forEach(el => observer.observe(el));

/* ===== Floating Particles ===== */
function createParticles() {
  const container = document.getElementById('particles');
  const count = window.innerWidth < 768 ? 12 : 25;

  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 4 + 2;
    p.style.width = size + 'px';
    p.style.height = size + 'px';
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDuration = (Math.random() * 15 + 10) + 's';
    p.style.animationDelay = (Math.random() * 15) + 's';
    container.appendChild(p);
  }
}

/* ===== Scroll Hint Hide ===== */
window.addEventListener('scroll', () => {
  const hint = document.getElementById('scrollHint');
  if (window.scrollY > 100) {
    hint.style.opacity = '0';
    hint.style.pointerEvents = 'none';
  } else {
    hint.style.opacity = '1';
    hint.style.pointerEvents = 'auto';
  }
}, { passive: true });

/* ===== Init ===== */
document.addEventListener('DOMContentLoaded', () => {
  renderLyrics();
  createParticles();
});
