// src/data/techIcons.js
import {
    SiHtml5,
    SiCss,
    SiTailwindcss,
    SiReact,
    SiNodedotjs,
    SiExpress,
    SiSpringboot,
    SiFastapi,
    SiMongodb,
    SiMysql,
    SiPostgresql,
    SiMariadb,
    SiScikitlearn,
    SiTensorflow,
    SiPandas,
    SiNumpy,
    SiGraphite,
    SiMlflow,
    SiLangchain,
    SiGit,
    SiGithub,
    SiDocker,
    SiApachehadoop,
    SiApachespark,
    SiPostman,
    SiJira,
    SiSlack,
    SiPython,
    SiJavascript,
    SiTypescript,
  } from 'react-icons/si';
  import { FaJava, FaAws, FaRobot, FaBrain } from "react-icons/fa";
  import { VscAzure } from "react-icons/vsc";
  import { BsBarChartFill } from "react-icons/bs";
  import { TbLetterC } from "react-icons/tb";
  import { PiDatabaseBold } from "react-icons/pi";

  export const techIconMap = {
    // Languages
    Python: SiPython,
    Java: FaJava,
    JavaScript: SiJavascript,
    TypeScript: SiTypescript,
    C: TbLetterC,
    SQL: PiDatabaseBold,

    // Front End
    HTML: SiHtml5,
    CSS: SiCss,
    Tailwind: SiTailwindcss,
    'React.JS': SiReact,

    // Back End
    'Node.JS': SiNodedotjs,
    'Express.JS': SiExpress,
    FastAPI: SiFastapi,
    'Spring Boot': SiSpringboot,

    // Data
    MongoDB: SiMongodb,
    MySQL: SiMysql,
    Postgres: SiPostgresql,
    MariaDB: SiMariadb,

    // AI
    LangChain: SiLangchain,
    RAG: FaRobot,
    LLMs: FaBrain,
    'AWS Bedrock': FaAws,
    'AWS Sagemaker': FaAws,

    // ML
    TensorFlow: SiTensorflow,
    'Scikit-Learn': SiScikitlearn,
    Pandas: SiPandas,
    NumPy: SiNumpy,
    MLflow: SiMlflow,
    Matplotlib: SiGraphite,
    Seaborn: SiGraphite,

    // Cloud & DevOps
    AWS: FaAws,
    Azure: VscAzure,
    Docker: SiDocker,
    Git: SiGit,
    GitHub: SiGithub,

    // Tools
    'Power BI': BsBarChartFill,
    Postman: SiPostman,
    Jira: SiJira,
    Slack: SiSlack,
    PySpark: SiApachespark,
    Hadoop: SiApachehadoop,
    Spark: SiApachespark,
  };