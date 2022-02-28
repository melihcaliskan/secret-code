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
import { GameContext, INITIAL_STATE } from '@/store/Game.context';

export function SuccessModal(props) {
  const [value, setValue]: any = useContext(GameContext);
  const [tomorrow, setTomorrow] = useState(getTomorrow());

  function handleClose() {
    setValue(INITIAL_STATE);
  }

  return (
    <>
      <Modal isOpen={value.isSuccess} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Heading as='h4' size='md'>
              Amazing!
            </Heading>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>

            <Text>
              🕟 You solved this question in twenty minutes
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

export default SuccessModal;