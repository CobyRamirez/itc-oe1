
/* ---------- SCHOOL DATA ---------- */

const schools = [
    {
        name: "Abydos High School",
        shortName: "Abydos",
        image: "Images/Abydos_Icon.webp",
        symbol: "A",
        color: "#e8f3ff",
        description:
            "A small desert academy struggling to protect its future."
    },
    {
        name: "Gehenna Academy",
        shortName: "Gehenna",
        image: "Images/Gehenna_Icon.webp",
        symbol: "G",
        color: "#ffe8ed",
        description:
            "A chaotic academy known for its many clubs and factions."
    },
    {
        name: "Trinity General School",
        shortName: "Trinity",
        image: "Images/Trinity_Icon.webp",
        symbol: "T",
        color: "#f0eaff",
        description:
            "An elegant academy with traditions, tea parties, and politics."
    },
    {
        name: "Millennium Science School",
        shortName: "Millennium",
        image: "Images/Millennium_Icon.webp",
        symbol: "M",
        color: "#e3faff",
        description:
            "A technology-focused academy full of inventors and researchers."
    },
    {
        name: "Hyakkiyako Alliance Academy",
        shortName: "Hyakkiyako",
        image: "Images/Hyakkiyako_Icon.webp",
        symbol: "H",
        color: "#fff0d9",
        description:
            "An academy celebrating festivals and traditional culture."
    },
    {
        name: "Shanhaijing Senior Secondary School",
        shortName: "Shanhaijing",
        image: "Images/Shanhaijing_Icon.webp",
        symbol: "S",
        color: "#e7f8e9",
        description:
            "An academy inspired by Chinese culture and traditions."
    }
];

/* ---------- STUDENT DATA ---------- */

