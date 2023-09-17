'use client'
import React, { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { motion } from 'framer-motion'
import { getCharacters } from '@/api/characters/getCharacters'

export const ListCharacter = ({ data, setIsOpen, setSelectedCharacter }) => {
  const [characters, setCharacters] = useState(data.results)
  const [hasMore, setHasMore] = useState(true)

  const getMoreCharacters = async () => {
    const newCharacters = await getCharacters(characters.length)

    if (newCharacters.results.length === 0) {
      setHasMore(false) // No more data to fetch
    }

    setCharacters((character) => [...character, ...newCharacters.results])
  }
  return (
    <>
      <InfiniteScroll
        dataLength={characters.length}
        next={getMoreCharacters}
        hasMore={hasMore}
        loader={hasMore ? <h3>Cargando...</h3> : null}
        endMessage={
          <h4 className="py-8 text-center text-xl text-white">
            {data.count} personajes
          </h4>
        }
      >
        <div className="m-auto  grid w-[90%] grid-cols-3 gap-8 lg:w-full">
          {characters.map((data) => (
            <motion.div
              layoutId={data.id}
              key={data.id}
              initial="offscreen"
              animate={{}}
              exit={{ opacity: 0 }}
              whileInView="onscreen"
              className="max-w-sm cursor-pointer rounded-xl border-[1px] border-white/50 bg-gradient-to-r from-[#ff8929] via-[#ffa420] to-[#ff8929] hover"
              onClick={() => {
                setIsOpen(true)
                setSelectedCharacter(data)
              }}
            >
              <div className="py-2">
                <img
                  src={data.thumbnail}
                  alt={data.name}
                  className="m-auto h-[100px] w-[100p]"
                />
              </div>
              <p className="py-2 text-lg text-center text-white">{data.name}</p>
            </motion.div>
          ))}
        </div>
      </InfiniteScroll>
    </>
  )
}
