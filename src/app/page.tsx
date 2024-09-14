'use client'
import Publication from '@/components/Publication'
import AboutMe from '@/markdowns/AboutMe.mdx'
import Details from '@/markdowns/Details.mdx'
import Image from 'next/image'


const Home: React.FC = () => {
  return <div className="mx-4 xl:m-auto max-w-screen-xl items-center format lg:format-lg format-primary dark:format-invert">
    <div className="pt-4 lg:pt-12 w-full"></div>

    <h2 className="scroll-mt-16" id="about">😎 About Me</h2>
    <div className='flex flex-col lg:flex-row items-center lg:items-start gap-4 '>
      <Image src="/assets/SangjunPark.jpg" alt="Picture of the author" width={400} height={400} />
      <div>
        <AboutMe />
      </div>
    </div>
    <div className='pb-12'>
      <Details />
      <div className='not-format flex flex-col gap-4'>
        <Publication href="https://doi.org/10.1145/3613904.3642766"
          title="DeepStress: Supporting Stressful Context Sensemaking in Personal Informatics Systems Using a Quasi-experimental Approach"
          authors="Gyuwon Jung, Sangjun Park, Uichin Lee"
          venue="Proceedings of the CHI Conference on Human Factors in Computing Systems" />
        <Publication href="https://doi.org/10.1145/3648356"
          title="Tutorial on Matching-based Causal Analysis of Human Behaviors Using Smartphone Sensor Data"
          authors="Gyuwon Jung, Sangjun Park, Eun-Yeol Ma, Heeyoung Kim, Uichin Lee"
          venue="ACM Computing Surveys 56 (9), 1-33" />
        <Publication href="https://doi.org/10.1145/3544549.3585899"
          title="QuickRef: Should I Read Cited Papers for Understanding This Paper?"
          authors="Sangjun Park, Chanhee Lee, Uichin Lee"
          venue="Extended Abstracts of the 2023 CHI Conference on Human Factors in Computing Systems" />
        <Publication href="/"
          title="Measuring Device-Specific Physical Activity Trackability in Multi-Device Environments"
          authors="Sangjun Park, Eunji Park, Paul H Lee, Uichin Lee"
          venue="2023 IEEE International Conference on Big Data and Smart Computing (BigComp)" />
        <Publication href="https://doi.org/10.1109/BigComp57234.2023.00088"
          title="Causal Analytic Process for Mobile Health Data"
          authors="Gyuwon Jung, Sangjun Park, Uichin Lee, Eun-Yeol Ma, Heeyoung Kim"
          venue="2023 IEEE International Conference on Big Data and Smart Computing (BigComp)" />
        <Publication href="https://doi.org/10.1109/BigComp57234.2023.00093"
          title="Data-driven Digital Therapeutics Analytics"
          authors="Uichin Lee, Gyuwon Jung, Sangjun Park, Eun-Yeol Ma, Heeyoung Kim, Yonggeon Lee, Youngtae Nohs"
          venue="2023 IEEE International Conference on Big Data and Smart Computing (BigComp)" />
      </div>
    </div>
    {/* <h2 className="scroll-mt-16" id="projects">📽️ Projects</h2>
    <div className='flex flex-wrap gap-4 not-format pb-12'>
      {[0, 0, 0, 0, 0, 0].map((_, idx) => (
        <ProjectCard href="/" key={idx} imgSrc='https://via.placeholder.com/300x200' imgAlt="test" title="TEST" description="description" />
      ))}
    </div> */}
    {/* <h2 className="scroll-mt-16" id="posts">📓 Posts</h2>
    <div className="not-format pb-12">
      <PostCard date="2021-09-01" title="Test" description="Test" href="/" />
    </div> */}
  </div>
}
export default Home
