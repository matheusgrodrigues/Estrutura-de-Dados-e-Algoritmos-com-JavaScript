class Queue {
   private count: number;
   private lowestCount: number;
   private items: object;

   constructor() {
      this.count = 0;
      this.lowestCount = 0;
      this.items = {};
   }
}
