import { useEffect, useState } from "react";
import { Box, styled, Grid } from '@mui/material'; 

import { useSearchParams, Link } from "react-router-dom";

import { API } from "../../../service/api";

//components
import Post from "./Post";

const NoDataBox = styled(Box)`
    margin: 30px 80px;
    color: #435243;
    font-size: 24px;
`;

const Posts = () => {

    const [posts, setPosts] = useState([]);

    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');

    useEffect(() => {
        const fetchData = async () => {
            let response = await API.getAllPosts({ category: category || '' });

            if(response.isSuccess){
                setPosts(response.data);
            }
        }
        fetchData();
    }, [category])

    return(
        <>
            {
                posts && posts.length > 0 ? posts.map(post => (
                    <Grid item lg={3} sm={4} xs={12} key={post._id}>
                        <Link to={`details/${post._id}`} style={{ textDecoration:'none', color:'inherit'}}>
                            <Post post={post}/>
                        </Link>
                    </Grid>
                )) : <NoDataBox>No Posts Available!</NoDataBox>
            }
        </>
    )
}

export default Posts;