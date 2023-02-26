import { Box, Typography, styled } from '@mui/material';

import { addEllipsis } from '../../../utils/common-utils'

const Container = styled(Box)`
    border: 1px solid #9ca4a4;
    border-radius: 10px;
    margin: 10px; 
    height: 40vh;
    display: flex;
    align-items: center;
    flex-direction: column;

    & > p {
        padding: 0 5px 5px 5px;
    }
`;

const Image = styled('img')({
    width: '100%',
    borderRadius: '10px 10px 0 0',
    height: '20vh',
    objectFit: 'cover'
});

const CategoriesText = styled(Typography)`
    color: #9ca49c;
    font-size: 12px;
`;

const TitleText = styled(Typography)`
    color: #606960;
    font-size: 20px;
    font-weight: bold;
`;

const UsernameText = styled(Typography)`
    color: #9ca49c;
    font-size: 14px;
`;

const DescriptionText = styled(Typography)`
    color: #69746a;
    font-size: 16px;
    word-break: break-word;
`;

const Post = ({ post }) => {

    const url = post.picture ? post.picture : 'https://i.imgur.com/CkRDoFK.png';

    return (
        <Container>
            <Image src={url} alt="blog" />

            <CategoriesText>{post.categories}</CategoriesText>
            <TitleText>{addEllipsis(post.title, 15)}</TitleText>
            <UsernameText>@{post.username}</UsernameText>
            <DescriptionText>{addEllipsis(post.description,80)}</DescriptionText>
        </Container>
    )
};

export default Post;