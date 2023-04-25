import cs from 'classnames';
import { useEffect, useState } from 'react';
import styles from './Typewriter.module.scss';

export type TypewriterProps = {
  words: string[];
  typingDelay?: number;
  erasingDelay?: number;
  transitionDelay?: number;
  className?: string;
};

/**
 * Typewriter component that types and erases words
 * @param  {TypewriterProps} { words, className, typingDelay = 300, erasingDelay = 200, transitionDelay = 2000 } - Props
 */

const Typewriter: React.FC<TypewriterProps> = ({
  typingDelay = 300,
  erasingDelay = 200,
  transitionDelay = 2000,
  words,
  className,
}: TypewriterProps) => {
  let wordsIndex = 0;
  let charIndex = 0;
  const [text, setText] = useState('');
  const [typing, setTyping] = useState(true);

  function type() {
    if (charIndex < words[wordsIndex].length) {
      setTyping(true);
      setText(words[wordsIndex].substring(0, charIndex + 1));
      charIndex++;
      setTimeout(type, typingDelay);
    } else {
      setTyping(false);
      setTimeout(erase, transitionDelay);
    }
  }

  function erase() {
    if (charIndex > 0) {
      setTyping(true);
      setText(words[wordsIndex].substring(0, charIndex - 1));
      charIndex--;
      setTimeout(erase, erasingDelay);
    } else {
      setTyping(false);
      wordsIndex++;
      if (wordsIndex >= words.length) wordsIndex = 0;
      setTimeout(type, typingDelay + 1100);
    }
  }

  useEffect(() => {
    setTimeout(type, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span className={className}>
      {text}
      <span
        className={cs(styles.cursor, {
          [styles.typing]: typing,
        })}
      >
        &nbsp;
      </span>
    </span>
  );
};

export default Typewriter;
