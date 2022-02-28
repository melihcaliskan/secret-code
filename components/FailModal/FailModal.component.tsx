/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from 'react';
import { getTomorrow } from '@/utility/helpers';
import {
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Heading,
} from '@chakra-ui/react';
import Countdown from 'react-countdown';
import ShareButtons from '../ShareButtons/ShareButtons.component';
import { BOARD_ROWS } from '@/utility/constants';
import { GameContext, INITIAL_STATE } from '@/store/Game.context';

export function FailModal() {
  const [value, setValue]: any = useContext(GameContext);
  const [tomorrow, setTomorrow] = useState(getTomorrow());

  function handleClose() {
    setValue(INITIAL_STATE);
  }

  return (
    <>
      <Modal isOpen={value.isOver} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Heading as='h4' size='md'>
              Game Over 😣
            </Heading>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>

            <Text>
              🧩 You couldn't find the code in {BOARD_ROWS} tries
            </Text>

            <Heading as='h5' size='sm'>
              Next Secret Code
            </Heading>
            <Countdown
              date={tomorrow} />

            <ShareButtons />

          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default FailModal;