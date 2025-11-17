import { RevealOnScroll } from "../RevealOnScroll";


export const About = () => {

    const frontendSkills = ["React", "View", "Typescript", "TailwindCSS", "HTML"];
    const backendSkills = ["Node.js", "Python", "AWS", "MongoDB", "GraphQL"];

    return (
        <section id="about" className="min-h-screen flex flex-col items-center justify-center py-20">
            <RevealOnScroll>
            <div className="max-w-3xl mx-auto py-4">
                <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-900 bg-clip-text text-transparent text-center">
                    About Me
                </h2>
                <div className="rounded-xl p-8 border-white/10 border hover:translate-y-1 transition-all">
                    <p className="mb-2">
                        Hi there! I'm Ansif Asnake, a 14-year-old self-taught front-end developer with a passion for transforming ideas into clean, interactive websites. My journey started not in a classroom, but out of pure curiosity—I right-clicked on a website, hit "View Page Source," and was instantly hooked on the magic of HTML and CSS.
                        Since that day, I've been on a relentless learning path, devouring online tutorials, documentation, and building projects to sharpen my skills in HTML, CSS, JavaScript, and React. I love the challenge of taking a design and bringing it to life with code, focusing on creating sites that are not only visually appealing but also smooth and user-friendly.
                        I believe my fresh perspective and hunger to learn are my greatest assets.
                        I'm always looking for new challenges and opportunities to collaborate. Whether it's a cool project, an internship, or just to chat about code, feel free to reach out!
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                            <h3 className="text-xl font-bold md-4">Front-End</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, idx) => (
                                    <span key={tech + idx} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2_8px_rgba(59,130,224,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                            <h3 className="text-xl font-bold md-4">Back-End</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, idx) => (
                                    <span key={tech + idx} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2_8px_rgba(59,130,224,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="grid-col-1 md:grid-col-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 tansition-all">
                        <h3 className="text-xl font-bold mb-3 md-4"> 🏫 Education </h3>
                        <ul className="list-disc list-inside text-grey-300 space-y2">
                            <li><strong>Self-Taught (2023- present)</strong></li>
                            <li>Relevent Coursework: Wed Development, Video Editing, Advertising</li>
                        </ul>
                    </div>

                    <div className="p-6 mt-5 rounded-xl border-white/10 border hover:-translate-y-1 tansition-all">
                        <h3 className="text-xl font-bold md-4"> 💼 Work Experience </h3>
                        <div className="space-y-4 text-grey-300 font-bold">
                            <div>
                                <h4>Solo Web Developer</h4>
                                <p className="text-gray-400 m-4">Learning Web development languages from 2023 to present and finally start
                                    making project. And also give online serivces like Web Development, Video Editing, 
                                    and Advertising you can contact me if you want any of this services.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl mt-5 border-white/10 border hover:-translate-y-1 tansition-all">
                        <h3 className="text-xl font-bold mb-3 md-4"> ❤️‍🩹 Regards </h3>
                        <div className="text-grey-400 font-bold space-y-4">
                            <div>
                                <p className="text-gray-400 m-4">
                                    So, For this version of me there are peoples that I did love 
                                    to thank them. I may not be here if they were not by my side
                                    in the good or bad. So, The first person I did like to thank is
                                    my Uncle(Tadese Zewdie) who lives in Norway it may looks far from
                                    me in distance but he was the nearest person for me, so I really 
                                    like to thank him very much. Second my families especially my parents
                                    and big bro they were always by my side wishing the best for me. 
                                    So, I would like to thank them for helping me choose the best way. ❤️‍🩹❤️‍🩹
                                </p>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
};