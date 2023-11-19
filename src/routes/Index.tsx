import { Trans, useTransContext } from '@mbarzda/solid-i18next';
import { For } from 'solid-js';
import { writeClipboard } from '@solid-primitives/clipboard';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function Skill(props: { skill: string; levelPercentage: number }) {
    return (
        <div class='w-1 nrm:min-w-[450px] sm:min-w-[250px] max-w-full mx-auto'>
            <div class='flex'>
                <h3 class='nrm:text-3xl sm:text-2xl py-2'>{props.skill}</h3>
                <h3 class='ml-auto nrm:text-3xl sm:text-2xl py-2'>{`${
                    props.levelPercentage / 10
                }/10`}</h3>
            </div>
            <div class='pb-8'>
                <div class='rounded-full h-2.5 bg-gray-700'>
                    <div
                        class='bg-[#DAB5B3] h-2.5 rounded-full'
                        style={`width: ${props.levelPercentage}%`}
                    ></div>
                </div>
            </div>
        </div>
    );
}

export default function Index() {
    const [t] = useTransContext();

    const locale = {
        get home() {
            return t('home');
        },
        get skills() {
            return t('skills');
        },
        get aboutMe() {
            return t('aboutMe');
        },
        get contact() {
            return t('contact');
        },
        get aboutMeIntroduction() {
            return t('aboutMeIntroduction');
        },
        get aboutMeContent() {
            return t('aboutMeContent').split('\n') as string[];
        },
        get aboutMeImageAlt() {
            return t('aboutMeImageAlt');
        },
        get contactTitle() {
            return t('contactTitle');
        },
    };
    return (
        <>
            <NavBar>
                <a title={locale.aboutMe} class='aspect-square w-14 p-2' href='#about-me'>
                    <img class='w-full h-full' src='/images/about-me.svg' />
                </a>
                <a title={locale.skills} class='aspect-square w-14 p-2' href='#skills'>
                    <img class='w-full h-full' src='/images/skills.svg' />
                </a>
                <a title={locale.contact} class='aspect-square w-14 p-2' href='#contact'>
                    <img class='w-full h-full' src='/images/contact.svg' />
                </a>
            </NavBar>
            <div id='paralax-wrapper'>
                <div id='paralax-bg-container'>
                    <img src='/images/paralax-bg-sky.svg' id='paralax-bg-sky' class='paralax-bg' />
                    <img
                        src='/images/paralax-bg-mount4.svg'
                        id='paralax-bg-mount4'
                        class='paralax-bg'
                    />
                    <h1 id='paralax-text'>
                        <Trans key='welcome' />
                    </h1>
                    <img
                        src='/images/paralax-bg-mount3.svg'
                        id='paralax-bg-mount3'
                        class='paralax-bg'
                    />
                    <img
                        src='/images/paralax-bg-mount2.svg'
                        id='paralax-bg-mount2'
                        class='paralax-bg'
                    />
                    <img
                        src='/images/paralax-bg-mount1.svg'
                        id='paralax-bg-mount1'
                        class='paralax-bg'
                    />
                </div>
                <div class='bg-[#170850] h-full'>
                    <div class='pt-16'>
                        <section id='about-me' class='px-[12.5vw] pt-64 pb-16'>
                            <h1 class='nrm:text-7xl sm:text-5xl font-bold text-center sm:pb-8'>
                                {locale.aboutMe}
                            </h1>
                            <div class='flex sm:flex-col'>
                                <img
                                    class='nrm:float-left sm:mx-auto w-1/2 h-auto rounded-full object-cover aspect-square p-24 sm:p-0'
                                    src='/images/photo.png'
                                    alt=''
                                    title={`${locale.aboutMeImageAlt}`}
                                />
                                <div class='flex flex-col justify-center sm:pt-8'>
                                    <h2 class='nrm:text-5xl sm:text-4xl text-center'>
                                        {locale.aboutMeIntroduction}
                                        <span class=' font-bold'>Seweryn</span>
                                    </h2>
                                    <p class='my-4 nrm:text-2xl'>
                                        <For each={locale.aboutMeContent}>
                                            {(line) => <p>{line}</p>}
                                        </For>
                                    </p>
                                </div>
                            </div>
                        </section>
                        <div class='h-96 w-full bg-gradient-to-b from-[#170850] to-[#4D399A]'></div>
                        <section id='skills' class='px-[12.5vw]  flex flex-col py-16 bg-[#4D399A]'>
                            <h1 class='nrm:text-7xl sm:text-5xl font-bold text-center pb-24'>
                                {locale.skills}
                            </h1>
                            <Skill skill='Git' levelPercentage={90} />
                            <Skill skill='HTML, CSS' levelPercentage={90} />
                            <Skill skill='JS/TS' levelPercentage={65} />
                            <Skill skill='SolidJS' levelPercentage={75} />
                            <Skill skill='SolidStart' levelPercentage={60} />
                            <Skill skill='Tailwind CSS' levelPercentage={80} />
                            <Skill skill='Jenkins' levelPercentage={45} />
                            <Skill skill='Docker' levelPercentage={70} />
                            <Skill skill='Terraform' levelPercentage={55} />
                            <Skill skill='Ansible' levelPercentage={40} />
                            <Skill skill='AWS' levelPercentage={50} />
                            <Skill skill='OCI' levelPercentage={45} />
                            <Skill skill='Linux' levelPercentage={85} />
                            <Skill skill='Bash' levelPercentage={65} />
                        </section>
                        <div class='h-96 w-full bg-gradient-to-b from-[#4D399A] to-[#4747A4]'></div>
                        <section id='contact' class='px-[12.5vw] py-16 bg-[#4747A4]'>
                            <h1 class='nrm:text-7xl sm:text-5xl font-bold text-center pb-24'>
                                {locale.contactTitle}
                            </h1>
                            <div class='nrm:text-2xl nrm:flex nrm:flex-col sm:text-center pb-24'>
                                <div class='nrm:flex nrm:flex-row py-6 nrm:mx-auto'>
                                    <h4 class='font-bold nrm:pr-2'>E-mail:</h4>{' '}
                                    seweryn.fater@proton.me
                                </div>
                                <div class='nrm:flex nrm:flex-row py-6 nrm:mx-auto'>
                                    <h4 class='font-bold nrm:pr-2'>LinkedIn:</h4>
                                    <a href='https://www.linkedin.com/in/faterek/' target='_blank'>
                                        linkedin.com/in/faterek
                                    </a>
                                </div>
                                <div class='nrm:flex nrm:flex-row py-6 nrm:mx-auto'>
                                    <h4 class='font-bold nrm:pr-2'>Discord:</h4>{' '}
                                    <button onClick={() => writeClipboard('@faterek')}>
                                        @faterek
                                    </button>
                                </div>
                                <div class='nrm:flex nrm:flex-row py-6 nrm:mx-auto'>
                                    <h4 class='font-bold nrm:pr-2'>Github:</h4>
                                    <a href='https://github.com/Faterek' target='_blank'>
                                        github.com/Faterek
                                    </a>
                                </div>
                            </div>
                        </section>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    );
}
