import { useTransContext } from '@mbarzda/solid-i18next';

export default function Footer() {
    const [t] = useTransContext();
    const alts = {
        sourceCode: t('sourceCode'),
    };
    return (
        <footer class='bg-[#10101099]/60 flex flex-row w-full bottom-0'>
            <div class='w-full flex flex-row justify-center gap-8 p-2 ml-14'>
                <p class='nrm:text-xl sm:text-xs'>&copy; Seweryn Fater 2023</p>
                <p class='nrm:text-xl sm:text-xs'>
                    &copy; Github Icon by&nbsp;
                    <a
                        class='font-bold'
                        target='_blank'
                        href='https://www.svgrepo.com/svg/325237/github-outline'
                    >
                        iconoir
                    </a>
                </p>
            </div>
            <button title={alts.sourceCode} class='px-4 '>
                <a target='_blank' href='https://github.com/Faterek/portfolio-website'>
                    <img class='w-6' src='/images/github.svg' alt='' />
                </a>
            </button>
        </footer>
    );
}
