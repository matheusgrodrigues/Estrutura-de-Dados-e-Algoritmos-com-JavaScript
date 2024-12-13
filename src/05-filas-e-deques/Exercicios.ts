import Queue from "./Queue";

const ExerciciosFilasDeques = {
   hotPotato: <T>(elementsList: T[], num: number) => {
      const queue = new Queue();
      const elimatedList: T[] = [];

      for (let i = 0; i < elementsList.length; i++) {
         queue.enqueue(elementsList[i]);
      }

      while (queue.size() > 1) {
         for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue());
         }

         elimatedList.push(queue.dequeue() as T);
      }

      return {
         eliminated: elimatedList,
         winner: queue.dequeue(),
      };
   },
};

export default ExerciciosFilasDeques;
