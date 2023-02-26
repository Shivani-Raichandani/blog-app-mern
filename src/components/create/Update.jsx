import { useState, useEffect, useContext } from "react";

import { Box, styled, FormControl, InputBase, Button, TextareaAutosize } from "@mui/material";
import { AddCircle as Add }from '@mui/icons-material';

import { useLocation, useNavigate, useParams } from "react-router-dom";

import { DataContext } from "../../context/DataProvider";
import { API } from "../../service/api";


const Image = styled('img')({
    width: '100%',
    height: '50vh',
    objectFit: 'cover'
});

const Container = styled(Box)(({ theme })=> ({
    margin: '50px 110px',
    [theme.breakpoints.down('md')]: {
        margin: '10px'
    }
}));

const StyledFormControl = styled(FormControl)`
    margin-top: 20px;
    display: flex;
    flex-direction: row;
`;

const InputTextField = styled(InputBase)`
    flex: 1;
    margin: 0 40px;
    font-size: 25px;
`;

const Textarea = styled(TextareaAutosize)`
    width: 100%;
    margin-top: 40px;
    font-size: 18px;
    border: none;

    &:focus-visible{
        outline: none;
    }
`;

const StyledButton = styled(Button)`
    width: 12%;
    background: #9bd3cb;
    color: #445045;
    height: 50px;

    &:hover {
        background: #445045;
        color: #fff;
    }
`;

const initialPost = {
    title: '',
    description: '',
    picture: '',
    username: '',
    categories: '',
    createdDate: new Date()
};

const Update = () => {

    const [post, setPost] = useState(initialPost);

    console.log(post);
    const [file, setFile] = useState('');

    const { account } = useContext(DataContext);

    const location = useLocation();
    const navigate = useNavigate(); 
    const { id } = useParams();

    const url = post.picture ? post.picture : 'https://i.imgur.com/CkRDoFK.png';

    useEffect(() => {
        const fetchData = async () => {
            let response = await API.getPostById(id);
            if(response.isSuccess){
                setPost(response.data);
            }
        }
        fetchData();
    },[])

    useEffect(() => {
        const getImage = async () => {
            if(file){
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);

                //api call
                const response = await API.uploadFile(data);
                //post.picture = response.data;
                setPost((previousState)=>{
                    return {
                        ...previousState, picture: response.data
                    }
                });

            }
        }
        getImage();
        post.categories = location.search?.split('=')[1] || 'All';
        post.username = account.username;
    }, [file])

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value })
    }

    const updateBlogPost = async () => {
        let response = await API.updatePost(post);
        if(response.isSuccess){
            navigate('/');
        }
    }

    return (
        <Container>
            <Image src={url} alt="banner"/>

            <StyledFormControl>
                <label htmlFor="fileInput">
                    <Add fontSize="large" color="action" style={{marginTop: "4px"}} />
                </label>
                <input 
                    type="file"
                    id="fileInput"
                    style={{display: 'none'}}
                    onChange={(e) => setFile(e.target.files[0])} />

                <InputTextField placeholder="Title" value={post.title} onChange={(e) => handleChange(e)} name="title" />
                
                <StyledButton onClick={() => updateBlogPost()}>Update</StyledButton>

            </StyledFormControl>

            <Textarea
                    minRows={5}
                    placeholder="Pen down ideas..." 
                    name="description"
                    value={post.description}
                    onChange={(e) => handleChange(e)} 
            />
        </Container>
    )
}

export default Update;