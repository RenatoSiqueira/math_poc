import { useDrag } from "react-dnd"
import { ItemTypes } from "./ItemTypes"
const style = {
  border: "1px dashed gray",
  backgroundColor: "white",
  padding: "0.5rem 1rem",
  marginRight: "1.5rem",
  marginBottom: "1.5rem",
  cursor: "move",
  float: "left",
}
export const Box = function Box({ name }) {
  const [{ isDragging }, drag] = useDrag({
    item: { name, type: ItemTypes.BOX },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
      console.log(dropResult.name)
      if (item && dropResult && item.name === "4") {
        // alert(`You dropped ${item.name} into ${dropResult.name}!`)
        alert("Parabens!")
      } else {
        alert("Errado")
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  })
  const opacity = isDragging ? 0.4 : 1
  return (
    <div
      ref={drag}
      role="Box"
      style={{ ...style, opacity }}
      data-testid={`box-${name}`}
    >
      {name}
    </div>
  )
}
