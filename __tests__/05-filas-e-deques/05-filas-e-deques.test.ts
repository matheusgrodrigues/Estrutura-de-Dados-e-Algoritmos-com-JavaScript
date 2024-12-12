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

      it.only("Remoção de elementos da fila", () => {
         const queue = new Queue();

         queue.enqueue(1);
         queue.enqueue(2);
         queue.enqueue(3);

         queue.dequeue();

         expect(queue.items).toEqual({ 1: 2, 2: 3 });
      });
      it.todo("Dando uma espiada no elemento que está na frente da fila");
      it.todo("Verificando se a pilha está vazia e o seu tamanho");
      it.todo("Limpando a fila");
      it.todo("Criando o método toString");
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
