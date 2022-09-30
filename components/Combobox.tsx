import { Combobox } from "@headlessui/react";
import { useEffect, useState } from "react";
import { getFestival } from "../lib/api/festival/getFestival";

export const AutocompleteInput = () => {
  const [festival, setFestival] = useState<Array<String>>();
  const festivalList: Array<string> = [];

  useEffect(() => {
    getFestival().then((data) => {
      data.map((item) => {
        festivalList.push(item.name);
      });
      setFestival(festivalList);
    });
  }, []);

  const [selectedFestival, setSelectedFestival] = useState("");
  const [query, setQuery] = useState("");

  const filteredFestival =
    query === ""
      ? festival
      : festival?.filter((person) => {
          return person.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox value={selectedFestival} onChange={setSelectedFestival}>
      <Combobox.Input
        onChange={(event) => setQuery(event.target.value)}
        className="rounded-md py-4 pl-5 shadow-input text-base"
      />
      <Combobox.Options>
        {filteredFestival?.map((person, index) => (
          <Combobox.Option key={index} value={person}>
            {person}
          </Combobox.Option>
        ))}
      </Combobox.Options>
    </Combobox>
  );
};
