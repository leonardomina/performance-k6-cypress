const fs = require('fs');

// Simulação de dados (Caso precise, substitua pelos valores corretos do JSON)
const data = {
    metrics: {
        iterations: { count: 102350 },
        http_req_duration: { avg: 420, max: 900, min: 250 },
        http_req_failed: { rate: 0.005 }
    }
};

// Criar o relatório HTML
const htmlReport = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Relatório de Teste K6</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        h1 { color: #333; }
        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        th, td { border: 1px solid #ddd; padding: 10px; text-align: left; }
        th { background-color: #f4f4f4; }
    </style>
</head>
<body>
    <h1>Relatório de Teste K6</h1>
    <p><strong>Data:</strong> ${new Date().toLocaleString()}</p>
    <h2>Resumo</h2>
    <table>
        <tr><th>Métrica</th><th>Valor</th></tr>
        <tr><td>Total de Requisições</td><td>${data.metrics.iterations.count}</td></tr>
        <tr><td>Tempo Médio de Resposta</td><td>${data.metrics.http_req_duration.avg} ms</td></tr>
        <tr><td>Tempo Máximo de Resposta</td><td>${data.metrics.http_req_duration.max} ms</td></tr>
        <tr><td>Tempo Mínimo de Resposta</td><td>${data.metrics.http_req_duration.min} ms</td></tr>
        <tr><td>Taxa de Falhas</td><td>${(data.metrics.http_req_failed.rate * 100).toFixed(2)}%</td></tr>
    </table>
</body>
</html>
`;

// Salvar o relatório como um arquivo HTML
fs.writeFileSync('report.html', htmlReport);
console.log('✅ Relatório gerado com sucesso: report.html');