const students = [
    {
        name: "Shiroko Sunaokami",
        image: "Images/Shiroko Sunaokami Avatar.png",
        school: "Abydos",
        role: "Striker",
        club: "Foreclosure Task Force",
        initials: "SS",
        description:
            "A quiet and athletic student who takes her responsibilities seriously."
    },
    {
        name: "Hoshino Takanashi",
        image: "Images/Hoshino Takanashi Avatar.png",
        school: "Abydos",
        role: "Tank",
        club: "Foreclosure Task Force",
        initials: "HT",
        description:
            "The sleepy and laid-back vice president of the Abydos student council."
    },
    {
        name: "Serika Kuromi",
        image: "Images/Serika Kuromi Avatar.png",
        school: "Abydos",
        role: "Striker",
        club: "Foreclosure Task Force",
        initials: "SK",
        description:
            "A hardworking student who worries about the academy's financial problems."
    },
    {
        name: "Ayane Okusora",
        image: "Images/Ayane Okusora Avatar.png",
        school: "Abydos",
        role: "Special",
        club: "Foreclosure Task Force",
        initials: "AO",
        description:
            "The diligent secretary of the Abydos task force, Ayane keeps the group organized and supports its efforts to save their school."
    },
    {
        name: "Nonomi Izayoi",
        image: "Images/Nonomi Izayoi Avatar.png",
        school: "Abydos",
        role: "Striker",
        club: "Foreclosure Task Force",
        initials: "NI",
        description:
            "A cheerful and generous member of the Abydos task force, Nonomi encourages her friends with her upbeat nature."
    },
    {
        name: "Aru Rikuhachima",
        image: "Images/Aru Rikuhachima Avatar.png",
        school: "Gehenna",
        role: "Striker",
        club: "Problem Solver 68",
        initials: "AR",
        description:
            "The self-proclaimed president of a small group of freelance troublemakers."
    },
    {
        name: "Hina Sorasaki",
        image: "Images/Hina Sorasaki Avatar.png",
        school: "Gehenna",
        role: "Striker",
        club: "Prefect Team",
        initials: "HS",
        description:
            "The powerful and often exhausted leader of Gehenna's Prefect Team."
    },
    {
        name: "Ako Amau",
        image: "Images/Ako Amau Avatar.png",
        school: "Gehenna",
        role: "Special",
        club: "Prefect Team",
        initials: "AA",
        description:
            "The administrative officer of the Prefect Team who supports Hina."
    },
    {
        name: "Kayoko Onikata",
        image: "Images/Kayoko Onikata Avatar.png",
        school: "Gehenna",
        role: "Striker",
        club: "Problem Solver 68",
        initials: "KO",
        description:
            "The calm, level-headed advisor of Problem Solver 68, Kayoko often keeps the rest of the group grounded."
    },
    {
        name: "Mutsuki Asagi",
        image: "Images/Mutsuki Asagi Avatar.png",
        school: "Gehenna",
        role: "Striker",
        club: "Problem Solver 68",
        initials: "MA",
        description:
            "A mischievous member of Problem Solver 68, Mutsuki delights in playful pranks and keeping her friends on their toes."
    },
    {
        name: "Haruka Igusa",
        image: "Images/Haruka Igusa Avatar.png",
        school: "Gehenna",
        role: "Striker",
        club: "Problem Solver 68",
        initials: "HI",
        description:
            "A shy and earnest member of Problem Solver 68, Haruka works hard despite often doubting herself."
    },
    {
        name: "Chinatsu Hinomiya",
        image: "Images/Chinatsu Hinomiya Avatar.png",
        school: "Gehenna",
        role: "Special",
        club: "Prefect Team",
        initials: "CH",
        description:
            "A serious and conscientious Prefect Team officer, Chinatsu works as the team's medical support."
    },
    {
        name: "Iori Shiromi",
        image: "Images/Iori Shiromi Avatar.png",
        school: "Gehenna",
        role: "Striker",
        club: "Prefect Team",
        initials: "IS",
        description:
            "A sharp and capable Prefect Team officer, Iori is known for her strict attitude and formidable combat skills."
    },
    {
        name: "Hifumi Ajitani",
        image: "Images/Hifumi Ajiyani Avatar.png",
        school: "Trinity",
        role: "Striker",
        club: "Make-Up Work Club",
        initials: "HA",
        description:
            "A friendly student who enjoys cute things and her favorite mascot."
    },
    {
        name: "Azusa Shirasu",
        image: "Images/Azusa Shirasu Avatar.png",
        school: "Trinity",
        role: "Striker",
        club: "Make-Up Work Club",
        initials: "AS",
        description:
            "A serious student who is learning how to live a peaceful school life."
    },
    {
        name: "Koharu Shimoe",
        image: "Images/Koharu Shimoe Avatar.png",
        school: "Trinity",
        role: "Striker",
        club: "Make-Up Work Club",
        initials: "KS",
        description:
            "An outspoken member of the Make-Up Work Club, Koharu is easily flustered but genuinely wants to help her friends."
    },
    {
        name: "Hanako Urawa",
        image: "Images/Hanako Urawa Avatar.png",
        school: "Trinity",
        role: "Special",
        club: "Make-Up Work Club",
        initials: "HU",
        description:
            "A clever and witty member of the Make-Up Work Club, Hanako often hides her sharp insight behind a carefree manner."
    },
    {
        name: "Seia Yurizono",
        image: "Images/Seia Yurizonio Avatar.png",
        school: "Trinity",
        role: "Striker",
        club: "Tea Party",
        initials: "SY",
        description:
            "A thoughtful Tea Party member with a perceptive nature, Seia is known for her measured words and quiet insight."
    },
    {
        name: "Mika Misono",
        image: "Images/Mika Misono Avatar.png",
        school: "Trinity",
        role: "Striker",
        club: "Tea Party",
        initials: "MM",
        description:
            "A spirited Tea Party member with a bold, princess-like presence, Mika cares deeply about the people close to her."
    },
    {
        name: "Nagisa Kirifuji",
        image: "Images/Nagisa Kirifuji Avatar.png",
        school: "Trinity",
        role: "Special",
        club: "Tea Party",
        initials: "NK",
        description:
            "A refined and strategic Tea Party leader, Nagisa values careful planning and the stability of Trinity."
    },
    {
        name: "Yuuka Hayase",
        image: "Images/Yuuka Hayase Avatar.png",
        school: "Millennium",
        role: "Striker",
        club: "Seminar",
        initials: "YH",
        description:
            "A capable treasurer who keeps track of Millennium's finances."
    },
    {
        name: "Noa Ushio",
        image: "Images/Noa ushio Avatar.png",
        school: "Millennium",
        role: "Special",
        club: "Seminar",
        initials: "NU",
        description:
            "A clever and composed student who assists the Seminar."
    },
    {
        name: "Koyuki Kurosaki",
        image: "Images/Koyuki Kurosaki Avatar.png",
        school: "Millennium",
        role: "Striker",
        club: "Seminar",
        initials: "KK",
        description:
            "A lively and unpredictable Seminar member, Koyuki's playful curiosity often leads her into trouble."
    },
    {
        name: "Rio Tsukatsuki",
        image: "Images/Rio Tsukatsuki Avatar.png",
        school: "Millennium",
        role: "Special",
        club: "Seminar",
        initials: "RT",
        description:
            "A cool and calculating Seminar president, Rio is a strategic thinker who prioritizes Millennium's future."
    },
    {
        name: "Momoi Saiba",
        image: "Images/Momoi Saiba Avatar.png",
        school: "Millennium",
        role: "Striker",
        club: "Game Development Club",
        initials: "MS",
        description:
            "An energetic Game Development Club writer, Momoi is passionate about games and loves sharing ideas with her twin."
    },
    {
        name: "Midori Saiba",
        image: "Images/Midori Saiba Avatar.png",
        school: "Millennium",
        role: "Striker",
        club: "Game Development Club",
        initials: "MS",
        description:
            "A gentle and talented Game Development Club artist, Midori works alongside her twin to create games."
    },
    {
        name: "Yuzu Hanaoka",
        image: "Images/Yuzu Hanaoka Avatar.png",
        school: "Millennium",
        role: "Striker",
        club: "Game Development Club",
        initials: "YH",
        description:
            "A shy Game Development Club member, Yuzu is most comfortable expressing herself through games."
    },
    {
        name: "Arisu Tendō",
        image: "Images/Aris Tendou Avatar.png",
        school: "Millennium",
        role: "Striker",
        club: "Game Development Club",
        initials: "AT",
        description:
            "A mysterious girl discovered by the Game Development Club, Arisu approaches the world with a curious, game-loving spirit."
    },
    {
        name: "Izuna Kuda",
        image: "Images/Izuna Kuda Avatar.png",
        school: "Hyakkiyako",
        role: "Striker",
        club: "Ninjutsu Research Club",
        initials: "IK",
        description:
            "An energetic student who dreams of becoming a great ninja."
    },
    {
        name: "Michuru Chidori",
        image: "Images/Michiru Chidori Avatar.png",
        school: "Hyakkiyako",
        role: "Striker",
        club: "Ninjutsu Research Club",
        initials: "MC",
        description:
            "The enthusiastic leader of the Ninjutsu Research Club, Michiru is devoted to ninja culture and her manga-inspired dreams."
    },
    {
        name: "Tsukuyo Ōno",
        image: "Images/Tsukuyo Oono Avatar.png",
        school: "Hyakkiyako",
        role: "Striker",
        club: "Ninjutsu Research Club",
        initials: "TŌ",
        description:
            "A very tall but timid Ninjutsu Research Club member, Tsukuyo is gentle and sincerely committed to becoming a ninja."
    },
    {
        name: "Shun Sunohara",
        image: "Images/Shun Sunohara Avatar.png",
        school: "Shanhaijing",
        role: "Striker",
        club: "Plum Blossom Garden",
        initials: "SS",
        description:
            "An experienced instructor who cares deeply about her students."
    },
    {
        name: "Kokona Sunohara",
        image: "Images/Kokona Sunohara Avatar.png",
        school: "Shanhaijing",
        role: "Striker",
        club: "Plum Blossom Garden",
        initials: "KS",
        description:
            "A gifted young instructor at Plum Blossom Garden, Kokona takes her teaching responsibilities seriously."
    },
    {
        name: "Kisaki Ryūge",
        image: "Images/Kisaki Ryuuge Avatar.png",
        school: "Shanhaijing",
        role: "Special",
        club: "Genryumon",
        initials: "KR",
        description:
            "The composed leader of Genryumon, Kisaki guides Shanhaijing with poise and a strong sense of responsibility."
    },
    {
        name: "Mina Konoe",
        image: "Images/Mina Konoe Avatar.png",
        school: "Shanhaijing",
        role: "Striker",
        club: "Genryumon",
        initials: "MK",
        description:
            "A determined Genryumon officer, Mina is earnest about her duties and admires the ideals of a capable detective."
    }
];

