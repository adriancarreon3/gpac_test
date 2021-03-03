import { talentService } from "../services/talentService";

export const loadLocations = async () => {

    const response = await talentService.getLocations();
    return response.data;

}