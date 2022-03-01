import { Button, useToast } from "@chakra-ui/react";

export function Clipboard() {
  const toast = useToast()

  function onCopy() {
    navigator.clipboard.writeText("test").then(function () {
      /* clipboard successfully set */

      toast({
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      });

    }).catch(e => {
      // Fallback
      window.prompt("Copy to clipboard: Ctrl+C, Enter", "123");
    });
  }

  return (
    <Button onClick={onCopy}>
      Show Toast
    </Button>
  )
}

export default Clipboard;