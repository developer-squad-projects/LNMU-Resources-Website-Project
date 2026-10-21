// ==========================================================
// 📁 SMART MASTER DATA & PDF DATABASE FILE (data.js)
// ==========================================================

// 1. DYNAMIC COURSE & SUBJECT STRUCTURE
// यहां आप सिर्फ एक बार कोर्सेज और सब्जेक्ट्स लिखेंगे।
// ये ऑटोमैटिकली PYQ, Notes और Syllabus तीनों टैब में जुड़ जाएंगे।
const PYQ_CoursesStructure = [
    {
        courseName: 'B.A. (Arts)', hindi: 'बी.ए.', durationType: 'Semester', durationCount: 8,
        durations: {
            'Semester 1': [
                { subjectName: 'History', hindi: 'इतिहास', categories: ['MJC-1', 'MIC-1', 'MDC', 'AEC', 'Major'] },
                { subjectName: 'Political Science', hindi: 'राजनीति विज्ञान', categories: ['MJC-1', 'MIC-1', 'MDC', 'AEC'] },
                { subjectName: 'Economics', hindi: 'अर्थशास्त्र', categories: ['MJC-1', 'MIC-1', 'MDC', 'AEC'] },
                { subjectName: 'Sociology', hindi: 'समाजशास्त्र', categories: ['MJC-1', 'MIC-1', 'MDC', 'AEC'] },
                { subjectName: 'Psychology', hindi: 'मनोविज्ञान', categories: ['MJC-1', 'MIC-1', 'MDC', 'AEC'] },
                { subjectName: 'Hindi', hindi: 'हिंदी', categories: ['MJC-1', 'MIC-1', 'MDC', 'AEC', 'SEC'] },
                { subjectName: 'English', hindi: 'अंग्रेज़ी', categories: ['MJC-1', 'MIC-1', 'MDC', 'AEC', 'SEC'] },
                { subjectName: 'Environmental Studies', hindi: 'पर्यावरण अध्ययन', categories: ['None'] },
                { subjectName: 'Swach Bharat', hindi: 'स्वच्छ भारत', categories: ['None'] },
                { subjectName: 'Basic IT Tools', hindi: 'बेसिक आईटी टूल्स', categories: ['None'] }
            ],
            'Semester 2': [
                { subjectName: 'History', hindi: 'इतिहास', categories: ['MJC-2', 'MIC-2', 'MDC', 'VAC', 'AEC','SEC'] },
                { subjectName: 'Political Science', hindi: 'राजनीति विज्ञान', categories: ['MJC-2', 'MIC-2', 'MDC', 'AEC', 'SEC', 'VAC'] },
                { subjectName: 'Economics', hindi: 'अर्थशास्त्र', categories: ['MJC-2', 'MIC-2', 'MDC', 'AEC', 'SEC', 'VAC'] },
                { subjectName: 'Sociology', hindi: 'समाजशास्त्र', categories: ['MJC-2', 'MIC-2', 'MDC', 'AEC', 'SEC', 'VAC'] },
                { subjectName: 'Psychology', hindi: 'मनोविज्ञान', categories: ['MJC-2', 'MIC-2', 'MDC', 'AEC', 'SEC', 'VAC'] },
                { subjectName: 'Hindi', hindi: 'हिंदी', categories: ['MJC-2', 'MIC-2', 'MDC', 'AEC', 'SEC', 'VAC'] },
                { subjectName: 'English', hindi: 'अंग्रेज़ी', categories: ['MJC-2', 'MIC-2', 'MDC', 'AEC', 'SEC', 'VAC'] },
                { subjectName: 'Environmental Science', hindi: 'पर्यावरण विज्ञान', categories: ['None'] },
                { subjectName: 'Constitutional Values & Duties', hindi: 'संविधानिक मूल्य', categories: ['None'] },
                { subjectName: 'Personality Development', hindi: 'व्यक्तित्व विकास', categories: ['None'] }
            ],
            'Semester 3': [
                { subjectName: 'History', hindi: 'इतिहास', categories: ['MJC-3', 'MJC-4', 'MIC-3', 'MDC', 'VAC', 'AEC','SEC'] },
                { subjectName: 'Political Science', hindi: 'राजनीति विज्ञान', categories: ['MJC-3', 'MIC-3', 'MDC', 'AEC', 'SEC', 'VAC'] },
                { subjectName: 'Economics', hindi: 'अर्थशास्त्र', categories: ['MJC-3', 'MIC-3', 'MDC', 'AEC', 'SEC', 'VAC'] },
                { subjectName: 'Sociology', hindi: 'समाजशास्त्र', categories: ['MJC-3', 'MIC-3', 'MDC', 'AEC', 'SEC', 'VAC'] },
                { subjectName: 'Psychology', hindi: 'मनोविज्ञान', categories: ['MJC-3', 'MIC-3', 'MDC', 'AEC', 'SEC', 'VAC'] },
                { subjectName: 'Hindi', hindi: 'हिंदी', categories: ['MJC-3', 'MIC-3', 'MDC', 'AEC', 'SEC', 'VAC'] },
                { subjectName: 'English', hindi: 'अंग्रेज़ी', categories: ['MJC-3','MJC-4', 'MIC-3', 'MDC'] }
            ],
            'Semester 4': [
                { subjectName: 'History', hindi: 'इतिहास', categories: ['MJC-5', 'MJC-6', 'MJC-7', 'MIC-4', 'MDC', 'VAC', 'AEC','SEC'] },
                { subjectName: 'Political Science', hindi: 'राजनीति विज्ञान', categories: ['MJC-4', 'MIC-4', 'MDC', 'AEC', 'SEC', 'VAC'] },
                { subjectName: 'Economics', hindi: 'अर्थशास्त्र', categories: ['MJC-4', 'MIC-4', 'MDC', 'AEC', 'SEC', 'VAC'] },
                { subjectName: 'Sociology', hindi: 'समाजशास्त्र', categories: ['MJC-4', 'MIC-4', 'MDC', 'AEC', 'SEC', 'VAC'] },
                { subjectName: 'Psychology', hindi: 'मनोविज्ञान', categories: ['MJC-4', 'MIC-4', 'MDC', 'AEC', 'SEC', 'VAC'] },
                { subjectName: 'Hindi', hindi: 'हिंदी', categories: ['MJC-4', 'MIC-4', 'MDC', 'AEC', 'Major', 'Minor', 'SEC', 'VAC'] },
                { subjectName: 'English', hindi: 'अंग्रेज़ी', categories: ['MJC-4', 'MIC-4', 'MDC', 'AEC', 'SEC', 'VAC'] }
            ],
            'Semester 5': [
                { subjectName: 'History', hindi: 'इतिहास', categories: ['MJC-8', 'MJC-9', 'MIC-5', 'MIC-6', 'MDC', 'VAC', 'AEC','SEC'] },
                { subjectName: 'Political Science', hindi: 'राजनीति विज्ञान', categories: ['MJC-5', 'MIC-5', 'MDC', 'AEC', 'SEC', 'VAC'] },
                { subjectName: 'Economics', hindi: 'अर्थशास्त्र', categories: ['MJC-5', 'MIC-5', 'MDC', 'AEC', 'SEC', 'VAC'] },
                { subjectName: 'Sociology', hindi: 'समाजशास्त्र', categories: ['MJC-5', 'MIC-5', 'MDC', 'Major', 'Minor', 'AEC', 'SEC', 'VAC'] },
                { subjectName: 'Psychology', hindi: 'मनोविज्ञान', categories: ['MJC-5', 'MIC-5', 'MDC', 'AEC', 'SEC', 'VAC'] },
                { subjectName: 'Hindi', hindi: 'हिंदी', categories: ['MJC-5', 'MIC-5', 'Major', 'Minor', 'MDC', 'AEC', 'SEC', 'VAC'] },
                { subjectName: 'English', hindi: 'अंग्रेज़ी', categories: ['MJC-5', 'MIC-5', 'MDC', 'AEC', 'SEC', 'VAC'] }
            ],
            'Semester 6': [
                { subjectName: 'History', hindi: 'इतिहास', categories: ['MJC-10', 'MJC-11', 'MJC-12','MIC-7', 'MIC-8', 'MDC', 'VAC', 'AEC','SEC'] },
                { subjectName: 'Political Science', hindi: 'राजनीति विज्ञान', categories: ['MJC-6', 'MIC-6', 'MDC', 'AEC', 'SEC', 'VAC'] },
                { subjectName: 'Economics', hindi: 'अर्थशास्त्र', categories: ['MJC-6', 'MIC-6', 'MDC', 'AEC', 'SEC', 'VAC'] },
                { subjectName: 'Sociology', hindi: 'समाजशास्त्र', categories: ['MJC-6', 'MIC-6', 'MDC', 'AEC', 'SEC', 'VAC'] },
                { subjectName: 'Psychology', hindi: 'मनोविज्ञान', categories: ['MJC-6', 'MIC-6', 'MDC', 'AEC', 'SEC', 'VAC'] },
                { subjectName: 'Hindi', hindi: 'हिंदी', categories: ['MJC-6', 'MIC-6', 'MDC', 'AEC', 'Major', 'Minor', 'SEC', 'VAC'] },
                { subjectName: 'English', hindi: 'अंग्रेज़ी', categories: ['MJC-6', 'MIC-6', 'MDC', 'AEC', 'SEC', 'VAC'] }
            ],
            'Semester 7': [
                { subjectName: 'History', hindi: 'इतिहास', categories: ['MJC-13', 'MJC-14', 'MJC-15','MIC-9', 'MDC', 'VAC', 'AEC','SEC'] },
                { subjectName: 'Political Science', hindi: 'राजनीति विज्ञान', categories: ['MJC-7', 'MIC-7', 'MDC', 'AEC', 'SEC', 'VAC'] },
                { subjectName: 'Economics', hindi: 'अर्थशास्त्र', categories: ['MJC-7', 'MIC-7', 'MDC', 'AEC', 'SEC', 'VAC'] },
                { subjectName: 'Sociology', hindi: 'समाजशास्त्र', categories: ['MJC-7', 'MIC-7', 'MDC', 'AEC', 'SEC', 'VAC'] },
                { subjectName: 'Psychology', hindi: 'मनोविज्ञान', categories: ['MJC-7', 'MIC-7', 'MDC', 'AEC', 'SEC', 'VAC'] },
                { subjectName: 'Hindi', hindi: 'हिंदी', categories: ['MJC-7', 'MIC-7', 'MDC', 'AEC', 'Major', 'Minor', 'SEC', 'VAC'] },
                { subjectName: 'English', hindi: 'अंग्रेज़ी', categories: ['MJC-7', 'MIC-7', 'MDC', 'AEC', 'SEC', 'VAC'] }
            ],
            'Semester 8': [
                { subjectName: 'History', hindi: 'इतिहास', categories: ['MJC-16', 'MIC-10', 'MDC', 'VAC', 'AEC','SEC'] },
                { subjectName: 'Political Science', hindi: 'राजनीति विज्ञान', categories: ['MJC-8', 'MIC-8', 'MDC', 'AEC', 'SEC', 'VAC'] },
                { subjectName: 'Economics', hindi: 'अर्थशास्त्र', categories: ['MJC-8', 'MIC-8', 'MDC', 'AEC', 'SEC', 'VAC'] },
                { subjectName: 'Sociology', hindi: 'समाजशास्त्र', categories: ['MJC-8', 'MIC-8', 'MDC', 'AEC', 'SEC', 'VAC'] },
                { subjectName: 'Psychology', hindi: 'मनोविज्ञान', categories: ['MJC-8', 'MIC-8', 'MDC', 'AEC', 'SEC', 'VAC'] },
                { subjectName: 'Hindi', hindi: 'हिंदी', categories: ['MJC-8', 'MIC-8', 'MDC', 'AEC', 'SEC', 'VAC'] },
                { subjectName: 'English', hindi: 'अंग्रेज़ी', categories: ['MJC-8', 'MIC-8', 'MDC', 'AEC', 'SEC', 'VAC'] }
            ]
        }
    },
    {
        courseName: 'B.Sc. (Science)', hindi: 'बी.एससी.', durationType: 'Semester', durationCount: 8,
        durations: {
            'Semester 1': [
                { subjectName: 'Physics', hindi: 'भौतिकी', categories: ['Major', 'Minor'] },
                { subjectName: 'Chemistry', hindi: 'रसायन विज्ञान', categories: ['Major', 'Minor'] },
                { subjectName: 'Mathematics', hindi: 'गणित', categories: ['Major', 'Minor'] },
                { subjectName: 'Biology', hindi: 'जीव विज्ञान', categories: ['Major', 'Minor'] }
            ],
            'Semester 2': [
                { subjectName: 'Physics', hindi: 'भौतिकी', categories: ['Major', 'Minor'] },
                { subjectName: 'Chemistry', hindi: 'रसायन विज्ञान', categories: ['Major', 'Minor'] },
                { subjectName: 'Mathematics', hindi: 'गणित', categories: ['Major', 'Minor'] },
                { subjectName: 'Biology', hindi: 'जीव विज्ञान', categories: ['Major', 'Minor'] }
            ],
            'Semester 3': [{ subjectName: 'Physics', hindi: 'भौतिकी', categories: ['Major', 'Minor'] }, { subjectName: 'Chemistry', hindi: 'रसायन विज्ञान', categories: ['Major', 'Minor'] }, { subjectName: 'Mathematics', hindi: 'गणित', categories: ['Major', 'Minor'] }, { subjectName: 'Biology', hindi: 'जीव विज्ञान', categories: ['Major', 'Minor'] }],
            'Semester 4': [{ subjectName: 'Physics', hindi: 'भौतिकी', categories: ['Major', 'Minor'] }, { subjectName: 'Chemistry', hindi: 'रसायन विज्ञान', categories: ['Major', 'Minor'] }, { subjectName: 'Mathematics', hindi: 'गणित', categories: ['Major', 'Minor'] }, { subjectName: 'Biology', hindi: 'जीव विज्ञान', categories: ['Major', 'Minor'] }],
            'Semester 5': [{ subjectName: 'Physics', hindi: 'भौतिकी', categories: ['Major', 'Minor'] }, { subjectName: 'Chemistry', hindi: 'रसायन विज्ञान', categories: ['Major', 'Minor'] }, { subjectName: 'Mathematics', hindi: 'गणित', categories: ['Major', 'Minor'] }, { subjectName: 'Biology', hindi: 'जीव विज्ञान', categories: ['Major', 'Minor'] }],
            'Semester 6': [{ subjectName: 'Physics', hindi: 'भौतिकी', categories: ['Major', 'Minor'] }, { subjectName: 'Chemistry', hindi: 'रसायन विज्ञान', categories: ['Major', 'Minor'] }, { subjectName: 'Mathematics', hindi: 'गणित', categories: ['Major', 'Minor'] }, { subjectName: 'Biology', hindi: 'जीव विज्ञान', categories: ['Major', 'Minor'] }],
            'Semester 7': [{ subjectName: 'Physics', hindi: 'भौतिकी', categories: ['Major', 'Minor'] }, { subjectName: 'Chemistry', hindi: 'रसायन विज्ञान', categories: ['Major', 'Minor'] }, { subjectName: 'Mathematics', hindi: 'गणित', categories: ['Major', 'Minor'] }, { subjectName: 'Biology', hindi: 'जीव विज्ञान', categories: ['Major', 'Minor'] }],
            'Semester 8': [{ subjectName: 'Physics', hindi: 'भौतिकी', categories: ['Major', 'Minor'] }, { subjectName: 'Chemistry', hindi: 'रसायन विज्ञान', categories: ['Major', 'Minor'] }, { subjectName: 'Mathematics', hindi: 'गणित', categories: ['Major', 'Minor'] }, { subjectName: 'Biology', hindi: 'जीव विज्ञान', categories: ['Major', 'Minor'] }]
        }
    },
    {
        courseName: 'B.Com. (Commerce)', hindi: 'बी.कॉम.', durationType: 'Semester', durationCount: 8,
        durations: {
            'Semester 1': [
                { subjectName: 'Financial Accounting', hindi: 'वित्तीय लेखांकन', categories: ['Accounting & Finance (Major)', 'Accounting & Finance (Minor)'] },
                { subjectName: 'Principles & Functions of Management', hindi: 'प्रबंधन के सिद्धांत', categories: ['Marketing (Major)', 'HRM (Major)'] },
                { subjectName: 'Principles & Functions of Marketing', hindi: 'विपणन के सिद्धांत', categories: ['Marketing (Minor)'] },
                { subjectName: 'Fundamentals of HRM', hindi: 'मानव संसाधन प्रबंधन', categories: ['HRM (Minor)'] },
                { subjectName: 'Basket course', hindi: 'बैकेट कोर्स', categories: ['MDC', 'VAC'] },
                { subjectName: 'Modern Indian Language (MIL)', hindi: 'आधुनिक भारतीय भाषा', categories: ['AEC'] }
            ],
            'Semester 2': [
                { subjectName: 'Business Organization & Management', hindi: 'व्यवसाय संगठन', categories: ['Accounting & Finance (Major)', 'Accounting & Finance (Minor)'] },
                { subjectName: 'Principles & Functions of Marketing', hindi: 'विपणन के सिद्धांत', categories: ['Marketing (Major)'] },
                { subjectName: 'Fundamentals of HRM', hindi: 'मानव संसाधन प्रबंधन', categories: ['HRM (Major)'] },
                { subjectName: 'Corporate Accounting', hindi: 'कॉर्पोरेट लेखांकन', categories: ['Accounting & Finance (Minor)'] },
                { subjectName: 'Advertising Management', hindi: 'विज्ञापन प्रबंधन', categories: ['Marketing (Minor)'] },
                { subjectName: 'Training & Development', hindi: 'प्रशिक्षण और विकास', categories: ['HRM (Minor)'] },
                { subjectName: 'Environmental Science', hindi: 'पर्यावरण विज्ञान', categories: ['AEC'] },
                { subjectName: 'Basket course', hindi: 'बैकेट कोर्स', categories: ['MDC', 'SEC', 'VAC'] }
            ],
            'Semester 3': [
                { subjectName: 'Business Law', hindi: 'व्यवसायिक कानून', categories: ['Accounting & Finance (Major)'] },
                { subjectName: 'Business Mathematics & Statistics', hindi: 'व्यवसाय गणित', categories: ['Accounting & Finance (Major)'] },
                { subjectName: 'Sales & Distribution Management', hindi: 'विक्रय प्रबंधन', categories: ['Marketing (Major)', 'Marketing (Minor)'] },
                { subjectName: 'Advertising Management', hindi: 'विज्ञापन प्रबंधन', categories: ['Marketing (Major)'] },
                { subjectName: 'Training & Development', hindi: 'प्रशिक्षण और विकास', categories: ['HRM (Major)'] },
                { subjectName: 'Compensation Management', hindi: 'प्रतिपूर्ति प्रबंधन', categories: ['HRM (Major)', 'HRM (Minor)'] },
                { subjectName: 'Business Finance', hindi: 'व्यवसाय वित्त', categories: ['Accounting & Finance (Minor)'] },
                { subjectName: 'Basket course', hindi: 'बैकेट कोर्स', categories: ['MDC', 'SEC'] },
                { subjectName: 'Disaster Risk Management', hindi: 'आपदा जोखिम प्रबंधन', categories: ['AEC'] }
            ],
            'Semester 4': [
                { subjectName: 'Business Finance', hindi: 'व्यवसाय वित्त', categories: ['Accounting & Finance (Major)'] },
                { subjectName: 'Income Tax Law & Accounting', hindi: 'आयकर कानून', categories: ['Accounting & Finance (Major)'] },
                { subjectName: 'Tourism Marketing', hindi: 'पर्यटन विपणन', categories: ['Marketing (Major)'] },
                { subjectName: 'Rural Marketing in India', hindi: 'ग्रामीण विपणन', categories: ['Marketing (Major)'] },
                { subjectName: 'Service Marketing', hindi: 'सेवा विपणन', categories: ['Marketing (Major)'] },
                { subjectName: 'Labour & Employment Laws in India', hindi: 'श्रम कानून', categories: ['HRM (Major)'] },
                { subjectName: 'Labour Welfare & Social Security', hindi: 'श्रम कल्याण', categories: ['HRM (Major)'] },
                { subjectName: 'Industrial Relations', hindi: 'औद्योगिक संबंध', categories: ['HRM (Major)'] },
                { subjectName: 'Management Accounting', hindi: 'प्रबंधन लेखांकन', categories: ['Accounting & Finance (Major)'] },
                { subjectName: 'Consumer Behaviour', hindi: 'उपभोक्ता व्यवहार', categories: ['Marketing (Major)'] },
                { subjectName: 'Basket course', hindi: 'बैकेट कोर्स', categories: ['AEC'] }
            ],
            'Semester 5': [
                { subjectName: 'Corporate Accounting', hindi: 'कॉर्पोरेट लेखांकन', categories: ['Accounting & Finance (Major)'] },
                { subjectName: 'Cost Accounting', hindi: 'लागत लेखांकन', categories: ['Accounting & Finance (Major)'] },
                { subjectName: 'Consumer Behaviour', hindi: 'उपभोक्ता व्यवहार', categories: ['Marketing (Major)'] },
                { subjectName: 'Digital Marketing', hindi: 'डिजिटल विपणन', categories: ['Marketing (Major)'] },
                { subjectName: 'Group Dynamics', hindi: 'समूह गतिशीलता', categories: ['HRM (Major)'] },
                { subjectName: 'Business Mathematics & Statistics', hindi: 'व्यवसाय गणित', categories: ['Accounting & Finance (Minor)'] },
                { subjectName: 'Financial Institutions & Markets', hindi: 'वित्तीय संस्थान', categories: ['Accounting & Finance (Minor)'] },
                { subjectName: 'Income Tax Law', hindi: 'आयकर कानून', categories: ['Accounting & Finance (Minor)'] },
                { subjectName: 'Rural Marketing in India', hindi: 'ग्रामीण विपणन', categories: ['Marketing (Minor)'] },
                { subjectName: 'Tourism Marketing', hindi: 'पर्यटन विपणन', categories: ['Marketing (Minor)'] },
                { subjectName: 'Labour & Employment Laws in India', hindi: 'श्रम कानून', categories: ['HRM (Minor)'] },
                { subjectName: 'Labour Welfare & Social Security', hindi: 'श्रम कल्याण', categories: ['HRM (Minor)'] },
                { subjectName: 'INT-1: Summer Internship', hindi: 'गर्मी की इंटर्नशिप', categories: ['None'] }
            ],
            'Semester 6': [
                { subjectName: 'Business Economics', hindi: 'व्यवसाय अर्थशास्त्र', categories: ['Accounting & Finance (Major)', 'Marketing (Major)'] },
                { subjectName: 'Management Accounting', hindi: 'प्रबंधन लेखांकन', categories: ['Accounting & Finance (Major)'] },
                { subjectName: 'Goods & Service Tax', hindi: 'वस्तु और सेवा कर', categories: ['Accounting & Finance (Major)'] },
                { subjectName: 'Event Management', hindi: 'इवेंट प्रबंधन', categories: ['Marketing (Major)'] },
                { subjectName: 'International Marketing', hindi: 'अंतर्राष्ट्रीय विपणन', categories: ['Marketing (Major)'] },
                { subjectName: 'Organisational Behaviour', hindi: 'संगठनात्मक व्यवहार', categories: ['HRM (Major)'] },
                { subjectName: 'Stress Management', hindi: 'तनाव प्रबंधन', categories: ['HRM (Major)'] },
                { subjectName: 'Management of Change', hindi: 'परिवर्तन का प्रबंधन', categories: ['HRM (Major)', 'HRM (Minor)'] },
                { subjectName: 'Investment Management', hindi: 'निवेश प्रबंधन', categories: ['Accounting & Finance (Minor)'] },
                { subjectName: 'GST', hindi: 'जीएसटी', categories: ['Accounting & Finance (Minor)'] },
                { subjectName: 'Service Marketing', hindi: 'सेवा विपणन', categories: ['Marketing (Minor)'] },
                { subjectName: 'Digital Marketing', hindi: 'डिजिटल विपणन', categories: ['Marketing (Minor)'] },
                { subjectName: 'Group Dynamics', hindi: 'समूह गतिशीलता', categories: ['HRM (Minor)'] }
            ],
            'Semester 7': [
                { subjectName: 'Audit & Corporate Governance', hindi: 'ऑडिट और कॉर्पोरेट गवर्नेंस', categories: ['Accounting & Finance (Major)'] },
                { subjectName: 'Research Methodology', hindi: 'अनुसंधान पद्धति', categories: ['Accounting & Finance (Major)', 'Marketing (Major)', 'HRM (Major)'] },
                { subjectName: 'Company Law', hindi: 'कंपनी कानून', categories: ['Accounting & Finance (Major)', 'Marketing (Major)'] },
                { subjectName: 'Business Law', hindi: 'व्यवसायिक कानून', categories: ['Accounting & Finance (Major)','Marketing (Major)', 'HRM (Major)'] },
                { subjectName: 'Business Economics', hindi: 'व्यवसाय अर्थशास्त्र', categories: ['HRM (Major)'] },
                { subjectName: 'Cost Accounting', hindi: 'लागत लेखांकन', categories: ['Accounting & Finance (Minor)'] },
                { subjectName: 'Event Management', hindi: 'इवेंट प्रबंधन', categories: ['Marketing (Minor)'] },
                { subjectName: 'Stress Management', hindi: 'तनाव प्रबंधन', categories: ['HRM (Minor)'] }
            ],
            'Semester 8': [
                { subjectName: 'Business Communication', hindi: 'व्यवसाय संचार', categories: ['Accounting & Finance (Major)', 'Marketing (Major)', 'HRM (Major)'] },
                { subjectName: 'Audit & Corporate Governance', hindi: 'ऑडिट और गवर्नेंस', categories: ['Accounting & Finance (Minor)'] },
                { subjectName: 'International Marketing', hindi: 'अंतर्राष्ट्रीय विपणन', categories: ['Marketing (Minor)'] },
                { subjectName: 'Strategic HRM', hindi: 'रणनीतिक HRM', categories: ['HRM (Minor)'] },
                { subjectName: 'Research Project / Dissertation', hindi: 'अनुसंधान परियोजना', categories: ['None'] }
            ]
        }
    },
    {
        courseName: 'B.Ed. (Teaching)', hindi: 'बी.एड.', durationType: 'Year', durationCount: 2,
        durations: {
            'Year 1': [
                { subjectName: 'Childhood & Growing Up', hindi: 'बाल्यावस्था', categories: ['Paper 1', 'Paper 2', 'Practicum'] },
                { subjectName: 'Contemporary India', hindi: 'समकालीन भारत', categories: ['None'] },
                { subjectName: 'Learning & Teaching', hindi: 'सीखना और पढ़ाना', categories: ['Paper 1', 'Paper 2'] }
            ],
            'Year 2': [
                { subjectName: 'Assessment for Learning', hindi: 'सीखने का आकलन', categories: ['None'] }
            ]
        }
    },
    {
        courseName: 'M.Com. (Commerce PG)', hindi: 'एम.कॉम.', durationType: 'Semester', durationCount: 4,
        durations: {
            'Semester 1': [
                { subjectName: 'Business Environment', hindi: 'व्यवसायिक वातावरण', categories: ['Major', 'Minor'] },
                { subjectName: 'Financial Accounting', hindi: 'वित्तीय लेखांकन', categories: ['Major', 'Minor'] }
            ],
            'Semester 2': [
                { subjectName: 'Business Law', hindi: 'व्यवसायिक कानून', categories: ['Major', 'Minor'] },
                { subjectName: 'Corporate Accounting', hindi: 'कॉर्पोरेट लेखांकन', categories: ['Major', 'Minor'] }
            ]
        }
    },
    // Other Courses Setup (Will show coming soon dynamically)
    { courseName: 'M.A. (Arts PG)', hindi: 'एम.ए. (पीजी)', durationType: 'Semester', durationCount: 4, durations: {} },
    { courseName: 'M.Sc. (Science PG)', hindi: 'एम.एससी. (पीजी)', durationType: 'Semester', durationCount: 4, durations: {} },
    { courseName: 'BCA', hindi: 'बी.सी.ए.', durationType: 'Semester', durationCount: 8, durations: {} },
    { courseName: 'BBA', hindi: 'बी.बी.ए.', durationType: 'Semester', durationCount: 8, durations: {} }
];

