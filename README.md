# Curso Intermediário de Angular - Digital Innovation One

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
<img src="">
</p>

## :file_folder: Estrutura do projeto <a name = "structure"></a>

```
 ├── dio-project-poo
    ├── class                    # Arquivos com classes do programa.
    ├── enum                     # Arquivos com dados pré-definidos
    ├── Program.cs               # Main de app
    └── README.md
```

## :memo: Conceitos aprendidos <a name = "learned"></a>

### Libs

Utilização do Angular Material, lib RxJs e JSON-Server

#### Angular Material

#### RxJs

#### JSON-Server

#### ngx-infinite-scroll

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
### Models (Interface)
Serve para padronização de dados para garantir a consistência dos mesmos, evitando divergência.
> ? = Significa que o campo não é obrigatório, no caso em id, o responsável por esse processamento é o back-end, pois se não há obrigatoriedade de sempre estar passando o ID.
Em interfaces os campos necessitam ser iguais, possui Case Sensitive

### Modal
O modal para dados serem passados não necessita do @Input, pois nele se passam propriedades diferentes devido o construtor, sendo através do data.

O Injectable necessita ser invocado pois precisa ser inserido no HTML do componente.
No caso do modal é utilizado EntryComponents, que são instanciados no inicio do sistema.

O modal possui a propriedade mat-dialog-close, com ela é possível capturar um evento do dialog e tratar-lo no ts com a função do subscribe, trazendo como parametro um booleano com essa opção.