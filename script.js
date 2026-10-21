// ==========================================================
// 📁 JAVASCRIPT LOGIC & NAVIGATION (script.js)
// ==========================================================

const themeIcon = document.getElementById('theme-icon');

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    if(themeIcon) themeIcon.innerText = '☀️';
} else {
    if(themeIcon) themeIcon.innerText = '🌙';
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        if(themeIcon) themeIcon.innerText = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        if(themeIcon) themeIcon.innerText = '🌙';
        localStorage.setItem('theme', 'light');
    }
}

const state = {
    typeId: '', typeName: '', typeSubtitle: '', courseName: '', durationType: 'Semester',
    durationCount: 8, durationName: '', subjectName: '', currentCategories: [], category: ''
};

window.addEventListener('popstate', (event) => {
    if (event.state && event.state.pageId) {
        Object.assign(state, event.state.appState);
        updateDynamicHeaders();
        const pageId = event.state.pageId;

        if (pageId === 'course-page') renderCourses();
        else if (pageId === 'semester-page') renderSemesters();
        else if (pageId === 'subject-page') renderSubjects();
        else if (pageId === 'resource-page') { renderTabs(); renderResources(); }
        
        document.body.classList.remove('theme-active-pyq', 'theme-active-notes', 'theme-active-syllabus');
        if (state.typeId === 'PYQ') document.body.classList.add('theme-active-pyq');
        else if (state.typeId === 'Notes') document.body.classList.add('theme-active-notes');
        else if (state.typeId === 'Syllabus') document.body.classList.add('theme-active-syllabus');

        showPage(pageId, false);
    }
});

function showPage(pageId, pushHistory = true) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    window.scrollTo(0, 0); 

    sessionStorage.setItem('savedState', JSON.stringify(state));
    sessionStorage.setItem('savedPage', pageId);

    if (pushHistory) {
        const currentState = JSON.parse(JSON.stringify(state));
        history.pushState({ pageId: pageId, appState: currentState }, '', `#${pageId}`);
    }
}

function goBack() {
    if (history.state && history.state.pageId !== 'home-page') history.back();
    else goHome();
}

function goHome() {
    state.typeId = '';
    document.body.classList.remove('theme-active-pyq', 'theme-active-notes', 'theme-active-syllabus');
    sessionStorage.removeItem('savedState');
    sessionStorage.removeItem('savedPage');
    showPage('home-page', true);
}

// Dynamic Headers & Messages Logic
function updateDynamicHeaders() {
    document.querySelectorAll('.dynamic-type-title').forEach(el => el.innerText = state.typeName);
    document.querySelectorAll('.dynamic-type-subtitle').forEach(el => el.innerText = state.typeSubtitle);
    document.querySelectorAll('.dynamic-course-title').forEach(el => el.innerText = state.courseName);
    document.querySelectorAll('.dynamic-subject-title').forEach(el => el.innerText = state.subjectName);
    
    const subjectSubtitleEl = document.querySelector('#subject-page .breadcrumbs-sub');
    const msgBox = document.getElementById('dynamic-subject-msg');
    
    if (subjectSubtitleEl && msgBox) {
        if (state.typeId === 'PYQ') {
            subjectSubtitleEl.innerText = 'Choose Subject / विषय चुनें';
            msgBox.innerHTML = '💡 <strong>Tip:</strong> पिछले 5 सालों के सबसे महत्वपूर्ण प्रश्न यहाँ उपलब्ध हैं।';
            msgBox.style.display = 'none'; // PYQ me nahi dikhega
        } 
        else if (state.typeId === 'Notes') {
            subjectSubtitleEl.innerText = 'Choose Subject / विषय चुनें';
            msgBox.innerHTML = '📖 <strong>Info:</strong> ये नोट्स परीक्षा (Exam) के पैटर्न को ध्यान में रखकर बनाए गए हैं।';
            msgBox.style.display = 'none'; // Notes me nahi dikhega
        } 
        else if (state.typeId === 'Syllabus') {
            subjectSubtitleEl.innerText = 'Choose Subject / विषय चुनें';
            msgBox.innerHTML = '📖 <strong>Note:</strong> Minor Subject का syllabus उसी Subject के Major PDF में उपलब्ध है।';
            msgBox.style.display = 'block'; // Syllabus me dikhega
        } 
        else {
            subjectSubtitleEl.innerText = 'Choose Subject / विषय चुनें';
            msgBox.style.display = 'none';
        }
    }
}