const Syllabus_CoursesStructure = [
    {
        courseName: 'B.A. (Arts)', hindi: 'बी.ए.',
        // यहाँ durations हटा दिया गया है, सीधे subjects आ गए हैं
        subjects: [
            { subjectName: 'History', hindi: 'इतिहास', categories: [] },
            { subjectName: 'Political Science', hindi: 'राजनीति विज्ञान', categories: [] },
            { subjectName: 'Economics', hindi: 'अर्थशास्त्र', categories: [] },
            { subjectName: 'Hindi', hindi: 'हिंदी', categories: [] },
            { subjectName: 'English', hindi: 'अंग्रेज़ी', categories: [] },
            { subjectName: 'Geography', hindi: 'भूगोल', categories: [] },
            { subjectName: 'Maithili', hindi: 'मैथिली', categories: [] },
            { subjectName: 'Music', hindi: 'संगीत', categories: [] },
            { subjectName: 'Urdu', hindi: 'उर्दू', categories: [] },
            { subjectName: 'Home Science', hindi: 'घरेलू विज्ञान', categories: [] },
            { subjectName: 'Sociology', hindi: 'समाजशास्त्र', categories: [] },
            { subjectName: 'Psychology', hindi: 'मनोविज्ञान', categories: [] },
            { subjectName: 'Philosophy', hindi: 'दर्शनशास्त्र', categories: [] },
            { subjectName: 'Sanskrit', hindi: 'संस्कृत', categories: [] },
            
            
            
        ]
    },
    {
        courseName: 'B.Sc. (Science)', hindi: 'बी.एससी.',
        subjects: [
            { subjectName: 'Physics', hindi: 'भौतिकी', categories: [] },
            { subjectName: 'Mathematics', hindi: 'गणित', categories: [] },
            { subjectName: 'Chemistry', hindi: 'रसायन विज्ञान', categories: [] },
            { subjectName: 'Botany', hindi: 'जीव विज्ञान', categories: [] },
            { subjectName: 'Zoology', hindi: 'प्राणी विज्ञान', categories: [] }
        ]
    },
    {
        courseName: 'B.Com. (Commerce)', hindi: 'बी.कॉम.',
        subjects: [
            { subjectName: 'Marketing', hindi: 'मार्केटिंग', categories: [] },
            { subjectName: 'Human Resource Management (HRM)', hindi: 'मानव संसाधन प्रबंधन', categories: [] },
            { subjectName: 'Accounting & Finance', hindi: 'लेखांकन और वित्त', categories: [] }
            
        ]
    },

    {
        courseName: 'B.Ed. (Teaching)', hindi: 'बी.एड.',
        subjects: [
            { subjectName: 'Childhood & Growing Up', hindi: 'बाल्यावस्था', categories: [] },
            { subjectName: 'Contemporary India', hindi: 'समकालीन भारत', categories: [] }
        ]
    }
    // ... बाकि कोर्सेज ऐसे ही लिखें
];

