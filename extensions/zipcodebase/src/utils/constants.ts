import { getPreferenceValues } from "@raycast/api";

export const API_KEY = getPreferenceValues<Preferences>().api_key;
export const BASE_URL = "https://app.zipcodebase.com/api/v1/";

export const DEFAULT_LIMIT = "10";
export const DEFAULT_UNIT = getPreferenceValues<Preferences>().default_unit;
