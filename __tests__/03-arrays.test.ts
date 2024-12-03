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

         describe("Arrays bidimensionais e multidimensionais", () => {
            const averageTemp: unknown[][] = [];
            averageTemp[0] = [72, 75, 79, 79, 81, 81];
            averageTemp[1] = [81, 79, 75, 75, 73, 72];

            it("Medidor de temperatura", () => {
               const averageTemp2: unknown[][] = [];
               averageTemp2[0] = [];
               averageTemp2[0][0] = 72;
               averageTemp2[0][1] = 75;
               averageTemp2[0][2] = 79;
               averageTemp2[0][3] = 79;
               averageTemp2[0][4] = 81;
               averageTemp2[0][5] = 81;

               averageTemp2[1] = [];
               averageTemp2[1][0] = 81;
               averageTemp2[1][1] = 79;
               averageTemp2[1][2] = 75;
               averageTemp2[1][3] = 75;
               averageTemp2[1][4] = 73;
               averageTemp2[1][5] = 72;

               expect(averageTemp[0]).toEqual([72, 75, 79, 79, 81, 81]);
               expect(averageTemp[1]).toEqual([81, 79, 75, 75, 73, 72]);
               expect(averageTemp2[0]).toEqual([72, 75, 79, 79, 81, 81]);
               expect(averageTemp2[1]).toEqual([81, 79, 75, 75, 73, 72]);
            });

            it("Iterando pelos elementos de arrays bidimensionais", () => {
               const printMatrix = (myMatrix: unknown[][]) => {
                  let result: number[] = [];

                  for (let i = 0; i < myMatrix.length; i++) {
                     for (let j = 0; j < myMatrix[i].length; j++) {
                        result.push(myMatrix[i][j] as number);
                     }
                  }

                  return result!;
               };

               expect(printMatrix(averageTemp)).toEqual([72, 75, 79, 79, 81, 81, 81, 79, 75, 75, 73, 72]);
            });

            it("Arrays multidimensionais", () => {
               const matrix3x3x3: number[][][] = [];

               for (let i = 0; i < 3; i++) {
                  matrix3x3x3[i] = [];
                  for (let j = 0; j < 3; j++) {
                     matrix3x3x3[i][j] = [];

                     for (let z = 0; z < 3; z++) {
                        matrix3x3x3[i][j][z] = i + j + z;
                     }
                  }
               }

               const printMatrix = (matrix: number[][][]) => {
                  let result: number[] = [];

                  for (let i = 0; i < matrix.length; i++) {
                     for (let j = 0; j < matrix[i].length; j++) {
                        for (let z = 0; z < matrix3x3x3[i][j].length; z++) {
                           result.push(matrix3x3x3[i][j][z]);
                        }
                     }
                  }

                  return result!;
               };

               expect(printMatrix(matrix3x3x3)).toEqual([
                  0, 1, 2, 1, 2, 3, 2, 3, 4, 1, 2, 3, 2, 3, 4, 3, 4, 5, 2, 3, 4, 3, 4, 5, 4, 5, 6,
               ]);
            });

            describe("Métodos de arrays em Javascript", () => {
               const isEven = (x: number) => x % 2 === 0;

               const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

               it("concat: Junta varios arrays e devolve uma copia dos arrays concatenados", () => {
                  const zero = 0;
                  const positiveNumbers = [1, 2, 3];
                  const negativeNumbers = [-3, -2, -1];

                  const numbers = negativeNumbers.concat(zero, positiveNumbers);

                  expect(numbers).toEqual([...negativeNumbers, zero, ...positiveNumbers]);
               });

               it("every: itera por todos os elementos do array, verificando uma condição desejada até que [false] seja devolvido", () => {
                  const numberIsEven = numbers.every(isEven);

                  expect(numberIsEven).toBeFalsy();
               });

               it("some: itera por todos os elementos do array, verificando uma condição desejada até que [true] seja devolvido", () => {
                  const numberIsEven = numbers.some(isEven);

                  expect(numberIsEven).toBeTruthy();
               });

               it("foreach: Executa uma função especifica em cada elemento do array", () => {
                  let result = false;

                  numbers.forEach((x) => (result = isEven(x)));

                  expect(result).toBeFalsy();
               });

               it("map: Cria outro array a partir de uma função que contem o critécio/condição e devolve os elementos do array que correspondam ao criterio.", () => {
                  const myMap = numbers.map(isEven);

                  expect(myMap).toEqual([
                     false,
                     true,
                     false,
                     true,
                     false,
                     true,
                     false,
                     true,
                     false,
                     true,
                     false,
                     true,
                     false,
                     true,
                     false,
                  ]);
               });

               it("filter: Cria um array com todos os elementos avaliados com true pela função especificada", () => {
                  const evenNumbers = numbers.filter(isEven);

                  expect(evenNumbers).toEqual([2, 4, 6, 8, 10, 12, 14]);
               });

               it("reduce: devolve um valor que será somado a um acumulador, o qual será devolvido depois que o metodo reduce parar de executar", () => {
                  const numbersReduce = numbers.reduce((prev, current) => prev + current);

                  expect(numbersReduce).toBe(120);
               });
            });

            describe("ES6 e as novas funcionalidades de array", () => {});
         });
      });
   });
});
