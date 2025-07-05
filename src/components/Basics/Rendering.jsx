import React from "react";

const data = [
  {
    id: 1,
    title: "THE JUNGLE",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas perspiciatis fugit sapiente numquam non, unde exercitationem doloremque possimus qui, iure, voluptate fugiat. Nisi ex ullam excepturi sint ducimus ea reiciendis.",
  },
  {
    id: 2,
    title: "THE GOAT",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas perspiciatis fugit sapiente numquam non, unde exercitationem doloremque possimus qui, iure, voluptate fugiat. Nisi ex ullam excepturi sint ducimus ea reiciendis.",
  },
  {
    id: 3,
    title: "SUPER POWER",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas perspiciatis fugit sapiente numquam non, unde exercitationem doloremque possimus qui, iure, voluptate fugiat. Nisi ex ullam excepturi sint ducimus ea reiciendis.",
  },
  {
    id: 4,
    title: "DEEP NIGHT",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas perspiciatis fugit sapiente numquam non, unde exercitationem doloremque possimus qui, iure, voluptate fugiat. Nisi ex ullam excepturi sint ducimus ea reiciendis.",
  },
];

const Rendering = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Rendering Practice</h1>

      <div className="flex flex-wrap v gap-2 h-auto">
        {data.map((item) => (
          <div
            key={item.id}
            className="p-4 bg-lime-200 rounded shadow w-[200px] h-auto"
          >
            <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
            <p className="text-sm text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rendering;
