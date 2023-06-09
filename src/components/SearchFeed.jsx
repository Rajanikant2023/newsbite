import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Navbar from "./Navbar";
import NewsCard from "./NewsCard";

const SearchFeed = () => {
  const [newsitem, setNewsItem] = useState([]);
  const { searchTerm } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFromAPI(`q=${searchTerm}`);
      // console.log(data.articles);
      setNewsItem(data.articles);
      // console.log(videos);
    };
    fetchData();
  }, [searchTerm]);
  return (
    <div>
      <Navbar/>
      <div className="row">
      <Box>
        {" "}
        <Typography
          variant="h4"
          fontWeight={900}
          color="whitesmoke"
          mb={3}
          ml={{ sm: "100px" }}
        >
          Search Results for{" "}
          <span style={{ color: "black" }}>{searchTerm}</span> news
        </Typography>
        <Box>
          <Box />
          {newsitem?.length > 0 ? (
            <div className="container">
              {newsitem.map((newsitems) => (
                <NewsCard newsitems={newsitems} />
              ))}
            </div>
          ) : (
            <div className="empty">
              <h2>No News found for {searchTerm}</h2>
            </div>
          )}
        </Box>
      </Box>
      </div>
    </div>
  );
};

export default SearchFeed;
