import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-700 to-purple-900 bg-clip-text text-transparent">Featured Projects</h2>
                <div className="grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 tansition-all hover:border-blue-500/35 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0)]">
                        <h3 className="text-xl font-bold md-2">Advertising Webpage</h3>
                        <p className="text-gray-400 mb-4">
                            A website where you can sign up for free and
                            and contact us to make you and Advertising webpages
                            of contents.
                        </p>
                        <div>
                            {["React", "Node.js", "AWS", "Docker"].map((tech, idx) => (
                                <span key={tech + idx} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0)] transition">
                                        {tech}
                                    </span>
                            ))}
                        </div>   
                    </div>
                    <div className="p-6 mt-5 rounded-xl border border-white/10 hover:-translate-y-1 tansition-all hover:border-blue-500/35 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0)]">
                        <h3 className="text-xl font-bold md-2">To Do List App</h3>
                        <p className="text-gray-400 mb-4">
                            An app where you can download is and take a list with a reminder
                            where you can set a reminder what you have to in a day.
                        </p>
                        <div>
                            {["React", "Node.js", "AWS", "Docker"].map((tech, idx) => (
                                <span key={tech + idx} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0)] transition">
                                        {tech}
                                    </span>
                            ))}
                        </div>   
                    </div>
                    <div className="p-6 mt-5 rounded-xl border border-white/10 hover:-translate-y-1 tansition-all hover:border-blue-500/35 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0)]">
                        <h3 className="text-xl font-bold md-2">Wether App </h3>
                        <p className="text-gray-400 mb-4">
                            An app where you can enter your city name and see the weather data. 
                        </p>
                        <div>
                            {["React", "Node.js", "AWS", "Docker"].map((tech, idx) => (
                                <span key={tech + idx} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0)] transition">
                                        {tech}
                                    </span>
                            ))}
                        </div>   
                    </div>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
};