// 2. CREATE THE MASTER DATA TREE
// यह कोड ऊपर दिए गए Structure को PYQ, Notes और Syllabus तीनों में कॉपी कर देगा।
const masterData = {
    "PYQ": JSON.parse(JSON.stringify(PYQ_CoursesStructure)),
    "Notes": JSON.parse(JSON.stringify(PYQ_CoursesStructure)),
    "Syllabus": JSON.parse(JSON.stringify(Syllabus_CoursesStructure))
};

// 3. EASY PDF INJECTOR HELPER
// यह फंक्शन किसी भी PDF को सीधे सही जगह (PYQ/Notes/Syllabus) में डाल देता है
// 🚀 4. NAYA PDF INJECTOR (जो "None" सेमेस्टर को समझता है)
function insertPDF(type, courseName, duration, subject, category, pdfArray) {
    try {
        const typeData = masterData[type];
        const course = typeData.find(c => c.courseName === courseName);
        if (!course) return;

        // Syllabus के लिए डायरेक्ट Subject में PDF जोड़ना (duration = "None")
        if (duration === "None" && course.subjects) {
            const sub = course.subjects.find(s => s.subjectName === subject);
            if (sub) {
                if (!sub.pdfs) sub.pdfs = {};
                sub.pdfs[category] = pdfArray;
            }
            return;
        }

        // PYQ/Notes के लिए पुराने Semester वाला लॉजिक
        if (course.durations && course.durations[duration]) {
            const sub = course.durations[duration].find(s => s.subjectName === subject);
            if (sub) {
                if (!sub.pdfs) sub.pdfs = {};
                sub.pdfs[category] = pdfArray;
            }
        }
    } catch (e) {
        console.warn("PDF Mapping Error for:", type, courseName, subject);
    }
}

