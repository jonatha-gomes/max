document.querySelector("title").textContent = TITULO_DO_SITE;
document.getElementById("favicon").href = FAVICON;
document.getElementById("title").textContent = TITULO_DA_DOACAO;

document.getElementById("category").textContent = CATEGORIA;

document.getElementById("amount-collected").textContent =
  VALOR_ARRECADADO.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

document.getElementById("amount-goal").textContent = VALOR_META.toLocaleString(
  "en-US",
  {
    style: "currency",
    currency: "USD",
  }
);

const PERCETUAL_ARRECADADO = (VALOR_ARRECADADO / VALOR_META) * 100;

document.getElementById("progress-bar").style.width = `${parseInt(
  PERCETUAL_ARRECADADO
)}%`;

document.getElementById("supporters").textContent = APOIADORES;

document.getElementById("creation-date").textContent = DATA_DE_CRIACAO;

document.getElementById("main-image").src = IMAGEM_PRINCIPAL;

document.getElementById("text-01").innerHTML = DESCRICAO_01;
document.getElementById("image-text-01").src = IMAGEM_DESCRICAO;
document.getElementById("text-02").innerHTML = DESCRICAO_02;

document.querySelectorAll("#logo").forEach((el) => {
  el.src = LOGO;
});

document.getElementById("footer-title").textContent = NOME_DO_PROJETO;

document.getElementById("footer-cnpj").textContent = CNPJ;

let RENDER_ENDERECO = "<strong>Address:</strong> ";

ENDERECO.split("\n").forEach((line) => {
  RENDER_ENDERECO += `<br>${line}`;
});

document.getElementById("footer-address").innerHTML = RENDER_ENDERECO;

document.getElementById("footer-facebook").href = FACEBOOK_URL;
document.getElementById("footer-instagram").href = INSTAGRAM_URL;
document.getElementById("footer-whatsapp").href = WHATSAPP_URL;

document.getElementById("share-btn").href = LINK_PARA_COMPARTILHAR;

document.getElementById("who-we-are").textContent = QUEM_SOMOS;

PERGUNTAS_FREQUENTES.forEach((data) => {
  document.getElementById("faq").innerHTML += `
        <div class="faq-item">
            <div class="faq-question">
              <h3>${data.pergunta}</h3>
              <span class="faq-icon"><i class="fas fa-chevron-down"></i></span>
            </div>
            <div class="faq-answer">
              <p>${data.resposta}</p>
            </div>
        </div>
        
        `;
});

const year = new Date().getFullYear();

document.getElementById(
  "all-rights-reserved"
).textContent = `© ${year} ${NOME_DO_PROJETO}. All rights reserved.`;

document.getElementById("help-text").textContent = COMO_AJUDAR;

document.documentElement.style.setProperty("--cor-acao", COR_DE_ACAO);

document.documentElement.style.setProperty("--cor-primaria", COR_PRIMARIA);

document.documentElement.style.setProperty("--cor-secundaria", COR_SECUNDARIA);

document.documentElement.style.setProperty("--cor-texto", COR_TEXTO);

document.documentElement.style.setProperty(
  "--cor-texto-claro",
  COR_TEXTO_CLARO
);

document.documentElement.style.setProperty(
  "--cor-fundo-claro",
  COR_FUNDO_CLARO
);

document.documentElement.style.setProperty(
  "--cor-fundo-escuro",
  COR_FUNDO_ESCURO
);

document.documentElement.style.setProperty("--cor-borda", COR_BORDA);

COMENTARIOS.forEach((comment) => {
  const commentsArea = document.getElementById("comments-area");

  let replies = "";

  comment.replies.forEach((reply) => {
    replies += `
    
      <div class="comentario-resposta">
        <div class="comentario-header">
          <div class="comentario-avatar">
            <img
              src="${reply.image}"
              alt="Logo Projeto Ame Vida"
            />
          </div>
          <div class="comentario-info">
            <h4>${reply.name}</h4>
          </div>
        </div>
        <div class="comentario-texto">
          <p>
            ${reply.message}
          </p>
        </div>
      </div>
    
    `;
  });

  commentsArea.innerHTML += `
  
  

  <div class="comentario">
    <div class="comentario-header">
      <div class="comentario-avatar">
        <img src="${comment.image}" alt="Avatar" />
      </div>
      <div class="comentario-info">
        <h4>${comment.name}</h4>
      </div>
      <div class="comentario-acoes">
        <span class="curtir"><i class="far fa-heart"></i></span>
      </div>
    </div>
    <div class="comentario-texto">
      <p>
        ${comment.message}
      </p>
    </div>
    <div class="comentario-meta">
      <span>${comment.time}</span>
      <span>${comment.likes} curtidas</span>
      <span>Responder</span>
      <span>Ver tradução</span>
    </div>
    <div class="comentario-respostas-toggle">
      <span class="toggle-btn">—&nbsp;&nbsp;Show Replies (${comment.replies.length})</span>
      <span class="loader"></span>
    </div>
    <div class="comentario-respostas-conteudo">
      ${replies}
    </div>

  </div>
  
  `;
});

VALORES_PARA_DOAR.splice(0, VALORES_PARA_DOAR.length - 1).forEach(
  (valor, index) => {
    document.getElementById("prices-area").innerHTML += `
    
    <a
      href="${valor.checkoutUrl}"
      class="valor-btn ${valor.mostPopular ? "destacado" : ""}"
      target="_blank"
      id="valor-${index}"
      >${valor.price.toLocaleString("en-US", {
        currency: "USD",
        style: "currency",
      })}
    </a>
    
    `;
  }
);

const highestPrice = VALORES_PARA_DOAR[VALORES_PARA_DOAR.length - 1];

document.getElementById("highest-price").innerHTML = `
  <a
    href="${highestPrice.checkoutUrl}"
    class="valor-btn valor-btn-grande"
    target="_blank"
    id="${VALORES_PARA_DOAR.length - 1}"
    >${highestPrice.price.toLocaleString("en-US", {
      currency: "USD",
      style: "currency",
    })}</a
  >
  
  `;

document.getElementById("donate-modal-title").textContent =
  TITULO_DA_JANELA_DE_DOACOES;

document.getElementById("donate-modal-sub-title").textContent =
  SUB_TITULO_DA_JANELA_DE_DOACOES;
