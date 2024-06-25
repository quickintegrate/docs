export const csv1row = "name,id,city,country\nJohn,111,Pune,India";

export const csvSample = csv1row + "\nWill,112,Pune,India";

export const xmlArray1item =
  "<ArrayList>\n    <item>\n\t<name>John</name>\n\t<id>111</id>\n\t<city>Pune</city>\n\t<country>India</country>\n    </item>\n</ArrayList>\n";

export const xmlArray =
  "<ArrayList>\n    <item>\n\t<name>John</name>\n\t<id>111</id>\n\t<city>Pune</city>\n\t<country>India</country>\n    </item>\n    <item>\n\t<name>Will</name>\n\t<id>112</id>\n\t<city>Pune</city>\n\t<country>India</country>\n    </item>\n</ArrayList>\n";

export const xmlObj =
  "<details>\n    <name>John</name>\n    <id>111</id>\n    <city>Pune</city>\n   <country>India</country>\n</details>\n";

export const json1obj = [
  {
    name: "John",
    id: 111,
    city: "Pune",
    country: "India",
  },
];

export const jsonArray = [
  ...json1obj,
  {
    name: "Will",
    id: 112,
    city: "Pune",
    country: "India",
  },
];

export const flatText =
  "ST*       850*0001\nBEG*00*SA*000000006637770**20230818*0001307878";

export const constResponse = {
  status: "success",
};
