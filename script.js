// Função para rolar a página até a seção de menu quando o botão for clicado
function verMenu() {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
        menuSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Função para mostrar uma seção específica
function showSection(sectionId) {
    // Seleciona todas as seções apenas uma vez
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        section.classList.add('hidden'); // Adiciona a classe 'hidden' para ocultar
        section.classList.remove('active'); // Remove a classe 'active'
    });

    // Mostra a seção desejada, se existir
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.remove('hidden'); // Remove a classe 'hidden'
        activeSection.classList.add('active'); // Adiciona a classe 'active'
    }
}

// Inicializa a página para mostrar a seção de boas-vindas ao carregar
document.addEventListener('DOMContentLoaded', () => {
    showSection('home'); // Mostra a seção 'home' ao carregar
});
document.addEventListener('DOMContentLoaded', () => {
    // Obtém o dia da semana (0 = Domingo, 1 = Segunda, ..., 6 = Sábado)
    const diasSemana = ["domingo", "segunda", "terca", "quarta", "quinta", "sexta", "sabado"];
    const diaAtual = new Date().getDay();
    const promocaoId = diasSemana[diaAtual];

    // Oculta todas as promoções e mostra apenas a promoção do dia
    document.querySelectorAll('.promocao').forEach(promocao => {
        promocao.classList.add('hidden');
    });

    const promocaoDoDia = document.getElementById(promocaoId);
    if (promocaoDoDia) {
        promocaoDoDia.classList.remove('hidden'); // Exibe a promoção do dia atual
    }
});
