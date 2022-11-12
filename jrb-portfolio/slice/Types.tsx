export type PageStateProps = {
  id: number;
  name: string;
  description?: string;
  page: JSX.Element;
  active: boolean;
};

export type PortfolioStateProps = {
  id: number;
  name: string;
  description: string;
  url: string;
  image_path: string;
};
