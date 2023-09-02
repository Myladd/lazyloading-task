import { useQuery } from "react-query";
import { getPosts } from "../../core/httpServices";
import { Box, Card, CardActionArea, CardContent , Typography } from "@mui/material";

const ProductsList = () => {
  const { isLoading, data } = useQuery("posts", getPosts);
  if (isLoading) {
    return <h2>loading...</h2>;
  }
  return (
    <Box sx={{width: "100%" ,display:"flex" ,gap: "50px", flexWrap: "wrap", justifyContent: "center"}}>
      {data?.data.map((post) => {
        return (
          <Card key={post.id} sx={{ maxWidth: 345, marginTop: "20px"}}>
            <CardActionArea sx={{height: "100%"}}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.body}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
    </Box>
  );
};

export default ProductsList;
