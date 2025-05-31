export type Page = {
  title: string;
  slug: string;
  blocks: PageBlock[];
};

export type PageBlock = {
    type: "Hero Block" | "Heading";
    data: HeroBlock | Heading;
}

export type HeroBlock = {
  bgColor: string;
  heading: string;
  subheading: string;
};

export type Heading = {
    heading: string;
};
