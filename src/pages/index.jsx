import React from 'react';
import ReactDOM from 'react-dom';
import 'css/common.css';
import Header from 'components/Header'
import Footer from 'components/Footer'
import ImgButton from 'components/ImgButton'
import Title from 'components/SectionTitle'
import SimpleLink from 'components/SimpleLink'
import ColumnList from 'components/ColumnList'
import ImgButtonLink from 'components/ImgButtonWithSimpleLink'

import imgDnC from 'img/school/button/dotsncircles.jpg'
import imgGodsLoveMe from 'img/school/button/godsonlyloveme.jpg'
import imgHit from 'img/school/button/hit.jpg'
import imgNightmare from 'img/school/button/nightmare.jpg'
import imgEcholight from 'img/school/button/echolight.jpg'
import imgLecturer from 'img/professional/button/lecturer.jpg'
import imgNyaga from 'img/professional/button/nyaga.jpg'
import imgAKB48 from 'img/professional/button/akb48.jpg'
import imgRTK13 from 'img/professional/button/rtk13.jpg'
import imgTaishi from 'img/professional/button/taishi.jpg'
import imgGundam from 'img/professional/button/gundam_heroes.jpg'
import imgMallory from 'img/personal/mallory.jpg'
import imgKarusDream from 'img/personal/karus_dream.jpg'
import imgPathfinding from 'img/personal/pathfinding.jpg'
import imgSudoku from 'img/personal/sudoku.jpg'
import pdfResume from 'downloads/resume.pdf'


const schoolProjects = [
    ["Dots and Circles", "school_dotsncircles.html", imgDnC],
    ["Nightmare", "school_nightmare.html", imgNightmare],
    ["Echolight", "school_echolight.html", imgEcholight],
    ["The Gods Only Love Me", "school_godsloveme.html", imgGodsLoveMe],
    ["Heavy Indestructable Tanks", "school_hit.html", imgHit]
]; 


const proProjects = [
    ["Nobunaga's Ambition: Taishi", "professional_taishi.html", imgTaishi],
    ["RTK13", "professional_rtk13.html", imgRTK13],
    ["Gundam Heroes", "professional_gundam_heroes.html", imgGundam],
    ["AKB48's Ambition", "professional_akb48.html", imgAKB48],
    ["Nobunyaga's Ambition", "professional_nyaga.html", imgNyaga]
]; 






