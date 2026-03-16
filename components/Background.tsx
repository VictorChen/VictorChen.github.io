import { useThemeContext } from '@/context/ThemeContext';

export default function Background({
  glowRef,
}: {
  glowRef: React.RefObject<HTMLDivElement | null>;
}) {
  const { theme } = useThemeContext();
  return (
    <>
      <div ref={glowRef} className="pointer-events-none fixed inset-0 z-0" />
      <div
        className="blob blob-1 w-96 h-96 -top-20 -left-20"
        style={{ background: theme.blobs[0], transition: 'background 0.8s ease' }}
      />
      <div
        className="blob blob-2 w-80 h-80 top-1/2 -right-20"
        style={{ background: theme.blobs[1], transition: 'background 0.8s ease' }}
      />
      <div
        className="blob blob-3 w-72 h-72 -bottom-20 left-1/3"
        style={{ background: theme.blobs[2], transition: 'background 0.8s ease' }}
      />
    </>
  );
}
