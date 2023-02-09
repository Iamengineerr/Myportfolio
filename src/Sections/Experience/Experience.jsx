import React, {useState} from 'react';
import constant from '../../constant.json';


const Experience = () => {
    const[currentIdx, setCurrentIndex ] = useState(0);
  return (
    <section id='experience'>
        <div className="experience_container">
            <div className="experience_left">
                {constant.experience.map((experience, idx) => (
                        <div className={idx === currentIdx ? 'experience_tab experience_active_tab' : 'tab'}
                        onClick={() => setCurrentIndex(idx)}>
                            {experience.company}

                        </div>
                    ))}
            </div>
            <div className="experience_right">
                
                    <h1 className="experience_title">
                        {constant.experiences[currentIdx].title}
                        <a href={constant.experiences[currentIdx].link} target="_blank">
                            @ {constant.experiences[currentIdx].company}
                        </a>
                    </h1>
                    <p>{constant.experiences[currentIdx].duration}</p>

                    {
                        constant.experiences[currentIdx].desc.map((point) => (
                            <p className='experience_desc'>{point}</p>
                        ))
                    }
                

            </div>
        </div>
    </section>
  )
}

export default Experience
