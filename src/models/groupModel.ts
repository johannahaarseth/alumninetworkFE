export type GroupResults = {
  group_id: string;
  group_name: string;
  member: boolean;
  description: string;
  is_private: boolean;
  member_count: number;
};

export interface IGroupDataModel {
  count: number;
  next: string;
  results: GroupResults[];
}

//dummy data
export const groupDataContext: IGroupDataModel = {
  count: 3,
  next: "",
  results: [
    {
      group_id: "",
      group_name: "Group name 1",
      member: true,
      description: "Group description 1",
      is_private: false,
      member_count: 1,
    },
    {
      group_id: "",
      group_name: "Group name 2",
      member: true,
      description: "Group description 2",
      is_private: false,
      member_count: 2,
    },
    {
      group_id: "",
      group_name: "Group name 3",
      member: true,
      description: "Group description 3",
      is_private: false,
      member_count: 3,
    },
  ],
};
