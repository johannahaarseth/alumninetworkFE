import ProfileCard from "../../components/ProfileCard/ProfileCard.component";
import { useEffect } from "react";
import { useApi } from "../../api/useApi";
import { IUserResponse } from "../../interfaces/IUserResponse";
import { apiClient } from "../../api/apiClient";
import InfoView from "../../components/InfoViewWrapper/InfoView.component";
import { IUserSummary } from "../../interfaces/IUserSummary";

const ProfileView = () => {
	const getCurrentUser = (config: {}) =>
		apiClient.get<IUserSummary>("/user/current", config);
	const getUserApi = useApi<IUserSummary>(getCurrentUser, {} as IUserSummary);

	useEffect(() => {
		getUserApi.request().then();
		// eslint-disable-next-line
	}, []);

	return (
		<InfoView
			rightContentCol={
				<ProfileCard
					status={getUserApi.data.status}
					bio={getUserApi.data.bio}
					funfact={getUserApi.data.funfact}
				/>
			}
			btnGroupHidden={true}
		/>
	);
};

export default ProfileView;
