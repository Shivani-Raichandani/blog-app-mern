import { Box, styled, TextField, Button, Typography } from '@mui/material';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Wrapper = styled(Box)`
    padding: 20px;
    width: 35%;
    margin: auto;
`;

const StyledForm = styled('form')({
    display: 'flex',
    flex: '1',
    flexDirection: 'column',
});

const StyledTextField = styled(TextField)`
    margin-bottom: 5px;
    margin-top: 15px;
`;

const ContactOptions = styled(Box)`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 10px;
`;

const StyledButton = styled(Button)`
    width: 20%;
    margin: 30px auto 0px;
    display: flex;
`;

const StyledText = styled(Typography)`
    font-size: 25px;
    margin-right: 15px;
    color: #435243;
`;

const Contact = () => {
    const form  = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_he85536', 'template_3fppmeu', form.current, 'wTfaP8Lf5mV969Cfa')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        
        e.target.reset(); 
        alert("Message Received!")
    };

    return (  
        
            <Wrapper>
                <ContactOptions>
                    <StyledText>Let's connect!</StyledText> 
                </ContactOptions>
                <StyledForm ref={form} onSubmit={sendEmail}>
                    <StyledTextField variant='standard' label="Full Name" name="user_name" />
                    <StyledTextField variant='standard' label="Email" name="user_email"/>
                    <StyledTextField variant='standard' label="Subject" name="subject" />
                    <StyledTextField 
                        variant='standard' 
                        label="Message" 
                        name="message" 
                        inputProps={{style: {height: "100px"}}}/>
                    <StyledButton variant='contained' type="submit">Submit</StyledButton >
                </StyledForm>

            </Wrapper>
        
    );
}

export default Contact;