// backend/server.js
const express = require('express');
const cors = require('cors');
const path = require('path');   // <-- Importante

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Dados simulados
const modelos = [
  { id: 1, nome: "Modelo Compacto", descricao: "Ideal para quem busca praticidade e economia." },
  { id: 2, nome: "Modelo Familiar", descricao: "Espaço e conforto para toda a família." },
  { id: 3, nome: "Modelo Luxo", descricao: "Design moderno com acabamento premium." }
];

const sobre = {
  texto: "Trabalhamos com casas pré-fabricadas de alta qualidade, oferecendo rapidez na entrega e excelente custo-benefício."
};

const contato = {
  email: "contato@casasprefabricadas.com",
  telefone: "(49) 99999-9999"
};

////////////////////////////////////////////////
// Servir os arquivos estáticos (HTML, CSS, JS) da raiz do projeto
////////////////////////////////////////////////

app.use(express.static(path.join(__dirname, '..')));

// Rotas da API
app.get('/api/modelos', (req, res) => {
  res.json(modelos);
});

app.get('/api/sobre', (req, res) => {
  res.json(sobre);
});

app.get('/api/contato', (req, res) => {
  res.json(contato);
});

// Inicialização
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});