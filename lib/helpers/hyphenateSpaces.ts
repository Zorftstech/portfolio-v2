export default function hyphenateSpaces(text: string) {
  return text.split(" ").join("-").toLowerCase();
}

export const spaceHyphens = (text: string) => {
  return text.split("-").join(" ").toLowerCase();
};
