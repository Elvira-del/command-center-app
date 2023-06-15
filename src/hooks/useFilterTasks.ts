import { useContext, useMemo, useState } from "react";
import { FiltersListType, Issue } from "data";
import { IssueContext } from "App";

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

    if (filters.dateFrom && filters.dateTo) {
      filtered = filtered.filter(
        (issue) =>
          issue.startDate >= filters.dateFrom &&
          issue.startDate <= filters.dateTo
      );
    }

    if (filters.statusFilter) {
      filtered = filtered.filter(
        (issue) => issue.status === filters.statusFilter
      );
    }

    setFilteredIssues(filtered);
  }, [issues, filters]);

  return filteredIssues;
}
