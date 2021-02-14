import React from "react"
import Example from "../components/example"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"

const Index = () => {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Example />
      </DndProvider>
    </>
  )
}

export default Index
