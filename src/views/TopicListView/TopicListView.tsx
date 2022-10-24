import ListBox from "../../components/ListBox/ListBox.component";
import { useApi } from "../../api/useApi";
import { ITopicResponse } from "../../interfaces/ITopicResponse";
import { apiClient } from "../../api/apiClient";
import { useEffect } from "react";
import ListViewComponent from "../../components/ListViewComponent/ListView.component";

const TopicListView = () => {
  const getTopicApi = useApi<ITopicResponse>(
    (config: {}) =>
      apiClient.get<ITopicResponse>("/topic?offset=0&limit=3", config),
    {} as ITopicResponse
  );
  useEffect(() => {
    getTopicApi.request().then();
    // eslint-disable-next-line
  }, []);

  return (
    <ListViewComponent>
      <ListBox
        title="All topics"
        visibleSeeMoreBtn={false}
        grouptopicevent={getTopicApi.data?.results}
        linkItems={"/topic"}
      />
    </ListViewComponent>
  );
};

export default TopicListView;
