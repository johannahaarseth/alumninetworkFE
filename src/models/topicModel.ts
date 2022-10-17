export type TopicResults = {
  id: string;
  name: string;
  subscriber: boolean;
  subscriber_count: number;
};

export interface ITopicDataModel {
  count: number;
  next: string;
  results: TopicResults[];
}

//dummy data
export const topicDataContext: ITopicDataModel = {
  count: 1,
  next: "",
  results: [
    {
      id: "",
      name: "Topic name 1",
      subscriber: true,
      subscriber_count: 2,
    },
  ],
};
