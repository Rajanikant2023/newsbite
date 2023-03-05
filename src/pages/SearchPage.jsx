import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar, NewsCard } from "../components";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const SearchPage = () => {
  const [newsitem, setNewsItem] = useState([]);
  const { searchItem } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFromAPI(`q=${searchItem}`);
      // console.log(data.articles);
      setNewsItem(data.articles);
      // console.log(videos);
    };
    fetchData();
  }, [searchItem]);
  return (
    <div>
      <Navbar/>
      <Box>
        <Typography
          variant="h4"
          fontWeight={900}
          color="whitesmoke"
          mb={3}
          ml={{ sm: "100px" }}
          textAlign="center"
        >
          Top results for {" "}
          {searchItem} news
        </Typography>
        <div className="row">
          {newsitem?.length > 0 ? (
            <div className="container">
              {newsitem.map((newsitems) => (
                <NewsCard newsitems={newsitems} />
              ))}
            </div>
          ) : (
            <div className="empty">
              <h2>No News found</h2>
            </div>
          )}
        </div>
      </Box>
    </div>
  );
};

export default SearchPage;