// ==========================================================
// 4. ADD YOUR PDFS HERE (Old Database mapped to New System)
// ==========================================================


//    ---- B.A. (Arts) English Pdfs ----
//   ==========================================

insertPDF("PYQ", "B.A. (Arts)", "Semester 3", "English", "MJC-4", [
    { title: "English MJC-4 (2024-28)", year: "2024-28", url: "pyq/B.A/English/English MJC-4 2024-28.pdf" }
]);



// --- B.A. (Arts) PDFs ---
insertPDF("Notes", "B.A. (Arts)", "Semester 1", "History", "Major", [
    { title: "History Major Unit 1", year: "Latest", url: "pdfs/hist_m1.pdf" }
]);

insertPDF("PYQ", "B.A. (Arts)", "Semester 1", "Hindi", "AEC", [
    { title: "Hindi AEC PYQ 2025-29", year: "2025-29", url: "pyq/B.A/Hindi/Hindi sem-1 AEC 2025-29.pdf" }
]);

insertPDF("PYQ", "B.A. (Arts)", "Semester 1", "Basic IT Tools", "None", [
    { title: "Basic IT Tools PYQ 2025-29", year: "2025-29", url: "pyq/B.A/Basic IT Tools/Basics IT Tools sem-1 SEC 2025-29.pdf" }
]);