/* ---------- HELPER FUNCTIONS ---------- */

function createElement(tag, className, text) {
    const element = document.createElement(tag);

    if (className) {
        element.className = className;
    }

    if (text !== undefined) {
        element.textContent = text;
    }

    return element;
}

function getSchool(shortName) {
    return schools.find(
        school => school.shortName === shortName
    );
}

function addImageWithFallback(container, imagePath, alt, fallbackText) {
    if (!imagePath) {
        container.textContent = fallbackText;
        container.setAttribute("role", "img");
        container.setAttribute("aria-label", alt);
        return;
    }

    const image = createElement("img");
    image.src = imagePath;
    image.alt = alt;
    image.addEventListener("error", () => {
        image.remove();
        container.textContent = fallbackText;
        container.setAttribute("role", "img");
        container.setAttribute("aria-label", alt);
    }, { once: true });
    container.appendChild(image);
}

/* ---------- SCHOOL CARDS ---------- */

function createSchoolCard(school) {
    const card = createElement("article", "archive-card");

    const symbol = createElement("div", "school-symbol");
    addImageWithFallback(
        symbol,
        school.image,
        `${school.shortName} school emblem`,
        school.symbol
    );

    symbol.style.backgroundColor = school.color;

    const name = createElement("h3", "", school.name);

    const description = createElement(
        "p",
        "",
        school.description
    );

    const link = createElement(
        "a",
        "card-action",
        "View Students →"
    );

    link.href =
        "students.html?school=" +
        encodeURIComponent(school.shortName);

    card.append(symbol, name, description, link);

    return card;
}

