export const courseInfo = {
  title: "CMPT 415 - Special Topics in Software Engineering",
  instructor: "Dr. Brian",
  goodFitCriteria: [
    "Want to develop professional quality tools which help people",
    "3rd or 4th year student who has completed at least 4 upper division CS courses",
    "Have a commitment to high quality code and delivering great features for real-world users",
    "Have solid technical, group-work, and communication skills",
    "Are self-motivated"
  ],
  poorFitCriteria: [
    "Feel hesitant about quickly learning new frameworks or languages",
    "Expect not to be able to commit to working 10h a week on the course",
    "Want a research focused experience"
  ],
  prerequisites: {
    gpa: "Generally, students should have a strong GPA or upper-division GPA in Computing Science courses (3.0 or higher)",
    experience: "Students should be experienced with CMPT courses (completed 3 or more CMPT 3rd / 4th year technical courses), or have strong industry experience",
    relevantCourses: "Relevant courses include ones on software engineering, testing/reliability, UI, Android, or web",
    selectionProcess: "The selection process is competitive. Preference is often given to students who have more experience or specific skills"
  },
  courseStructure: {
    meeting: "Online via Discord; 100% remote, reasonable time in the Vancouver time-zone",
    timeCommitment: "Students are expected to do significant development work each week by consistently pushing the project ahead while maintaining the highest quality code",
    weeklyHours: "10 hours per week",
    assessment: "Marks are largely based on code/team contributions, but also on a couple written reports",
    licensing: "All contributions must abide by the project's existing licenses (such as GPL), which means that by contributing code students agree to have their work used in accordance with the license"
  }
};

export const projects = [
  {
    id: "icradle",
    name: "iCradle",
    studentsNeeded: 4,
    semester: "Fall 2025",
    description: "This system may be used to support health care delivery for pregnant women in low and middle income settings such as the Bidi Bidi refugee settlement in Uganda or to support prenatal care and research world wide.",
    impact: "Our Android app will be used by workers in the field to monitor the health of community members and refer them to health centres when necessary. In the health centres, our web app will be used by health care workers to access patient records, record treatments, and recommend follow-ups with discharged patients.",
    partnership: "The system is developed in partnership with doctors at Kings College London",
    realWorldUse: "We hope the system will be put into active use and have a direct health benefit on many people",
    techStack: ["Python/Flask", "React", "TypeScript", "Android/Kotlin"],
    developmentNeeds: [
      "Design and implement support for customized workflows which would support medical staff to follow a well defined process, or provide automated assistance at following a medical treatment decision tree",
      "Prepare mobile app for approval by Android Play Store",
      "Continue the development of sending requests over either HTTPS or SMS messages",
      "Optimize authentication used for SMS messages to reduce number of SMS messages required",
      "Continue improving the WebApp's UI for creating/editing dynamic form templates (like surveys)",
      "Testing the system (automated and manual) to ensure fit for purpose",
      "Analyze system security, threat analysis, penetration testing"
    ],
    necessarySkills: [
      "Keen interest in working at a professional level to develop a program to help people",
      "Some students will work on Android code, needing very strong Android experience (co-op experience with Android or CMPT 362)",
      "Some students will work on back-end Python or front-end React code",
      "One student in the group will also be the product owner who will work closely with Dr. Brian and the end customer to discover the customer's needs and help design the product"
    ],
    usefulExperience: ["Kotlin", "Python", "Flask", "REST API", "TypeScript", "React", "Docker", "CI/CD"],
    customerInfo: "You will work closely with the customer (doctor in London, and health care team in Sierra Leone)",
    codeLocation: "Code is publicly mirrored to GitHub.com (CRADLE platform, CRADLE mobile app, and SMS relay app); though all our development will be on SFU's internal GitHub Enterprise server"
  },
  {
    id: "cbr",
    name: "Hope Health Action - Community Based Rehabilitation (CBR)",
    studentsNeeded: 3,
    semester: "Fall 2025",
    description: "This system support the delivery of community based rehabilitation (CBR) services in the Bidi Bidi refugee settlement in Uganda.",
    impact: "The customer, Hope Health Action non-profit, has people working in Uganda to provide services such as wheelchairs, prosthetics, and physiotherapy to help refugees build a better life. The tool tracks the needs of clients, allows referrals to the service centre, and tracks what services have been delivered to each client.",
    purpose: "The purpose of the tool is to improve the quality of service delivered to each client",
    deploymentStatus: "The product is deployed and actively used by the customer",
    techStack: ["Django", "Python", "React", "TypeScript", "React Native"],
    developmentNeeds: [
      "Polish implementation of feature to allow creating new goals over time",
      "Improve filters interface for report generation",
      "Automated system tests",
      "Add email notifications when a new referral is created",
      "Add mechanism to gather end-user feedback and bug reports"
    ],
    necessarySkills: [
      "Keen interest in working at a professional level to develop a program to help people",
      "Some experience with TypeScript or JavaScript required (a keen interest in learning TypeScript is also fine!)"
    ],
    usefulExperience: ["React Native (very desirable!)", "Automated verification", "Django", "Python", "React", "REST API", "Docker", "CI/CD"],
    originalTeam: "The system was originally created by team Saturn in CMPT 373, Spring 2021"
  }
];