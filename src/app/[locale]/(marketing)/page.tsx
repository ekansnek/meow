import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { TileButton } from '@/components/Button';

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
        <TileButton className="tile tile-a" />
        <TileButton className="tile tile-b" />
        <TileButton className="tile tile-c" />
        <TileButton className="tile tile-d" />
        <TileButton className="tile tile-e" />
        <TileButton className="tile tile-f" />
        <TileButton className="tile tile-g" />
        <TileButton className="tile tile-h" />
        <TileButton className="tile tile-i" />

        <TileButton className="tile tile-j" />
        <TileButton className="tile tile-k" />
        <TileButton className="tile tile-l" />
        <TileButton className="tile tile-m" />
        <TileButton className="tile tile-n" />
        <TileButton className="tile tile-o" />
        <TileButton className="tile tile-p" />

        <TileButton className="tile tile-q" />
        <TileButton className="tile tile-r" />
        <TileButton className="tile tile-s" />
        <div className="anniversary-card flex items-center justify-center bg-[#fff0f1] p-5 text-center text-[#e4546b]">
          <p className="font-serif text-2xl leading-tight italic sm:text-3xl">{t('anniversary')}</p>
        </div>
        <TileButton className="tile tile-t" />
        <TileButton className="tile tile-u" />
        <TileButton className="tile tile-v" />

        <TileButton className="tile tile-w" />
        <TileButton className="tile tile-x" />
        <TileButton className="tile tile-y" />
        <TileButton className="tile tile-z" />
        <TileButton className="tile tile-aa" />
        <TileButton className="tile tile-ab" />
        <TileButton className="tile tile-ac" />
        <TileButton className="tile tile-ad" />
        <TileButton className="tile tile-ae" />
      </div>
    </section>
  );
}
