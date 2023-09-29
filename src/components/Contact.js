import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import {
  Bell,
  CaretRight,
  Phone,
  Prohibit,
  Star,
  Trash,
  VideoCamera,
  X,
} from 'phosphor-react';
import { useDispatch } from 'react-redux';
import { ToggleSidebar } from '../redux/slices/app';
import { faker } from '@faker-js/faker';
import AntSwitch from './AntSwitch';

const Contact = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  return (
    <Box sx={{ width: 320, height: '100vh' }}>
      <Stack sx={{ height: '100%' }}>
        {/**header */}
        <Box
          sx={{
            boxShadow: '0px 0px 2px rgba(0,0,0,0.25)',
            width: '100%',
            backgroundColor:
              theme.palette.mode === 'light'
                ? '#F8FAFF'
                : theme.palette.background.paper,
          }}
        >
          <Stack
            sx={{ height: '100%', p: 2 }}
            direction={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            spacing={3}
          >
            <Typography variant="subtitle2">Contact info</Typography>
            <IconButton
              onClick={() => {
                dispatch(ToggleSidebar());
              }}
            >
              <X />
            </IconButton>
          </Stack>
        </Box>

        {/**Body */}
        <Stack
          sx={{
            height: '100%',
            position: 'relative',
            flexGrow: 1,
            overflow: 'scroll',
          }}
          p={3}
          spacing={3}
        >
          <Stack alignItems="center" direction="row" spacing={2}>
            <Avatar
              src={faker.image.avatar()}
              alt={faker.name.firstName}
              sx={{ height: 64, width: 64 }}
            />
            <Stack spacing={0.2}>
              <Typography variant="artical" fontWeight={800}>
                {faker.name.fullName()}
              </Typography>
              <Typography variant="body2" fontWeight={500}>
                {'05754 - 46846 - 58'}
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction={'row'}
            alignItems={'center'}
            justifyContent={'space-evenly'}
          >
            <Stack spacing={1} alignItems={'center'}>
              <IconButton>
                <Phone />
              </IconButton>
              <Typography variant="overline">Voice</Typography>
            </Stack>
            <Stack spacing={1} alignItems={'center'}>
              <IconButton>
                <VideoCamera />
              </IconButton>
              <Typography variant="overline">Video</Typography>
            </Stack>
          </Stack>
          <Divider />
          <Stack spacing={0.5}>
            <Typography variant="artical" fontWeight={800}>
              About
            </Typography>
            <Typography variant="body2" fontWeight={500}>
              Imagination is the only limit.
            </Typography>
          </Stack>
          <Divider />

          <Stack
            direction="row"
            alignItems={'center'}
            justifyContent="space-between"
            width={'100%'}
          >
            <Typography variant="subtitle2">Media, Links, & Docs</Typography>
            <Button endIcon={<CaretRight />}>401</Button>
          </Stack>
          <Stack direction={'row'} spacing={2} alignItems={'center'}>
            {[1, 2, 3].map((el) => (
              <Box key={el}>
                <img src={faker.image.food()} alt={faker.name.fullName()}></img>
              </Box>
            ))}
          </Stack>
          <Divider />

          <Stack
            direction={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Stack direction={'row'} alignItems={'center'} spacing={2}>
              <Star size={21} />
              <Typography variant="subtitle2">Started Messages</Typography>
            </Stack>
            <IconButton>
              <CaretRight />
            </IconButton>
          </Stack>
          <Divider />
          <Stack
            direction={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Stack direction={'row'} alignItems={'center'} spacing={2}>
              <Bell size={21} />
              <Typography variant="subtitle2">Mute notifications</Typography>
            </Stack>
            <AntSwitch />
          </Stack>
          <Divider />
          <Stack direction={'column'} spacing={3}>
            <Typography variant="artical" fontWeight={700}>
              1 Group in common
            </Typography>
            <Stack direction={'row'} spacing={3} alignItems={'center'}>
              <Avatar src={faker.image.avatar()} alt={faker.name.fullName()} />
              <Stack spacing={0.5}>
                <Typography variant="artical" fontWeight={800}>
                  Coading Monk
                </Typography>
                <Typography variant="body2" fontWeight={500}>
                  Owl, Rabbit, You
                </Typography>
              </Stack>
            </Stack>
          </Stack>

          <Stack direction={'row'} alignItems={'center'} spacing={2}>
            <Button fullWidth variant="outlined" startIcon={<Prohibit />}>
              Block
            </Button>
            <Button fullWidth variant="outlined" startIcon={<Trash />}>
              Delete
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Contact;
