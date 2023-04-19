export default function ListItem({ description, quantity }) {
  return (
    <div
      className={
        "flex flex-row bg-green-50 border border-gray-300 my-3 p-4 rounded-lg hover:shadow-lg"
      }
    >
      <div className={"flex-grow"}>
        <div className={"flex flex-row items-center"}>
          <span className={"text-lg font-bold mr-2"}>{description}</span>
          <p
            className={
              "text-xs text-green-700 py-1 px-2 rounded-full bg-green-200 h-full"
            }
          >
            {quantity}
          </p>
        </div>
      </div>
    </div>
  );
}
