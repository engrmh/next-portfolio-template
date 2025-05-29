export interface ICodeTimeSection {
  codeTime: {
    title: string;
    content: string;
    icon: JSX.Element;
  }[];
  tabs: {
    title: string;
    items: {
      title: string;
      progress: number;
    }[];
  }[];
}
