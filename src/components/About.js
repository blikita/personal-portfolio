import IMG from '../assets/Detective.png';

const About = () => {
    return (
        <div id="about" className="about">
            <h1 className="about-heading">About Me</h1>
            <div className="about-info">
                <p className="about-desc">Motivated 3rd-year BTech student with strong analytical and problem-solving skills. Proficient in Frontend and C++ and DataStructures. Seeking opportunities to apply academic knowledge in a practical setting. Eager to learn and contribute to team success. Passionate about technology and innovation.</p>
                <div className="about-img">
                    <div className="about-img-wrapper">
                        <img src={IMG} alt="Detective" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;