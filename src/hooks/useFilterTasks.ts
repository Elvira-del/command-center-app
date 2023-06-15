import { useContext, useMemo, useState } from "react";
import { Issue } from "data";
import { IssueContext } from "App";
import { FiltersListType } from "components/molecules/FilterPanel/FilterPanel";

export default function useFilterTasks(filters: FiltersListType): Issue[] {
  const { issues } = useContext(IssueContext);
  const [filteredIssues, setFilteredIssues] = useState(issues);

  useMemo(() => {
    let filtered: Issue[] = [...issues];

    if (filters.titleFilter) {
      filtered = filtered.filter((issue) =>
        issue.title.toLowerCase().includes(filters.titleFilter.toLowerCase())
      );
    }

    if (filters.statusFilter) {
      filtered = filtered.filter(
        (issue) => issue.status === filters.statusFilter
      );
    }

    setFilteredIssues(filtered);
  }, [issues, filters.statusFilter, filters.titleFilter]);

  return filteredIssues;
}
