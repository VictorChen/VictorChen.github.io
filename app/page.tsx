import PageShell from '@/components/PageShell';
import ThemeButton from '@/components/ThemeButton';
import ProfileCard from '@/components/profile/ProfileCard';

export default function Home() {
  return (
    <PageShell>
      <ThemeButton />
      <ProfileCard />
    </PageShell>
  );
}
