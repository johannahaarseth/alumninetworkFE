export type EventResults = {
  event_id: string;
  event_name: string;
  description: string;
  invited_count: number;
  attendees_count: number;
  start_time: string;
  end_time: string;
  attending: boolean;
};

export interface IEventDataModel {
  count: number;
  next: string;
  results: EventResults[];
}

// dummy data
export const eventDataContext: IEventDataModel = {
  count: 2,
  next: "",
  results: [
    {
      event_id: "",
      event_name: "Name 1",
      description: "Description 1",
      invited_count: 5,
      attendees_count: 4,
      start_time: "01.01.2023 12:00",
      end_time: "01.01.2023 13:00",
      attending: true,
    },
    {
      event_id: "",
      event_name: "Name 2",
      description: "Description 2",
      invited_count: 1,
      attendees_count: 1,
      start_time: "01.01.2023 14:00",
      end_time: "01.01.2023 15:00",
      attending: true,
    },
  ],
};
