/* ===================================================
   AI Resume Analyzer
   script.js - Part 1
   Core Functionality
===================================================*/

// ===============================
// DOM Elements
// ===============================

const resumeFile = document.getElementById("resumeFile");
const fileName = document.getElementById("fileName");
const fileSize = document.getElementById("fileSize");
const analyzeBtn = document.getElementById("analyzeBtn");
const atsScore = document.getElementById("atsScore");
const skills = document.getElementById("skills");
const education = document.getElementById("education");
const experience = document.getElementById("experience");
const projects = document.getElementById("projects");
const summary = document.getElementById("summary");

let uploadedFile = null;


// ===============================
// File Upload
// ===============================

if (resumeFile) {
    resumeFile.addEventListener("change", function () {
        const file = this.files[0];

        if (!file) {
            resetUpload();
            return;
        }

        const allowedTypes = [
            "application/pdf",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        ];

        if (!allowedTypes.includes(file.type)) {
            alert("Please upload a PDF or DOCX file.");
            resumeFile.value = "";
            resetUpload();
            return;
        }

        uploadedFile = file;
        fileName.textContent = "📄 " + file.name;
        fileSize.textContent = "Size : " + (file.size / 1024).toFixed(2) + " KB";
    });
}


// ===============================
// Reset Upload
// ===============================

function resetUpload() {
    uploadedFile = null;

    if (fileName) {
        fileName.textContent = "No file selected";
    }

    if (fileSize) {
        fileSize.textContent = "";
    }
}



// ===============================
// Analyze Button
// ===============================

if (analyzeBtn) {
    analyzeBtn.addEventListener("click", function () {
        if (!uploadedFile) {
            alert("Please upload your resume first.");
            return;
        }

        analyzeResume();
    });
}



// ===============================
// Resume Analysis
// ===============================

function analyzeResume() {

    showLoading();

    setTimeout(() => {

        const score = randomScore();

        atsScore.textContent = score + "%";

        displayAnalysis(score);

    }, 1500);

}



// ===============================
// Random ATS Score
// ===============================

function randomScore() {

    return Math.floor(Math.random() * 41) + 60;

}



// ===============================
// Resume Details
// ===============================

function displayAnalysis(score) {
    if (skills) {
        skills.textContent = "HTML, CSS, JavaScript, Java, SQL";
    }

    if (education) {
        education.textContent = "Bachelor of Engineering";
    }

    if (experience) {
        experience.textContent = "Fresher / Internship Experience";
    }

    if (projects) {
        projects.textContent = "Portfolio Website, Resume Analyzer";
    }

    if (summary) {
        summary.textContent = "A motivated candidate with strong technical skills and a passion for software development.";
    }

    updateScoreColor(score);
    generateSuggestions(score);
    generateStrengths(score);
    generateWeaknesses(score);
    generateJobs(score);
    saveAnalysis(score);
}



// ===============================
// ATS Score Color
// ===============================

function updateScoreColor(score) {

    if (score >= 85) {

        atsScore.style.color = "#16a34a";

    }

    else if (score >= 70) {

        atsScore.style.color = "#f59e0b";

    }

    else {

        atsScore.style.color = "#ef4444";

    }

}



// ===============================
// Loading Animation
// ===============================

function showLoading() {

    atsScore.textContent = "...";

    skills.textContent = "Analyzing...";

    education.textContent = "Analyzing...";

    experience.textContent = "Analyzing...";

    projects.textContent = "Analyzing...";

    summary.textContent = "Generating resume insights...";

}



// ===============================
// Utility
// ===============================

