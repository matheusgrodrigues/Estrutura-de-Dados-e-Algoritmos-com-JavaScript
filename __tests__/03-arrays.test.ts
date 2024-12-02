describe("03 - Arrays", () => {
   describe("Por que devemos usar arrays?", () => {
      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

      it("Temperatura média de cada mês do ano para a cidade em que vivemos", () => {
         const averageTempJan = 31.9;
         const averageTempFeb = 35.9;
         const averageTempMar = 41.9;
         const averageTempApr = 51.9;
         const averageTempMay = 61.9;

         const averageTemp: number[] = [];
         averageTemp[0] = averageTempJan;
         averageTemp[1] = averageTempFeb;
         averageTemp[2] = averageTempMar;
         averageTemp[3] = averageTempApr;
         averageTemp[4] = averageTempMay;

         expect(averageTempJan).toBe(31.9);
         expect(averageTempFeb).toBe(35.9);
         expect(averageTempMar).toBe(41.9);
         expect(averageTempApr).toBe(51.9);
         expect(averageTempMay).toBe(61.9);
         expect(averageTemp).toEqual([31.9, 35.9, 41.9, 51.9, 61.9]);
      });

      it("Criando e inicializando arrays", () => {
         let daysOfWeek = new Array();
         daysOfWeek = new Array(7);
         daysOfWeek = new Array(...days);

         let daysOfWeekRecommended: string[] = [];
         daysOfWeekRecommended = days;

         expect(daysOfWeek).toEqual(days);
         expect(daysOfWeekRecommended).toEqual(days);
         expect(daysOfWeekRecommended.length).toBe(7);
      });

      describe("Acessando elementos e fazendo uma iteração em um array", () => {
         it("Iteração em um array", () => {
            let result = "";

            for (let i = 0; i < days.length; i++) {
               result = days[i];
            }

            expect(result).toBe("Saturday");
         });

         it("Descobrir quais são os 20 primeiros numeros da sequencia de Fibonacci", () => {
            const fibonacci: number[] = [];
            fibonacci[1] = 1;
            fibonacci[2] = 1;

            for (let i = 3; i < 7; i++) {
               fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
            }

            let result: number[] = [];

            for (let i = 1; i < fibonacci.length; i++) {
               result = fibonacci;
            }

            expect(result).toEqual([, 1, 1, 2, 3, 5, 8]);
         });

         it("Acrescentando elementos", () => {
            const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

            const numbers2 = [...numbers];

            numbers[numbers.length] = 10;
            numbers2.push(11, 12);

            expect(numbers[numbers.length - 1]).toBe(10);
            expect(numbers2[numbers2.length - 1]).toBe(12);
         });

         it("Inserindo um elemento na primeira posição: for/unshift", () => {
            const insertFirstPosition = (list: number[], value: number) => {
               const result: number[] = list;

               for (let i = result.length; i >= 0; i--) {
                  result[i] = result[i - 1];
               }

               result[0] = value;

               return result;
            };

            const firstPosition = insertFirstPosition([1, 2, 3, 4, 5], 7);
            const firstPositionWithUnshift = [...firstPosition];

            firstPositionWithUnshift.unshift(7);

            expect(firstPosition[0]).toBe(7);
            expect(firstPositionWithUnshift[0]).toBe(7);
         });

         describe("Elementos", () => {
            it("Removendo um elemento do final do array: pop()", () => {
               const removeLastPosition = [1, 2, 3, 4, 5, 6, 7];
               removeLastPosition.pop();

               expect(removeLastPosition[removeLastPosition.length - 1]).toBe(6);
            });

            it("Removendo um elemento da primeira posição do array: for/shift", () => {
               const reIndex = (myArray: number[]) => {
                  const result: number[] = [];

                  for (let i = 0; i < myArray.length; i++) {
                     result.push(myArray[i]);
                  }

                  return result;
               };

               const removeFirstPosition = (list: number[]) => {
                  const result = [...list];

                  for (let i = 0; i < list.length; i++) {
                     result[i] = list[i + 1];
                  }

                  result.length = list.length - 1;

                  return reIndex(result);
               };

               const numbers = removeFirstPosition([1, 2, 3]);
               const numbers2 = [...numbers];
               numbers2.shift();

               expect(numbers).toEqual([2, 3]);
               expect(numbers2).toEqual([3]);
            });

            it("Adicionando e removendo elementos de uma posição específica: delete/splice", () => {
               const numbers1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
               numbers1.splice(5, 3);

               const numbers2 = [0, 1, 2];
               delete numbers2[2];

               const numbers3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
               numbers3.splice(5, 0, 2, 3, 4);

               expect(numbers1).toEqual([0, 1, 2, 3, 4, 8, 9]);
               expect(numbers2).toEqual([0, 1]);
               expect(numbers3).toEqual([0, 1, 2, 3, 4, 2, 3, 4, 5, 6, 7, 8, 9]);
            });
         });

         describe("Arrays bidimensionais e multidimensionais", () => {});
      });
   });
});