function getCurrentCourseObj() {
    if(!masterData || !masterData[state.typeId]) return null;
    return masterData[state.typeId].find(c => c.courseName === state.courseName);
}

function selectType(id, name, subtitle) {
    state.typeId = id;
    state.typeName = name;
    state.typeSubtitle = subtitle;
    
    document.body.classList.remove('theme-active-pyq', 'theme-active-notes', 'theme-active-syllabus');
    if(id === 'PYQ') document.body.classList.add('theme-active-pyq');
    else if(id === 'Notes') document.body.classList.add('theme-active-notes');
    else if(id === 'Syllabus') document.body.classList.add('theme-active-syllabus');

    updateDynamicHeaders();
    renderCourses();
    showPage('course-page');
}

function renderCourses() {
    const list = document.getElementById('course-list');
    list.innerHTML = '';
    
    const typeData = masterData[state.typeId];
    if(!typeData) {
        list.innerHTML = '<p style="text-align:center; padding:20px; color:var(--text-muted);">Data not found for this section.</p>';
        return;
    }

    typeData.forEach(course => {
        const btn = document.createElement('button');
        btn.className = 'list-card';
        btn.innerHTML = `${course.courseName} <br><span>${course.hindi}</span>`;
        btn.onclick = () => {
            state.courseName = course.courseName;
            state.durationType = course.durationType || 'Semester';
            state.durationCount = course.durationCount || 8; 
            
            // ✨ UPDATE: Syllabus mein Semester Page ko Skip karne ka logic
            if (state.typeId === 'Syllabus') {
                state.durationName = 'All'; // Dummy marker for Syllabus
                updateDynamicHeaders();
                renderSubjects();
                showPage('subject-page');
            } else {
                const subText = state.durationType === 'Year' ? 'Choose Year / वर्ष चुनें' : 'Choose Semester / सेमेस्टर चुनें';
                document.querySelector('#semester-page .breadcrumbs-sub').innerText = subText;
                updateDynamicHeaders();
                renderSemesters();
                showPage('semester-page');
            }
        };
        list.appendChild(btn);
    });
}

function renderSemesters() {
    const list = document.getElementById('semester-list');
    list.innerHTML = '';
    for (let i = 1; i <= state.durationCount; i++) {
        const btn = document.createElement('button');
        btn.className = 'list-card';
        let engLabel = `${state.durationType} ${i}`;
        let hinLabel = state.durationType === 'Year' ? `वर्ष ${i}` : `सेमेस्टर ${i}`;
        btn.innerHTML = `${engLabel} <br><span>${hinLabel}</span>`;
        btn.onclick = () => {
            state.durationName = engLabel;
            updateDynamicHeaders();
            renderSubjects();
            showPage('subject-page');
        };
        list.appendChild(btn);
    }
}

