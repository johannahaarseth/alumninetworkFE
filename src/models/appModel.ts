import { ITitles, titleContext } from "./titleModel";
import { groupDataContext, IGroupDataModel } from "./groupModel";
import { ITopicDataModel, topicDataContext } from "./topicModel";
import { eventDataContext, IEventDataModel } from "./eventModel";

export interface IAppContext {
  titles: ITitles;
  groups: IGroupDataModel;
  topics: ITopicDataModel;
  events: IEventDataModel;
}

export const appContext: IAppContext = {
  titles: titleContext,
  groups: groupDataContext,
  topics: topicDataContext,
  events: eventDataContext,
};
