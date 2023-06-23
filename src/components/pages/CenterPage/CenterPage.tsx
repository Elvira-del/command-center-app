import { useState } from "react";
import { FiltersListType, InitialFiltersList } from "data";
import FilterPanel from "components/molecules/FilterPanel";
import TaskDisplay from "components/organisms/TaskDisplay";
import useFilterTasks from "hooks/useFilterTasks";

const CenterPage = () => {
  const [filters, setFilters] = useState(InitialFiltersList);

  const filteredTasks = useFilterTasks(filters);

  const handleTasksFilter = (filters: FiltersListType) => {
    setFilters(filters);
  };

  return (
    <>
      <FilterPanel filters={filters} onFilter={handleTasksFilter} />

      <TaskDisplay tasks={filteredTasks} />
    </>
  );
};

export default CenterPage;
