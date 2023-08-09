# Page Angular Sidemenu

É um página de modelo como um molde, o design é do tipo menu lateral. Básicamente este pprojeto já te fornece um base inicial para seu projeto em angular. Neste projeto você pode modificar livrimente cada pedaço, seja adicionando mais linhas de scss alterando-as ou então mudando os valores das varíaveis. Fica a seu critério. Mais abaixo confira mais detalhes do projeto.
Esse projeto foi gerado usando [Angular CLI](https://github.com/angular/angular-cli) version 16.1.2.

## Funcionalidades

- Temas dark e light
- Ícones com fontawesome
- Multiplataforma
- Cards de carregamento e de alerta

## Stacks utilizadas

**Front-end:** Angular, Typecript, SCSS, HTML;

**Back-end:** Null;

## Índices

- [Instruções de Instalação](#instruções-de-instalação)
- [Instruções de Instalação](#gerando-a-build)
- [Exemplos de Uso](#exemplos-de-uso)
- [Bugs e Problemas](#bugs-e-problemas)
- [Licença](#licença)


## Instruções de Instalação
Comando para clonar o repositório:
```bash
  gh repo clone kaikdandrade/Page-Angular-Sidemenu
```

* Apartir daqui é necessário que tenha instalado em sua maquina o Angular.js, caso não o tenha comande `npm install -g @angular/cli`.

Abra seu node.js command prompt, navege até estar dentro da pasta do projeto e clonado e comande:
```node
  npm install
```

Caso tenho o vscode instalando em sua maquina, basta comandar `code .` para abrir o vscode direto na pasta do projeto.

Por fim, vá até o arquivo `index.html` dentro da pasta `app` dentro de `src` no projeto, localize a linha `<base href="https://kaikdandrade.github.io/Page-Angular-Sidemenu/">` e altere-a para `<base href="/">`.

Para inicializar o server basta comandar `ng serve`. Caso esse seja o unico server rodando, abra seu browser e navege para a url seguinte `http://localhost:4200`.
* Qualquer edição feita no código da para ver em tempo real no seu browser.

## Gerando a build

Antes de tudo, vá no arquivo `index.html` dentro `app` dentro `src` no projeto, e localize a linha `<base href="/">` ou `<base href="https://kaikdandrade.github.io/Page-Angular-Sidemenu/`. Altere-a pela url do seu site onde você irá hospedar o seu projeto.
* Exemplo:
```html
  <base href="https://www.projeto.com/">
  <base href="https://github.io/">
```
* Não esqueça de por a `/` ao final do `href`.
* Caso adicione, remova ou altere algo lá no `environment.ts` lembre-se de fazer o mesmo no `environment.prod.ts`, pois, ao gerar a build o environments ultilizado é o `.prod.ts` para o ambiente de produção.

Agora devidamente configurados eu imagino, abra o node.js command prompt e navege até estar dentro da pasta do projeto e comande:
```node
  ng build --configuration production
```

Dentro da pasta do projeto, será gerado uma nova pasta chamada `dist` dentro da mesma você encontra os arquivos .js e etc que devem ser hospedados para que o seu projeto funcione na web.

## Exemplos de Uso

Forneça alguns exemplos de como usar o projeto. Isso ajudará os usuários a entenderem melhor suas funcionalidades.

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Uso/Exemplos

```javascript
import Component from 'my-project'

function App() {
  return <Component />
}
```

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Bugs e Problemas

Se você encontrar algum bug ou tiver problemas com o projeto, por favor, [abra uma issue](https://github.com/kaikdandrade/Page-Angular-Sidemenu/issues) neste repositório.

## Licença

Este projeto está licenciado sob a [Licença MIT](https://opensource.org/licenses/MIT).
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Documentação de cores

| Cor               | Hexadecimal                                                |
| ----------------- | ---------------------------------------------------------------- |
| Cor exemplo       | ![#0a192f](https://via.placeholder.com/10/0a192f?text=+) #0a192f |
| Cor exemplo       | ![#f8f8f8](https://via.placeholder.com/10/f8f8f8?text=+) #f8f8f8 |
| Cor exemplo       | ![#00b48a](https://via.placeholder.com/10/00b48a?text=+) #00b48a |
| Cor exemplo       | ![#00d1a0](https://via.placeholder.com/10/00b48a?text=+) #00d1a0 |

## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`API_KEY`

`ANOTHER_API_KEY`

## Aprendizados

O que você aprendeu construindo esse projeto? Quais desafios você enfrentou e como você superou-os?

## Feedback

Se você tiver algum feedback, por favor nos deixe saber por meio de kaikdossantossilva2@fake.com