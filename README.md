<div align="center">
  <img src=".github/cover.svg" >
</div>

## 📝 **Descrição**

Tarefas realizadas no estágio na área de desenvolvimento web na empresa Tilit.

- Estudar os scripts de deploy de projetos da empresa;
- Rodar comandos de terminal como dos scripts usando o Child Process no node;
- Fazer um script que roda os seguintes passos:
  1. `mongodump --uri=process.env.MONGO_URL_FROM`
  2. `mongorestore --uri=process.env.MONGO_URL_TO --db=process.env.MONGO_DB - collection=process.env.MONGO_COLLECTION dump/test/process.env.MONGO_COLLECTION.bson`
  3. Limpa os arquivos de dump
- Executar comandos git usando child_process

## 📈 **Analise dos scripts de deploy dos projetos**

| Comando    | O que faz?       | O que faz?                                                                          |
| ---------- | ---------------- | ----------------------------------------------------------------------------------- |
| `cd`       | change directory | mudar o diretório atual                                                             |
| `mkdir`    | make directory   | criar novos diretórios                                                              |
| `mkdir -p` | parents          | Se os diretórios pai no caminho especificado não existirem, gere-os automaticamente |
| `rm`       | remove           | remover arquivos ou diretórios                                                      |
| `rm -rf`   | remove force     | remover os arquivos ou diretórios a força                                           |
| `mv`       | move             | mover arquivos ou diretórios de um lugar para outro                                 |

| Sinais |
| ------ |
| `&&`   |
| `;`    |

## ▶️ **Testar a biblioteca Child Process no node**

O **módulo** child_process nos permite **acessar** as **funcionalidades** do sistema operacional **executando** qualquer **comando do sistema** dentro de um **processo filho**.

### **Projeto Exemplo**

Foi criado um projeto exemplo utilizando o módulo child_process. O projeto se encontra na pasta `example-child-process`.

#### **Rodar o Projeto**

Execute os comandos abaixo:

`cd example-child-process`

`yarn dev`

## 🤔 Desenvolver um script que...

1. Rode o comadno `mongodump --uri=process.env.MONGO_URL_FROM`
2. Em seguide o comando `mongorestore --uri=process.env.MONGO_URL_TO --db=process.env.MONGO_DB - collection=process.env.MONGO_COLLECTION dump/test/process.env.MONGO_COLLECTION.bson`
3. Por fim, apaga a pasta dump e os arquivos dentro dela

### **Projeto**

Foi feito um pequeno script com _NodeJs_ e o módulo _child_process_.
O projeto se encontra na pasta `task-make-script`.

#### **Rodar**

Para rodar o projeto é necessário seguir alguns passos:

- Primeiro, ter o Mongo Database Tools instalado (https://www.mongodb.com/try/download/database-tools).
- Segundo, criar através do **Mongo Compass** localmente um **banco** chamado _test_ e adicionar uma **collection** chamada _peoples_ com alguns dados.
- Terceiro, crie um arquivo chamado `.env` dentro da pasta do projeto e coloque as de acordo com o que você queira fazer.

  ```
  MONGO_URL_FROM=mongodb://localhost/testfrom
  MONGO_URL_TO=mongodb://localhost/testto
  MONGO_DB=testto
  MONGO_COLLECTION=peoples
  ```

- Por fim, execute os seguintes comandos:

  ```bash
  cd task-make-script
  ```

  ```bash
  yarn dev
  ```

## Comandos GIT no child_process

Desenvolver um **projeto** usando *Node* e *child_process* para rodar os comandos do git.

O projeto se encontra na pasta *script-git-commands*.

## 👨‍💻 Feito por

<table>
  <tr>
    <td align="center"><img style="border-radius: 50%;" src="https://avatars3.githubusercontent.com/u/36344130?s=460&u=8f38afb60832d4576570ab1672894ac935e65db6&v=4" width="100px;" alt=""/><br /><sub><b><a href="https://linkedin.com/in/lucianoweslen11" title="Luciano">Luciano W. da Silva</a></b></sub></td>
  </tr>
</table>

<br/>

![](https://img.shields.io/badge/Nunca%20esque%C3%A7a%20de-aproveitar%20todos%20os%20momentos-informational?style=for-the-badge&logo=quote&logoColor=white&color=f4a261)
