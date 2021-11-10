import { GitHubUser } from "./gitHubUser";

export interface GitHubUsersResp {
  total_count: number;
  incomplete_results: boolean;
  items: GitHubUser[];
}
