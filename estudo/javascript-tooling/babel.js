// Babel -> Transpilador que irá traduzir e compilar o nosso código javascript moderno em um javascript mais antigo, para que os navegadores que não tem o suporte às versões mais recentes do javascript também possam rodar.

// Script moderno (const, spread)
const nome = "Jonatha";
const obj = { nome };
const novoObj = { ...obj };