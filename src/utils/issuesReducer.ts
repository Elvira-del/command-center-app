import { v4 as uuidv4 } from "uuid";
import { Issue } from "data";

type State = Issue[];

type Action = {
  type: string;
  payload: Issue;
};

export function issuesReducer(issues: State, action: Action): State {
  const { type, payload } = action;

  switch (type) {
    case "add_incident": {
      return [
        ...issues,
        {
          id: uuidv4(),
          location: payload.location,
          title: payload.title,
          startDate: payload.startDate,
          status: payload.status,
        },
      ];
    }
    case "edit_incident": {
      return issues.map((issue) => (issue.id === payload.id ? payload : issue));
    }
    default: {
      return issues;
    }
  }
}
