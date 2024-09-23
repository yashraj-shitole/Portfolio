import React from 'react'
import {  Steps , ConfigProvider} from 'antd'

const Education = (props) => {
  return (
    <div className='h-AUTO flex flex-col gap-2 p-10 rounded-3xl w-[95%] md:w-[60%] border border-[#38383820]'>
      <h1 className='text-2xl font-medium'>EDUCATION</h1>
{/*       
            <h1 className='text-xl font-medium'>{props.name}</h1>
            <h1>{props.degree} | {props.year} | {props.place}</h1>
     */}


<ConfigProvider
    theme={{
      token: {
        // Seed Token
        colorPrimary: '#2563EB',
        borderRadius: 2,

        // Alias Token
        colorBgContainer: '#f6ffed',
      },
    }}
  >

<div className='hidden md:flex '>
<Steps
      current={3}
      percent={20}
      direction="vertical"

      
      
      items={[
        {
          title: 'SHRI HANUMANTRAO CHATE SCHOOL',
          description: 'SSC | 2018| Kolhapur, IN',
        
        },
        {
          title: 'WILLINGDON COLLEGE OF ARTS AND SCIENCE',
          description: 'HSC | 2020 | Sangli, IN',
        },
        {
          title: 'SHARAD INSTITUTE OF TECHNOLOGY COLLEGE OF ENGINEERING',
          description: 'B.Tech in Computer Science | 2024 | Ichalkaranji,IN',
        },
        {
          title: 'Centre for Development of Advanced Computing | Sunbeam Institute of Information Technology',
          description: 'PG Diploma in Advanced Computing | 2024 | Karad,IN',
        },
     
      ]}
    />
</div>
<div className='md:hidden'>
  <Steps
      current={3}
      percent={20}
      direction="vertical"
      size='small'
      
      items={[
        {
          title: 'SHRI HANUMANTRAO CHATE SCHOOL',
          description: 'SSC | 2018| Kolhapur, IN',
        },
        {
          title: 'WILLINGDON COLLEGE OF ARTS AND SCIENCE',
          description: 'HSC | 2020 | Sangli, IN',
        },
        {
          title: 'SHARAD INSTITUTE OF TECHNOLOGY COLLEGE OF ENGINEERING',
          description: 'B.Tech in Computer Science | 2024 | Ichalkaranji,IN',
        },
        {
          title: 'Centre for Development of Advanced Computing | Sunbeam Institute of Information Technology',
          description: 'PG Diploma in Advanced Computing | 2024 | Karad,IN',
        },
     
      ]}
    />
</div>

      </ConfigProvider>

    </div>
  )
}








const Experience=(props)=>{
  return (
    <div className='h-AUTO flex flex-col gap-2 p-10 rounded-3xl w-[95%] md:w-[60%] border border-[#38383820]'>
      <h1 className='text-2xl font-medium'>EXPERIENCE</h1>
{/*       
            <h1 className='text-xl font-medium'>{props.name}</h1>
            <h1>{props.degree} | {props.year} | {props.place}</h1>
     */}


<ConfigProvider
    theme={{
      token: {
        // Seed Token
        colorPrimary: '#2563EB',
        borderRadius: 2,

        // Alias Token
        colorBgContainer: '#f6ffed',
      },
    }}
  >

<div className='hidden md:flex '>
<Steps
      current={3}
      percent={100}
      direction="vertical"
      
      
      items={[
        {
          title: 'SHIVNERI SYSTEMS | FRONTEND WEB DEVELOPER INTERN',
          subTitle:"Feb 2022 | Ichalkaranji, IN",
          description: 'HTML | CSS | JavaScrip',
        },
        {
          title: 'QSECTIVE SOLUTIONS | ANDROID DEVELOPER INTERN',
          subTitle:"August 2022 | Ichalkaranji, IN ",
          description: 'JAVA | Android Studio',
        },
        {
          title: 'RACKSONS IT DEVELOPERS | FULL STACK WEB DEVELOPER INTERN',
          subTitle:"January 2024 | Pune, IN",
          description: 'React | NodeJS | ExpressJS | MonogoDB',
        },
     
      ]}
    />
</div>
<div className='md:hidden'>
  <Steps
      current={3}
      percent={100}
      direction="vertical"
      size='small'
      
      items={[
        {
          title: 'SHIVNERI SYSTEMS | FRONTEND WEB DEVELOPER INTERN',
          subTitle:"Feb 2022 | Ichalkaranji, IN",
          description: 'HTML | CSS | JavaScrip',
        },
        {
          title: 'QSECTIVE SOLUTIONS | ANDROID DEVELOPER INTERN',
          subTitle:"August 2022 | Ichalkaranji, IN ",
          description: 'JAVA | Android Studio',
        },
        {
          title: 'RACKSONS IT DEVELOPERS | FULL STACK WEB DEVELOPER INTERN',
          subTitle:"January 2024 | Pune, IN",
          description: 'React | NodeJS | ExpressJS | MonogoDB',
        },
     
      ]}
    />
</div>
</ConfigProvider>

    </div>
  )
}

export {Education , Experience}
