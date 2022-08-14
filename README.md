# redux-with-vanillajs

Sobre Redux
O próprio site do Redux o define como um container de estado previsível. Ele se baseia em três princípios:

- SSOT (Single Source of Truth): o estado de toda a aplicação é armazenado em uma árvore de objetos dentro de uma única store. Ela é a única fonte de verdade sobre o estado da aplicação.
- O estado é somente leitura: a única maneira de mudar o estado é emitindo uma action, um objeto que descreve o que aconteceu.
- Mudanças são realizadas através de funções puras: essas funções puras são chamadas reducers. A partir de actions os reducers especificam como a árvore de estado deve ser transformada.

Uma função pura (pure function) é aquela que ao receber os mesmos argumentos retornará sempre o mesmo valor. Esse termo faz parte do jargão da programação funcional, inclusive funções desse tipo são fáceis de testar.

