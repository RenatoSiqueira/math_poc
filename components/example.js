import { memo } from "react"
import { Dustbin } from "./Dust"
import { Box } from "./Box"
const Container = memo(function Container() {
  return (
    <div>
      <div style={{ overflow: "hidden", clear: "both" }}>
        <Dustbin />
      </div>
      <div style={{ overflow: "hidden", clear: "both" }}>
        <Box name="2" />
        <Box name="6" />
        <Box name="4" />
      </div>
    </div>
  )
})

export default Container
