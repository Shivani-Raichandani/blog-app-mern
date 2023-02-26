import { Box, styled, Typography, Link } from '@mui/material';
import { LinkedIn, GitHub, Email } from '@mui/icons-material'

const Wrapper = styled(Box)`
    padding: 40px;
    border: 1px solid #9ca4a4;
    border-radius: 5px;
    margin: 120px 70px 0px 70px;
    text-align: justify;
`;

const MyText = styled(Typography)`
    color: #435243;
    margin-bottom: 15px;
`;

const LinkedInIcon = styled(LinkedIn)`
    font-size: 30px;
    color: #9bd3cb;
    padding-left: 10px;
    padding-right: 5px;
    &:hover{
        color: #606960;
    }
`;

const GitHubIcon = styled(GitHub)`
    font-size: 30px;
    color: #9bd3cb;
    padding-left: 10px;
    padding-right: 5px;
    &:hover{
        color: #606960;
    }
`;

const EmailIcon = styled(Email)`
    font-size: 30px;
    color: #9bd3cb;
    padding-left: 10px;
    padding-right: 5px;
    &:hover{
        color: #606960;
    }
`;

const BottomText = styled(Typography)`
    margin-top: 20px;
    top: auto;
    bottom: 0;
    text-align: center;
    color: #878787;
`;

const Container = styled(Box)`
    display: flex;
    margin: auto;
    justify-content: center;
`;

const About = () => {
    return (
        <Box>
            <Wrapper>

                <MyText>I caught fire coding.</MyText>

                <MyText>
                I always thought my dream is to become something else, but not a Software Developer. And that's when this happened, the spark I was missing ignited the instant I made a switch in Computer Science Branch. Since then, I can't get enough. Front-end web development calls to all my passions; it incorporates creativity and problem solving and I am allowed to break it to improve the code (in a seperate Git branch of course).
                </MyText>

                <MyText>
                I love appplying responsive design principles and watching my web pages shrink into mobile screens and still look Amazing. It's oddly satisfying. I think in a way, I'm kind of like those web pages; I'm moldable, but I still keep my creative flare intact.
                </MyText>

                <MyText style={{paddingBottom: '15px'}} >
                My specialities include quickly learning new skills and programming languages, problem solving, domain driven design, responsive design principles, website optimisation and Model View Controller (MVC) methods of organizing code. So far I have HTML, CSS, JavaScript, C/C++, Java, SQL, Git/GitHub and Bootstrap under my belt. I have started learning React, NodeJs, MongoDB and ExpressJS. I am still enthusiastically grabbing onto other programming languages, frameworks or principles I can integrate into the coding web in my head.
                </MyText>
                    
                <Container>
                    <Typography style={{fontSize: '20px'}} >Connect with me: </Typography>
                    <Link href='https://www.linkedin.com/in/shivani111/' color='inherit' target='_blank'>
                        <LinkedInIcon /> 
                    </Link>
                    <Link href='mailto:shivaniraichandani5@gmail.com?' color='inherit' target='_blank'>
                        <EmailIcon/>
                    </Link>
                    <Link href='https://github.com/Shivani-Raichandani' color='inherit' target='_blank'>
                        <GitHubIcon />
                    </Link>
                </Container>
                
            </Wrapper>
            
            <BottomText>@Shivani Raichandani - 2023</BottomText>
            </Box>

            
        
    )
}

export default About;