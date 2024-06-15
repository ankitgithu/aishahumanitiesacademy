import React , {useState} from 'react'
import CbseResutlinfo from '../assets/CbseBoard/CbseResutlinfo'
import { motion, AnimatePresence } from "framer-motion";


const CbseResults = () => {
  const [items, setItems] = useState(CbseResutlinfo);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleCardClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseClick = () => {
    setSelectedItem(null);
  };

  return (
    <>
      <h1 className="font-bold text-center text-6xl m-4">Our Priders <strong>Cbse Board</strong></h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 p-4">
        {items.map((elem) => {
          const { id, imgUrl , Name , std } = elem;
          return (
            <div
              key={id}
              className="max-w-lg mx-auto overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-gray-400 cursor-pointer"
              onClick={() => handleCardClick(elem)}
            >
              <div className="relative">
                <img
                  className="w-full h-48 object-cover"
                  src={imgUrl}
                  alt={`Image ${id}`}
                />
              </div>
              <div className="px-6 py-4">
                <div className="text-xl font-semibold text-gray-800">
                  {Name}
                </div>
                <p className="text-gray-600">{std}</p>
              </div>

              <div className="card-actions justify-center">
                <button className="btn btn-sm mb-2 btn-primary">View Marks</button>
              </div>
            </div>
          );
        })}
      </div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseClick}
          >
            <motion.div
              className="bg-blue-700 p-8 rounded-lg shadow-lg max-w-3xl w-full relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-white"
                onClick={handleCloseClick}
              >
                &times;
              </button>
              <div className="relative">
                <img
                  className="w-full h-80 object-cover"
                  src={selectedItem.imgUrl}
                  alt={`Image ${selectedItem.id}`}
                />
              </div>
              <div className="px-6 py-4">
                <div className="text-xl font-semibold text-white">
                <h1>{selectedItem.Name}</h1>
                </div>
                <p className="text-white">{selectedItem.std}</p>
              </div>
              <table className="w-full border-collapse border text-white border-gray-400">
                <tbody>
                  <tr>
                    <td className="font-bold border border-gray-300 p-2">
                      Geography
                    </td>
                    <td className="font-bold border border-gray-300 p-2">
                     {selectedItem.GeographyMarks}
                    </td>
                  </tr>
                  <tr>
                    <td className="font-bold border border-gray-300 p-2">
                      Political Science
                    </td>
                    <td className="font-bold border border-gray-300 p-2">
                    {selectedItem.PoliticalScienceMarks}
                    </td>
                  </tr>
                  <tr>
                    <td className="font-bold border border-gray-300 p-2">
                      History
                    </td>
                    <td className="font-bold border border-gray-300 p-2">
                    {selectedItem.HistoryMarks}
                    </td>
                  </tr>
                </tbody>
              </table>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CbseResults
