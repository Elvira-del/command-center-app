import { useMemo, useState } from "react";
import { FiltersListType, InitialFiltersList, Issue } from "data";
import FilterPanel from "components/molecules/FilterPanel";

export default function useFilterTasks(
  issues: Issue[],
  outerFilters?: FiltersListType
): { filteredIssues: Issue[]; filterPanel: JSX.Element } {
  const [filteredIssues, setFilteredIssues] = useState(issues);
  const [filters, setFilters] = useState(outerFilters || InitialFiltersList);

  const filterPanel = (
    <FilterPanel filters={filters} onFilter={(params) => setFilters(params)} />
  );

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

  return {
    filteredIssues,
    filterPanel,
  };
}
