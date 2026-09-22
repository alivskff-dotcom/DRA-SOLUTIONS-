# DRA Solutions — Cartão Digital

Cartão digital / landing page one-page da DRA Solutions. Site estático (HTML + CSS + JS puro), sem build, sem dependências — abre direto no navegador ou pode ser publicado em qualquer hospedagem estática.

## Estrutura

```
DRA/
├── index.html                 → página única (estrutura + SEO)
├── assets/
│   ├── css/style.css          → todo o visual (cores, layout, animações, responsividade)
│   ├── js/config.js           → ÚNICO arquivo que você precisa editar para os links
│   ├── js/main.js             → aplica os links do config.js aos botões
│   └── images/
│       ├── dra-logo.svg         → logo (PLACEHOLDER — trocar pela logo oficial)
│       ├── favicon.svg          → ícone da aba do navegador
│       └── hero-background.jpg  → foto de fundo (atrás do cartão inteiro)
└── README.md
```

## 1. Como editar os links (WhatsApp, Localização, Site, Instagram)

Abra **`assets/js/config.js`** e preencha:

```js
const companyLinks = {
  whatsappNumber: "5511999999999",   // código do país + DDD + número, só dígitos
  whatsappMessage: "Olá! ...",       // mensagem pré-preenchida (opcional)
  website: "https://www.drasolutions.com.br",
  instagram: "https://instagram.com/drasolutions",
};
```

Nenhum outro arquivo precisa ser tocado — o `main.js` monta o link do WhatsApp (`wa.me`) e aplica os três links automaticamente quando a página carrega. Enquanto um valor estiver como `"#"`, o botão aparece normal mas não abre em nova aba.

> O botão de Localização foi removido do cartão a pedido do cliente. Os botões atuais são: WhatsApp, Site e Instagram.

## 2. Como colocar a logo oficial

Hoje o projeto usa um **símbolo temporário** (pontos conectados) em `assets/images/dra-logo.svg`, pois nenhuma logo foi encontrada na pasta do projeto.

Para usar a logo real:
1. Coloque o arquivo oficial (SVG ou PNG em alta resolução, de preferência quadrado/transparente) dentro de `assets/images/`.
2. Em `index.html`, procure o comentário `LOGO OFICIAL` (dentro da tag `<header class="profile">`) e ajuste o `src` da tag `<img>` para o novo arquivo.

Não é necessário mexer em mais nada — o CSS já trata a logo como um círculo de 88px (mobile) / 100px (desktop) com sombra suave.

## 3. Como visualizar

Basta abrir `index.html` diretamente no navegador (duplo clique) — não depende de servidor, Node ou build.

Para publicar, qualquer hospedagem estática funciona sem configuração: Vercel, Netlify, GitHub Pages, Cloudflare Pages, ou até um hosting compartilhado comum (basta subir a pasta inteira).

## 4. Decisão técnica

O ambiente onde este projeto foi criado não tinha Node.js/npm instalados, então em vez da stack React/Next.js/Tailwind, o site foi entregue como HTML/CSS/JS puro — sem framework, sem bundler, sem dependência de internet para funcionar. Isso garante carregamento instantâneo e zero risco de quebra por versão de pacote, mantendo exatamente o mesmo resultado visual e de UX pedido no briefing. Se no futuro quiser migrar para Next.js/React/TypeScript (por exemplo, para múltiplas páginas ou CMS), a estrutura visual e o `config.js` migram quase 1:1 para componentes.
