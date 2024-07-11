export default function Spinner() {
  return (
    <div className="relative my-4">
      <div className="h-12 w-12 md:h-16 md:w-16 rounded-full border-t-4 border-b-4 border-gray-100"></div>
      <div className="absolute top-0 left-0 h-12 w-12 md:h-16 md:w-16 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin"></div>
    </div>
  );
}
