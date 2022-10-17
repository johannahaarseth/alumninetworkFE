export type TopicResults = {
  topic_id: string;
  topic_name: string;
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
      topic_id: "",
      topic_name: "Topic name 1",
      subscriber: true,
      subscriber_count: 2,
    },
  ],
};
