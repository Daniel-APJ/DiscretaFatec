// --- CONTROLADOR DE ABAS ---
function openTab(tabId) {
  // Remove as classes ativas de todas as abas e botões
  document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  
  // Ativa o conteúdo da aba clicada
  document.getElementById(tabId).classList.add('active');
  
  // Garante a ativação do botão usando o window.event de forma segura
  if (window.event && window.event.currentTarget) {
    window.event.currentTarget.classList.add('active');
  }
}


// --- LOGICA DO PROJETO 1: RELAÇÕES BINÁRIAS ---
let matrix = [];

function createMatrix() {
  const num = parseInt(document.getElementById("matrixSize").value) || 3;
  const container = document.getElementById("matrixContainer");
  
  container.style.gridTemplateColumns = `repeat(${num}, 45px)`;
  container.innerHTML = "";
  
  matrix = Array(num).fill().map(() => Array(num).fill(0));
  
  for (let linha = 0; linha < num; linha++) {
    for (let col = 0; col < num; col++) {
      const cell = document.createElement("div");
      cell.className = 'cell';
      cell.innerText = '0';
      cell.onclick = () => toggleCell(cell, linha, col);
      container.appendChild(cell);
    }
  }
  analyze();
}

function toggleCell(element, i, j) { 
  matrix[i][j] = matrix[i][j] === 0 ? 1 : 0;
  element.innerText = matrix[i][j];
  element.classList.toggle('active');
  analyze();
}

function analyze() {
  const n = matrix.length;
  const props = { reflexiva: true, simetrica: true, antissimetrica: true, transitiva: true };
  
  // Reflexiva
  for (let i = 0; i < n; i++) {
    if (matrix[i][i] !== 1) props.reflexiva = false;
  }
  
  // Simétrica e Antissimétrica
  for (let l = 0; l < n; l++) {
    for (let c = 0; c < n; c++) {
      if (matrix[l][c] === 1 && matrix[c][l] === 0) props.simetrica = false;
      if (l !== c && matrix[l][c] === 1 && matrix[c][l] === 1) props.antissimetrica = false;
    }
  }
  
  // Transitiva
  for (let l = 0; l < n; l++) {
    for (let c = 0; c < n; c++) {
      if (matrix[l][c] === 1) {
        for (let k = 0; k < n; k++) {
          if (matrix[c][k] === 1 && matrix[l][k] !== 1) props.transitiva = false;
        }
      }
    }
  }
  renderResults(props);
}

function renderResults(props) {
  const resultsDiv = document.getElementById("matrixResults");
  resultsDiv.innerHTML = "";
  
  const relacoes = {
    reflexiva: "Reflexiva",
    simetrica: "Simétrica",
    antissimetrica: "Antissimétrica",
    transitiva: "Transitiva"
  };
  
  for (let p in props) {
    const card = document.createElement("div");
    card.className = `prop-card ${props[p]}`;
    card.innerHTML = `<strong>${relacoes[p]}</strong><br>${props[p] ? '✅ Sim' : '❌ Não'}`;
    resultsDiv.appendChild(card);
  }
}


// --- LOGICA DO PROJETO 2: TABELA VERDADE ---
function inserir(simbolo) {
  const input = document.getElementById('expressao');
  const inicio = input.selectionStart;
  const fim = input.selectionEnd;
  const texto = input.value;

  input.value = texto.substring(0, inicio) + simbolo + texto.substring(fim);
  input.focus();
  input.setSelectionRange(inicio + simbolo.length, inicio + simbolo.length);
}

function gerarTabelaVerdade() {
  const expressao = document.getElementById('expressao').value;
  const table = document.getElementById('tableTrue');
  
  const variaveis = [...new Set(expressao.match(/[A-Z]/gi))].sort();
  if (variaveis.length === 0) return alert('Digite uma expressão válida! Ex: P ∧ Q');
  
  let combinacoes = [[]];
  variaveis.forEach(() => {
    let nextStep = [];
    combinacoes.forEach(combo => {
      nextStep.push([...combo, true]);
      nextStep.push([...combo, false]);
    });
    combinacoes = nextStep;
  });
  
  let html = '<table><thead><tr>';
  variaveis.forEach(v => html += `<th>${v}</th>`);
  html += '<th>Resultado</th></tr></thead><tbody>';
  
  let erroEncontrado = false;
  
  combinacoes.forEach(linCombo => {
    if (erroEncontrado) return;
    
    let linhaValor = {};
    html += '<tr>';
    
    variaveis.forEach((v, index) => {
      const val = linCombo[index];
      linhaValor[v] = val;
      html += `<td>${val ? 'V' : 'F'}</td>`;
    });
    
    try {
      let expr = expressao;
      variaveis.forEach(v => {
        expr = expr.replace(new RegExp(`\\b${v}\\b`, 'g'), linhaValor[v]);
      });
      
      let jsExpr = expr;
      const mapaLogico = { '¬': "!", '∧': "&&", '∨': "||", '→': "<=", '↔': "===", '⊕': "!==" };
      
      Object.keys(mapaLogico).forEach((simbolo) => {
        jsExpr = jsExpr.replace(new RegExp(simbolo, "g"), mapaLogico[simbolo]);
      });
      
      const result = eval(jsExpr);
      const resChar = result ? 'V' : 'F';
      
      html += `<td class="${result ? 'true' : 'false'}"><b>${resChar}</b></td>`;
    } catch(e) {
      erroEncontrado = true;
      console.error(e);
      alert('Houve um erro na expressão! Verifique parênteses e operadores.');
      return;
    }
    html += '</tr>';
  });
  
  if (!erroEncontrado) {
    html += '</tbody></table>';
    table.innerHTML = html;
  }
}


