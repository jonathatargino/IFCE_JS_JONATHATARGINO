// Fetch API -> É uma ferramenta para fazer requisições, assim como o Ajax. Porém o Fetch é mais recente e mais legível.
const url = "Meu URL"

// O fetch por padrão já retorna uma promise. Dessa forma, é possível manipular o retorno com .then e .catch
fetch(url)
  .then(response => {
    if (response.status !== 200) throw new Error("Status Error");
    // Tratamento do response para JSON
    return JSON.parse(response)
  })
  .then(data => {
    // Meu código
  });


  // Exemplo:


  document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();
  
    if (tag === 'a'){
      e.preventDefault();
      carregaPagina(el)
    }
  })
  
  function carregaPagina(el) {
    const href = el.getAttribute('href');
    fetch(href)
      .then(response => response.text())
      .then(html => carregaResultado(html))
      .catch(e => console.log(e))
  }
  

  function carregaResultado(html) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = html;
  }