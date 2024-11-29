export default class Book {
   public title: string;
   public pages: number;
   public isbn: boolean;

   constructor(title: string, pages: number, isbn: boolean) {
      this.title = title;
      this.pages = pages;
      this.isbn = isbn;
   }

   printIsbn() {
      return this.isbn;
   }
}

export class ITBook extends Book {
   public tecnology: string;

   constructor(title: string, pages: number, isbn: boolean, tecnology: string) {
      super(title, pages, isbn);
      this.tecnology = tecnology;
   }

   printTecnology() {
      return this.tecnology;
   }
}
