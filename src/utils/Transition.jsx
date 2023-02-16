import { Slide } from "@mui/material"
import React from "react"

export const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction='up' ref={ref} {...props} />
})