// --- LOGICA DO PROJETO 3: TEORIA DOS GRAFOS ---
let graphMatrix = [];

function createGraphMatrix() {
  const num = parseInt(document.getElementById("graphSize").value) || 4;
  const container = document.getElementById("graphMatrixContainer");
  
  container.style.gridTemplateColumns = `repeat(${num}, 45px)`;
  container.innerHTML = "";
  
  graphMatrix = Array(num).fill().map(() => Array(num).fill(0));
  
  for (let linha = 0; linha < num; linha++) {
    for (let col = 0; col < num; col++) { 
      const cell = document.createElement("div");
      cell.className = 'cell';
      cell.innerText = '0';
      cell.onclick = () => toggleGraphCell(cell, linha, col);
      container.appendChild(cell);
    }
  }
  analyzeGraph();
}

function toggleGraphCell(element, i, j) {
  graphMatrix[i][j] = graphMatrix[i][j] === 0 ? 1 : 0;
  element.innerText = graphMatrix[i][j];
  element.classList.toggle('active');
  analyzeGraph();
}

function analyzeGraph() {
  const n = graphMatrix.length;
  const degreesList = document.getElementById("graphDegrees");
  degreesList.innerHTML = "";
  
  for (let i = 0; i < n; i++) {
    let grauSaida = 0;
    let grauEntrada = 0;
    
    for (let j = 0; j < n; j++) {
      if (graphMatrix[i][j] === 1) grauSaida++;   
      if (graphMatrix[j][i] === 1) grauEntrada++; 
    }
    
    const li = document.createElement("li");
    li.className = "degree-item";
    li.innerHTML = `<span><strong>Vértice ${i + 1}</strong></span> 
                    <span>Grau de Saída: ${grauSaida} | Grau de Entrada: ${grauEntrada}</span>`;
    degreesList.appendChild(li);
  }
}

// --- INICIALIZADOR ÚNICO DA APLICAÇÃO ---
window.onload = function() {
  createMatrix();
  createGraphMatrix();
};


// --- LOGICA DO PROJETO 4: ÁLGEBRA LINEAR ---
function calcularTransformacao() {
  const x = parseFloat(document.getElementById("pontoX").value) || 0;
  const y = parseFloat(document.getElementById("pontoY").value) || 0;
  const tipo = document.getElementById("tipoTransformacao").value;
  
  let novoX = 0;
  let novoY = 0;
  let matrizExplicacao = "";

  // Aplica as matrizes de transformação
  switch (tipo) {
    case "refX":
      novoX = x;
      novoY = -y;
      matrizExplicacao = "[1  0] * [x]<br>[0 -1] * [y]";
      break;
    case "refY":
      novoX = -x;
      novoY = y;
      matrizExplicacao = "[-1 0] * [x]<br>[ 0 1] * [y]";
      break;
    case "refOrigem":
      novoX = -x;
      novoY = -y;
      matrizExplicacao = "[-1  0] * [x]<br>[ 0 -1] * [y]";
      break;
    case "refBissetriz1":
      novoX = y;
      novoY = x;
      matrizExplicacao = "[0 1] * [x]<br>[1 0] * [y]";
      break;
    case "rot90Horario":
      // Rotação de -90 graus (ou 270) -> cos(-90)=0, sen(-90)=-1
      novoX = y;
      novoY = -x;
      matrizExplicacao = "[0 1] * [x]<br>[-1 0] * [y]";
      break;
    case "rot90Anti":
      // Rotação de 90 graus -> cos(90)=0, sen(90)=1
      novoX = -y;
      novoY = x;
      matrizExplicacao = "[0 -1] * [x]<br>[1  0] * [y]";
      break;
    case "dilatacao2":
      novoX = x * 2;
      novoY = y * 2;
      matrizExplicacao = "[2 0] * [x]<br>[0 2] * [y]";
      break;
  }

  const containerResultado = document.getElementById("resultadoAlgebra");
  const card = document.getElementById("cardAlgebra");
  
  card.innerHTML = `
    <strong>Ponto Original:</strong> P(${x}, ${y})<br><br>
    <strong>Matriz de Transformação Aplicada:</strong><br>
    <pre style="background: rgba(0,0,0,0.3); padding: 8px; border-radius: 4px; font-family: monospace;">${matrizExplicacao}</pre><br>
    <strong>Ponto Transformado:</strong> P'(${novoX}, ${novoY})
  `;
  
  containerResultado.style.display = "block";
}