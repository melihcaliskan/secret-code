import { Heading } from '@chakra-ui/react'
import styles from '../../styles/Header.module.scss';

export function Title(props) {
  const { day } = props;
  return (
    <Heading
      as='h2'
      size='2xl'
      className={styles.title}>
      {`Secret Code #${day || ""}`}
    </Heading>
  )
}

export default Title;