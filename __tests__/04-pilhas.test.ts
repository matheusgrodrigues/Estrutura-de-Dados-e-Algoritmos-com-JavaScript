import Stack from "../src/04-pilhas/Stack";

describe("04 - Pilhas", () => {
   describe("Criação de uma biblioteca de estruturas de dados e algoritmos JavaScript", () => {
      describe.only("Criando uma classe Stack baseada em array", () => {
         it("Push de elementos na pilha", () => {
            const stack = new Stack();

            stack.push([1, 2, 3, 4, 5, 6]);

            expect(stack.get()).toEqual([1, 2, 3, 4, 5, 6]);
         });

         it("Pop de elementos da pilha", () => {
            const stack = new Stack();

            stack.push([1, 2, 3, 4, 5, 6]);
            stack.pop();

            expect(stack.get()).toEqual([1, 2, 3, 4, 5]);
         });

         it("Dando uma espiada no elemento que está no topo da pilha", () => {
            const stack = new Stack();

            stack.push([1, 2, 3, 4, 5, 6]);

            expect(stack.peek()).toBe(6);
         });

         it("Deve retornar o tamanho da pilha", () => {
            const stack = new Stack();

            stack.push([1, 2, 3, 4, 5, 6]);

            expect(stack.size()).toBe(6);
         });

         it("Verificando se a pilha está vazia", () => {
            const stack = new Stack();

            expect(stack.isEmpty()).toBeTruthy();
         });

         it("Limpando os elementos da pilha", () => {
            const stack = new Stack();

            stack.clear();

            expect(stack.isEmpty()).toBeTruthy();
         });
      });

      describe("Criando uma classe JavaScript Stack baseada em objeto", () => {
         it.todo("Push de elementos na pilha");
         it.todo("Verificando se a pilha está vazia e o seu tamanho");
         it.todo("Pop de elementos da pilha");
         it.todo("Dando uma espiada no topo e limpando a pilha");
         it.todo("Criando o método toString");
         it.todo("Protegendo os elementos internos da estrutura de dados");
         it.todo("Converção de nomenclatura com underscore");
         it.todo("Classes ES2015 com símbolos no escopo");
         it.todo("Classes ES2015 com WeakMap");
         it.todo("Proposta para campos de classe na ECMAScript");
         it.todo("Resolvendo problemas usando pilhas");
         it.todo("Convertendo números decimais para binários");
         it.todo("Algoritmo conversor de base");
      });
   });
});
