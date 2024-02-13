## Link importantes

1. Documentação: https://legacy.reactjs.org/
2. Repositório dos estudo: https://github.com/ArthurViniciusL/REACT-JS-ESTUDOS.git
---
## Introdução.
O React é uma biblioteca Javascript utilizada para facilitar a criação de UI (user interface).
> 
> O React é baseado em componentes (similar ao Angular), isso possibilita que sejam  criados componentes encapsulados que gerenciam seu próprio estado e então, combine-os para criar UIs complexas.
> 
> Outra caracterisita do React é que ele não faz suposições sobre as outras tecnologias da stack do projeto, assim você pode desenvolver novos recursos com React sem reescrever o código existente.

- ### Um exemplo de componente:
> ![[Pasted image 20240213133534.png]]
----
## Criando um projeto React.
Atual este material está sendo escrito com base na versão 18 do React.

Para a criação de um projeto React vamos utilizar o _npx_ para executar o pacote _create-react-app_.

> Link do tutorial na documentação: https://pt-br.legacy.reactjs.org/docs/create-a-new-react-app.html

Existem duas possibilidades na forma de criar o projeto.
1. **Criar o projeto dentro de uma nova pasta.**
>```
>npx create-react-app nome-da-pasta
>```
![[Pasted image 20240213161126.png]]
2. **Criar o projeto dentro de uma pasta existente.**
> ```
> npx create-react-app .
> ```
> ![[Pasted image 20240213161321.png]]
> ![[Pasted image 20240213161357.png]]

- ### Verificando as dependências
	Para verificar as dependências instaladas no projeto _React_ devemos abrir o arquivo _package.json_.
	
	![[Pasted image 20240213162259.png]]

---
## Rodando um projeto React.
