import Lottie from "lottie-web"
import dataFetch from "@assets/lottie/datafetch.json"
import { Box, Typography } from "@mui/material"
import { useEffect, useRef } from "react"

const GetDataLoading = () => {
  const container = useRef(null)

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      animationData: dataFetch
    })
  },[])
  return (
    <Box sx={{width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <Box sx={{ width: "600px" }} ref={container}></Box>
      <Typography mt={2} sx={{fontSize: "42px", fontFamily: "yekan"}}>در حال دریافت اطلاعات</Typography>
    </Box>
  )
}

export default GetDataLoading