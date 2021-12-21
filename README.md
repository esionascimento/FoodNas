# Boas Vindas ao repositório do Projeto FoodNas!

# Sumário
- [O que deverá ser desenvolvido](#o-que-deverá-ser-desenvolvido)
- [Desenvolvimento](#desenvolvimento)
- [Para clonar o projeto](#para-clonar-o-projeto)

# O que deverá ser desenvolvido

Desenvolver um web site para ajudar na organização do ifood.

# Desenvolvimento

Aplicação desenvolvidade com `ReactJS`.

Foi realizado um repositorio para a API, onse se encontra `https://github.com/esionascimento/foodNasBack`

# Para clonar o projeto

1. Clone o repositório
  * `git clone https://github.com/esionascimento/foodNas.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd foodNas`
2. Instale as dependências e inicialize o projeto
 * Instale as dependências
    * `npm install`
 * Inicialize o projeto:
    * `npm start` (uma nova página deve abrir no seu navegador)

# Para usar o docker
 1. Clone o repositório
  * `git clone https://github.com/esionascimento/foodNas.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd foodNas`
  2. Contrui a imagem
    * `docker build -t food:dev .`
  3. Executar a imagem
    * `docker run -v ${PWD}:/app -p 3000:3000 --rm food:dev`

# Entregáveis

Requisitos realizados:
1. Cadastrar-se
2. Login

README baseado nos REDMEs da trybe
