import Lottie from "lottie-web"
import { useEffect, useRef } from "react"
import buildUp from "@assets/lottie/buildup.json"
import { Box, Typography } from "@mui/material"

const BuildUpLoading = () => {
  const container = useRef(null)

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      animationData:buildUp
    })
  },[])
  return (
    <Box sx={{width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <Box sx={{ width: "600px" }} ref={container}></Box>
      <Typography mt={2} sx={{fontSize: "42px", fontFamily: "yekan"}}>در حال بارگزاری صفحه</Typography>
    </Box>
  )
}

export default BuildUpLoading