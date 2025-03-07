# 🚀 Teste de Performance com K6 e Relatório Automático 📊  

Este projeto utiliza o **K6** para testes de carga e gera relatórios automáticos em **HTML** baseados nos resultados.  

## 📌 **Pré-requisitos**  

Antes de iniciar, certifique-se de ter instalado:  

1. **Node.js** (v18 ou superior) → [Baixe aqui](https://nodejs.org/)  
2. **K6** (ferramenta de testes de carga)  
3. **Git** (opcional, caso queira versionar o projeto)  

---

## 📌 **1️⃣ Instalando o K6**  

### 🔹 **Windows** (via Chocolatey)  
Abra o **PowerShell como Administrador** e execute:  
```powershell
choco install k6 -y
```

### 🔹 Windows (via Scoop)
scoop install k6

### 🔹 Linux/macOS

brew install k6  # macOS (via Homebrew)
sudo apt update && sudo apt install k6 -y  # Ubuntu/Debian

## 📌 2️⃣ Clonar o Repositório
Se ainda não tiver o código, clone o projeto:

git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio

## 📌 3️⃣ Rodando o Teste de Carga
O script loadTest.js contém o teste de performance configurado. Para executá-lo, use:

k6 run tests/loadTest.js

### 🔹 Gerando um relatório em JSON
Para gerar um relatório em JSON:

k6 run tests/loadTest.js --out json=tests/report.json

## 📌 4️⃣ Gerando o Relatório Automático
Depois de rodar o teste e gerar o report.json, execute o script para criar um relatório HTML:

node tests/generateReport.js
Se o script rodar corretamente, verá a mensagem:

✅ Relatório gerado com sucesso: report.html

### 🔹 Acessando o Relatório
Para abrir o relatório no navegador:

start tests/report.html  # Windows
xdg-open tests/report.html  # Linux
open tests/report.html  # macOS

## 📌 5️⃣ Estrutura do Projeto

performance-K6-cypress/
│── tests/
│   ├── loadTest.js       # Script do K6 para teste de carga
│   ├── generateReport.js # Script para gerar o relatório em HTML
│   ├── report.json       # Arquivo JSON com os resultados do K6
│   ├── report.html       # Relatório final gerado automaticamente
│── README.md             # Documentação do projeto


## 📌 6️⃣ Solução de Problemas (FAQ)
### 🔹 Erro: "k6: command not found"
Isso significa que o K6 não foi instalado corretamente. Tente reinstalar usando:

choco install k6 -y  # Windows (Chocolatey)
scoop install k6  # Windows (Scoop)
brew install k6  # macOS (Homebrew)
sudo apt install k6 -y  # Ubuntu/Debian

### 🔹 Erro: "Cannot find module 'fs'"
O módulo fs é nativo do Node.js. Se der erro, reinstale o Node.js:

nvm install 18  # Se estiver usando NVM
### 🔹 O relatório HTML não é gerado
Verifique se report.json existe:

ls tests/report.json
Se não existir, execute o teste novamente:

k6 run tests/loadTest.js --out json=tests/report.json

## 📌 7️⃣ Melhorias Futuras 🚀

### 🔹 Exportar relatório para PDF 📄
### 🔹 Adicionar gráficos interativos (Chart.js) 📊
### 🔹 Automação com CI/CD (GitHub Actions)

## 📌 8️⃣ Contribuição
Sinta-se à vontade para contribuir! Faça um fork do repositório e envie um Pull Request. 😃

🔗 [Seu GitHub](https://github.com/leonardomina?tab=repositories)

Agora seu projeto está bem documentado e qualquer pessoa pode rodá-lo facilmente! 🚀🔥
Se precisar de alguma modificação, me avise! 😊

---

Esse **README.md** está pronto para ser usado no seu projeto.  
Caso queira **personalizar algo**, é só me dizer! 🚀🔥
