import {
  Text,
  Container,
  Center,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  FormControl,
  FormLabel,
  Input,
  Button,
  IconButton,
  FormErrorMessage,
  SimpleGrid,
  InputGroup,
  InputRightAddon,
  Select,
  Alert,
  RadioGroup,
  Radio,
  Stack,
  Box,
  AlertIcon,
  Spinner,
} from "@chakra-ui/react";
import { CloseIcon, ArrowRightIcon, HamburgerIcon } from '@chakra-ui/icons'
import axios from 'axios';
import * as React from "react";
import {useState} from "react";
import { useSearchParams } from 'react-router-dom';
import {useFieldArray, useForm, Controller } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';

const RSVP_URL = 'https://i0mwfydiz0.execute-api.us-east-1.amazonaws.com/prod/rsvp';

const API_INACTIVE = 0;
const API_SUCCESS = 1;
const API_PENDING = 2;
const API_ERROR = 3;

export const Rsvp = () => {
  const [apiState, setApiState] = useState(API_INACTIVE);
  const [searchParams] = useSearchParams();
  const { register, control, handleSubmit, reset, formState: { isSubmitting, errors} } = useForm({
    defaultValues: {
      attendance: 'Accept',
      email: searchParams.get('reservationEmail'),
      children: 0,
      music: '',
      guests: [{name: '', food: '', restrictions: ''}],
    }
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "guests"
  });
  const doSubmit = (values: any) => {
    const { guests, attendance, email, children, music } = values;
    console.log(values);
    setApiState(API_PENDING);
    axios.post(RSVP_URL, {
      Name: '###RSVP###',
      Children: children,
      Email: email,
      Attendance: attendance,
      Music: music,
      Guests: JSON.stringify(guests),
      goose: searchParams.get('goose') ?? 'no goose'
    })
    .then(res => {
      setApiState(API_SUCCESS);
      reset();
    })
    .catch( error => {
      setApiState(API_ERROR);
      alert(error);
    });
  }

  // @ts-ignore
  return (
    <Container id='rsvp' maxWidth={1450}>
      <Center>
      <Box width='100vw' border='30px solid #FFF' padding={[50,50,50]} backgroundImage="url('/i-dilby-do/euc-bg.png')" backgroundSize={'cover'} backgroundPosition="center" backgroundRepeat="no-repeat">
        <Center paddingBottom={10}><Text as='h2'>RSVP</Text></Center>
          <form onSubmit={handleSubmit(doSubmit)}>
            <SimpleGrid columns={[1,1,3]} spacing={5}>
            {fields.map((item, index) => (
              <>
                <FormControl key={`guests.${index}.name`} isInvalid={Boolean(errors.guests)}>
                  <FormLabel htmlFor='name'>Full Name</FormLabel>
                  <Input
                    id='name'
                    placeholder='Enter Full Name'
                    {...register(`guests.${index}.name`, {
                      required: 'Full Name Required',
                      minLength: { value: 3, message: 'Minimum length should be 3' },
                    })}
                  />
                  <ErrorMessage
                    errors={errors}
                    name={`guests.${index}.name`}
                    render={({ message }) => <FormErrorMessage style={{fontWeight: 'bold'}}>{message}</FormErrorMessage>}/>
                </FormControl>
                <FormControl key={`guests.${index}.food`} isInvalid={Boolean(errors.guests)}>
                  <FormLabel>Food Choice</FormLabel>
                  <Select backgroundColor={'white'} errorBorderColor={'none'} {...register(`guests.${index}.food`, {
                    required: 'Food Selection Required',
                    minLength: { value: 4, message: 'Minimum length should be 4' },
                  })}>
                    <option>Beef</option>
                    <option>Chicken</option>
                    <option>Vegetarian</option>
                  </Select>
                  <ErrorMessage
                    errors={errors}
                    name={`guests.${index}.food`}
                    render={({ message }) => <FormErrorMessage style={{fontWeight: 'bold'}}>{message}</FormErrorMessage>}/>
                </FormControl>
                <FormControl key={`guests.${index}.restrictions`}>
                  <FormLabel htmlFor='restrictions'>Food Restrictions</FormLabel>
                  <InputGroup>
                    <Input
                      id='test'
                      placeholder='Enter Food Restrictions'
                      {...register(`guests.${index}.restrictions`)}
                    />
                    {index > 0 ? (
                      <InputRightAddon>
                        <IconButton icon={<CloseIcon />} colorScheme='blackAlpha' onClick={() => remove(index)}  aria-label={'remove button'}/>
                      </InputRightAddon>
                    ) : null}

                  </InputGroup>
                </FormControl>
              </>
            ))}
            </SimpleGrid>
            <Center p={10}>
              <Button m={4} rightIcon={<HamburgerIcon />} colorScheme='teal' onClick={() => append({ name: '', food: '', restrictions: ''})}>
                Add Guest
              </Button>
            </Center>
            <SimpleGrid columns={[1,1,3]} spacing={4}>
              <FormControl key={`email`} isInvalid={Boolean(errors.email)}>
                <FormLabel htmlFor='email'>Email</FormLabel>
                <Input
                  id='email'
                  placeholder='Enter Email Address'
                  {...register(`email`, {
                    required: 'Email Required',
                    minLength: { value: 4, message: 'Minimum length should be 4' },
                  })}
                />
                <ErrorMessage
                  errors={errors}
                  name={`email`}
                  render={({ message }) => <FormErrorMessage style={{fontWeight: 'bold'}}>{message}</FormErrorMessage>}/>
              </FormControl>
              <FormControl>
                <FormLabel># of Children</FormLabel>
                <NumberInput min={0} max={12}>
                  <NumberInputField {...register('children')} />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
              <Controller
                name="attendance"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <RadioGroup onChange={onChange} value={value} style={{fontWeight: 'bold', borderColor: 'black'}}>
                    <Stack direction="row">
                      <Radio defaultChecked colorScheme='teal' value={'Accept'} checked>Accept With Pleasure</Radio>
                      <Radio colorScheme='orange' value={'Decline'}>Decline With Regret</Radio>
                    </Stack>
                  </RadioGroup>
                )}
              />
            </SimpleGrid>
            <Center mt={10}>
              <FormControl key={`music`}>
                <FormLabel htmlFor='music'>Music Suggestion</FormLabel>
                <Input
                  id='music'
                  placeholder='Do you have a music suggestion? Enter it!'
                  {...register(`music`)}
                />
              </FormControl>
            </Center>
            {apiState === API_SUCCESS ?
              <Alert status='success' variant='left-accent' mt={5}>
                <AlertIcon />
                RSVP Received. Thank you!
              </Alert>
              : null}
            {apiState === API_ERROR ?
              <Alert status='error' variant='left-accent' mt={5}>
                <AlertIcon />
                Error! Your Reservation was not received. This is likely a problem with your invite
                code! Go back to your email and click your invite to RSVP. If that still doesn't work
                please contact Charlotte & Dylan<b>{searchParams.get('code')}</b>
              </Alert>
              : null}
            <Center mt={20}>
              <Button m={4} rightIcon={apiState === API_PENDING ? <Spinner /> : <ArrowRightIcon />} colorScheme='teal' isLoading={isSubmitting} type='submit'>
                Submit
              </Button>
            </Center>
          </form>
        </Box>
      </Center>
    </Container>
  );
}