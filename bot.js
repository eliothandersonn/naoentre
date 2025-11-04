const { Client } = require('pg');
const config = require('./config');

const client = new Client({
  connectionString: config.db.connectionString
});

client.connect()
  .then(() => {
    console.log('✅ Conectado ao banco Neon!');
    // Aqui você pode fazer consultas, inserções, etc.
    return client.query('SELECT * FROM pedidos');
  })
  .then(res => {
    console.log('📦 Pedidos encontrados:', res.rows);
  })
  .catch(err => {
    console.error('❌ Erro ao conectar ou consultar:', err);
  })
  .finally(() => {
    client.end();
  });