// ✨ UPDATE: Render Subjects (Supports direct 'subjects' array)
function renderSubjects() {
    const list = document.getElementById('subject-list');
    list.innerHTML = '';
    
    const course = getCurrentCourseObj();
    let subs = [];

    if (course) {
        if (state.typeId === 'Syllabus') {
            // 🚀 NAYA LOGIC: अगर कोर्स में सीधे subjects दिए हैं
            if (course.subjects) {
                subs = course.subjects;
            } 
            // बैकअप: अगर किसी ने गलती से पुराना स्ट्रक्चर यूज़ कर लिया
            else if (course.durations) {
                const subMap = new Map();
                Object.values(course.durations).forEach(durationArray => {
                    durationArray.forEach(sub => {
                        if (!subMap.has(sub.subjectName)) {
                            subMap.set(sub.subjectName, { 
                                subjectName: sub.subjectName, hindi: sub.hindi, categories: [...(sub.categories || [])] 
                            });
                        } else {
                            const existing = subMap.get(sub.subjectName);
                            if (sub.categories) sub.categories.forEach(c => { if (!existing.categories.includes(c)) existing.categories.push(c); });
                        }
                    });
                });
                subs = Array.from(subMap.values());
            }
        } else {
            // PYQ aur Notes ke liye normal logic
            subs = course.durations[state.durationName] || [];
        }
    }

    if (subs.length === 0) {
        list.innerHTML = `
            <div style="text-align:center; padding: 40px 20px;">
                <div style="font-size: 2.5rem; margin-bottom: 10px;">⏳</div>
                <h3 style="color: var(--dynamic-primary); margin-bottom: 5px;">Coming Soon!</h3>
                <p style="color:var(--text-muted); font-size: 0.95rem;">विषय जल्द ही अपडेट किए जाएंगे।</p>
            </div>`;
        return;
    }

    subs.forEach(sub => {
        const btn = document.createElement('button');
        btn.className = 'list-card subject-item';
        btn.innerHTML = `${sub.subjectName} <br><span>${sub.hindi}</span>`;
        btn.onclick = () => {
            state.subjectName = sub.subjectName;
            state.currentCategories = sub.categories || [];
            
            if(state.currentCategories.length > 0 && state.currentCategories[0] !== 'None') {
                state.category = state.currentCategories[0];
            } else {
                state.category = 'None';
            }

            updateDynamicHeaders();
            renderTabs();
            renderResources();
            showPage('resource-page');
        };
        list.appendChild(btn);
    });
}

function filterSubjects() {
    const query = document.getElementById('subject-search-bar').value.toLowerCase();
    const items = document.querySelectorAll('.subject-item');
    items.forEach(item => {
        item.style.display = item.innerText.toLowerCase().includes(query) ? 'flex' : 'none';
    });
}

function renderTabs() {
    const tabsContainer = document.querySelector('.pill-tabs');
    tabsContainer.innerHTML = ''; 
    
    if (!state.currentCategories || state.currentCategories.length === 0 || state.currentCategories.includes('None')) {
        tabsContainer.style.display = 'none';
        return;
    }
    
    tabsContainer.style.display = 'flex'; 
    state.currentCategories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = `pill-tab ${cat === state.category ? 'active' : ''}`;
        btn.innerText = cat;
        btn.onclick = () => {
            state.category = cat;
            renderTabs(); 
            renderResources();
        };
        tabsContainer.appendChild(btn);
    });
}

// ✨ UPDATE: Render Resources (Finds PDFs from direct 'subjects' array)
function renderResources() {
    const list = document.getElementById('resource-list');
    list.innerHTML = '';
    
    let pdfs = [];
    const course = getCurrentCourseObj();
    
    if(course) {
        if (state.typeId === 'Syllabus') {
            // 🚀 NAYA LOGIC: डायरेक्ट Subjects ऐरे से PDF निकालें
            if (course.subjects) {
                const sub = course.subjects.find(s => s.subjectName === state.subjectName);
                if(sub && sub.pdfs && sub.pdfs[state.category]) {
                    pdfs = sub.pdfs[state.category];
                }
            } 
            // बैकअप लॉजिक
            else if (course.durations) {
                const urls = new Set();
                Object.values(course.durations).forEach(durationArray => {
                    const sub = durationArray.find(s => s.subjectName === state.subjectName);
                    if(sub && sub.pdfs && sub.pdfs[state.category]) {
                        sub.pdfs[state.category].forEach(p => {
                            if(!urls.has(p.url)) { urls.add(p.url); pdfs.push(p); }
                        });
                    }
                });
            }
        } else {
            // PYQ/Notes के लिए पुराना लॉजिक
            if (course.durations && course.durations[state.durationName]) {
                const sub = course.durations[state.durationName].find(s => s.subjectName === state.subjectName);
                if(sub && sub.pdfs && sub.pdfs[state.category]) {
                    pdfs = sub.pdfs[state.category];
                }
            }
        }
    }

    if (pdfs.length === 0) {
        list.innerHTML = `
            <div style="text-align:center; padding: 40px 20px;">
                <div style="font-size: 2.5rem; margin-bottom: 10px;">🚧</div>
                <h3 style="color: var(--dynamic-primary); margin-bottom: 5px;">Coming Soon!</h3>
                <p style="color:var(--text-muted); font-size: 0.95rem;">इस सेक्शन के PDF जल्द ही अपलोड किए जाएंगे।</p>
            </div>`;
        return;
    }

    pdfs.forEach(pdf => {
        const card = document.createElement('div');
        card.className = 'resource-card';
        card.innerHTML = `
            <div class="res-title">${pdf.title}</div>
            <div class="res-year">${pdf.year}</div>
            <div class="res-action-btns">
                <button class="action-btn view-btn" onclick="viewPDF('${pdf.title}', '${pdf.year}', '${pdf.url}')">👁 View</button>
                <a href="${pdf.url}" download class="action-btn dl-btn" style="text-decoration:none;">📥 Download</a>
            </div>
        `;
        list.appendChild(card);
    });
}

