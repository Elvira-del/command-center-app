export type Issue = {
  id: string;
  location: string;
  title: string;
  startDate: string;
  status: string;
};

export type FiltersListType = {
  titleFilter: string;
  dateFrom: string;
  dateTo: string;
  statusFilter: string;
};

export const InitialIssue = {
  id: "",
  location: "",
  title: "",
  startDate: "",
  status: "",
};

export const IssueListTitle = [
  { id: "location", value: "Location" },
  { id: "title", value: "Title" },
  { id: "startDate", value: "Date" },
  { id: "status", value: "Status" },
];

export const LocationDict = [
  { id: "earth", value: "Earth" },
  { id: "mars", value: "Mars" },
  { id: "venus", value: "Venus" },
  { id: "pluto", value: "Pluto" },
];

export const IssueStatusDict = [
  { id: "actual", value: "Actual" },
  { id: "handled", value: "Handled" },
  { id: "archived", value: "Archived" },
];

export const InitialFiltersList = {
  titleFilter: "",
  dateFrom: "",
  dateTo: "",
  statusFilter: "",
};

// for testing
// export const TestData = [
//   {
//     location: "Mars",
//     title: "Aliens' attack",
//     startDate: "2077-07-20",
//     status: "Actual",
//   },
//   {
//     location: "Earth",
//     title: "Global heating",
//     startDate: "2077-02-11",
//     status: "Actual",
//   },
//   {
//     location: "Venus",
//     title: "Planet explosion",
//     startDate: "2077-01-03",
//     status: "Handled",
//   },
//   {
//     location: "Pluto",
//     title: "Connection lost",
//     startDate: "2077-05-22",
//     status: "Actual",
//   },
//   {
//     location: "Mars",
//     title: "Aliens' attack",
//     startDate: "2076-07-20",
//     status: "Archived",
//   },
// ];
