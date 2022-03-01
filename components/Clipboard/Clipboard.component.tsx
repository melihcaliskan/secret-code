import { useContext } from "react";
import { Button, useToast } from "@chakra-ui/react";
import { GameContext } from "@/store/Game.context";

export function Clipboard() {
  const [value, setValue]: any = useContext(GameContext);
  const toast = useToast();
  const { inputs } = value;

  function onCopy() {
    navigator.clipboard.writeText(JSON.stringify(inputs)).then(function () {
      toast({
        title: "Success!",
        description: "Your answers have been copied to clipboard.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      });

    }).catch(e => {
      // Fallback
      window.prompt("Copy to clipboard:", "123");
    });
  }

  return (
    <Button
      w="100%"
      colorScheme='twitter'
      height={14}
      onClick={onCopy}>
      Share
    </Button>
  )
}

export default Clipboard;