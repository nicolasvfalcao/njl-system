export type Service = {
  title: string;
  description: string;
  iconSrc: string;
  iconFrameSrc?: string;
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type Project = {
  title: string;
  category: string;
  description: string;
  accent: string;
};
