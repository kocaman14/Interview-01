import { useState } from 'react'

function App() {
  const [nestedObjected, setNestedObject] = useState({
    taxi: 'Ücret karşılığında yolcu taşımak için lisanslı bir araç',
    food: {
      sushi:
        'Deniz ürünleri ve sebzelerle birlikte sunulan geleneksel bir Japon yemeği',
      apple: {
        Honeycrisp:
          "MAES Bahçe Araştırma Merkezi'nde geliştirilen bir elma çeşidi",
        Fuji: "Tohoku Araştırma İstasyonu'nda yetiştiriciler tarafından geliştirilen bir elma çeşidi",
      },
    },
  })

  return (
    <div style={{ margin: 'auto', width: '70%', paddingTop: 40 }}>
      <DisplayNested nestedObjected={nestedObjected} />
    </div>
  )
}

const DisplayNested = ({ nestedObjected }) => {
  const{taxi,food}=nestedObjected
  return(
<>
<div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
<ul>
<li className="bg-blue-500 font-bold hover:bg-red-700 mt-4 rounded px-4 py-2">{taxi}</li>
<li className="bg-blue-500 font-bold hover:bg-yellow-700 mt-4 rounded px-4 py-2">{food.sushi}</li>
<li className="bg-blue-500 font-bold hover:bg-green-700 mt-4 rounded px-4 py-2">{food.apple.Honeycrisp}</li>
<li className="bg-blue-500 font-bold hover:bg-purple-700 mt-4 rounded px-4 py-2">{food.apple.Fuji}</li>
</ul>
</div>
</>
  )
}

export default App
