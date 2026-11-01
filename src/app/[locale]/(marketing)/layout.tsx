import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/libs/I18nNavigation';

export default async function Layout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'RootLayout' });

  return (
    <div className="min-h-screen bg-[#1d1d1d] px-4 pb-8 text-white sm:px-6">
      <header className="relative mx-auto flex h-16 max-w-[1180px] items-center">
        <Link
          href="/"
          className="text-xs font-medium text-white/45 transition-colors hover:text-white"
        >
          {t('home_link')}
        </Link>
        <Link
          href="/"
          aria-label={t('home_link')}
          className="absolute top-1/2 left-1/2 flex size-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-black/70 bg-[#d74b20] text-sm font-bold text-[#26130d] shadow-[0_2px_0_#090909,0_0_0_3px_#303030]"
        >
          m
        </Link>
      </header>
      <main className="mx-auto max-w-[1180px]">{props.children}</main>
    </div>
  );
}
