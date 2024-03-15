// Quantidade inicial de areia
let estoqueAreia = 1000; // Por exemplo, 1000 metros cúbicos

// Função para adicionar areia ao estoque
function adicionarAreia(quantidade) {
    estoqueAreia += quantidade;
    console.log(`${quantidade} metros cúbicos de areia foram adicionados ao estoque.`);
}

// Função para remover areia do estoque
function removerAreia(quantidade) {
    if (quantidade > estoqueAreia) {
        console.log("Quantidade insuficiente de areia no estoque.");
    } else {
        estoqueAreia -= quantidade;
        console.log(`${quantidade} metros cúbicos de areia foram removidos do estoque.`);
    }
}

// Função para verificar o estoque atual
function verificarEstoque() {
    console.log(`O estoque atual de areia é de ${estoqueAreia} metros cúbicos.`);
}

// Exemplos de uso
adicionarAreia(500); // Adiciona 500 metros cúbicos de areia
verificarEstoque(); // Verifica o estoque atual
removerAreia(200); // Remove 200 metros cúbicos de areia
verificarEstoque(); // Verifica o estoque atual
