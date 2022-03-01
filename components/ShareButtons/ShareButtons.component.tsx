import { Stack } from "@chakra-ui/react";
import Clipboard from "components/Clipboard/Clipboard.component";

export function ShareButtons() {
  return (
    <Stack
      w={"100%"}
      mb={4}>
      <Clipboard />
    </Stack>
  )
}

export default ShareButtons;