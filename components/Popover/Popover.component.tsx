import { useContext, useEffect, useState } from 'react';
import {
  Popover as PopoverComponent,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  PopoverFooter,
  Button,
  ButtonGroup,
} from '@chakra-ui/react';
import { GameContext } from '@/store/Game.context';

export function Popover(props: any) {
  const [value, setValue]: any = useContext(GameContext);
  const { popoverIndex } = value;
  const { children, isOpen, placement, text } = props;
  const [isPopoverOpen, setIsOpen] = useState(isOpen);

  useEffect(() => {
    setIsOpen(isOpen);
  }, [props.isOpen])

  function handleClose() {
    setIsOpen(false);
    setValue({
      popoverIndex: popoverIndex + 1
    });
  }

  return (
    <PopoverComponent
      isOpen={isPopoverOpen}
      onClose={handleClose}
      placement={placement || "top"}
      closeOnBlur={true}>
      <PopoverTrigger>
        {children}
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader fontWeight='semibold'>How To Play</PopoverHeader>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          {text}
        </PopoverBody>
        <PopoverFooter d='flex' justifyContent='flex-end'>
          <ButtonGroup size='sm'>
            <Button onClick={handleClose} colorScheme='blue'>OK.</Button>
          </ButtonGroup>
        </PopoverFooter>
      </PopoverContent>
    </PopoverComponent>
  )
}