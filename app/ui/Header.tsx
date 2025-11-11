import Humburger from "./Humburger";

export default function Header() {
  return (
      <div className="flex bg-gray-500 h-15 place-content-between p-3 items-center">
          <div className="text-sm text-white">
             Technicien-Pro Bat
          </div>
          <Humburger />
      </div>
  );
}