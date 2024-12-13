import Queue from "../../src/05-filas-e-deques/Queue";

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

      it.only("Criando o método toString", () => {
         const queue = new Queue();

         queue.enqueue(1);

         expect(queue.toString()).toBe("1");
      });
   });

   describe("Estrutuda de dados de Deque", () => {
      it.todo("Criando a classe Deque");
      it.todo("Adicionando elementos na frente do deque");
   });

   describe("Resolvendo problemas usando filas e deques", () => {
      it.todo("Fila circular - Batata Quente");
      it.todo("Verificador de palíndromo");
   });
});
