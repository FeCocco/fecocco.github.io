document.addEventListener('DOMContentLoaded', () => {

    /* ========================== TEMA ========================== */
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const htmlEl = document.documentElement;

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        htmlEl.setAttribute('data-theme', savedTheme);
        if (savedTheme === 'light') {
            themeToggleBtn.classList.replace('fa-moon', 'fa-sun');
        }
    }

    themeToggleBtn.addEventListener('click', () => {
        const newTheme = htmlEl.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        htmlEl.setAttribute('data-theme', newTheme);
        themeToggleBtn.classList.toggle('fa-sun', newTheme === 'light');
        themeToggleBtn.classList.toggle('fa-moon', newTheme === 'dark');
        localStorage.setItem('theme', newTheme);
    });

    /* ======================= HEADER SCROLL ======================= */
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    /* ================================== ANIMACAO DE SCROLL ================================== */
    const animatedElements = document.querySelectorAll('.scroll-animate');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });

    /* ================================== LINK ATIVO NO MENU ================================== */
    const navLinks = document.querySelectorAll('.nav-link');
    const allSections = document.querySelectorAll('main section');

    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        allSections.forEach(section => {
            if (window.scrollY >= section.offsetTop - 150) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${currentSectionId}`);
        });
    });

    /* ================================= TRADUCAO ================================= */
    const langOptions = document.querySelectorAll('.lang-option');
    let translations = {};

    const setLanguage = async (lang) => {
        try {
            const response = await fetch(`lang/${lang}.json`);
            if (!response.ok) throw new Error(`Failed to load ${lang}.json`);
            translations = await response.json();

            localStorage.setItem('language', lang);
            document.documentElement.lang = lang;

            document.querySelectorAll('[data-key]').forEach(element => {
                const key = element.getAttribute('data-key');
                if (translations[key]) {
                    element.innerHTML = translations[key];
                }
            });

            langOptions.forEach(option => {
                option.classList.toggle('active', option.getAttribute('data-lang') === lang);
            });
        } catch (error) {
            console.error("Error setting language:", error);
        }
    };

    /* ================================= MODAL (HABILIDADES E CURSOS) ================================= */
    const modalOverlay = document.getElementById('modal-overlay');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const closeModalBtn = document.getElementById('modal-close-btn');

    const credlyBadgeDiv = `<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="13a5ac7a-7cf1-4c0e-9aca-7fe7d09af899" data-share-badge-host="https://www.credly.com"></div>`;
    const credlyScriptSrc = 'https://cdn.credly.com/assets/utilities/embed.js';
    const credlyScriptId = 'credly-embed-script';

    const openModal = (title, content, isBadge = false) => {
        modalTitle.innerHTML = title || 'Detalhes';
        modalDescription.innerHTML = '';
        modalDescription.className = ''; // Limpa classes antigas

        if (isBadge) {
            modalDescription.classList.add('badge-container');
            modalDescription.innerHTML = content; // Insere apenas o <div>

            // Cria e injeta o script dinamicamente para garantir a execução
            const script = document.createElement('script');
            script.id = credlyScriptId;
            script.src = credlyScriptSrc;
            script.async = true;
            document.body.appendChild(script);
        } else {
            modalDescription.innerHTML = content || "Descrição não encontrada.";
        }

        modalOverlay.classList.add('visible');
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        modalOverlay.classList.remove('visible');
        document.body.style.overflow = '';
        modalDescription.innerHTML = '';

        // Remove o script da Credly do DOM para manter o site limpo
        const existingScript = document.getElementById(credlyScriptId);
        if (existingScript) {
            existingScript.remove();
        }
    };

    const setupEventListeners = () => {
        document.querySelectorAll('.skill-tag').forEach(tag => {
            tag.addEventListener('click', () => {
                const skill = tag.getAttribute('data-skill');
                const description = (translations.skills && translations.skills[skill]) || '';
                openModal(skill, description);
            });
        });

        document.querySelectorAll('.course-item').forEach(item => {
            item.addEventListener('click', () => {
                const courseKey = item.getAttribute('data-course');
                const title = translations[`${courseKey}Name`] || item.querySelector('.course-name').textContent;

                if (item.id === 'cisco-course') {
                    // Pega a descrição original do curso
                    const description = (translations.courses && translations.courses[courseKey]) || '';
                    // Combina o HTML do emblema com a descrição
                    const combinedContent = `${credlyBadgeDiv}<p>${description}</p>`;
                    openModal(title, combinedContent, true);
                } else {
                    const description = (translations.courses && translations.courses[courseKey]) || '';
                    openModal(title, description);
                }
            });
        });

        closeModalBtn.addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', (event) => {
            if (event.target === modalOverlay) closeModal();
        });
        window.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && modalOverlay.classList.contains('visible')) closeModal();
        });

        langOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                setLanguage(e.target.getAttribute('data-lang'));
            });
        });
    };

    // Função principal de inicialização
    const init = async () => {
        const initialLang = localStorage.getItem('language') || (navigator.language.startsWith('pt') ? 'pt' : 'en');
        await setLanguage(initialLang);
        setupEventListeners();
    };

    init(); // Inicia o site
});