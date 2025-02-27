import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    stages: [
        { duration: '1m', target: 100 }, // Aumenta para 100 usuários em 1 minuto
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

    sleep(1); // Simula tempo de espera entre as requisições
}
