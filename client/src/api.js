// src/api.js - simple backend-aware wrapper (falls back to local data)
const BASE = process.env.REACT_APP_BASE_URL || '';

async function fetchJson(url, opts){
  const res = await fetch(url, opts);
  if (!res.ok) {
    const txt = await res.text();
    throw new Error('HTTP ' + res.status + ': ' + txt);
  }
  return res.json();
}

export async function fetchArticlesFromBackend(){
  if(!BASE) throw new Error('No BASE');
  return fetchJson(BASE.replace(/\/$/,'') + '/content/articles', { method: 'GET' });
}

export async function fetchArticleFromBackend(id){
  if(!BASE) throw new Error('No BASE');
  return fetchJson(BASE.replace(/\/$/,'') + '/content/article/' + encodeURIComponent(id), { method: 'GET' });
}