function viewPDF(title, year, fileUrl) {
    document.getElementById('pdf-title').innerText = title;
    document.getElementById('pdf-year').innerText = year;
    document.getElementById('real-pdf-viewer').src = fileUrl;
    
    // Download logic
    const downloadBtn = document.getElementById('viewer-download-btn');
    if (downloadBtn) {
        downloadBtn.onclick = () => {
            const link = document.createElement('a');
            link.href = fileUrl;
            link.download = '';
            link.click();
        };
    }

    // Open in New Tab logic
    const openBtn = document.getElementById('viewer-open-btn');
    if (openBtn) {
        openBtn.onclick = () => {
            window.open(fileUrl, '_blank');
        };
    }
    
    showPage('pdf-viewer-page');
}

// Sidebar Menu Logic
const sideMenu = document.getElementById('side-menu');
const menuOverlay = document.getElementById('menu-overlay');

function openMenu() {
    if(sideMenu) sideMenu.classList.add('show');
    if(menuOverlay) menuOverlay.classList.add('show');
    document.body.style.overflow = 'hidden'; 
}

function closeMenu() {
    if(sideMenu) sideMenu.classList.remove('show');
    if(menuOverlay) menuOverlay.classList.remove('show');
    document.body.style.overflow = 'auto'; 
}

function menuNavigate(action) {
    closeMenu();
    setTimeout(() => {
        if (action === 'Home') goHome();
        else if (action === 'PYQ') selectType('PYQ', 'Previous Year Questions', 'पिछले साल के प्रश्न पत्र');
        else if (action === 'Notes') selectType('Notes', 'Study Notes', 'अध्ययन नोट्स');
        else if (action === 'Syllabus') selectType('Syllabus', 'Course Syllabus', 'पाठ्यक्रम');
        else if (action === 'Contact') window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }, 250);
}

// Initialization (Handles Page Refresh)
window.onload = () => {
    const savedState = sessionStorage.getItem('savedState');
    const savedPage = sessionStorage.getItem('savedPage');

    if (savedState && savedPage && savedPage !== 'home-page') {
        Object.assign(state, JSON.parse(savedState));
        updateDynamicHeaders();

        if (savedPage === 'course-page') renderCourses();
        else if (savedPage === 'semester-page') renderSemesters();
        else if (savedPage === 'subject-page') renderSubjects();
        else if (savedPage === 'resource-page') { renderTabs(); renderResources(); }
        else if (savedPage === 'pdf-viewer-page') {
            renderTabs();
            renderResources();
            showPage('resource-page', false); 
            return;
        }

        if (state.typeId === 'PYQ') document.body.classList.add('theme-active-pyq');
        else if (state.typeId === 'Notes') document.body.classList.add('theme-active-notes');
        else if (state.typeId === 'Syllabus') document.body.classList.add('theme-active-syllabus');

        showPage(savedPage, false);
    } else {
        history.replaceState({ pageId: 'home-page', appState: JSON.parse(JSON.stringify(state)) }, '', '#home-page');
    }
};