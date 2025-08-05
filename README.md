# 🏨 QDP - Sistema de Gerenciamento de Pousada

Este projeto é um sistema completo de gerenciamento para uma pousada real, desenvolvido como parte de um projeto integrador no ensino médio técnico. O sistema permite o controle de reservas, ocupação de quartos, histórico de hospedagens e organização geral da operação da pousada.

## 📌 Funcionalidades

- Cadastro de hóspedes
- Efetuação de reservas
- Consulta de quartos disponíveis/ocupados
- Histórico de reservas
- Painel administrativo
- Interface amigável com visual moderno

## 🧰 Tecnologias Utilizadas

![Nodejs](https://img.shields.io/badge/-Nodejs-339933?style=for-the-badge&logo=Node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white)
![Handlebars](https://img.shields.io/badge/-Handlebars-ff7f00?style=for-the-badge&logo=Handlebars.js&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## 📁 Estrutura MVC

O projeto segue a arquitetura **MVC (Model-View-Controller)**, separando responsabilidades de forma clara para facilitar a manutenção e escalabilidade da aplicação.

- `models/` – Definição das tabelas e relacionamentos via Sequelize
- `views/` – Templates HTML dinâmicos com Handlebars
- `controllers/` – Lógica de negócio e rotas
- `routes/` – Mapeamento das rotas da aplicação

## ⚙️ Como rodar o projeto localmente

> Requisitos:
> - Node.js instalado
> - MySQL ou outro banco de dados compatível
> - Gerenciador de pacotes `npm` ou `yarn`

```bash
# Clone o repositório
git clone https://github.com/Kaua032/QDP-API.git

# Acesse o diretório
cd QDP-API

# Instale as dependências
npm install

# Configure o banco de dados em config/config.json
# (ou use variáveis de ambiente, se configurado)

# Rode as migrations (se houver)
npx sequelize db:migrate

# Inicie o servidor
npm start
