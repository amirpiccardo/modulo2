const jobs = [
    { title: "Marketing Intern", location: "US, NY, New York" },
    { title: "Customer Service - Cloud Video Production", location: "NZ, Auckland" },
    { title: "Commissioning Machinery Assistant (CMA)", location: "US, IA, Wever" },
    { title: "Account Executive - Washington DC", location: "US, DC, Washington" },
    { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
    { title: "Accounting Clerk", location: "US, MD," },
    { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
    { title: "Lead Guest Service Specialist", location: "US, CA, San Francisco" },
    { title: "HP BSM SME", location: "US, FL, Pensacola" },
    { title: "Customer Service Associate - Part Time", location: "US, AZ, Phoenix" },
    { title: "ASP.net Developer Job opportunity at United States,New Jersey", location: "US, NJ, Jersey City" },
    { title: "Talent Sourcer (6 months fixed-term contract)", location: "GB, LND, London" },
    { title: "Applications Developer, Digital", location: "US, CT, Stamford" },
    { title: "Installers", location: "US, FL, Orlando" },
    { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
    { title: "VP of Sales - Vault Dragon", location: "SG, 01, Singapore" },
    { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
    { title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only", location: "GB, SOS, Southend-on-Sea" },
    { title: "Visual Designer", location: "US, NY, New York" },
    { title: "Process Controls Engineer - DCS PLC MS Office - PA", location: "US, PA, USA Northeast" },
    { title: "Marketing Assistant", location: "US, TX, Austin" },
    { title: "Front End Developer", location: "NZ, N, Auckland" },
    { title: "Engagement Manager", location: "AE," },
    { title: "Vice President, Sales and Sponsorship (Businessfriend.com)", location: "US, CA, Carlsbad" },
    { title: "Customer Service", location: "GB, LND, London" },
    { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
    { title: "Marketing Exec", location: "SG," },
    { title: "HAAD/DHA Licensed Doctors Opening in UAE", location: "AE, AZ, Abudhabi" },
    { title: "Talent Management Process Manager", location: "US, MO, St. Louis" },
    { title: "Customer Service Associate", location: "CA, ON, Toronto" },
    { title: "Customer Service Technical Specialist", location: "US, MA, Waltham" },
    { title: "Software Applications Specialist", location: "US, KS," },
    { title: "Craftsman Associate", location: "US, WA, Everett" },
    { title: "Completion Engineer", location: "US, CA, San Ramon" },
    { title: "I Want To Work At Karmarama", location: "GB, LND," },
    { title: "English Teacher Abroad", location: "US, NY, Saint Bonaventure" }
];

const title = document.getElementById("title");
const loc = document.getElementById("loc");
const button = document.getElementById("button");
const stamp = document.getElementById("stamp");

button.addEventListener("click", () => {
    stamp.innerHTML = "";
    let locationValue = loc.value.toLowerCase();
    let titleValue = title.value.toLowerCase();

    const jobsfound = jobs.filter(job =>
        (locationValue === "" || job.location.toLowerCase().includes(locationValue)) &&
        (titleValue === "" || job.title.toLowerCase().includes(titleValue))
    );

    if (jobsfound.length === 0) {
        const noJobs = document.createElement("div");
        noJobs.className = 'no-jobs';
        noJobs.innerText = "No jobs found, you can write to infojobsepic@gmail.com for updates.";
        stamp.appendChild(noJobs);
    } else {
        const resultCount = document.createElement("div");
        resultCount.className = 'job-count';
        resultCount.innerText = `Number of jobs found: ${jobsfound.length}`;
        stamp.appendChild(resultCount);
        
        jobsfound.forEach((jobfound) => {
            const jobElement = document.createElement("div");
            jobElement.innerText = `${jobfound.location} - ${jobfound.title}`;
            stamp.appendChild(jobElement);
        });
    }
    console.log(jobsfound);
});
