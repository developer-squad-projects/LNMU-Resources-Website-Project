// ==========================================================
// 📁 DATA SELECTION & PDF DATABASE FILE
// ==========================================================

// 1. Courses List (Added durationType to support both Semester & Year)
const coursesData = [
    { name: 'B.A. (Arts)', hindi: 'बी.ए.', durationType: 'Semester', durationCount: 8 },
    { name: 'B.Sc. (Science)', hindi: 'बी.एससी.', durationType: 'Semester', durationCount: 8 },
    { name: 'B.Com. (Commerce)', hindi: 'बी.कॉम.', durationType: 'Semester', durationCount: 8 },
    { name: 'M.A. (Arts PG)', hindi: 'एम.ए. (पीजी)', durationType: 'Semester', durationCount: 4 },
    { name: 'M.Sc. (Science PG)', hindi: 'एम.एससी. (पीजी)', durationType: 'Semester', durationCount: 4 },
    { name: 'M.Com. (Commerce PG)', hindi: 'एम.कॉम.', durationType: 'Semester', durationCount: 4 },
    { name: 'B.Ed. (Teaching)', hindi: 'बी.एड.', durationType: 'Year', durationCount: 2 }, // Year-wise Course
    { name: 'BCA', hindi: 'बी.सी.ए.', durationType: 'Semester', durationCount: 8 },
    { name: 'BBA', hindi: 'बी.बी.ए.', durationType: 'Semester', durationCount: 8 },
    
];

// 2. Course & Duration Wise Subjects List (With Dynamic Categories)
const subjectsData = {
    'B.A. (Arts)': {
        'Semester 1': [
            // Example 1: Subject with 4 categories
            { name: 'History', hindi: 'इतिहास', categories: ['Major', 'Minor', 'MDC', 'VAC', 'AEC','SEC'] },
            // Example 2: Subject with NO categories (Direct PDF)
            {name: 'Hindi', hindi: 'हिंदी', categories: ['Major', 'Minor', 'MDC', 'AEC', 'SEC', 'VAC'] },
            { name: 'Environmental Studies', hindi: 'पर्यावरण अध्ययन', categories: [] } ,
            { name: 'Swakshar Bharat', hindi: 'स्वच्छ भारत', categories: [] },
            { name: 'Basic IT Tools', hindi: 'बेसिक आईटी टूल्स', categories: [] }
        ]
    },
    'M.Com. (Commerce PG)': {
        'Semester 1': [
            { name: 'Business Environment', hindi: 'व्यवसायिक वातावरण', categories: ['Major', 'Minor'] },
            { name: 'Financial Accounting', hindi: 'वित्तीय लेखांकन', categories: ['Major', 'Minor'] }
        ],
        'Semester 2': [
            { name: 'Business Law', hindi: 'व्यवसायिक कानून', categories: ['Major', 'Minor'] },
            { name: 'Corporate Accounting', hindi: 'कॉर्पोरेट लेखांकन', categories: ['Major', 'Minor'] }
        ],
        'default': [
            {name : "Comming soon Part 2", hindi: "जल्द आ रहा है part 2", categories: []}
        ]
    },

    'B.Ed. (Teaching)': {
        'Year 1': [
            // Example 3: Subject with custom categories (Paper 1, Paper 2)
            { name: 'Childhood & Growing Up', hindi: 'बाल्यावस्था', categories: ['Paper 1', 'Paper 2', 'Practicum'] },
            // Example 4: Direct PDF
            { name: 'Contemporary India', hindi: 'समकालीन भारत', categories: [] },
            { name: 'Learning & Teaching', hindi: 'सीखना और पढ़ाना', categories: ['Paper 1', 'Paper 2'] }
        ],
        'Year 2': [
            { name: 'Assessment for Learning', hindi: 'सीखने का आकलन', categories: [] }
        ]
    },
    'default': {
        'default': [
            { name: 'General Subject', hindi: 'सामान्य विषय', categories: [] }
        ]
    }
};

// 3. Real PDF Links Combinations Database
const pdfDatabase = {
    // ---- B.A. Examples (Semester Wise) ----
    "B.A. (Arts)_Semester 1_History_Major_Notes": [
        { title: "History Major Unit 1", year: "Latest", url: "pdfs/hist_m1.pdf" }
    ],
    "B.A. (Arts)_Semester 1_Hindi_AEC_PYQ": [
        { title: "Hindi AEC PYQ 2026", year: "2025", url: "PYQ_Pdfs/Hindi sem-1 AEC 2026.pdf" }
    ],
    // EVS has NO categories, so the key is simply Course_Duration_Subject_Type
    "B.A. (Arts)_Semester 1_Basic IT Tools_PYQ": [
        { title: "Basic IT Tools PYQ 2026", year: "2025", url: "PYQ_Pdfs/Basics IT Tools sem-1 SEC 2026.pdf" }
    ],
    "B.A. (Arts)_Semester 1_Swakshar Bharat_PYQ": [
        { title: "Swakshar Bharat PYQ 2026", year: "2025", url: "PYQ_Pdfs/Swaksha Bharat sem-1 VAC 2026.pdf" }
    ],
    

    // ---- B.Ed. Examples (Year Wise) ----
    "B.Ed. (Teaching)_Year 1_Childhood & Growing Up_Paper 1_PYQ": [
        { title: "Childhood PYQ 2024", year: "2024", url: "pdfs/bed_p1.pdf" }
    ],
    // Contemporary India has NO categories
    "B.Ed. (Teaching)_Year 1_Contemporary India_Syllabus": [
        { title: "Contemporary India Syllabus", year: "Latest", url: "pdfs/india_syl.pdf" }
    ]
};