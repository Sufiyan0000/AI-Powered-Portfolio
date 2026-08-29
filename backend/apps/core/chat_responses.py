import re


# ============================================================
# PREDEFINED ANSWERS
# ============================================================
#
# These responses are returned directly without calling the LLM.
# This makes common portfolio/recruitment questions:
# - faster
# - consistent
# - cheaper
# - more reliable
#
# ============================================================

PREDEFINED_ANSWERS = {

    # ========================================================
    # ABOUT
    # ========================================================

    "about": (
        "👋 I'm Md Sufiyan Ali, a software developer currently pursuing "
        "a Bachelor of Computer Applications (BCA).\n\n"
        "💻 My primary interests are Full Stack Development, Backend "
        "Engineering, Artificial Intelligence, and Generative AI.\n\n"
        "🚀 I enjoy building practical software applications that combine "
        "modern web technologies with intelligent AI capabilities.\n\n"
        "🎯 My current focus is on strengthening my software engineering "
        "skills and building production-oriented AI applications."
    ),

    "education": (
        "🎓 I'm currently pursuing a Bachelor of Computer Applications (BCA), "
        "with a focus on software development, databases, web development, "
        "and artificial intelligence fundamentals.\n\n"
        "📚 I completed my higher secondary education from Gossner College, "
        "Ranchi.\n\n"
        "🚀 Alongside my formal education, I continuously develop my skills "
        "through hands-on projects, technical documentation, and practical "
        "software development."
    ),

    # ========================================================
    # SKILLS
    # ========================================================

    "skills": (
        "🧑‍💻 My strongest technical areas are Full Stack Development, "
        "Backend Engineering, and Generative AI.\n\n"
        "⚛️ On the frontend, I primarily work with React, Next.js, "
        "JavaScript, TypeScript, and Tailwind CSS.\n\n"
        "⚙️ On the backend, I work with Django, FastAPI, REST APIs, "
        "MySQL, and SQLite.\n\n"
        "🤖 For AI development, I have practical experience with LangChain, "
        "Retrieval-Augmented Generation (RAG), embeddings, semantic search, "
        "ChromaDB, LLM integration, and AI chatbot development."
    ),

    "tech_stack": (
        "🛠️ My current technology stack includes React, Next.js, "
        "TypeScript, JavaScript, Tailwind CSS, Django, FastAPI, "
        "REST APIs, MySQL, SQLite, LangChain, RAG, and ChromaDB.\n\n"
        "🤖 I'm also actively expanding my knowledge of modern Generative "
        "AI technologies and production-oriented AI architectures."
    ),

    # ========================================================
    # EXPERIENCE
    # ========================================================

    "experience": (
        "💼 I have hands-on experience building frontend applications, "
        "backend APIs, full-stack applications, and AI-powered solutions.\n\n"
        "⚛️ I've worked with React and Next.js for modern frontend "
        "development and Django and FastAPI for backend development.\n\n"
        "🔌 I've also developed REST APIs, worked with relational databases, "
        "and implemented application-level authentication and data workflows.\n\n"
        "🤖 In AI development, I've built applications involving LangChain, "
        "RAG pipelines, semantic search, embeddings, vector databases, "
        "and LLM integration."
    ),

    # ========================================================
    # PROJECTS
    # ========================================================

    "projects": (
        "🚀 I've built projects across AI, full-stack development, "
        "e-commerce, entertainment, and modern web applications.\n\n"
        "📄 **DocAnalyzer** — An AI-powered document assistant that uses "
        "RAG, semantic search, LangChain, and LLM-powered responses.\n\n"
        "🤖 **AI-Powered Portfolio** — This portfolio includes SufiQ, "
        "a personal AI assistant designed to provide contextual information "
        "about my skills, projects, and experience.\n\n"
        "🎬 **BookMyShow** — A full-stack movie booking platform featuring "
        "movie discovery, show scheduling, interactive seat selection, "
        "and booking workflows.\n\n"
        "👟 **StrideX** — A full-stack e-commerce application focused on "
        "product discovery, filtering, cart management, and shopping workflows.\n\n"
        "🏠 **Villa Agency** — A responsive real-estate website focused on "
        "property presentation, navigation, and modern UI design."
    ),

    "proudest_project": (
        "🏆 I'm particularly proud of my AI-Powered Portfolio because it "
        "combines several areas of my technical interests in one application.\n\n"
        "🤖 It integrates an AI assistant with Retrieval-Augmented Generation "
        "(RAG), LangChain, a backend API, and contextual portfolio data.\n\n"
        "💻 It also demonstrates my ability to combine frontend development, "
        "backend engineering, and AI technologies into a complete application."
    ),

    # ========================================================
    # AI
    # ========================================================

    "ai_experience": (
        "🤖 I have practical experience building AI-powered applications "
        "using technologies such as LangChain, Retrieval-Augmented Generation "
        "(RAG), embeddings, semantic search, ChromaDB, and LLM APIs.\n\n"
        "📄 I've worked on document-based AI applications where information "
        "is retrieved from a knowledge base before generating a response.\n\n"
        "🧠 I'm currently deepening my knowledge of advanced RAG architectures, "
        "AI agents, LangGraph, and production AI systems."
    ),

    "genai_projects": (
        "🤖 I've built AI-focused projects including **DocAnalyzer** and "
        "the **AI-Powered Portfolio Assistant**.\n\n"
        "📄 DocAnalyzer is an AI document assistant that allows users to "
        "interact with uploaded documents using RAG, semantic search, "
        "vector databases, and LLM-powered responses.\n\n"
        "💬 The AI-Powered Portfolio uses SufiQ to answer questions about "
        "my skills, projects, education, and technical background using "
        "contextual portfolio data."
    ),

    # ========================================================
    # PROBLEM SOLVING
    # ========================================================

    "problem_solving": (
        "🎯 I approach problems by first understanding the requirements "
        "and breaking the problem into smaller, manageable components.\n\n"
        "🔍 I then investigate the relevant concepts, documentation, "
        "and possible approaches before choosing an implementation strategy.\n\n"
        "🛠️ I build the solution incrementally, test it, and debug issues "
        "systematically rather than making changes without understanding "
        "the underlying cause.\n\n"
        "🧠 I also try to understand why a solution works so I can apply "
        "the same reasoning to similar problems in the future.\n\n"
        "🚀 Finally, I look for opportunities to improve code quality, "
        "maintainability, performance, and overall architecture."
    ),

    # ========================================================
    # WORK PREFERENCES
    # ========================================================

    "hybrid_work": (
        "💼 Yes, I'm comfortable with hybrid work arrangements. "
        "I'm comfortable collaborating with a team while also working "
        "independently when required.\n\n"
        "🤝 I value clear communication, well-defined responsibilities, "
        "and effective collaboration regardless of the working model."
    ),

    "remote_work": (
        "🌍 Yes, I'm open to remote opportunities.\n\n"
        "💻 I'm comfortable working remotely with modern development, "
        "communication, version-control, and collaboration tools.\n\n"
        "🤝 I believe effective communication and consistent delivery "
        "are especially important in a remote environment."
    ),

    "contract_work": (
        "📄 Yes, I'm open to contract-based work.\n\n"
        "I'm particularly interested in contracts involving web development, "
        "full-stack applications, backend/API development, and "
        "AI-powered applications.\n\n"
        "📋 I'm happy to discuss the project scope, timeline, responsibilities, "
        "and expected deliverables before committing to an engagement."
    ),

    "hourly_work": (
        "⏱️ Yes, I'm open to hourly engagements.\n\n"
        "The rate and engagement structure can be discussed based on the "
        "project's technical complexity, scope, timeline, and level of involvement.\n\n"
        "📋 I prefer establishing clear requirements and expectations "
        "before beginning an hourly engagement."
    ),

    "monthly_work": (
        "📅 Yes, I'm open to monthly engagements and ongoing development work.\n\n"
        "This can include feature development, application maintenance, "
        "backend/API development, AI integration, or continuous improvements.\n\n"
        "🤝 The exact arrangement can be discussed based on the scope "
        "and expected level of involvement."
    ),

    # ========================================================
    # FREELANCE / PROJECTS
    # ========================================================

    "freelance": (
        "🚀 Yes, I take freelance projects.\n\n"
        "I'm particularly interested in projects involving modern web "
        "development, full-stack applications, backend/API development, "
        "AI chatbots, RAG systems, and AI-powered applications.\n\n"
        "📋 For each project, I prefer understanding the requirements, "
        "scope, timeline, and expected deliverables before determining "
        "the best approach."
    ),

    "new_projects": (
        "🗓️ Yes, I'm open to discussing new projects and opportunities.\n\n"
        "I'm especially interested in projects related to web development, "
        "full-stack applications, backend systems, and Generative AI.\n\n"
        "💬 Feel free to get in touch with the project requirements, "
        "expected timeline, and scope so we can discuss the engagement."
    ),

    # ========================================================
    # SALARY / COMPENSATION
    # ========================================================

    "salary": (
        "💰 My compensation expectations are flexible and depend on the "
        "role, responsibilities, technology stack, and overall opportunity.\n\n"
        "📋 I'm open to discussing a compensation package that is appropriate "
        "for the position, responsibilities, and expected contribution.\n\n"
        "🤝 I would prefer to discuss the specific role and expectations "
        "before determining an appropriate compensation range."
    ),

    "hourly_rate": (
        "💵 My hourly rate is flexible and depends on the project's scope, "
        "technical complexity, timeline, and level of involvement.\n\n"
        "📋 I prefer to understand the requirements and expected deliverables "
        "before finalizing an hourly rate.\n\n"
        "🤝 I'm happy to discuss a suitable rate based on the specific project."
    ),

    # ========================================================
    # CAREER
    # ========================================================

    "career_goal": (
        "🎯 My long-term goal is to become a highly skilled Software Engineer "
        "with strong expertise in Full Stack Development and Artificial Intelligence.\n\n"
        "🚀 I want to work on meaningful products, strengthen my software "
        "engineering fundamentals, and build reliable AI-powered systems "
        "that solve real-world problems."
    ),

    "roles": (
        "💼 I'm interested in opportunities related to Software Development, "
        "Full Stack Development, Backend Engineering, and AI Engineering.\n\n"
        "🚀 I'm also open to internships, freelance projects, contract work, "
        "and other opportunities where I can contribute while continuing "
        "to grow as a software engineer."
    ),
}


