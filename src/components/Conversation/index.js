import { Box, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { Header } from './Header';
import Footer from './Footer';

const Conversation = () => {
  const theme = useTheme();
  return (
    <>
      <Stack height={'100%'} maxHeight={'100vh'} width={'auto'}>
        {/* Chat header */}
        <Header />
        {/*Msg */}
        <Box
          sx={{
            width: '100%',
            backgroundColor:
              theme.palette.mode === 'light'
                ? '#F8faff'
                : theme.palette.background.default,
            flexGrow: 1,
          }}
        ></Box>
        {/* Chat Footer */}
        <Footer />
      </Stack>
    </>
  );
};

export default Conversation;
