import CONFIG from "@/config/config";

type SetUrl = {
  baseUrl?: string;
  pathname?: string;
  query?: string;
};
type SetPathname = {
  pathname?: string;
  query?: string;
};
export default {
  setUrl({
    baseUrl = CONFIG.API_URL,
    pathname = "",
    query = "",
  }: SetUrl): string {
    const newUrl = new URL(baseUrl);
    newUrl.pathname = pathname;
    newUrl.search = query;
    return newUrl.toString();
  },
  setPathnameAndQuery({ pathname = "", query = "" }: SetPathname): string  {
    const newUrl = new URL(this.setUrl({}));
    newUrl.pathname = pathname;
    newUrl.search = query;
    return newUrl.pathname+newUrl.search;
  },
};
