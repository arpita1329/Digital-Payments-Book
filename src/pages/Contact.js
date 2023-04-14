// @mui
import { styled } from '@mui/material/styles';
import { Container} from '@mui/material';

// hooks
import useResponsive from '../hooks/useResponsive';

// sections
import { ContactPostCard } from "../sections/customerdash/contact"

const StyledRoot = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        display: 'flex',
    },
}));

const StyledSection = styled('div')(({ theme }) => ({
    width: '80%',
    maxWidth: 480,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    boxShadow: theme.customShadows.card,
    backgroundColor: theme.palette.background.default,
}));

const StyledContent = styled('div')(({ theme }) => ({
    maxWidth: 480,
    margin: 'auto',
    minHeight: '80vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(12, 0),
}));


export default function Contact() {
    const mdUp = useResponsive('up', 'md');
    return (
        <>
            <StyledRoot>
                <Container maxWidth="sm">
                    <StyledContent>
                        <ContactPostCard />
                    </StyledContent>
                </Container>
                {mdUp && (
                    <StyledSection>
                        
                        <img src="/assets/illustrations/contact_cust.jpg" alt="login" />
                    </StyledSection>
                )}

            </StyledRoot>
           
           
        </>



    )
}