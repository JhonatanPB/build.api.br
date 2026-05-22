// Carregar notas ao abrir a página
document.addEventListener('DOMContentLoaded', () => {
    carregarNotas();
});

// Função para salvar uma nova nota
function salvarNota() {
    const notaInput = document.getElementById('noteInput');
    const texto = notaInput.value.trim();

    if (texto === '') {
        alert('Digite algo para salvar!');
        return;
    }

    // Criar objeto da nota
    const nota = {
        id: Date.now(),
        texto: texto,
        data: new Date().toLocaleDateString('pt-BR')
    };

    // Buscar notas existentes ou criar array vazio
    const notas = JSON.parse(localStorage.getItem('notas') || '[]');

    // Adicionar nova nota
    notas.unshift(nota);

    // Salvar no localStorage
    localStorage.setItem('notas', JSON.stringify(notas));

    // Limpar textarea
    notaInput.value = '';

    // Atualizar lista de notas
    carregarNotas();
}

// Função para carregar e exibir as notas
function carregarNotas() {
    const notesList = document.getElementById('notesList');
    const notas = JSON.parse(localStorage.getItem('notas') || '[]');

    if (notas.length === 0) {
        notesList.innerHTML = '<p style="color: rgb(180,180,180);">Nenhuma nota salva ainda.</p>';
        return;
    }

    notesList.innerHTML = notas.map(nota => `
        <div class="note-card">
            <p>${nota.texto}</p>
            <button onclick="apagarNota(${nota.id})" class="delete-btn">
                <i class="fa-solid fa-trash"></i> Apagar
            </button>
        </div>
    `).join('');
}

// Função para apagar uma nota
function apagarNota(id) {
    const notas = JSON.parse(localStorage.getItem('notas') || '[]');
    const novasNotas = notas.filter(nota => nota.id !== id);
    localStorage.setItem('notas', JSON.stringify(novasNotas));
    carregarNotas();
}