function Content() {
    return (
        <div className = "container">
            <div className="section" id="about">
                <Title title="About Me"/>

                <div className="w3-container w3-center">
                    <p>
                        Hi! I'm Gerald Wong, a Lecturer currently employed by DigiPen Institute of Techology Singapore.<br />
                        At heart, I am a Software Engineer with specialization in games development and its industry.<br />
                        I have a passion in learning and applying new technologies to help people around me<br />
                        On top of that, I enjoy teaching people about technology and its application.<br />
                    </p>
                </div>
            </div>
            <div className="section" id="portfolio">
               
                <Title title="Portfolio - Professional Projects"/>
                <div className="w3-container w3-center">       
                    <div className="w3-container w3-center w3-padding-16 w3-row ">
                        {
                            proProjects.map((project) => {
                                const [title, link, img] = project;
                                return <ImgButton title={title} link={link} img={img} className="w3-col s12 m6 l4" />
                            })
                        }
                    </div>
                </div>
            
                <Title title="Portfolio - Student Projects" />
                <div className="w3-container w3-center">           
                    <div className="w3-container w3-center w3-padding-16 w3-row">
                        {
                            schoolProjects.map((project) => {
                                const [title, link, img] = project;
                                return <ImgButton title={title} link={link} img={img} className="w3-col s12 m6 l4" />
                            })
                        }
                    </div>
                </div>
                <Title title="Portfolio - Personal Projects"/>
                    <div className="w3-container w3-center w3-padding-16">
                    <h3 className="w3-wide w3-center">Games and Simulations</h3>
                    <div className="w3-row w3-padding-16">
                        <ImgButtonLink imgTitle="Mallory" imgSrc={imgMallory}  linkTitle="Unity3D Game" links={[
                            ["https://gitlab.com/momodevelop/mallory", "git"],
                            ["https://momohoudai.itch.io/mallory", "site"]
                        ]} className="w3-col s12 m6 l3"/>
                        
                        <ImgButtonLink imgTitle="Karu's Dream" imgSrc={imgKarusDream}  linkTitle="SDL2 Game" links={[
                            ["https://gitlab.com/momodevelop/mallory", "git"],
                            ["https://momohoudai.itch.io/mallory", "site"]
                        ]} className="w3-col s12 m6 l3"/>
                        
                        <ImgButtonLink imgTitle="Pathfinding Visualizer" imgSrc={imgPathfinding}  linkTitle="ReactJS Sim" links={[
                            ["https://gitlab.com/momodevelop/react-pathfinding-visualizer", "git"],
                            ["https://momodevelop.gitlab.io/react-pathfinding-visualizer/", "site"]
                        ]} className="w3-col s12 m6 l3"/>
                        <ImgButtonLink imgTitle="PySudoku" imgSrc={imgSudoku}  linkTitle="Python Game" links={[
                            ["https://gitlab.com/momodevelop/python-sudoku", "git"],
                        ]} className="w3-col s12 m6 l3"/>
                     </div>
                    
                      <h3 className="w3-wide w3-center">Libraries</h3>
                      <SimpleLink title="Simpool" desc="A simple object pool for Unity3D" links={[
                          ["https://gitlab.com/momodevelop/unity_simpool", "git"],
                      ]} />
                      <SimpleLink title="C++ Generic Easing Functions" desc="templated easing functions" links={[
                          ["https://gitlab.com/momodevelop/cpp-generic-easing-functions", "git"],
                      ]} />
                      <h3 className="w3-wide w3-center">Chat Bots</h3>
                      <SimpleLink title="KaruBot" desc="Splatoon 2 Utility Discord Bot" links={[
                          ["https://gitlab.com/momodevelop/discord-karu-bot", "git"],
                      ]} />

                      <SimpleLink title="CocBot" desc="CoC TRPG Utility Discord Bot" links={[
                          ["https://gitlab.com/momodevelop/discord-coc-bot", "git"],
                      ]} />
                      <SimpleLink title="NecronicaBot" desc="Necronica TRPG Utility Discord Bot" links={[
                          ["https://gitlab.com/momodevelop/discord-necronica-bot", "git"],
                      ]} />
                      <SimpleLink title="SuiBot" desc="Utility Discord Bot for friends" links={[
                          ["https://gitlab.com/momodevelop/discordgo-sui-bot", "golang-git"],
                          ["https://gitlab.com/momodevelop/discord-sui-bot", "nodeJS-git"],
                      ]} />                
                      <SimpleLink title="SuiBot" desc="Utility Telegram Bot for friends" links={[
                          ["https://gitlab.com/momodevelop/telegram-sui-bot", "git"],
                      ]} />
                      <SimpleLink title="YuuBot" desc="Random Animal Image Discord Bot friends" links={[
                          ["https://gitlab.com/momodevelop/discord-yuu-bot", "git"],
                      ]} />
                   <br />
                </div>

                <Title title="Portfolio - Others"/>
                <div className="w3-container w3-center w3-padding-16">
                    <ImgButton title="Lecturer at DigiPen Singapore" link="professional_lecturer.html" img={imgLecturer} />
                </div>
            </div>

            <div className="" id="skills">
                <Title title="Skills" />
                <div  className="w3-container w3-center w3-padding-16"> 
                    <form method="get" action={pdfResume}>
                        <button type="submit" className="button-resume">Resume</button>
                    </form>
                </div>

                <div className="w3-container w3-center">

                    <ColumnList title="Technologies" skillsArray={[
                            "Visual Studios",
                            "Unity3D",
                            "Jenkins (CD/CI)",
                            "SVN/GIT",
                            "ReactJS",
                            "NodeJS",
                            "Linux environment",
                            "PS4/XBone development",
                            "Microsoft Office"
                        ]} className="w3-third" />
                        
                    <ColumnList title="Langauges" skillsArray={[
                        "C/C++", 
                        "C#",
                        "Java",
                        "HTML5/CSS/JS",
                        "Python",
                        "Golang",
                        "MySQL",
                        "PHP",
                        "Typescript",
                        ]}  className="w3-third"/>

                    <ColumnList title="Others" skillsArray={[
                        "Public Speaking", 
                        "Mentored Juniors",
                        "Led Teams",
                        "JLPT N3",
                        "Games Development",
                        "Taught university students",
                        "Lived in Japan",
                    ]}  className="w3-third"/>
                </div>
            </div>
            
            <div className="w3-padding-16" id="dummy">
                <br/>
            </div>
        </div>
    )
}

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Content />, document.getElementById('content'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
