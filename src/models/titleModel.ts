type Titles = {
  groups: string;
  topics: string;
  events: string;
};

export interface ITitles {
  titles: Titles;
}

export const titleContext: ITitles = {
  titles: {
    groups: "Groups",
    topics: "Topics",
    events: "Events",
  },
};
