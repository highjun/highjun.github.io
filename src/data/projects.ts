import { Project } from "@/types/Project";

export const projects: Project[] = [
  {
    image: "/projects/galaxy-ppg.jpg",
    title: "Reliable PPG for Daily Health",
    summary: "PPG (photoplethysmography) signals can be used to track various physiological indicators, " +
      "such as heart rate and stress levels. " +
      "To enable their use in daily life and clinical monitoring, " +
      "motion artifacts must be effectively removed, " +
      "and the extraction of each signal must be clearly explained. " +
      "This study explores methods to address these challenges."
  },
  {
    image: "/projects/mobile-sensing.png",
    title: "Making Mobile Sensing Easier",
    summary: "In various research fields, including Digital Phenotyping and " +
      "Context-aware Computing, collecting user data through mobile sensing is " +
      "essential but often complex and burdensome. " +
      "This complexity can hinder data sharing and utilization. " +
      "This study explores ways to support more efficient data collection and " +
      "management to address these challenges.",
  },
  {
    image: "/projects/causal-inference.png",
    title: "Causal Inference for DTx",
    summary: "Digital therapeutics are emerging as alternatives to traditional drugs, " +
      "especially for managing chronic diseases, but their continuous interaction in daily life " +
      "makes traditional evaluation methods such as randomized controlled trials (RCTs) difficult to apply; " +
      "thus, this study explores statistical causal inference methods using observational data as an alternative."
  },
  {
    image: "/projects/carrying-wearing.jpg",
    title: "Carrying & Wearing",
    summary: "This project focuses on the fact that data loss can occur depending on user behavior, " +
      "which may vary according to the type of device used. " +
      "It means that data collected through different devices—such as wearable devices like smartwatches " +
      "(i.e., wearing) and mobile devices like smartphones (i.e., carrying)—can also differ. " +
      "We explore these differences by conducting both quantitative and qualitative analyses of step count data."
  },
];