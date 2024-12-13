import Queue from "../../src/05-filas-e-deques/Queue";
import Deque from "../../src/05-filas-e-deques/Deque";

describe("05 - Filas e Deques", () => {
   describe("Criando a classe Queue", () => {
      it("Inserção de elementos na fila", () => {
         const queue = new Queue();

         queue.enqueue(1);
         queue.enqueue(2);
         queue.enqueue(3);

         expect(queue.items).toEqual({ 0: 1, 1: 2, 2: 3 });
      });

      it("Remoção de elementos da fila", () => {
         const queue = new Queue();

         queue.enqueue(1);
         queue.enqueue(2);
         queue.enqueue(3);

         queue.dequeue();

         expect(queue.items).toEqual({ 1: 2, 2: 3 });
      });

      it("Dando uma espiada no elemento que está na frente da fila", () => {
         const queue = new Queue();

         queue.enqueue(1);

         expect(queue.peek()).toBe(1);
      });

      it("Verificando se a pilha está vazia e o seu tamanho", () => {
         const queue = new Queue();

         expect(queue.isEmpty()).toBeTruthy();
         expect(queue.size()).toBe(0);
      });

      it("Limpando a fila", () => {
         const queue = new Queue();

         queue.clear();

         expect(queue.isEmpty()).toBeTruthy();
      });

      it("Criando o método toString", () => {
         const queue = new Queue();

         queue.enqueue(1);

         expect(queue.toString()).toBe("1");
      });
   });

   describe("Estrutuda de dados de Deque", () => {
      it("Criando a classe Deque", () => {
         const deque = new Deque();

         expect(deque).toBeInstanceOf(Deque);
      });

      it("Adicionando elementos na frente do deque", () => {
         const deque = new Deque();

         deque.addFront(1);

         expect(deque.peekFront()).toBe(1);
      });

      it("Adiciona um novo elemento no fim do deque", () => {
         const deque = new Deque();

         deque.addBack(7);

         expect(deque.peekBack()).toBe(7);
      });

      it("Remove o primeiro elemento do deque", () => {
         const deque = new Deque();

         deque.addFront(1);
         deque.addFront(2);
      });

      it("Remove o último elemento do deque", () => {
         const deque = new Deque();

         deque.addBack(2);

         expect(deque.peekBack()).toBe(2);
      });

      it("Devolve o primeiro elemento do deque", () => {
         const deque = new Deque();

         deque.addFront(2);

         expect(deque.peekFront()).toBe(2);
      });

      it("Devolve o último elemento do deque", () => {
         const deque = new Deque();

         deque.addBack(7);

         expect(deque.peekBack()).toBe(7);
      });

      it("Retorna o tamanho do deque", () => {
         const deque = new Deque();

         deque.addBack(1);
         deque.addBack(2);
         deque.addBack(3);

         expect(deque.size()).toBe(3);
      });

      it("Retorna se o deque está vazio", () => {
         const deque = new Deque();

         expect(deque.isEmpty()).toBeTruthy();
      });

      it("Retorna o deque em formato string", () => {
         const deque = new Deque();

         deque.addBack("John");
         deque.addBack("Jack");

         expect(deque.toString()).toBe("John, Jack");
      });
   });

   describe("Resolvendo problemas usando filas e deques", () => {
      it.todo("Fila circular - Batata Quente");
      it.todo("Verificador de palíndromo");
   });
});
