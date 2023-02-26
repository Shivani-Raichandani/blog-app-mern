import { Box, Typography, styled } from "@mui/material";

const Image = styled(Box)`
    background: url(https://i.imgur.com/iJxsXKh.jpg) center repeat-x #000;
    width: 100%;
    height: 50vh;
    color: #69746a; 
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column; 
`;

const HeadingONE = styled(Typography)`
    font-size: 70px;
    line-height: 1;
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
`

const Banner = () =>{
    return (
        <Image>
            <HeadingONE>BLOG</HeadingONE>
            <SubHeading>~ Own your space ~</SubHeading>
        </Image>
    )
}

export default Banner;