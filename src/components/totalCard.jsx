const TotalCard = ({ title, color, number }) => {
  return (
    <div className={`${color} my-8 py-4 px-8 rounded-md text-white w-[90%] mx-auto md:w-[80%]`}>
      <h4 className="mb-4">{title}</h4>
      <div className="flex justify-between">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
        <span>{number}</span>
      </div>
    </div>
  );
};

export default TotalCard;
