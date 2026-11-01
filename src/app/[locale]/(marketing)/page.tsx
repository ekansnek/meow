import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';

type IndexPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IndexPageProps): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: 'Index' });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function Index(props: IndexPageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'Index' });

  return (
    <section aria-labelledby="gallery-title" className="pb-8">
      <h1 id="gallery-title" className="sr-only">
        {t('gallery_title')}
      </h1>
      <div className="gallery-grid grid auto-rows-[74px] grid-cols-2 gap-1.5 sm:auto-rows-[86px] sm:grid-cols-4 lg:auto-rows-[100px] lg:grid-cols-12">
        <div className="tile tile-a" />
        <div className="tile tile-b" />
        <div className="tile tile-c" />
        <div className="tile tile-d" />
        <div className="tile tile-e" />
        <div className="tile tile-f" />
        <div className="tile tile-g" />
        <div className="tile tile-h" />
        <div className="tile tile-i" />

        <div className="tile tile-j" />
        <div className="tile tile-k" />
        <div className="tile tile-l" />
        <div className="tile tile-m" />
        <div className="tile tile-n" />
        <div className="tile tile-o" />
        <div className="tile tile-p" />

        <div className="tile tile-q" />
        <div className="tile tile-r" />
        <div className="tile tile-s" />
        <div className="anniversary-card flex items-center justify-center bg-[#fff0f1] p-5 text-center text-[#e4546b]">
          <p className="font-serif text-2xl leading-tight italic sm:text-3xl">{t('anniversary')}</p>
        </div>
        <div className="tile tile-t" />
        <div className="tile tile-u" />
        <div className="tile tile-v" />

        <div className="tile tile-w" />
        <div className="tile tile-x" />
        <div className="tile tile-y" />
        <div className="tile tile-z" />
        <div className="tile tile-aa" />
        <div className="tile tile-ab" />
        <div className="tile tile-ac" />

        <div className="action-card flex items-center gap-3 bg-[#080d10] p-4">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-xl text-[#1d1d1d]">
            ♡
          </span>
          <span className="rounded-full bg-[#24282c] px-5 py-3 text-center text-sm font-semibold tracking-wide text-white/90 sm:px-8 sm:text-base">
            {t('call_to_action')}
          </span>
        </div>
        <div className="accent-card bg-[#fff0f1]" />
        <div className="tile tile-ad" />
        <div className="tile tile-ae" />
      </div>
    </section>
  );
}
