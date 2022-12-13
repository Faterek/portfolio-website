import { Meta } from 'solid-start';

export default function Home() {
    return (
        <>
            <Meta property='og:url' content='https://fater.cf' />
            <div id='paralax-wrapper'>
                <header id='paralax-bg-container'>
                    <img src='/static/paralax-bg-sky.svg' id='paralax-bg-sky' class='paralax-bg' />
                    <img
                        src='/static/paralax-bg-mount4.svg'
                        id='paralax-bg-mount4'
                        class='paralax-bg'
                    />
                    <h1 id='paralax-text'>Welcome</h1>
                    <img
                        src='/static/paralax-bg-mount3.svg'
                        id='paralax-bg-mount3'
                        class='paralax-bg'
                    />
                    <img
                        src='/static/paralax-bg-mount2.svg'
                        id='paralax-bg-mount2'
                        class='paralax-bg'
                    />
                    <img
                        src='/static/paralax-bg-mount1.svg'
                        id='paralax-bg-mount1'
                        class='paralax-bg'
                    />
                </header>
                <div class='bg-[#170850] h-[100vh]'>
                    <div class='mx-[18.5%] py-16'>
                        <h1>Hello world!</h1>
                        <h2>Header 2</h2>
                        <h3>Header 3</h3>
                        <p>
                            Some sample text
                            <br />
                            Multi line
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
