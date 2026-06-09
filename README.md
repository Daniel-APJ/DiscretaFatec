# 📚 DiscretaFATEC

**DiscretaFATEC** é uma aplicação web educacional desenvolvida para auxiliar estudantes de Matemática Discreta por meio de simuladores interativos, calculadoras e conteúdos de apoio.

O projeto foi criado como ferramenta de monitoria acadêmica da Fatec, oferecendo recursos visuais para facilitar a compreensão de conceitos fundamentais utilizados em cursos de tecnologia e computação.

---

## 🚀 Funcionalidades

### 🔗 Analisador de Relações Binárias

Permite criar uma matriz de relação de forma interativa e verificar automaticamente as propriedades:

* Reflexiva
* Simétrica
* Antissimétrica
* Transitiva

O usuário pode clicar nas células da matriz para definir as relações e acompanhar a análise em tempo real.

---

### 🧠 Calculadora de Tabela Verdade

Gera tabelas verdade completas para expressões da lógica proposicional.

#### Operadores suportados

| Operador | Significado    |
| -------- | -------------- |
| ¬        | Negação        |
| ∧        | Conjunção (E)  |
| ∨        | Disjunção (OU) |
| ⊕       | XOR            |
| →        | Condicional    |
| ↔        | Bicondicional  |

#### Exemplo

```text
(P ∧ Q) → R
```

A aplicação gera automaticamente todas as combinações possíveis das variáveis e calcula o resultado lógico correspondente.

---

### 🌐 Simulador de Grafos

Permite modelar grafos utilizando matrizes de adjacência.

Funcionalidades:

* Criação dinâmica de grafos
* Definição de arestas por clique
* Cálculo automático de:

  * Grau de Entrada
  * Grau de Saída

Ideal para compreender conceitos fundamentais de Teoria dos Grafos.

---

### 📖 Biblioteca de Conceitos

Seção destinada ao reforço teórico dos principais tópicos da disciplina.

Conteúdos incluídos:

* Relações Transitivas
* Teorema do Aperto de Mãos
* Aplicações da Matemática Discreta na Computação
* Relação entre grafos, bancos de dados e inteligência artificial

---

### 📐 Transformações Lineares no ℝ²

Ferramenta para aplicação de transformações geométricas em pontos bidimensionais.

Transformações disponíveis:

* Reflexão no eixo X
* Reflexão no eixo Y
* Reflexão na origem
* Reflexão na reta y = x
* Rotação de 90° (horária)
* Rotação de 90° (anti-horária)
* Dilatação com fator k = 2

Além do resultado, a aplicação exibe a matriz de transformação utilizada.

---

## 🛠️ Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript Vanilla
* Font Awesome

---

## 🎨 Interface

O sistema utiliza:

* Tema escuro moderno
* Layout responsivo
* Navegação por abas
* Componentes interativos
* Feedback visual instantâneo

---

## 📂 Estrutura do Projeto

```text
DiscretaFATEC/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## ▶️ Como Executar

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/discretafatec.git
```

### 2. Acesse a pasta

```bash
cd discretafatec
```

### 3. Abra o arquivo

```text
index.html
```

em qualquer navegador moderno.


### Ou apenas abra uma guia no navegador com o link do GitHub Pages

```link
https://daniel-apj.github.io/DiscretaFatec/
```

Não é necessário instalar dependências ou utilizar servidor backend.

---

## 🎯 Objetivo Acadêmico

O DiscretaFATEC foi desenvolvido para auxiliar estudantes na visualização prática de conceitos frequentemente considerados abstratos em disciplinas como:

* Matemática Discreta
* Estruturas de Dados
* Banco de Dados
* Inteligência Artificial

A proposta é transformar conteúdos teóricos em experiências interativas de aprendizagem.

## 👨‍🏫 Autor

Daniel Alexandre Pedro Júnior
Desenvolvido para a Monitoria de Matemática Discreta da Fatec.

**DiscretaFATEC © 2026**
