import { useState, useEffect, useRef } from 'react';

export function useTypewriter(
  words: string[],
  typingSpeed = 80,
  deletingSpeed = 45,
  pauseDuration = 2000,
) {
  const [text, setText] = useState('');
  const textRef = useRef('');
  const wordIndexRef = useRef(0);
  const isDeletingRef = useRef(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    const tick = () => {
      const word = words[wordIndexRef.current % words.length];
      const current = textRef.current;

      if (!isDeletingRef.current) {
        const next = word.slice(0, current.length + 1);
        textRef.current = next;
        setText(next);
        if (next === word) {
          timeoutRef.current = setTimeout(() => {
            isDeletingRef.current = true;
            tick();
          }, pauseDuration);
        } else {
          timeoutRef.current = setTimeout(tick, typingSpeed);
        }
      } else {
        const next = current.slice(0, -1);
        textRef.current = next;
        setText(next);
        if (next === '') {
          isDeletingRef.current = false;
          wordIndexRef.current += 1;
        }
        timeoutRef.current = setTimeout(tick, next === '' ? typingSpeed : deletingSpeed);
      }
    };

    timeoutRef.current = setTimeout(tick, 600);
    return () => clearTimeout(timeoutRef.current);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return text;
}
