import React from "react";

const data = [
  {
    id: "1",
    title: "Trimisu",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio expedita quae quaerat dicta inventore, aliquid maiores, id doloribus amet voluptatum ipsa temporibus repellendus voluptate aperiam impedit possimus corporis libero optio!",
    price: "$5.00",
  },
  {
    id: "1",
    title: "Brimisu",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio expedita quae quaerat dicta inventore, aliquid maiores, id doloribus amet voluptatum ipsa temporibus repellendus voluptate aperiam impedit possimus corporis libero optio!",
    price: "$7.00",
  },
  {
    id: "1",
    title: "Drimisu",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio expedita quae quaerat dicta inventore, aliquid maiores, id doloribus amet voluptatum ipsa temporibus repellendus voluptate aperiam impedit possimus corporis libero optio!",
    price: "$9.00",
  },
];

const AdvanceReact = () => {
  const listItems = data.map((items, key) => {
    const itemText = `${items.title} - ${items.price}`;
    return <li key={key}>{itemText}</li>;
  });
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold">Advance react</h1>
        <h1 className="text-xl font-bold">Rendering ul-li list in react</h1>
        <div>
          <ul>{listItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default AdvanceReact;
