const ExampleCard = () => {
  return (
    <div>
      <div className="flex gap-4 justify-between">
        <button 
          className="
            bg-blue-500
            hover:bg-blue-700
            text-white
            font-bold
            py-2
            px-4
            rounded
          "
        >
          Click me
        </button>
        <button 
          className="
            bg-green-600
            hover:bg-green-700
            text-white
            py-2
            px-4
            rounded
          ">
          Guardar
        </button>
      </div>
      <div className="p-6 bg-white rounded-lg shadow-md text-black mt-2">
        <h2 className="text-xl font-semibold mb-2">Título</h2>
        <h2 className="text-gray-600">Texto descriptivo de la tarjeta</h2>
      </div>
    </div>
  )
}
// t-> top
// e-> end (right)
// b-> bottom
// s-> start (left)

export default ExampleCard;