insertPDF("PYQ", "B.A. (Arts)", "Semester 1", "Swach Bharat", "None", [
    { title: "Swach Bharat PYQ 2025-29", year: "2025-29", url: "pyq/B.A/Swach-Bharat/Swach Bharat sem-1 VAC 2026.pdf" }
]);

// --- B.Ed. (Teaching) PDFs ---
insertPDF("PYQ", "B.Ed. (Teaching)", "Year 1", "Childhood & Growing Up", "Paper 1", [
    { title: "Childhood PYQ 2024", year: "2024", url: "pdfs/bed_p1.pdf" }
]);

insertPDF("Syllabus", "B.Ed. (Teaching)", "Year 1", "Contemporary India", "None", [
    { title: "Contemporary India Syllabus", year: "Latest", url: "pdfs/india_syl.pdf" }
]);




//      =======================================================================
//                 Syllabus PDFs (New Method with "None" for Semester)
//      =======================================================================
// 🚀 SYLLABUS में PDF ऐड करने का नया तरीका (Semester की जगह "None" लिखें)

//  -------------------------------------
//         B.A. (Arts) Syllabus PDFs
//  -------------------------------------

insertPDF("Syllabus", "B.A. (Arts)", "None", "History", "None", [
    { title: "B.A. History Complete Syllabus", year: "2024-28", url: "Syllabus/BA/History.pdf" }
]);