function renderSchools() {
    const schoolList = document.getElementById("school-list");
    const featuredSchools =
        document.getElementById("featured-schools");

    if (schoolList) {
        schools.forEach(school => {
            schoolList.appendChild(createSchoolCard(school));
        });
    }

    if (featuredSchools) {
        schools.slice(0, 3).forEach(school => {
            featuredSchools.appendChild(
                createSchoolCard(school)
            );
        });
    }
}

/* ---------- STUDENT CARDS ---------- */

function createStudentCard(student) {
    const card = createElement(
        "button",
        "archive-card student-card"
    );

    card.type = "button";

    const avatar = createElement("div", "student-avatar");
    addImageWithFallback(
        avatar,
        student.image,
        `${student.name} avatar`,
        student.initials
    );

    const name = createElement("h3", "", student.name);

    const school = createElement(
        "p",
        "",
        student.school
    );

    const role = createElement(
        "span",
        "tag",
        student.role
    );

    card.append(avatar, name, school, role);

    card.addEventListener("click", () => {
        showStudentDetails(student);
    });

    return card;
}

function renderStudents() {
    const studentList = document.getElementById("student-list");
    const searchInput = document.getElementById("student-search");
    const schoolFilter = document.getElementById("school-filter");
    const studentCount = document.getElementById("student-count");

    if (
        !studentList ||
        !searchInput ||
        !schoolFilter ||
        !studentCount
    ) {
        return;
    }

    function updateStudentList() {
        const searchText = searchInput.value
            .trim()
            .toLowerCase();

        const selectedSchool = schoolFilter.value;

        const filteredStudents = students.filter(student => {
            const matchesName = student.name
                .toLowerCase()
                .includes(searchText);

            const matchesSchool =
                selectedSchool === "all" ||
                student.school === selectedSchool;

            return matchesName && matchesSchool;
        });

        studentList.replaceChildren();

        studentCount.textContent =
            `Showing ${filteredStudents.length} student(s)`;

        if (filteredStudents.length === 0) {
            const message = createElement(
                "p",
                "empty-state",
                "No students found. Try another search."
            );

            studentList.appendChild(message);
            return;
        }

        filteredStudents.forEach(student => {
            studentList.appendChild(
                createStudentCard(student)
            );
        });
    }

    // Add school options to the filter.
    schools.forEach(school => {
        const option = document.createElement("option");

        option.value = school.shortName;
        option.textContent = school.shortName;

        schoolFilter.appendChild(option);
    });

    // Read a school filter from the URL, if present.
    const params = new URLSearchParams(window.location.search);
    const requestedSchool = params.get("school");

    if (
        requestedSchool &&
        schools.some(school =>
            school.shortName === requestedSchool
        )
    ) {
        schoolFilter.value = requestedSchool;
    }

    searchInput.addEventListener("input", updateStudentList);
    schoolFilter.addEventListener("change", updateStudentList);

    updateStudentList();
}

/* ---------- STUDENT PROFILE MODAL ---------- */

function showStudentDetails(student) {
    const modal = document.getElementById("student-modal");
    const details = document.getElementById("student-details");

    if (!modal || !details) {
        return;
    }

    details.replaceChildren();

    const avatar = createElement("div", "student-avatar");
    addImageWithFallback(
        avatar,
        student.image,
        `${student.name} avatar`,
        student.initials
    );

    const name = createElement("h2", "", student.name);

    const school = createElement(
        "p",
        "",
        `Academy: ${student.school}`
    );

    const role = createElement(
        "p",
        "",
        `Combat Role: ${student.role}`
    );

    const club = createElement(
        "p",
        "",
        `Club: ${student.club}`
    );

    const description = createElement(
        "p",
        "",
        student.description
    );

    details.append(
        avatar,
        name,
        school,
        role,
        club,
        description
    );

    modal.hidden = false;
    document.body.style.overflow = "hidden";

    document.getElementById("close-modal").focus();
}

function closeStudentDetails() {
    const modal = document.getElementById("student-modal");

    if (modal) {
        modal.hidden = true;
        document.body.style.overflow = "";
    }
}

function setupModal() {
    const modal = document.getElementById("student-modal");
    const closeButton = document.getElementById("close-modal");

    if (!modal || !closeButton) {
        return;
    }

    closeButton.addEventListener("click", closeStudentDetails);

    modal.addEventListener("click", event => {
        if (event.target === modal) {
            closeStudentDetails();
        }
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape" && !modal.hidden) {
            closeStudentDetails();
        }
    });
}

/* ---------- INITIALIZE WEBSITE ---------- */

document.addEventListener("DOMContentLoaded", () => {
    renderSchools();
    renderStudents();
    setupModal();
});
