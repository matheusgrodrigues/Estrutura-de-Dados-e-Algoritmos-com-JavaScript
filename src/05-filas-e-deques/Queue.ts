class Queue {
   private count: number;
   private lowestCount: number;
   public items: { [key: number]: number };

   constructor() {
      this.count = 0;
      this.lowestCount = 0;
      this.items = {};
   }

   enqueue(element: number) {
      this.items[this.count] = element;
      this.count++;
   }

   dequeue() {
      const result = this.items[this.lowestCount];

      delete this.items[this.lowestCount];
      this.lowestCount++;

      return result;
   }
}

export default Queue;