insertPDF("Syllabus", "B.A. (Arts)", "None", "Political Science", "None", [
    { title: "B.A. Political Science Complete Syllabus", year: "2024-28", url: "Syllabus/BA/Political-Science.pdf" }
]);

insertPDF("Syllabus", "B.A. (Arts)", "None", "Hindi", "None", [
    { title: "B.A. Hindi Complete Syllabus", year: "2023 Version", url: "Syllabus/BA/Hindi.pdf" }
]);

insertPDF("Syllabus", "B.A. (Arts)", "None", "English", "None", [
    { title: "B.A. English Complete Syllabus", year: "2023 Version", url: "Syllabus/BA/English.pdf" }
]);

insertPDF("Syllabus", "B.A. (Arts)", "None", "Geography", "None", [
    { title: "B.A. Geography Complete Syllabus", year: "2023 Version", url: "Syllabus/BA/Geography.pdf" }
]);

insertPDF("Syllabus", "B.A. (Arts)", "None", "Home Science", "None", [
    { title: "B.A. Home Science Complete Syllabus", year: "2023 Version", url: "Syllabus/BA/Home-Science.pdf" }
]); 

insertPDF("Syllabus", "B.A. (Arts)", "None", "Sociology", "None", [
    { title: "B.A. Sociology Complete Syllabus", year: "2023 Version", url: "Syllabus/BA/Sociology.pdf" }
]);

