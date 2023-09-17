'use client'
import dynamic from 'next/dynamic'

import { ListCharacter } from './ListCharacter'
import { useState } from 'react'
const ModalCharacter = dynamic(() => import('./ModalCharacter'))

export default function Characters({ data }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCharacter, setSelectedCharacter] = useState(null)
  return (
    <>
      <ListCharacter
        data={data}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selectedCharacter={selectedCharacter}
        setSelectedCharacter={setSelectedCharacter}
      />
      <ModalCharacter
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selectedCharacter={selectedCharacter}
        setSelectedCharacter={setSelectedCharacter}
      />
    </>
  )
}
