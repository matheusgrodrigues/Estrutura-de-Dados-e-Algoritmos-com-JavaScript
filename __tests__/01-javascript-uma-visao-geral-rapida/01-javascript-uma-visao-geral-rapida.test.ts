describe("Uso de variaveis em JavaScript", () => {
   it("Declarar variável em JavaScript ES5", () => {
      var num = 1; // {1}
      num = 3; // {2}
      var price = 1.5; // {3}
      var myName = "Packt"; // {4}
      var trueValue = true; // {5}
      var nullVar = null; // {6}
      var und; // {7}

      expect(num).toBe(3);
      expect(price).toBe(1.5);
      expect(myName).toBe("Packt");
      expect(trueValue).toBeTruthy();
      expect(nullVar).toBeNull();
      expect(und).toBeUndefined();
   });
});
