# 🌐 Aerathis

Site estático do projeto Aerathis, um universo ficcional apresentado em formato de mangá e light novel. A aplicação reúne a página inicial, a apresentação dos capítulos, o leitor do mangá, a página da light novel e uma área de apoiadores.

## ✨ Funcionalidades

- Página inicial com apresentação do universo e navegação entre as áreas do projeto.
- Catálogo do mangá com capítulo 1 disponível e capítulo 2 marcado como “Em breve”.
- Carrossel para alternar entre os capítulos cadastrados.
- Leitor do mangá com navegação paginada, navegação por teclado, contador de páginas, modo vertical e tela cheia.
- Leitor da light novel com ajuste de tamanho da fonte, largura do texto, temas de leitura e indicador de progresso.
- Persistência das preferências do leitor da light novel por meio de `localStorage`.
- Página de apoiadores e links para os canais e serviços externos apresentados no site.
- Layout responsivo para diferentes tamanhos de tela.

## 🛠️ Tecnologias

- HTML5
- CSS3
- JavaScript executado no navegador
- Google Fonts, com as famílias Cinzel e Inter carregadas nas páginas
- `localStorage` para salvar preferências do leitor da light novel

Não há framework JavaScript, backend, banco de dados ou gerenciador de dependências configurado no projeto.

## 🏗️ Organização

O projeto é uma aplicação frontend estática. Os arquivos HTML definem as páginas e carregam folhas de estilo e scripts compartilhados ou específicos. O JavaScript controla as interações de navegação, leitura, temas, preferências e efeitos de interface diretamente no navegador.

## 📁 Estrutura do projeto

```text
aerathis_final/
├── assets/
│   └── manga/
│       └── chapter-01/
│           └── LEIA-ME.txt
├── css/
│   ├── apoiadores.css
│   ├── light-novel.css
│   ├── novel-reader.css
│   └── style.css
├── js/
│   ├── main.js
│   ├── novel-reader.js
│   └── reader.js
├── apoiadores.html
├── index.html
├── light-novel.html
├── manga.html
├── novel-reader.html
├── reader.html
└── README.md
```

## 📋 Pré-requisitos

Não há versão de Python, Node.js ou outra ferramenta de build definida pelo projeto. Para visualizar as páginas, é necessário apenas um navegador moderno.

O acesso às fontes do Google depende de conexão com a internet. Os links externos apresentados nas páginas também dependem dos respectivos serviços estarem disponíveis.

## ▶️ Como executar

Como o projeto não possui servidor ou script de inicialização configurado, abra `index.html` diretamente em um navegador.

Para uma experiência local mais próxima de um site publicado, também é possível servir a pasta com qualquer servidor HTTP estático disponível no ambiente. O projeto não define um comando oficial para esse servidor.

## 💻 Como utilizar

1. Abra `index.html`.
2. Use os links da página inicial para acessar o mangá, a light novel ou a página de apoiadores.
3. Em `manga.html`, selecione o capítulo 1 e abra o leitor.
4. No leitor do mangá, use os botões laterais ou as teclas de seta para trocar de página. O modo vertical e a tela cheia também estão disponíveis.
5. Em `novel-reader.html`, use a barra de ferramentas para alterar fonte, largura e tema. Essas preferências ficam salvas no navegador.

## 🖼️ Imagens do mangá

O leitor do mangá está configurado para procurar 22 imagens na pasta abaixo:

```text
assets/manga/chapter-01/01.jpg
assets/manga/chapter-01/02.jpg
...
assets/manga/chapter-01/22.jpg
```

O arquivo `assets/manga/chapter-01/LEIA-ME.txt` também documenta esse formato. As imagens não estão presentes no estado atual do repositório; enquanto elas não forem adicionadas, o leitor exibe o estado de página indisponível.

## 🔗 Integrações externas

As páginas contêm links para serviços externos, incluindo Google Fonts, LivePix, YouTube, X/Twitter e Instagram. O projeto não implementa APIs ou autenticação para esses serviços.

## 🧪 Testes

Não foram encontrados testes automatizados, configuração de framework de testes ou pipeline de CI/CD no projeto. A validação atual é feita pela execução das páginas no navegador.

## ⚠️ Limitações observadas

- As imagens originais do capítulo 1 ainda precisam ser adicionadas à pasta de assets.
- Não existe processo de build, servidor de produção ou automação de deploy configurado.
- Não há suíte de testes automatizados.
- O projeto depende de conteúdo e serviços externos para algumas partes da experiência.

## 👨‍💻 Autor

**Robert Melo**

🔗 LinkedIn: [linkedin.com/in/robertdemelo](https://www.linkedin.com/in/robertdemelo/)

🌐 HTML5 | CSS3 | JavaScript | Desenvolvimento Frontend | Interfaces Web Responsivas
