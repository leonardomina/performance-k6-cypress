# 📖 Guia Completo para Testes de Carga com K6

Este repositório contém um teste de carga automatizado usando K6, uma ferramenta leve e eficiente para testes de performance de APIs.

## 🚀 O que você aprenderá neste guia?

✅ Escolher e instalar a IDE correta✅ Instalar e configurar o **K6** ✅ Criar e executar um **teste de carga** ✅ Gerar relatórios para análise

## 🖥️ Qual IDE Usar?

O K6 não exige uma IDE específica, pois os testes são escritos em JavaScript. No entanto, recomendamos as seguintes opções:

### Opção 1: Visual Studio Code (VS Code)

Baixe e instale o VS Code.

Instale a extensão JavaScript (ES6) Code Snippets para melhorar a experiência com o JavaScript.

Abra a pasta do projeto no VS Code.

### Opção 2: WebStorm (IDE da JetBrains)

Baixe e instale o WebStorm.

Crie um novo projeto e selecione JavaScript como linguagem principal.

Ambas as IDEs permitem a edição e depuração dos scripts K6.

## 📥 Instalação do K6

### Windows

1️⃣ Instalação via Chocolatey

Se você usa o Chocolatey, abra o PowerShell como Administrador e execute:

choco install k6

Após a instalação, verifique se o K6 foi instalado corretamente:

k6 version

2️⃣ Instalação Manual

Baixe o K6 no site oficial:🔗 https://github.com/grafana/k6/releases

Extraia o arquivo ZIP para C:\Program Files\k6

Adicione ao PATH:

Vá para Configurações do Sistema > Variáveis de Ambiente

Edite a variável Path e adicione:

C:\Program Files\k6

Teste a instalação:

k6 version

### MacOS

brew install k6

### Linux

sudo apt update && sudo apt install k6

Para testar a instalação, execute:

k6 version

## 📂 Estrutura do Projeto

k6-load-test/
│── tests/
│   ├── loadTest.js  # Script principal do K6
│── results/
│   ├── results.json  # Arquivo de saída com resultados do teste
│── README.md

## 📝 Criando um Teste de Carga

No diretório tests/, crie um arquivo chamado `` com o seguinte conteúdo:

import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    stages: [
        { duration: '1m', target: 100 }, // 100 usuários em 1 minuto
        { duration: '3m', target: 500 }, // Mantém 500 usuários por 3 minutos
        { duration: '1m', target: 0 }    // Reduz para 0 usuários em 1 minuto
    ],
};

export default function () {
    let res = http.get('https://jsonplaceholder.typicode.com/posts/1');

    check(res, {
        'status code is 200': (r) => r.status === 200,
        'response time is < 500ms': (r) => r.timings.duration < 500,
    });

    sleep(1);
}

## ▶ Executando o Teste de Carga

Abra o terminal e execute:

k6 run tests/loadTest.js

Se quiser salvar os resultados em JSON para análise posterior, use:

k6 run tests/loadTest.js --out json=results/results.json

📊 Analisando os Resultados

Após a execução, o K6 exibe métricas no terminal, como:

✅ http_req_duration → Tempo médio de resposta da API.

✅ http_req_failed → Percentual de requisições que falharam.

✅ reqs/sec → Requisições por segundo.

Se quiser visualizar os resultados em gráficos interativos, pode utilizar o Grafana e InfluxDB:

1️⃣ Instalar o InfluxDB para armazenar os dados

docker run -d --name influxdb -p 8086:8086 influxdb

2️⃣ Executar o teste enviando os dados para o InfluxDB

k6 run tests/loadTest.js --out influxdb=http://localhost:8086/k6

3️⃣ Configurar o Grafana para exibir os dados

Baixe e instale o Grafana:🔗 Download do Grafana

Configure um painel conectado ao InfluxDB.

#📜 Conclusão

Agora você pode rodar testes de carga de forma eficiente com K6, visualizar relatórios detalhados e analisar o desempenho da API sob carga.

##📖 Para mais informações, consulte a Documentação Oficial do K6.


