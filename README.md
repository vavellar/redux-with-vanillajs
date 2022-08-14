# redux-with-vanillajs

Sobre Redux
O próprio site do Redux o define como um container de estado previsível. Ele se baseia em três princípios:

- SSOT (Single Source of Truth): o estado de toda a aplicação é armazenado em uma árvore de objetos dentro de uma única store. Ela é a única fonte de verdade sobre o estado da aplicação.
- O estado é somente leitura: a única maneira de mudar o estado é emitindo uma action, um objeto que descreve o que aconteceu.
- Mudanças são realizadas através de funções puras: essas funções puras são chamadas reducers. A partir de actions os reducers especificam como a árvore de estado deve ser transformada.

- É papel do reducer, e não da action, realizar a atualização do estado na store

- O estado da aplicação deve ser imutável, isto é, não deve mudar.  Ou seja, significa que para modificarmos o estado da aplicação precisaremos criar um novo object state com base no state anterior.

- A Action descreve o fato de que algo aconteceu, mas não define como o estado da aplicação deve ser alterado. A mudança do estado é feita sincronamente através de reducers.