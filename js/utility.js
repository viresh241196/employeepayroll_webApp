const stringifyDate = (date) => {
  const options = { year: "numeric", month: "short", day: "numeric" };
  const empDate = !date
    ? "undefined"
    : new Date(Date.parse(date)).toLocaleDateString("en-US", options);
  return empDate;
};