insertPDF("Syllabus", "B.A. (Arts)", "None", "Psychology", "None", [
    { title: "B.A. Psychology Complete Syllabus", year: "2023 Version", url: "Syllabus/BA/Psychology.pdf" }
]);

insertPDF("Syllabus", "B.A. (Arts)", "None", "Maithili", "None", [
    { title: "B.A. Maithili Complete Syllabus", year: "2023 Version", url: "Syllabus/BA/Maithili.pdf" }
]);

insertPDF("Syllabus", "B.A. (Arts)", "None", "Music", "None", [
    { title: "B.A. Music Complete Syllabus", year: "2023 Version", url: "Syllabus/BA/Music.pdf" }
]); 

insertPDF("Syllabus", "B.A. (Arts)", "None", "Urdu", "None", [
    { title: "B.A. Urdu Complete Syllabus", year: "2023 Version", url: "Syllabus/BA/Urdu.pdf" }
]);

insertPDF("Syllabus", "B.A. (Arts)", "None", "Philosophy", "None", [
    { title: "B.A. Philosophy Complete Syllabus", year: "2023 Version", url: "Syllabus/BA/Philosophy.pdf" }
]);

insertPDF("Syllabus", "B.A. (Arts)", "None", "Sanskrit", "None", [
    { title: "B.A. Sanskrit Complete Syllabus", year: "2023 Version", url: "Syllabus/BA/Sanskrit.pdf" }
]);






