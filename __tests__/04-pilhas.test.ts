import StackArray from "../src/04-pilhas/StackArray";
import StackObject from "../src/04-pilhas/StackObject";
import StackWeakMap from "../src/04-pilhas/StackWeakMap";

describe("04 - Pilhas", () => {
   describe("Criação de uma biblioteca de estruturas de dados e algoritmos JavaScript", () => {
      describe("Criando uma classe StackArray baseada em array", () => {
         it("Push de elementos na pilha", () => {
            const stack = new StackArray();

            stack.push([1, 2, 3, 4, 5, 6]);

            expect(stack.get()).toEqual([1, 2, 3, 4, 5, 6]);
         });

         it("Pop de elementos da pilha", () => {
            const stack = new StackArray();

            stack.push([1, 2, 3, 4, 5, 6]);
            stack.pop();

            expect(stack.get()).toEqual([1, 2, 3, 4, 5]);
         });

         it("Dando uma espiada no elemento que está no topo da pilha", () => {
            const stack = new StackArray();

            stack.push([1, 2, 3, 4, 5, 6]);

            expect(stack.peek()).toBe(6);
         });

         it("Deve retornar o tamanho da pilha", () => {
            const stack = new StackArray();

            stack.push([1, 2, 3, 4, 5, 6]);

            expect(stack.size()).toBe(6);
         });

         it("Verificando se a pilha está vazia", () => {
            const stack = new StackArray();

            expect(stack.isEmpty()).toBeTruthy();
         });

         it("Limpando os elementos da pilha", () => {
            const stack = new StackArray();

            stack.clear();

            expect(stack.isEmpty()).toBeTruthy();
         });
      });

      describe("Criando uma classe JavaScript StackArray baseada em objeto", () => {
         it("Push de elementos na pilha", () => {
            const stack = new StackObject();

            stack.push(5);
            stack.push(8);

            expect(stack.get()).toEqual({ "0": 5, "1": 8 });
         });

         it("Verificar o tamanho da pilha", () => {
            const stack = new StackObject();

            stack.push(5);

            expect(stack.size()).toBe(1);
         });

         it("Verificando se a pilha está vazia e o seu tamanho", () => {
            const stack = new StackObject();

            expect(stack.isEmpty()).toBeTruthy();
         });

         it("Pop de elementos da pilha", () => {
            const stack = new StackObject();

            stack.push(5);
            stack.push(8);
            stack.pop();

            expect(stack.get()).toEqual({ "0": 5 });
         });

         it("Dando uma espiada no topo e limpando a pilha", () => {
            const stack = new StackObject();

            stack.push(5);
            stack.push(8);

            expect(stack.peek()).toBe(8);
         });

         it("Limpando a pilha", () => {
            const stack = new StackObject();

            stack.push(5);
            stack.push(8);
            stack.clear();

            expect(stack.isEmpty()).toBeTruthy();
         });

         it("Criando o método toString", () => {
            const stack = new StackObject();

            stack.push(5);

            expect(stack.toString()).toEqual("5,5");
         });

         it("Classes ES2015 com WeakMap", () => {
            const stack = new StackWeakMap();

            stack.push(5);

            expect(stack.peek()).toBe(5);
         });

         describe("Resolvendo problemas usando pilhas", () => {
            it.todo("Convertendo números decimais para binários");
            it.todo("Algoritmo conversor de base");
         });
      });
   });
});
