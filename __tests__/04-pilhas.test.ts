import StackArray from "../src/04-pilhas/StackArray";

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

      describe.only("Criando uma classe JavaScript StackArray baseada em objeto", () => {
         class StackObject {
            private count: number;
            private items: Record<number, number>;

            constructor() {
               this.count = 0;
               this.items = {};
            }

            get() {
               return this.items;
            }

            push(element: number) {
               this.items[this.count] = element;
               this.count++;
            }

            isEmpty() {
               return this.count === 0;
            }

            pop() {
               if (this.isEmpty()) return undefined;

               this.count--;

               const result = this.items[this.count];
               delete this.items[this.count];

               return result;
            }

            peek() {
               if (this.isEmpty()) return undefined;

               return this.items[this.count - 1];
            }

            clear() {
               while (!this.isEmpty()) this.pop();
            }

            size() {
               return this.count;
            }

            toString() {
               if (this.isEmpty()) return "";

               let objString = `${this.items[0]}`;

               for (let i = 0; i < this.count; i++) {
                  objString = `${objString},${this.items[i]}`;
               }

               return objString;
            }
         }

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

         it.todo("Proposta para campos de classe na ECMAScript");
         it.todo("Resolvendo problemas usando pilhas");
         it.todo("Convertendo números decimais para binários");
         it.todo("Algoritmo conversor de base");
      });
   });
});
