import ExerciciosFilasDeques from "../../src/05-filas-e-deques/Exercicios";

describe("Resolvendo problemas usando filas e deques", () => {
   it.only("Fila circular - Batata Quente", () => {
      const names = ["John", "Jack", "Camila", "Ingrid", "Carl"];
      const result = ExerciciosFilasDeques.hotPotato(names, 7);

      const eliminated = result.eliminated.map((name) => `${name}`);
      const winner = result.winner;

      console.table(result.eliminated);
      // expect(eliminated).toBe("Ingrid");
      expect(winner).toBe("John");
   });

   it.todo("Verificador de palíndromo");
});
