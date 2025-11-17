import { RevealOnScroll } from "../RevealOnScroll";


export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <RevealOnScroll>
            <div className="text-center z-10 px-4 justify-center">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-cyan-700 bg-clip-text text-transparent leading-right">
                    Hi, I am Ansif Asnake
                </h1>

                <p className="text-gray-600 text-lg mb-8 max-w-lg mx-auto justify-center">
                    So, I am a 14 year old self taught front-end developer.
                    I have the dream to become a full-stack web developer.
                    My goal is to built solutions that offer both execptional performance
                    and a delightful user experience.
                </p>

                <div className="flex justify-center space-x-4">
                    <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow:hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">View Projects</a>
                    <a href="#contact" className=" border brorder-blue-500/50 text-blue-600 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10">Contact Me</a>
                </div>

            </div>
            </RevealOnScroll>
        </section>
    )
};