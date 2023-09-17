import { motion, AnimatePresence } from 'framer-motion'
import CharacterSlider from './CharacterSlider'
import { useState } from 'react'
import { IconClose } from '@/icons'

export default function ModalCharacter({
  isOpen,
  setIsOpen,
  selectedCharacter,
  setSelectedCharacter
}) {
  const [itemTransformation, setItemTransformation] = useState(null)

  const closeModal = () => {
    setIsOpen(false)
    setSelectedCharacter(null)
    setItemTransformation(null)
  }
  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          // onClick={closeModal}
          className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black bg-opacity-50"
          role="dialog"
          aria-modal="true"
          aria-labelledby="character-modal-title"
        >
          <motion.div
            layoutId={selectedCharacter.id}
            exit={{ opacity: 0 }}
            className="w-4/5 max-w-xl bg-white rounded-md overflow-hidden"
            role="document"
          >
            {/* header */}
            <div className="w-full h-[10%] p-4 flex justify-between items-center">
              <h1
                id="character-modal-title"
                className="my-2 text-2xl font-bold text-gray-900"
              >
                {selectedCharacter.name}
              </h1>
              <button
                onClick={closeModal}
                className="w-10 h-10 rounded-md bg-blue-500 text-red"
                aria-label="Close Modal"
              >
                <IconClose />
              </button>
            </div>
            {/* body */}
            <div className="h-[90%] p-4 bg-slate-50 flex flex-col justify-between gap-8">
              <section className=" flex flex-col gap-4 lg:flex-row">
                <div className="lg:w-[50%]">
                  <img
                    src={
                      itemTransformation === null
                        ? selectedCharacter.image
                        : itemTransformation.image
                    }
                    alt={selectedCharacter.name}
                    className="w-full h-72 object-contain  m-auto lg:h-96"
                  />
                </div>
                <div className="h-[120px]   lg:h-[5rem] lg:w-[50%]">
                  {itemTransformation ? (
                    <h2 className="text-2xl lg:py-4">
                      {itemTransformation.name}
                    </h2>
                  ) : null}
                  <p className=" text-md mb-2 text-gray-600  lg:text-xl">
                    {itemTransformation === null
                      ? selectedCharacter.description
                      : itemTransformation.description}
                  </p>
                </div>
              </section>
              {selectedCharacter?.transformations.length > 0 ? (
                <CharacterSlider
                  selectedCharacter={selectedCharacter}
                  setSelectedCharacter={setSelectedCharacter}
                  itemTransformation={itemTransformation}
                  setItemTransformation={setItemTransformation}
                />
              ) : null}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
