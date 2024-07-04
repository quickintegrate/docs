export default function getFormattedDateTime(): String {
  return new Date().toISOString().replace("T", " ").replace(/\..+/g, "");
}
