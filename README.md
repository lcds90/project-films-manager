# Curso Intermediário de Angular - DIO - Listagem de Filmes

## :scroll: Sumário

- [Sobre](#about)
- [Estrutura](#structure)
- [Conceitos](#learned)

## :computer: Sobre <a name = "about"></a>

O projeto consiste em um sistema de filmes, com a possibilidade de cadastros, edições, listagem e visualização dos cursos de outros usuários.

> Bootcamp 🚀 = Avanade Angular Developer

<p align="center">
<br>
  <a href="https://web.digitalinnovation.one/" rel="noopener">
 <img width=800px height=400px src="https://hermes.digitalinnovation.one/site/images/cover_dio.jpg" alt="Logo Digital Innovation One"></a>
</p>

### :mag: Imagens do projeto

<p align="center">
 :globe_with_meridians: DEPLOY
</p>

<p align="center">
<img src="https://raw.githubusercontent.com/lcds90/project-films-manager/development/src/assets/images/screenshot.png">
</p>

## :file_folder: Estrutura do projeto <a name = "structure"></a>

```
 ├── src
    ├── app                       # Pasta principal do programa.
    ├── assets                    # Arquivos de assets que são distribuidos por toda aplicação
    ├── environments              # Variaveis de ambiente
    ├── index.html                # Arquivo index de inicialização, onde todo o app é abstraído
    ├── main.ts                   # Arquivo geral de configuração da aplicação
    └── tslint.json               # Definição de regras de desenvolvimento
```

<hr>

```
 ├── app
    ├── core                      # Classes de serviços, onde possui regras de negócio definidas.
    ├── filmes                    # Componentes de filmes: Cadastro/Listagem/Visualização
    ├── shared                    # Componentes gerais para serem reutilizados e interfaces. 
    ├── app.component.html        # Componente HTML principal do app
    ├── app.component.ts          # Componente typescript principal do app
    ├── app.module.ts             # Módulo principal do app
    └── app.routing.module.ts     # Definição de rotas do app
```

## :memo: Conceitos aprendidos <a name = "learned"></a>

### Libs

#### Angular Material
É uma implementação do Material Design no Angular feita pela Google

#### RxJs
É uma biblioteca para uso em projetos que necessita ter programação reativa

#### JSON-Server
Simula uma aplicação back-end com chamadas de API REST com métodos get/post/put/delete

#### ngx-infinite-scroll
Biblioteca responsável pelo scroll infinito na listagem

<hr>

### Angular Forms
```
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
```

#### FormBuilder 
Serve para criação de formulários reativos e complexos.
> Precisa ser invocado o construtor no typescript.

#### FormGroup
> Após o OnInit, é necessário declarar as validações de cada campo e no HTML, utilizaro atributo "formControlName"
No componente de cadastro é possível incluir validações 
```
(cadastro.touched || cadastro.dirty) && f.titulo.errors
```
<i>touched</i> e <i>dirty</i> servem para prevenir o erro ser disparado antes do usuário clicar no formulário
f é um método get para simplificar o método catch

#### Elvis Operator

Original
```
<mat-error *ngIf="(cadastro.touched || cadastro.dirty) && f.nota.errors && f.nota.errors.required">Campo é obrigatório</mat-error>
```
O operador automaticamente realiza a verificação de existência da variável.
```
<mat-error *ngIf="(cadastro.touched || cadastro.dirty) f.nota.errors?.required">Campo é obrigatório</mat-error>
```

<hr>

### Models (Interface)
Serve para padronização de dados para garantir a consistência dos mesmos, evitando divergência.
> ? = Significa que o campo não é obrigatório, no caso em id, o responsável por esse processamento é o back-end, pois se não há obrigatoriedade de sempre estar passando o ID.
Em interfaces os campos necessitam ser iguais, possui Case Sensitive

<hr>

### Modal
O modal para dados serem passados não necessita do @Input, pois nele se passam propriedades diferentes devido o construtor, sendo através do data.

O Injectable necessita ser invocado pois precisa ser inserido no HTML do componente.
No caso do modal é utilizado EntryComponents, que são instanciados no inicio do sistema.

O modal possui a propriedade mat-dialog-close, com ela é possível capturar um evento do dialog e tratar-lo no ts com a função do subscribe, trazendo como parametro um booleano com essa opção.
