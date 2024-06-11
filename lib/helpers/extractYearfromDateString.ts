export const extractYear = (dateString: string) => {
  if (typeof dateString !== "string") {
    return;
  }

  const parts = dateString.split("-");
  return parts[0];
};
