import { RevealOnScroll } from './RevealOnScroll.jsx';

export const Home =()=> {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative"
        >   
            <RevealOnScroll>
                <div className="text-center z-10 px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-blue-500/80 bg-clip-text text-transparent leading-right">
                        Hello, I'm Zhicong Lin
                    </h1>
                </div>
            </RevealOnScroll>
        </section>
    );
}

