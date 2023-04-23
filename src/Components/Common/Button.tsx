export default function Button({ Name }: { Name: string }) {
  return (
    <button className="bg-black text-white h-10 w-32 rounded-lg ring-2 ring-lime font-bold focus:ring-4">
      {Name}
    </button>
  );
}
