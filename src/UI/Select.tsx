import React from "react";

interface SelectProps {
  classes?: string;
}

const Select: React.FC<SelectProps> = ({ classes }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleSelect = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`relative ${classes}`}>
      <button
        onClick={toggleSelect}
        className="bg-white rounded-md p-2 w-full text-left"
      >
        По оценке
        <svg
          className={`h-5 w-5 absolute top-3 right-3 transition-transform ${
            isOpen ? "transform rotate-180" : ""
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute w-full mt-1 bg-white rounded-md shadow-lg">
          <ul>
            <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
              По оценке
            </li>
            <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
              По популярности
            </li>
            <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
              По алфавиту
            </li>
            <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
              Недавно добавлены
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Select;