declare module 'ui-paginator' {
    export function getPages(currentPage: number, totalPages: number): Array<{
      number: number;
      text: string;
      active: boolean;
    }>;
  }
  