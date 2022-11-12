export type PageStateProps = {
  id: number;
  name: string;
  description?: string;
  page: React.ReactNode;
  active: boolean;
};