# ============================================================
# QUESTION VARIATIONS
# ============================================================
#
# Multiple natural ways of asking the same question are mapped
# to one predefined answer.
#
# ============================================================

PREDEFINED_QUESTIONS = {

    # --------------------------------------------------------
    # ABOUT
    # --------------------------------------------------------

    "about": [
        "who are you",
        "tell me about yourself",
        "tell me about you",
        "who is md sufiyan ali",
        "who is sufiyan",
        "introduce yourself",
        "what do you do",
        "tell me about sufiyan",
    ],

    "education": [
        "what is your educational background",
        "what is your education",
        "tell me about your education",
        "where did you study",
        "what are you studying",
        "what degree are you pursuing",
        "what are you studying currently",
    ],

    # --------------------------------------------------------
    # SKILLS
    # --------------------------------------------------------

    "skills": [
        "what are your main skills",
        "what are your skills",
        "what skills do you have",
        "tell me your skills",
        "what are your strongest skills",
        "what are your technical skills",
        "what technologies do you know",
        "what technologies do you work with",
        "what is your tech stack",
        "tell me about your technical skills",
        "what do you specialize in",
        "what are your strongest technical skills",
    ],

    "tech_stack": [
        "what is your technology stack",
        "what is your tech stack",
        "what technologies do you use",
        "what technologies are you familiar with",
        "what tools do you use",
        "what frameworks do you use",
        "what technologies have you worked with",
    ],

    # --------------------------------------------------------
    # EXPERIENCE
    # --------------------------------------------------------

    "experience": [
        "tell me about your experience",
        "what is your experience",
        "what experience do you have",
        "tell me about your background",
        "what is your development experience",
        "tell me about your professional experience",
        "what have you worked on",
        "what kind of development experience do you have",
        "tell me about your technical experience",
    ],

    # --------------------------------------------------------
    # PROJECTS
    # --------------------------------------------------------

    "projects": [
        "what projects have you worked on",
        "what projects have you built",
        "tell me about your projects",
        "what projects have you made",
        "show me your projects",
        "what are your main projects",
        "which projects have you worked on",
        "what applications have you built",
        "what have you built",
    ],

    "proudest_project": [
        "which project are you most proud of",
        "what project are you most proud of",
        "what is your best project",
        "what is your favorite project",
        "which is your strongest project",
        "which project best represents your skills",
    ],

    # --------------------------------------------------------
    # AI
    # --------------------------------------------------------

    "ai_experience": [
        "do you have experience with ai",
        "do you have ai experience",
        "what is your ai experience",
        "tell me about your ai experience",
        "have you worked with artificial intelligence",
        "have you worked with generative ai",
        "what ai technologies have you used",
        "what generative ai technologies do you know",
    ],

    "genai_projects": [
        "what genai projects have you built",
        "what generative ai projects have you built",
        "what ai projects have you built",
        "what ai projects have you worked on",
        "have you built any ai projects",
        "have you built generative ai applications",
        "tell me about your ai projects",
    ],

    # --------------------------------------------------------
    # PROBLEM SOLVING
    # --------------------------------------------------------

    "problem_solving": [
        "how do you approach problem solving",
        "how do you approach problem-solving",
        "how do you solve problems",
        "what is your approach to problem solving",
        "what is your approach to problem-solving",
        "how do you approach technical problems",
        "how do you debug problems",
        "how do you handle difficult problems",
        "how do you solve technical problems",
        "how do you approach a problem",
        "what is your problem solving approach",
        "what is your problem-solving approach",
    ],

    # --------------------------------------------------------
    # WORK PREFERENCES
    # --------------------------------------------------------

    "hybrid_work": [
        "are you comfortable with hybrid work",
        "are you open to hybrid work",
        "can you work in a hybrid setup",
        "are hybrid opportunities okay for you",
        "do you accept hybrid work",
        "would you be comfortable working hybrid",
        "are you available for hybrid work",
    ],

    "remote_work": [
        "are you comfortable with remote work",
        "are you open to remote work",
        "can you work remotely",
        "are remote opportunities okay for you",
        "do you accept remote work",
        "would you be comfortable working remotely",
        "are you available for remote work",
        "can you work from home",
    ],

    "contract_work": [
        "are you comfortable with contract work",
        "are you open to contract work",
        "do you take contract work",
        "do you accept contract based work",
        "are you available for contract work",
        "can you work on a contract basis",
        "are you open to contract based opportunities",
    ],

    "hourly_work": [
        "do you take hourly projects",
        "are you open to hourly work",
        "do you work hourly",
        "do you accept hourly projects",
        "can i hire you hourly",
        "are you available for hourly work",
        "do you offer hourly development",
    ],

    "monthly_work": [
        "are you open to monthly work",
        "do you take monthly projects",
        "are you available for monthly engagements",
        "do you work on a monthly basis",
        "are you open to monthly engagements",
        "can you work on a monthly contract",
        "do you accept monthly retainers",
    ],

    # --------------------------------------------------------
    # FREELANCE
    # --------------------------------------------------------

    "freelance": [
        "do you take projects",
        "do you take freelance projects",
        "do you accept freelance projects",
        "are you available for freelance work",
        "are you open to freelance work",
        "can i hire you for a project",
        "can i hire you",
        "do you work with clients",
        "are you accepting client projects",
        "are you open to client projects",
        "do you take client work",
    ],

    "new_projects": [
        "are you available for new projects",
        "are you accepting new projects",
        "are you available for a new project",
        "can i discuss a project with you",
        "are you currently available",
        "are you available for work",
        "are you looking for projects",
        "can we work together",
    ],

    # --------------------------------------------------------
    # COMPENSATION
    # --------------------------------------------------------

    "salary": [
        "what are your salary expectations",
        "what salary are you expecting",
        "what is your expected salary",
        "what salary do you demand",
        "what compensation are you expecting",
        "what are your compensation expectations",
        "how much salary do you expect",
        "what are your salary requirements",
    ],

    "hourly_rate": [
        "what is your hourly rate",
        "what is your hourly charge",
        "how much do you charge per hour",
        "what do you charge hourly",
        "what is your freelance rate",
        "what is your hourly pricing",
        "how much do you charge for an hour",
    ],

    # --------------------------------------------------------
    # CAREER
    # --------------------------------------------------------

    "career_goal": [
        "what is your career goal",
        "what are your career goals",
        "what is your long term goal",
        "what are your long term goals",
        "where do you see yourself in the future",
        "what do you want to become",
        "what are your professional goals",
    ],

    "roles": [
        "what roles are you looking for",
        "what kind of roles are you interested in",
        "what jobs are you looking for",
        "what opportunities are you looking for",
        "what type of developer are you",
        "what positions are you interested in",
        "what kind of opportunities do you want",
    ],
}


# ============================================================
# NORMALIZATION
# ============================================================

def normalize_question(question: str) -> str:
    """
    Normalize user questions before matching.

    Example:

        "How do you approach problem-solving?"

    becomes:

        "how do you approach problem solving"
    """

    normalized = question.lower().strip()

    # Treat hyphens as spaces.
    normalized = normalized.replace("-", " ")

    # Remove punctuation.
    normalized = re.sub(r"[^\w\s]", "", normalized)

    # Remove extra whitespace.
    normalized = re.sub(r"\s+", " ", normalized)

    return normalized.strip()


# ============================================================
# PREDEFINED ANSWER LOOKUP
# ============================================================

def get_predefined_answer(question: str) -> str | None:
    """
    Return a predefined answer when the user's question
    matches one of the known question variations.

    Returns:
        str | None
    """

    normalized_question = normalize_question(question)

    for answer_key, questions in PREDEFINED_QUESTIONS.items():

        for predefined_question in questions:

            if normalized_question == normalize_question(
                predefined_question
            ):
                return PREDEFINED_ANSWERS[answer_key]

    return None