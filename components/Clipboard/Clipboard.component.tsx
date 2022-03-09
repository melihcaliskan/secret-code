import { useContext } from "react";
import { Button, useToast } from "@chakra-ui/react";
import { GameContext } from "@/store/Game.context";
import { getShareData } from "@/utility/helpers";

export function Clipboard() {
  const [value, setValue]: any = useContext(GameContext);
  const toast = useToast();
  const { day, inputs } = value;

  function onShare() {
    const shareData = getShareData(day, inputs);

    if ("canShare" in navigator) {
      navigator.share(shareData);
    } else {
      onCopy();
    }
  }

  function onCopy() {
    const data = getShareData(day, inputs).text;

    if ("clipboard" in navigator) {
      navigator.clipboard.writeText(data).then(function () {
        toast({
          title: "Success!",
          description: "Your answers have been copied to clipboard.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        });
      }).catch(e => {
        // Fallback
        window.prompt("Copy to clipboard:", data);
      });
    } else {
      window.prompt("Copy to clipboard:", data);
    }
  }

  return (
    <Button
      w="100%"
      colorScheme='twitter'
      height={14}
      onClick={onShare}>
      Share
    </Button>
  )
}

export default Clipboard;