function formatBytes(bytes) {

    if (bytes === 0) return "0 Bytes";

    const k = 1024;

    const sizes = ["Bytes", "KB", "MB", "GB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];

}



/* =====================================================
   PART 2 - Resume Analysis Logic
===================================================== */

// ----------------------------
// Additional DOM Elements
// ----------------------------

const suggestionList = document.getElementById("suggestionList");
const strengthList = document.getElementById("strengthList");
const weaknessList = document.getElementById("weaknessList");
const jobContainer = document.getElementById("jobContainer");


// ----------------------------
// Update displayAnalysis()
// ----------------------------




// ----------------------------
// Suggestions
// ----------------------------

function generateSuggestions(score){

    suggestionList.innerHTML = "";

    let suggestions = [];

    if(score >= 85){

        suggestions = [
            "Excellent ATS score.",
            "Keep your resume updated.",
            "Add recent projects.",
            "Customize resume for each job."
        ];

    }

    else if(score >= 70){

        suggestions = [
            "Improve your resume summary.",
            "Add more technical keywords.",
            "Include certifications.",
            "Use strong action verbs."
        ];

    }

    else{

        suggestions = [
            "Increase project experience.",
            "Add GitHub profile.",
            "Include portfolio website.",
            "Improve formatting.",
            "Add measurable achievements."
        ];

    }

    suggestions.forEach(item=>{

        const li=document.createElement("li");

        li.textContent=item;

        suggestionList.appendChild(li);

    });

}



// ----------------------------
// Strengths
// ----------------------------

function generateStrengths(score){

    strengthList.innerHTML="";

    const strengths=[
        "Professional Layout",
        "Technical Skills",
        "Education Details",
        "Project Experience"
    ];

    if(score>=80){

        strengths.push("Strong ATS Compatibility");

    }

    strengths.forEach(item=>{

        const li=document.createElement("li");

        li.textContent=item;

        strengthList.appendChild(li);

    });

}



// ----------------------------
// Weaknesses
// ----------------------------

function generateWeaknesses(score){

    weaknessList.innerHTML="";

    let weak=[];

    if(score<80){

        weak.push(
            "Missing Certifications",
            "Weak Resume Summary",
            "Few Keywords"
        );
    }

    if(score<70){

        weak.push(
            "No Portfolio",
            "Need More Projects"
        );
    }

    weak.forEach(item=>{

        const li=document.createElement("li");

        li.textContent=item;

        weaknessList.appendChild(li);

    });

}



// ----------------------------
// Job Recommendations
// ----------------------------

function generateJobs(score){

    jobContainer.innerHTML="";

    const jobs=[

        {
            title:"Frontend Developer",
            exp:"0-2 Years",
            skills:"HTML, CSS, JavaScript"
        },

        {
            title:"Java Developer",
            exp:"Fresher",
            skills:"Java, SQL"
        },

        {
            title:"Full Stack Developer",
            exp:"1-3 Years",
            skills:"MERN Stack"
        },

        {
            title:"Software Engineer",
            exp:"Fresher",
            skills:"DSA, OOP"
        }

    ];

    jobs.forEach(job=>{

        const card=document.createElement("div");

        card.className="job-card";

        card.innerHTML=`

            <h3>${job.title}</h3>

            <p><strong>Experience:</strong> ${job.exp}</p>

            <p><strong>Skills:</strong> ${job.skills}</p>

            <button>Apply</button>

        `;

        jobContainer.appendChild(card);

    });

}



// ----------------------------
// Local Storage
// ----------------------------

function saveAnalysis(score){

    const data={

        file:uploadedFile.name,

        ats:score,

        date:new Date().toLocaleString()

    };

    localStorage.setItem(

        "resumeAnalysis",

        JSON.stringify(data)

    );

}



// ----------------------------
// Load Previous Analysis
// ----------------------------

window.addEventListener("load",()=>{

    const saved=localStorage.getItem("resumeAnalysis");

    if(saved){

        console.log(

            "Previous Analysis:",

            JSON.parse(saved)

        );

    }

});

/* ===================================================
   AI Resume Analyzer
   script.js - Part 3
   Report Generation & Utilities
===================================================*/

// ===============================
// Download Report
// ===============================

const downloadBtn = document.getElementById("downloadBtn");

if (downloadBtn) {
    downloadBtn.addEventListener("click", downloadReport);
}

function downloadReport() {

    if (atsScore.textContent === "0%" || atsScore.textContent === "...") {

        alert("Please analyze a resume first.");

        return;

    }

    try {

        const { jsPDF } = window.jspdf;

        const doc = new jsPDF();

        let y = 20;

        doc.setFont("helvetica", "bold");
        doc.setFontSize(20);
        doc.text("AI Resume Analyzer Report", 20, y);

        y += 15;

        doc.setFontSize(12);
        doc.setFont("helvetica", "normal");

        doc.text(`ATS Score : ${atsScore.textContent}`, 20, y);

        y += 10;
        doc.text(`Skills : ${skills.textContent}`, 20, y);

        y += 10;
        doc.text(`Education : ${education.textContent}`, 20, y);

        y += 10;
        doc.text(`Experience : ${experience.textContent}`, 20, y);

        y += 10;
        doc.text(`Projects : ${projects.textContent}`, 20, y);

        y += 10;

        const summaryLines = doc.splitTextToSize(summary.textContent, 170);

        doc.text("Summary :", 20, y);

        y += 8;

        doc.text(summaryLines, 20, y);

        y += summaryLines.length * 7 + 10;

        doc.setFont("helvetica", "bold");
        doc.text("Suggestions", 20, y);

        y += 8;

        doc.setFont("helvetica", "normal");

        document.querySelectorAll("#suggestionList li").forEach(item => {

            doc.text("• " + item.textContent, 25, y);

            y += 7;

        });

        doc.save("Resume_Analysis_Report.pdf");

    }

    catch (error) {

        console.error(error);

        alert("Unable to generate PDF report.");

    }

}



// ===============================
// Reset Analysis
// ===============================

function resetAnalysis() {
    if (atsScore) {
        atsScore.textContent = "0%";
        atsScore.style.color = "";
    }

    if (skills) {
        skills.textContent = "-";
    }

    if (education) {
        education.textContent = "-";
    }

    if (experience) {
        experience.textContent = "-";
    }

    if (projects) {
        projects.textContent = "-";
    }

    if (summary) {
        summary.textContent = "Upload a resume to view analysis.";
    }

    if (suggestionList) {
        suggestionList.innerHTML = "";
    }

    if (strengthList) {
        strengthList.innerHTML = "";
    }

    if (weaknessList) {
        weaknessList.innerHTML = "";
    }

    if (jobContainer) {
        jobContainer.innerHTML = "";
    }

    if (resumeFile) {
        resumeFile.value = "";
    }

    resetUpload();
    localStorage.removeItem("resumeAnalysis");
}



// ===============================
// Keyboard Shortcut
// Ctrl + R = Reset
// ===============================

document.addEventListener("keydown", function (event) {

    if (event.ctrlKey && event.key.toLowerCase() === "r") {

        event.preventDefault();

        if (confirm("Reset the current analysis?")) {

            resetAnalysis();

        }

    }

});



// ===============================
// Utility Functions
// ===============================

function showMessage(message) {

    alert(message);

}


function getCurrentDate() {

    return new Date().toLocaleDateString();

}



// ===============================
// Error Handling
// ===============================

window.addEventListener("error", function (event) {

    console.error("Application Error:", event.error);

});



// ===============================
// Application Initialization
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    console.log("AI Resume Analyzer Loaded Successfully");

    resetAnalysis();

});