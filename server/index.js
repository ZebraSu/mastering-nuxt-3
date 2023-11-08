const { builder } = require('@netlify/functions');
const { loadNuxt } = require('nuxt');

const isProd = process.env.NODE_ENV === 'production';
let nuxt;

async function handleRequest(event) {
  if (!nuxt) {
    nuxt = await loadNuxt(isProd ? 'start' : 'dev');
  }

  const { html } = await nuxt.server.renderRoute(event.path);
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: html,
  };
}

exports.handler = builder(handleRequest);
