// ==========================================================
// 📁 WEBSITE FUNCTIONALITY & NAVIGATION LOGIC FILE
// ==========================================================

const themeIcon = document.getElementById('theme-icon');

// Dark Mode Persistence
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

// Global UI Navigation State
const state = {
    typeId: '',
    typeName: '',
    typeSubtitle: '',
    courseName: '',
    durationType: 'Semester',
    durationCount: 6,
    durationName: '',
    subjectName: '',
    currentCategories: [],
    category: ''
};

// ==========================================
// ✨ HISTORY API (Phone Back Button & Refresh Fix)
// ==========================================
window.addEventListener('popstate', (event) => {
    if (event.state && event.state.pageId) {
        Object.assign(state, event.state.appState);
        updateDynamicHeaders();
        
        const pageId = event.state.pageId;

        // 🚨 MAIN FIX: Back aane par, us page ka data wapas render (banao) karo
        if (pageId === 'course-page') {
            renderCourses();
        } else if (pageId === 'semester-page') {
            renderSemesters();
        } else if (pageId === 'subject-page') {
            renderSubjects();
        } else if (pageId === 'resource-page') {
            renderTabs();
            renderResources();
        }
        
        // Theme Colors
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

    // Save current location in Session Memory for Refresh
    sessionStorage.setItem('savedState', JSON.stringify(state));
    sessionStorage.setItem('savedPage', pageId);

    if (pushHistory) {
        const currentState = JSON.parse(JSON.stringify(state));
        history.pushState({ pageId: pageId, appState: currentState }, '', `#${pageId}`);
    }
}

function goBack() {
    if (history.state && history.state.pageId !== 'home-page') {
        history.back();
    } else {
        goHome();
    }
}

function goHome() {
    state.typeId = '';
    document.body.classList.remove('theme-active-pyq', 'theme-active-notes', 'theme-active-syllabus');
    
    // Clear session memory when going home
    sessionStorage.removeItem('savedState');
    sessionStorage.removeItem('savedPage');
    
    showPage('home-page', true);
}

function updateDynamicHeaders() {
    document.querySelectorAll('.dynamic-type-title').forEach(el => el.innerText = state.typeName);
    document.querySelectorAll('.dynamic-type-subtitle').forEach(el => el.innerText = state.typeSubtitle);
    document.querySelectorAll('.dynamic-course-title').forEach(el => el.innerText = state.courseName);
    document.querySelectorAll('.dynamic-subject-title').forEach(el => el.innerText = state.subjectName);
}

// App Flow
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
    coursesData.forEach(course => {
        const btn = document.createElement('button');
        btn.className = 'list-card';
        btn.innerHTML = `${course.name} <br><span>${course.hindi}</span>`;
        btn.onclick = () => {
            state.courseName = course.name;
            state.durationType = course.durationType || 'Semester';
            state.durationCount = course.durationCount || 6; 
            
            const subText = state.durationType === 'Year' ? 'Choose Year / वर्ष चुनें' : 'Choose Semester / सेमेस्टर चुनें';
            document.querySelector('#semester-page .breadcrumbs-sub').innerText = subText;

            updateDynamicHeaders();
            renderSemesters();
            showPage('semester-page');
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

function renderSubjects() {
    const list = document.getElementById('subject-list');
    list.innerHTML = '';

    // Course ka data lo, nahi mila to empty object
    const courseObj = subjectsData[state.courseName] || {};

    // Us semester/year ka subject list lo
    let subs = courseObj[state.durationName];

    // Agar semester/year ke liye data nahi hai, toh course-level `default` use karo,
    // fir top-level subjectsData['default'].default, warna ek Coming Soon dummy add karo.
    if (!subs || subs.length === 0) {
        subs = courseObj['default'] || (subjectsData['default'] && subjectsData['default']['default']) || [{ name: 'Coming Soon', hindi: 'जल्द आएगा', categories: [] }];
    }

    // Render karo — empty {} entries skip karo
    subs.forEach(sub => {
        if (!sub || !sub.name) return;
        const btn = document.createElement('button');
        btn.className = 'list-card subject-item';
        btn.innerHTML = sub.name + ' <br><span>' + (sub.hindi || '') + '</span>';
        btn.onclick = () => {
            state.subjectName = sub.name;
            state.currentCategories = sub.categories || [];

            if (state.currentCategories.length > 0) {
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
    
    if (state.currentCategories.length === 0) {
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

function renderResources() {
    const list = document.getElementById('resource-list');
    list.innerHTML = '';
    
    let dbKey;
    if (state.category === 'None') {
        dbKey = `${state.courseName}_${state.durationName}_${state.subjectName}_${state.typeId}`;
    } else {
        dbKey = `${state.courseName}_${state.durationName}_${state.subjectName}_${state.category}_${state.typeId}`;
    }
    
    let pdfs = pdfDatabase[dbKey];

    // Agar is specific section ke liye koi PDFs nahi hain, toh category-specific
    // "Coming Soon" message dikhao (agar subject ke kisi aur category mein PDFs hain,
    // toh sirf current category ko Coming Soon dikhana), warna agar subject mein
    // kahin bhi PDFs nahi hain toh subject-level Coming Soon dikhana.
    if (!pdfs || pdfs.length === 0) {
        const subjectPrefix = `${state.courseName}_${state.durationName}_${state.subjectName}_`;
        const subjectKeys = Object.keys(pdfDatabase).filter(k => k.startsWith(subjectPrefix));
        const hasAnyPDFs = subjectKeys.some(k => pdfDatabase[k] && pdfDatabase[k].length > 0);

        if (state.category && state.category !== 'None' && hasAnyPDFs) {
            // Agar kisi aur category mein PDFs hain, par current category mein nahi —
            // show Coming Soon for this category only
            const otherCatKeys = subjectKeys.filter(k => k !== dbKey);
            const hasOtherCategoryPDFs = otherCatKeys.some(k => pdfDatabase[k] && pdfDatabase[k].length > 0);
            if (hasOtherCategoryPDFs) {
                list.innerHTML = `<p style="text-align:center; padding: 30px; color:var(--dynamic-primary); font-size: 0.95rem; font-weight: 500;">No PDFs available in this <strong>${state.category}</strong> section yet.<br>Coming Soon.<br><span style="font-size: 0.9rem; margin-top: 8px; display: block;">इस <strong>${state.category}</strong> सेक्शन में कोई PDF अभी उपलब्ध नहीं है।<br>जल्द आएगा।</span></p>`;
                return;
            }
        }

        if (!hasAnyPDFs) {
            list.innerHTML = `<p style="text-align:center; padding: 30px; color:var(--dynamic-primary); font-size: 0.95rem; font-weight: 500;">No PDFs available for this subject yet.<br>Coming Soon.<br><span style="font-size: 0.9rem; margin-top: 8px; display: block;">इस विषय के लिए कोई PDF अभी उपलब्ध नहीं है।<br>जल्द आएगा।</span></p>`;
            return;
        }

        // Fallback: subject has some PDFs in other forms but not for this dbKey
        list.innerHTML = `<p style="text-align:center; padding: 30px; color:var(--dynamic-primary); font-size: 0.95rem; font-weight: 500;">No PDFs available in this section yet.<br>Coming Soon.<br><span style="font-size: 0.9rem; margin-top: 8px; display: block;">इस सेक्शन में कोई PDF अभी उपलब्ध नहीं है।<br>जल्द आएगा।</span></p>`;
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
    
    // Download button
    document.getElementById('viewer-download-btn').onclick = () => {
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = '';
        link.click();
    };

    // Open in New Tab button
    document.getElementById('viewer-newtab-btn').href = fileUrl;

    showPage('pdf-viewer-page');
}

// Drawer Menu Elements
const sideMenu = document.getElementById('side-menu');
const menuOverlay = document.getElementById('menu-overlay');

function openMenu() {
    sideMenu.classList.add('show');
    menuOverlay.classList.add('show');
    document.body.style.overflow = 'hidden'; 
}

function closeMenu() {
    sideMenu.classList.remove('show');
    menuOverlay.classList.remove('show');
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

// ==========================================
// ✨ INITIALIZE APP (Handles Page Refresh)
// ==========================================
window.onload = () => {
    const savedState = sessionStorage.getItem('savedState');
    const savedPage = sessionStorage.getItem('savedPage');

    if (savedState && savedPage && savedPage !== 'home-page') {
        Object.assign(state, JSON.parse(savedState));
        updateDynamicHeaders();

        // Data ko wapas render karein
        if (savedPage === 'course-page') {
            renderCourses();
        } else if (savedPage === 'semester-page') {
            renderSemesters();
        } else if (savedPage === 'subject-page') {
            renderSubjects();
        } else if (savedPage === 'resource-page') {
            renderTabs();
            renderResources();
        } else if (savedPage === 'pdf-viewer-page') {
            renderTabs();
            renderResources();
            showPage('resource-page', false);
            return;
        }

        // Color Themes Restore Karein
        if (state.typeId === 'PYQ') document.body.classList.add('theme-active-pyq');
        else if (state.typeId === 'Notes') document.body.classList.add('theme-active-notes');
        else if (state.typeId === 'Syllabus') document.body.classList.add('theme-active-syllabus');

        showPage(savedPage, false);
    } else {
        // First time load
        history.replaceState({ pageId: 'home-page', appState: JSON.parse(JSON.stringify(state)) }, '', '#home-page');
    }
};