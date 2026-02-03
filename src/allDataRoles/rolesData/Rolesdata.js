import DataAnalyst from "@/assets/dataRoleAssets/hexagonImages/data-analyst.webp";
import DataScientist from"@/assets/dataRoleAssets/hexagonImages/data-scientist.webp";
import DataEngineer from "@/assets/dataRoleAssets/hexagonImages/data-engineer.webp";
import BusinessAnalyst from "@/assets/dataRoleAssets/hexagonImages/business-analyst.webp";
import MachineLearning from "@/assets/dataRoleAssets/hexagonImages/ml-engineer.webp";
import BigDataAnalyst from "@/assets/dataRoleAssets/hexagonImages/big-data-analyst.webp";


export const Rolesdata =[

    {
    id:0,
    title:"Data Analyst",
    heading:"Data Analyst",
    image:DataAnalyst,  
    about:"A Data Analyst works with data from multiple sources to clean, validate, and analyze it. The goal is to identify patterns, trends, and insights that support better business decisions.",
    points:[
        "Data Collection",
        "Data Cleaning",
        "Exploratory Data Analysis"

        
    ]
    },

     {
    id:1,
    title:"Data Scientist",
    heading:"Data Scientist",
    image:DataScientist,
    about:"A Data Scientist works end to end on data problems They understand business needs, analyze data, apply statistics and build ML models This role combines analysis, predictive modeling, and a complete skill set.",
    points:[
        "Statistical Analysis & Inference",
        "Machine Learning",
        "Business Problem Solving"
    ]
    },

     {
    id:2,
    title:"Data Engineer",
    heading:"Data Engineer",
    image:DataEngineer,
    about:"A Data Engineer designs and maintains data pipelines that move raw data into reliable data warehouses and data lakes. Their focus is on data quality, scalability, and making data ready for analysis and reporting.",
    points:[
        "Data Pipeline",
        "ETL / ELT Processing",
        "Data Warehousing"
    ]
    },

     {
    id:3,
    title:"Business Analyst",
    heading:"Business Analyst",
    image:BusinessAnalyst,
    about:"A Business Analyst transforms raw data into dashboards and reports that help business teams track performance and make decisions. They focus on data modeling, visualization, and automated reporting.",
    points:[
       "Interactive Dashboard",
       "Data Modeling",
       "Business Reporting"
    ]
    },

     {
    id:4,
    title:"Machine Learning Engineer",
    heading:"ML Engineer",
    image:MachineLearning,
    about:"A Machine Learning Engineer builds and deploys machine learning models for real-world use. They focus on preparing data, training models, and improving model performance for business applications.",
    points:[
        "Model Development",
        "Feature Engineering",
        "Model Deployment"
    ]
    },

     {
    id:5,
    title:"Big Data Analyst",
    heading:"Big Data Analyst",
    image:BigDataAnalyst,
    about:"A Big Data Analyst works with very large datasets using distributed systems. They analyze both structured and unstructured data to uncover insights that cannot be handled using traditional data tools.",
    points:[
       "Large-Scale Data Processing",
       "Query Optimization",
       "Structured & Unstructured Data Analysis"
    ]
    },

]