// ------------------------------------------
//        B.Sc. (Science) Syllabus PDFs
// ------------------------------------------

insertPDF("Syllabus", "B.Sc. (Science)", "None", "Physics", "None", [
    { title: "B.Sc. Physics Complete Syllabus", year: "2023 Version", url: "Syllabus/BSC/Physics.pdf" }
]);

insertPDF("Syllabus", "B.Sc. (Science)", "None", "Mathematics", "None", [
    { title: "B.Sc. Mathematics Complete Syllabus", year: "2023 Version", url: "Syllabus/BSC/Mathematics.pdf" }
]);

insertPDF("Syllabus", "B.Sc. (Science)", "None", "Chemistry", "None", [
    { title: "B.Sc. Chemistry Complete Syllabus", year: "2023 Version", url: "Syllabus/BSC/Chemistry.pdf" }
]);

insertPDF("Syllabus", "B.Sc. (Science)", "None", "Botany", "None", [
    { title: "B.Sc. Botany Complete Syllabus", year: "2023 Version", url: "Syllabus/BSC/Botany.pdf" }
]);

insertPDF("Syllabus", "B.Sc. (Science)", "None", "Zoology", "None", [
    { title: "B.Sc. Zoology Complete Syllabus", year: "2023 Version", url: "Syllabus/BSC/Zoology.pdf" }
]);



// ---------------------------------------------
//        B.Com. (Commerce) Syllabus PDFs
// ---------------------------------------------

insertPDF("Syllabus", "B.Com. (Commerce)", "None", "Marketing", "None", [
    { title: "B.Com. Marketing Complete Syllabus", year: "2023 Version", url: "Syllabus/BCOM/Marketing.pdf" }
]);

insertPDF("Syllabus", "B.Com. (Commerce)", "None", "Human Resource Management (HRM)", "None", [
    { title: "B.Com. Human Resource Management (HRM) Complete Syllabus", year: "2023 Version", url: "Syllabus/BCOM/Human Resource Management (HRM).pdf" }
]);

insertPDF("Syllabus", "B.Com. (Commerce)", "None", "Accounting & Finance", "None", [
    { title: "B.Com. Accounting & Finance Complete Syllabus", year: "2023 Version", url: "Syllabus/BCOM/Accounting & Finance.pdf" }
]);