<div align="center">
  <img src=".github/cover.svg" >
</div>

## 📝 **Descrição**

- Estudar os scripts de deploy de projetos da empresa;
- Rodar comandos de terminal como dos scripts usando o Child Process no node;
- Fazer um script que roda os seguintes passos:
  1. `mongodump --uri=process.env.MONGO_URL_FROM`
  2. `mongorestore --uri=process.env.MONGO_URL_TO --db=process.env.MONGO_DB - collection=process.env.MONGO_COLLECTION dump/test/process.env.MONGO_COLLECTION.bson`
  3. Limpa os arquivos de dump

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

### **Exemplo**

Foi criado um projeto exemplo utilizando Node e Javascript. Pode acessar o projeto na pasta `example-child-process`.

Caso queira rodar o projeto, execute os comandos abaixo:

`cd example-child-process`

`yarn dev`

Script principal do projeto:

```js
const { execSync } = require("child_process");

function main() {
  try {
    execSync("mkdir -p teste");
    execSync("cd teste && mkdir teste.txt");
  } catch (e) {
    console.log(e);
  }
}

main();
```

## 👨‍💻 Feito por

<table>
  <tr>
    <td align="center"><img style="border-radius: 50%;" src="https://avatars3.githubusercontent.com/u/36344130?s=460&u=8f38afb60832d4576570ab1672894ac935e65db6&v=4" width="100px;" alt=""/><br /><sub><b><a href="https://linkedin.com/in/lucianoweslen11" title="Luciano">Luciano W. da Silva</a></b></sub><br/>Desenvolvedor Web</td>
  </tr>
</table>

<br/>

![](https://img.shields.io/badge/Nunca%20esque%C3%A7a%20de-aproveitar%20todos%20os%20momentos-informational?style=for-the-badge&logo=quote&logoColor=white&color=f4a261)
