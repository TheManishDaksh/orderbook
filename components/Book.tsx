
interface bookProps{
    indexValue : number,

}
export default function Book({indexValue}:bookProps) {
  return (
    <div className="p-4 bg-gray-900 text-white rounded-2xl shadow-xl w-full min-w-[300px]
     mx-auto">
      <div className="flex justify-between items-center mb-4 border-b border-gray-700 pb-2">
        <p className="text-lg font-semibold">Order Book</p>
        <p className="text-sm text-gray-400">Trade</p>
      </div>

      <div className="text-center">
        <div className="space-y-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="flex justify-between px-2 py-1 text-red-400 text-sm bg-red-500/10 rounded"
            >
              <span>100.{i}0</span>
              <span>{50 + i}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center text-yellow-400 font-bold text-lg">
          { indexValue || "42,150.25" }
        </div>

        <div className="space-y-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="flex justify-between px-2 py-1 text-green-400 text-sm bg-green-500/10 rounded"
            >
              <span>99.{i}5</span>
              <span>{45 - i}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
