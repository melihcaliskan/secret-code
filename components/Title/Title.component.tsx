import { Heading } from '@chakra-ui/react'
import styles from '../../styles/Header.module.scss';

export function Title(props) {
  const { text } = props;
  return (
    <Heading
      as='h2'
      size='2xl'
      className={styles.title}>
      {text}
    </Heading>
  )
}

export default Title;