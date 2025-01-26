import React from 'react';
import { Fade } from "react-awesome-reveal";
import Marquee from "react-fast-marquee";
import { NavLink } from 'react-router-dom';
import { Education, Experience } from './Components/ExperienceAndEducation';
import Project from './Components/Project';






const About = () => {

  return (
    <div>

      <div className='flex flex-col items-center w-[100%] gap-5 md:gap-10 pt-20  md:pt-[20vh] '>
      <Fade className='w-full' cascade damping={0.1}>
              <div className='flex justify-start items-center gap-2'>
                    <h1 className='text-3xl md:text-6xl p-5 md:pl-[5vw]'>I am Yashraj Shitole </h1>
                    
                    <svg className='h-[40px] md:h-[55px]' viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g id="lucide:coffee">
                          <path id="Vector" d="M23.375 11H24.75C26.2087 11 27.6076 11.5795 28.6391 12.6109C29.6705 13.6424 30.25 15.0413 30.25 16.5C30.25 17.9587 29.6705 19.3576 28.6391 20.3891C27.6076 21.4205 26.2087 22 24.75 22H23.375M23.375 11H4.125V23.375C4.125 24.8337 4.70446 26.2326 5.73591 27.2641C6.76736 28.2955 8.16631 28.875 9.625 28.875H17.875C19.3337 28.875 20.7326 28.2955 21.7641 27.2641C22.7955 26.2326 23.375 24.8337 23.375 23.375V11ZM8.25 2.75V5.5M13.75 2.75V5.5M19.25 2.75V5.5" stroke="#CCCCCC" />
                          </g>
                    </svg>
              </div>
              

              <div>
              <h6 className=' text-l font-extralight text-[#383838] w-[100%] md:w-[70vw] md:text-2xl px-5 md:pl-[5vw]'>As a full-stack developer, I juggle between front-end finesse and back-end wizardry so seamlessly that even my coffee mugs envy my multitasking skills. Debugging is my cardio, and my code has a sense of humor – it laughs at bugs!</h6>

              </div>
              <div>
                <h1 className=' text-l font-extralight text-[#383838] md:w-[70vw] md:text-2xl pl-5 md:pl-[5vw]'>Contact me: <a className='font-medium' href="mailto:yashraj.r.shitole@gmail.com">yashraj.r.shitole@gmail.com</a></h1>
              </div>

              <div className='w-[100%]'>
                 <Marquee className='p-10 md:p-32 h-[200px] w-[100%] md:h-[300px]'  speed={100}>
                <div className='h-auto flex gap-10 pr-10'>
                    <h1 className='text-5xl md:text-8xl font-sharpie'>JAVA</h1>
                    <h1 className='text-5xl md:text-8xl font-sharpie'>JavaScript</h1>
                    <h1 className='text-5xl md:text-8xl font-sharpie'>ReactJS</h1>
                    <h1 className='text-5xl md:text-8xl font-sharpie'>NodeJS</h1>
                    <h1 className='text-5xl md:text-8xl font-sharpie'>ExpressJS</h1>
                    <h1 className='text-5xl md:text-8xl font-sharpie'>MongoDB</h1>
                    <h1 className='text-5xl md:text-8xl font-sharpie'>UI/UX</h1>

                </div>
               
              </Marquee>
              </div>
             

              <div className='w-[100%] gap-5 flex flex-col md:flex-row justify-center items-center md:p-20  h-auto'>
                <Experience/>
                <div className='w-[40%]'>
                 <svg xmlns="http://www.w3.org/2000/svg" width="" height="300px" viewBox="0 0 888.46077 592.31995" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon points="422.23038 302.15997 383.23038 302.15997 386.23038 270.15997 417.23038 270.15997 422.23038 302.15997" fill="#a0616a"/><polygon points="422.23038 302.15997 383.23038 302.15997 386.23038 270.15997 417.23038 270.15997 422.23038 302.15997" opacity=".1"/><g><g><circle cx="130.62782" cy="150.26165" r="31.93723" fill="#ff6884"/><path d="M274.61664,567.29863c.18112,1.5265,.23276,2.94941,.12933,4.34642h-76.81296c-.69859-1.39701-1.29358-2.84582-1.81105-4.34642-9.39142-26.98412,6.05404-71.89728-13.53083-138.49091-14.53986-49.41496-41.6792-88.06723-54.33048-106.0738-15.54889-22.14613-33.16748-42.58481-53.58026-75.23483-4.42395-7.06291-8.97739-14.72098-13.68605-23.07748-1.57813-2.79418-19.76598-35.21129-18.11016-36.22032,.77612-.46567,5.58821,6.07978,7.21814,8.27896,14.38464,19.45538,22.74129,27.96726,34.71988,41.96375,7.26993,8.48598,15.85934,18.96397,27.91546,35.13376,30.91666,41.42055,46.36197,62.11788,51.74332,77.61498,1.42291,4.1394,9.00329,26.54435,23.28449,54.33048,7.29583,14.17762,10.94366,21.26643,12.93583,20.69733,5.64-1.62993-1.96627-60.33273-25.87166-119.00963-4.08777-9.98642-7.1406-16.3768-12.93583-28.45882-9.41732-19.71419-61.85907-129.28076-100.4079-194.86535-4.83799-8.25307-9.46896-15.78181-13.73784-22.37905-.82791-1.24179-1.62993-2.45784-2.40605-3.62194-5.38135-8.02031-10.14165-14.3589-14.10009-18.44651-2.0956-2.17329-7.42515-8.33076-18.11016-20.69733C8.88878,13.82626,5.78415,10.17842,3.68855,7.51357c-.31045-.38798-.595-.77612-.82775-1.11246C.32527,3.08961-.39906,1.48543,.19594,.63178,1.04975-.58427,4.33534,.11431,7.93154,1.382c.38814,.12933,.80202,.28455,1.19015,.43977,3.90665,1.44881,7.86493,3.33754,9.18441,3.98434,12.10792,5.82112,23.93128,16.24732,34.87494,28.63994,4.06187,4.57918,7.96851,9.41716,11.74583,14.38464,12.15955,16.0403,22.76703,33.50367,30.78718,47.86257,9.8312,17.69613,15.73001,30.70965,15.73001,30.70965,27.44979,60.61728,57.90078,129.95329,59.50481,129.35829,1.75925-.64679-32.00323-86.95461-41.83443-133.8342-3.28575-15.70396-3.88075-26.98412,.43977-29.15725,.15522-.07769,.31045-.15522,.49157-.20702,.67269-.23291,1.29358-.20702,1.62993-.18112,0,0,4.01008-.51746,8.22717,.38814,5.25202,1.13836,11.22837,15.75575,17.04949,36.27196,15.13486,52.88168,29.51949,144.82965,29.51949,144.82965,14.38464,91.97371,36.22032,166.40653,41.39465,165.57861,2.87172-.46567-1.24179-23.56904,2.58717-62.09198,2.6906-27.01002,5.74343-26.18211,15.523-75.02781,15.523-77.48565,23.28449-116.2156,23.28449-116.42246-.07769-1.62993-.28455-4.91568,.20702-8.33076,.51746-3.69963,1.83679-7.58038,4.96731-9.7794,4.76045-3.36328,12.41836-1.91448,15.523,0,2.48374,1.55224,3.75142,4.39821,4.03597,8.48582,1.70746,25.71643-35.23719,100.27857-48.01779,201.07461-6.36448,50.21682-9.8571,77.61498,0,113.8353,9.75367,35.90987,26.75136,58.78033,28.63994,75.10534Z" fill="#f2f2f2"/></g><path d="M613.84413,567.29863c-.18112,1.5265-.23276,2.94941-.12933,4.34642h76.81296c.69859-1.39701,1.29358-2.84582,1.81105-4.34642,9.39142-26.98412-6.05404-71.89728,13.53083-138.49091,14.53986-49.41496,41.6792-88.06723,54.33048-106.0738,15.54889-22.14613,33.16748-42.58481,53.58026-75.23483,4.42395-7.06291,8.97739-14.72098,13.68605-23.07748,1.57813-2.79418,19.76598-35.21129,18.11016-36.22032-.77612-.46567-5.58821,6.07978-7.21814,8.27896-14.38464,19.45538-22.74129,27.96726-34.71988,41.96375-7.26993,8.48598-15.85934,18.96397-27.91546,35.13376-30.91666,41.42055-46.36197,62.11788-51.74332,77.61498-1.42291,4.1394-9.00329,26.54435-23.28449,54.33048-7.29583,14.17762-10.94366,21.26643-12.93583,20.69733-5.64-1.62993,1.96627-60.33273,25.87166-119.00963,4.08777-9.98642,7.1406-16.3768,12.93583-28.45882,9.41732-19.71419,61.85907-129.28076,100.4079-194.86535,4.83799-8.25307,9.46896-15.78181,13.73784-22.37905,.82791-1.24179,1.62993-2.45784,2.40605-3.62194,5.38135-8.02031,10.14165-14.3589,14.10009-18.44651,2.0956-2.17329,7.42515-8.33076,18.11016-20.69733,4.24299-4.91568,7.34762-8.56351,9.44322-11.22837,.31045-.38798,.595-.77612,.82775-1.11246,2.53553-3.31149,3.25985-4.91568,2.66486-5.76933-.85381-1.21605-4.1394-.51746-7.7356,.75022-.38814,.12933-.80202,.28455-1.19015,.43977-3.90665,1.44881-7.86493,3.33754-9.18441,3.98434-12.10792,5.82112-23.93128,16.24732-34.87494,28.63994-4.06187,4.57918-7.96851,9.41716-11.74583,14.38464-12.15955,16.0403-22.76703,33.50367-30.78718,47.86257-9.8312,17.69613-15.73001,30.70965-15.73001,30.70965-27.44979,60.61728-57.90078,129.95329-59.50481,129.35829-1.75925-.64679,32.00323-86.95461,41.83443-133.8342,3.28575-15.70396,3.88075-26.98412-.43977-29.15725-.15522-.07769-.31045-.15522-.49157-.20702-.67269-.23291-1.29358-.20702-1.62993-.18112,0,0-4.01008-.51746-8.22717,.38814-5.25202,1.13836-11.22837,15.75575-17.04949,36.27196-15.13486,52.88168-29.51949,144.82965-29.51949,144.82965-14.38464,91.97371-36.22032,166.40653-41.39465,165.57861-2.87172-.46567,1.24179-23.56904-2.58717-62.09198-2.6906-27.01002-5.74343-26.18211-15.523-75.02781-15.523-77.48565-23.28449-116.2156-23.28449-116.42246,.07769-1.62993,.28455-4.91568-.20702-8.33076-.51746-3.69963-1.83679-7.58038-4.96731-9.7794-4.76045-3.36328-12.41836-1.91448-15.523,0-2.48374,1.55224-3.75142,4.39821-4.03597,8.48582-1.70746,25.71643,35.23719,100.27857,48.01779,201.07461,6.36448,50.21682,9.8571,77.61498,0,113.8353-9.75367,35.90987-26.75136,58.78033-28.63994,75.10534Z" fill="#f2f2f2"/><path d="M714.12836,570.2854h0c0,.46393-.3761,.84003-.84003,.84003H131.08832v-1.68005H713.28833c.46393,0,.84003,.3761,.84003,.84003Z" fill="#e6e6e6"/><polygon points="366.26814 534.67861 372.82329 564.09038 393.34375 561.24031 387.64362 531.02964 366.26814 534.67861" fill="#a0616a"/><polygon points="476.28061 534.67861 469.72546 564.09038 449.205 561.24031 454.90513 531.02964 476.28061 534.67861" fill="#a0616a"/><path d="M515.09057,467.11055l-36.93254-112.49959c-8.26219-25.1674-31.7549-42.18122-58.2438-42.18122h-.0001c-29.46365,0-54.75974,20.96077-60.23453,49.91133l-20.42538,108.00942c-2.92479,15.4664,8.60422,29.79771,24.16386,30.43772v73.84741h5.70013v-73.81665h119.70268v73.81665h5.70013v-74.10932c15.3997-2.28214,25.61495-18.04711,20.56955-33.41575Z" fill="#ccc"/><path d="M438.65977,390.52149l-69.54156,2.28005s-26.22059,46.74105,19.95045,53.01119c46.17104,6.27014,86.64194-.57001,88.35198-20.52046s-12.54028-35.34079-38.76087-34.77078Z" fill="#2f2e41"/><path d="M382.2285,395.6516s-26.22059,2.85006-28.50064,10.26023c-2.28005,7.41017-3.42008,39.90089-3.42008,39.90089l10.26023,94.05211,29.07065-3.42008-6.27014-90.06202,33.63075-7.41017-34.77078-43.32097Z" fill="#2f2e41"/><path d="M376.52837,550.69508s-8.62649-5.70013-10.86839-3.13507-14.21217,15.10534-14.21217,15.10534l-21.09047,13.11029s-18.24041,17.10038,7.41017,16.53037c25.65058-.57001,38.76087-8.29212,38.76087-8.29212,0,0,24.51055-.25808,23.94054-7.09823-.57001-6.84015-8.84071-24.76776-8.84071-24.76776l-15.09983-1.45283Z" fill="#2f2e41"/><path d="M460.32025,395.6516s26.22059,2.85006,28.50064,10.26023,3.42008,39.90089,3.42008,39.90089l-10.26023,94.05211-29.07065-3.42008,6.27014-90.06202-33.63075-7.41017,34.77078-43.32097Z" fill="#2f2e41"/><path d="M466.02038,550.69508s8.62649-5.70013,10.86839-3.13507,14.21217,15.10534,14.21217,15.10534l21.09047,13.11029s18.24041,17.10038-7.41017,16.53037-38.76087-8.29212-38.76087-8.29212c0,0-24.51055-.25808-23.94054-7.09823,.57001-6.84015,8.84071-24.76776,8.84071-24.76776l15.09983-1.45283Z" fill="#2f2e41"/><path d="M418.13931,285.63913h-33.08992l-25.05139,11.40026,5.70013,75.24169s-7.10496,22.87521,1.57763,24.26289c8.6826,1.38768,56.56367,9.93787,69.67396,2.52771,13.11029-7.41017,24.51055-5.13012,24.51055-5.13012l-15.39035-99.75224-27.93063-8.55019Z" fill="#3f3d56"/><circle cx="402.46395" cy="251.72337" r="30.78069" fill="#a0616a"/><path d="M370.79705,256.76148l5.31747,6.93216,7.31723-10.26023s.60977,9.1202,20.73215,5.70013,25.00053-4.5601,25.00053-4.5601l2.43908,10.26023s2.43908-6.84015,2.43908-11.40026,14.63446-15.39035-.60977-24.51055-7.31723-17.6704-26.22007-17.10038c-18.90284,.57001-30.48845,0-32.31776,6.84015-1.82931,6.84015-6.09769,15.39035-5.48792,22.80051s1.38999,15.29834,1.38999,15.29834Z" fill="#2f2e41"/><path id="uuid-7ddbc389-7cdc-46c2-935f-0ff8b929a928-76" d="M429.02933,391.70839c-7.4104,2.46154-14.68722,.63326-16.25299-4.08302-1.56577-4.71628,3.17215-10.53354,10.58552-12.99497,2.94785-1.02386,6.09803-1.32688,9.18698-.88369l31.52987-10.03314,4.39288,14.8964-31.54925,8.30937c-2.21079,2.20381-4.91731,3.84599-7.89301,4.78905Z" fill="#a0616a"/><g><path id="uuid-04944d89-6e1c-4a13-b790-56aa68a198ee-77" d="M284.56081,358.39297c-7.09525-3.26046-11.16423-9.56429-9.08851-14.07941,2.07572-4.51512,9.50916-5.53118,16.6065-2.26861,2.85297,1.26438,5.36167,3.19359,7.31619,5.62627l29.88841,14.19435-6.95995,13.88377-28.72575-15.46713c-3.11996,.10101-6.21873-.54681-9.0369-1.88924Z" fill="#a0616a"/><path d="M359.89499,296.87878s11.85982,4.84008,11.49188,17.75793-9.43396,30.97055-9.43396,30.97055c0,0-.63261,40.75399-11.775,45.16527s-45.57562-23.85983-45.57562-23.85983l7.95328-15.19187,14.86359-1.71459,32.47583-53.12745Z" fill="#3f3d56"/></g><path d="M437.51974,296.46938s11.97027-4.5601,20.52046,5.13012,14.25032,29.07065,14.25032,29.07065c0,0,27.36061,30.21068,22.2305,41.04092-5.13012,10.83024-49.59111,13.68031-49.59111,13.68031l-4.5601-16.53037,9.69022-11.40026-12.54028-60.99137Z" fill="#3f3d56"/><path d="M468.49725,409.0469h-97.29581c-5.44257,0-9.87034-4.42777-9.87034-9.87014v-56.64143c0-5.44237,4.42777-9.87014,9.87034-9.87014h97.29581c5.44257,0,9.87034,4.42777,9.87034,9.87014v56.64143c0,5.44237-4.42777,9.87014-9.87034,9.87014Z" fill="#949494"/><g><path d="M211.91856,388.11823c-2.41043-1.2646-6.20872,4.02108-8.26367,2.79165-2.04759-1.22494,1.01099-6.89929-.14103-14.84557-.20771-1.43303-1.51696-10.46337-5.15632-11.25577-6.89836-1.502-16.10015,27.91307-26.50233,26.55408-2.2829-.29818-4.86612-2.11021-11.93878-3.27805-2.81368-.46455-4.3646-.50141-5.27151,.42689-1.28685,1.31716-.15278,3.42696,.68304,8.43441,1.2535,7.50967-.41645,8.03879,1.10997,13.7059,1.13314,4.20695,2.64862,6.12483,1.65195,7.29469-1.41035,1.6555-5.35572-1.11586-7.3801,.59767-2.06572,1.74862-.73714,6.98779,.85377,10.54303,2.98543,6.67169,7.75947,9.34589,11.65297,12.85208,4.23119,3.81038,9.40066,10.38493,12.42134,22.34075l22.97009,107.09517c-4.22772-22.27494-14.75524-83.9909-17.69858-107.52205-.84963-6.79297-1.49421-13.81702,2.68034-19.31886,4.01907-5.29706,12.02065-8.54496,19.89069-16.46779,.91917-.92524,3.4448-3.53348,2.73597-5.52764-.58598-1.64865-2.84894-1.37577-3.419-2.90677-.76469-2.05359,2.68619-4.21146,5.64278-8.94667,2.08478-3.33904,2.86408-6.26216,3.53417-8.77593,.20204-.75787,3.15314-12.10787-.05566-13.79127l-.00009,.00005Z" fill="#f2f2f2"/><path d="M117.72593,510.00367c-1.31619,.81816,.18218,4.20747-1.01415,4.86131-1.19202,.65155-3.09452-2.48686-7.32699-4.21424-.76325-.3115-5.5732-2.27451-7.01219-.71685-2.72758,2.95236,9.05449,15.95585,5.38614,20.66924-.80502,1.0344-2.43975,1.77947-5.05358,4.91381-1.03985,1.24693-1.50543,1.9975-1.31149,2.71046,.27518,1.01161,1.6379,1.06382,4.33671,2.09834,4.04745,1.55154,3.82532,2.52388,7.04717,3.40983,2.39175,.65769,3.77034,.46725,4.05691,1.29398,.40561,1.16986-2.09296,2.30666-1.83606,3.79462,.26222,1.5184,3.21695,2.37797,5.4209,2.62295,4.13592,.45971,6.82588-1.1118,9.67016-2.01109,3.09098-.97728,7.80941-1.61752,14.54897,.34958l59.19061,19.62649c-12.15254-4.35203-45.48065-16.99208-57.87915-22.337-3.57919-1.54295-7.21261-3.25328-8.70846-6.88968-1.4402-3.50097-.72556-8.36528-2.34338-14.51395-.18892-.71812-.74034-2.71026-1.92357-2.93777-.97824-.18808-1.49723,1.00136-2.41316,.83938-1.22856-.21726-1.29197-2.53358-2.763-5.3509-1.03729-1.98663-2.24713-3.21252-3.28756-4.26674-.31367-.31781-5.03284-5.04106-6.78489-3.95192l.00008,.00013Z" fill="#f2f2f2"/><path d="M147.6869,499.69041l-5.16797-6.6056,.03164-.76173c.14748-3.52309-.4931-6.48012-1.90395-8.79221-.22422-.36763-.46731-.7237-.71459-1.08655-.98074-1.43784-2.20028-3.22488-2.56284-5.96087-.19903-1.52722-.39429-5.22675,2.08838-6.28413,.66436-.29126,1.30003-.29542,1.8539-.18295,.00073-.11388,.00315-.22886,.00477-.35278,.04233-1.51527,.31744-2.32301,.58254-3.10099,.2034-.59811,.41419-1.21493,.57046-2.4648,.0687-.54817,.09977-1.01171,.12654-1.40168,.08294-1.18097,.24853-2.63043,1.6124-3.44737,1.48805-.82256,2.98215-.09352,3.97187,.38856,1.76591,.85935,2.79904,1.62672,3.48396,2.13588,.24971,.1865,.53208,.39537,.6414,.4462,.88828,.39804,4.281-2.57705,5.56433-3.68948,2.87571-2.50989,5.36411-4.68173,7.75258-3.36456,1.70995,.94112,2.28007,3.2277,1.73393,6.98235-.17071,1.16892-.49657,2.17814-.82346,3.01313,.69118-.00995,1.42842,.17384,2.05948,.78719h0c1.4917,1.45383,1.07548,4.08833-1.23122,7.83598-.57111,.93345-1.34341,2.18481-2.74404,3.42152-.6602,.58181-1.30586,1.02231-1.86401,1.38996,.1907,.3363,.33324,.74012,.35875,1.23023,.07756,1.44138-.8288,2.70909-2.7481,3.7218-2.09374,1.14386-4.00254,1.78612-5.68483,2.35492-1.46808,.49826-2.73059,.93127-3.56492,1.52584-1.53344,1.12473-1.98108,3.18292-2.40799,5.75781l-1.01896,6.50432-.00004,.00003Z" fill="#f2f2f2"/><path d="M125.33652,455.17136l-5.07873,6.67447-.74484,.16258c-3.44529,.75096-6.1431,2.12063-8.02171,4.07181-.29874,.31017-.58149,.63559-.86977,.96684-1.14205,1.31334-2.56132,2.94634-5.11585,3.991-1.42681,.57995-4.95579,1.70716-6.60832-.4261-.45022-.56874-.61549-1.18259-.64717-1.74689-.11036,.02822-.22217,.05504-.34244,.08489-1.47646,.34337-2.32758,.28217-3.14738,.22307-.63016-.04505-1.28029-.09247-2.52889,.07338-.54768,.07261-1.00392,.16014-1.38793,.23315-1.16337,.21938-2.60745,.42677-3.7436-.6853-1.1731-1.23073-.84686-2.8609-.63162-3.94055,.38336-1.92613,.86352-3.12012,1.18232-3.9118,.11707-.28881,.24749-.61497,.26893-.7336,.15971-.96017-3.57861-3.48732-4.98018-4.44654-3.15721-2.14502-5.88922-4.00112-5.22092-6.6456,.47664-1.89272,2.54381-3.02421,6.31418-3.44831,1.17399-.13137,2.23286-.07216,3.12347,.03227-.18494-.66604-.19421-1.42585,.23909-2.19177h0c1.02793-1.81168,3.68182-2.0773,7.89198-.79666,1.04778,.31565,2.45411,.74529,4.00563,1.78642,.73023,.49103,1.32007,1.00385,1.81733,1.45051,.27694-.26979,.63138-.51005,1.09901-.65907,1.37455-.44062,2.83075,.11452,4.29714,1.71417,1.63754,1.73512,2.74296,3.41859,3.71987,4.90159,.85435,1.29371,1.59339,2.4051,2.3802,3.06129,1.47693,1.19799,3.58129,1.10893,6.1803,.86876l6.55006-.66419-.00014,.00015Z" fill="#f2f2f2"/><path d="M108.76597,436.54035l-5.16797-6.6056,.03164-.76173c.14748-3.52309-.4931-6.48012-1.90395-8.79221-.22422-.36763-.46731-.7237-.71459-1.08655-.98074-1.43784-2.20028-3.22488-2.56284-5.96087-.19903-1.52722-.39429-5.22675,2.08838-6.28413,.66436-.29126,1.30003-.29542,1.8539-.18295,.00073-.11388,.00315-.22886,.00477-.35278,.04233-1.51527,.31744-2.32301,.58254-3.10099,.2034-.59811,.41419-1.21493,.57046-2.4648,.0687-.54817,.09977-1.01171,.12654-1.40168,.08294-1.18097,.24853-2.63043,1.6124-3.44737,1.48805-.82256,2.98215-.09352,3.97187,.38856,1.76591,.85935,2.79904,1.62672,3.48396,2.13588,.24971,.1865,.53208,.39537,.6414,.4462,.88828,.39804,4.281-2.57705,5.56433-3.68948,2.87571-2.50989,5.36411-4.68173,7.75258-3.36456,1.70995,.94112,2.28007,3.2277,1.73393,6.98235-.17071,1.16892-.49657,2.17814-.82346,3.01313,.69118-.00995,1.42842,.17384,2.05948,.78719h0c1.4917,1.45383,1.07548,4.08833-1.23122,7.83598-.57111,.93345-1.34341,2.18481-2.74404,3.42152-.6602,.58181-1.30586,1.02231-1.86401,1.38996,.1907,.3363,.33324,.74012,.35875,1.23023,.07756,1.44138-.8288,2.70909-2.7481,3.7218-2.09374,1.14386-4.00254,1.78612-5.68483,2.35492-1.46808,.49826-2.73059,.93127-3.56492,1.52584-1.53344,1.12473-1.98108,3.18292-2.40799,5.75781l-1.01896,6.50432-.00004,.00003Z" fill="#f2f2f2"/><path d="M200.91203,569.79549l-2.06131-.01547-1.41765-1.49475,1.41765,1.49475-1.61113,1.26718c-.12668-.14412-.44895-.4561-.94795-.9475-2.73135-2.6943-11.04755-10.89104-22.39225-24.8798-7.91904-9.76521-15.42389-20.19697-22.31037-31.00991-6.89701-10.83003-11.47918-19.42298-15.1632-26.32852-2.7779-5.20901-5.34112-10.21942-7.83528-15.10226-6.66731-13.0423-12.96669-25.36108-21.6753-37.93001-1.94267-2.80691-5.98922-8.64756-13.47944-12.90004-4.34454-2.46593-9.20399-4.03769-14.44224-4.66689l.49236-4.09491c5.7847,.69896,11.1636,2.44231,15.98767,5.18,8.30472,4.71485,12.71402,11.07894,14.83259,14.1367,8.86206,12.79112,15.22089,25.22931,21.95179,38.39784,2.48694,4.86358,5.03755,9.85341,7.80449,15.04082,3.64947,6.84182,8.19241,15.35956,15.00116,26.0502,6.8028,10.68482,14.21671,20.98827,22.03458,30.63149,11.20246,13.81172,19.39575,21.88565,22.08723,24.53832,1.43608,1.41724,1.73707,1.71392,1.72664,2.63278l-.00003-.00004Z" fill="#f2f2f2"/><path d="M75.99491,426.82216c-.1439,.08869-.29161,.17501-.44527,.25551-3.08682,1.68029-6.95563,1.59697-11.49945-.24503-2.13358-.86916-3.8391-2.3094-7.24042-5.18174-.52537-.44207-3.15191-2.70929-6.08145-6.25059-1.9151-2.31336-2.523-3.39946-2.59754-4.64414-.08518-1.38468,.36823-2.66636,1.0804-3.78131-.25147-.30834-.4288-.67651-.50066-1.11918-.3038-1.83141,1.40417-2.61931,2.32114-3.05683,.46889-.21335,1.05627-.47609,1.62314-.86803,.89418-.61253,1.22033-1.1918,1.71722-2.06536,.47494-.83639,1.06547-1.87637,2.22286-2.96318,2.27496-2.15378,4.91862-2.76199,5.78973-2.96325,4.57357-1.07435,8.26233,.72261,12.53287,2.80389,.85401,.41916,3.87302,2.00009,6.95855,4.81651,2.22612,2.03182,2.8025,3.18941,3.09263,4.13573,.60088,1.94143,.17288,3.52892-1.11059,7.2416-1.337,3.88274-2.00956,5.829-2.75848,7.22188-1.74674,3.23705-2.84353,5.2698-5.10474,6.66344l.00005,.00009Z" fill="#f2f2f2"/></g><g><path d="M235.42617,351.84246l26.93263-6.26136,1.93031,5.59503,13.02919-3.51931,8.59337-2.32224,8.34649-16.21378-5.92174-17.16427-17.6339-.16517-5.39217,1.06023-15.04088,2.95875h0c-1.27356,2.10623-.57805,4.84722,1.54567,6.0914l.69671,.40817-21.16155,3.66421s-6.75953,12.02967,4.07587,25.86833Z" fill="#3f3d56"/><polygon points="265.31035 312.85159 277.31829 347.65683 285.91166 345.33458 294.25816 329.1208 288.33642 311.95653 270.70252 311.79136 265.31035 312.85159" fill="#2f2e41"/><ellipse cx="260.38308" cy="312.62416" rx="3.43776" ry="1.71888" transform="translate(-61.41236 63.66451) rotate(-12.48164)" fill="#3f3d56"/></g><g><path d="M683.44244,573.54755l-12.92413-27.31384-.07706,.05597v-35.5014h-11.62479v35.50134l-.077-.05597-12.92413,28.08887c-.38345,.67267-.14899,1.52887,.52368,1.91229,.57031,.32513,1.28983,.211,1.73151-.27466l13.21915-15.46802,2.13943,14.08411c.08524,.76965,.77826,1.32446,1.54788,1.2392,.65213-.0722,1.16696-.58704,1.2392-1.2392l2.11588-13.92908,12.85519,14.53802c.52097,.57281,1.40768,.61487,1.9805,.09387,.48563-.44171,.59979-1.16119,.27469-1.73151Z" fill="#2f2e41"/><path d="M591.12095,470.96295c-2.05826,13.617,27.72426,37.55383,71.63115,44.19055s86.74298-2.94934,88.80127-16.56635-32.07538-27.52386-75.98227-34.16058-82.39188-7.08057-84.45015,6.53638Z" fill="#949494"/><path d="M591.12095,470.96295c-2.05826,13.617,27.72426,37.55383,71.63115,44.19055s86.74298-2.94934,88.80127-16.56635-32.07538-27.52386-75.98227-34.16058-82.39188-7.08057-84.45015,6.53638Z" isolation="isolate" opacity=".3"/><path d="M592.85092,468.97015c-1.69518,11.21478,27.36725,30.46362,71.27411,37.10034s86.18201,1.89398,87.87714-9.3208-32.5242-25.68628-76.43109-32.323-81.02499-6.67133-82.72015,4.54346Z" fill="#949494"/></g><g><path d="M692.27744,302.25219h-164.04688c-6.604,0-11.97656-5.37305-11.97656-11.97656v-124.04688c0-6.60352,5.37256-11.97656,11.97656-11.97656h164.04688c6.604,0,11.97656,5.37305,11.97656,11.97656v124.04688c0,6.60352-5.37256,11.97656-11.97656,11.97656Z" fill="#fff"/><path d="M692.27744,302.25219h-164.04688c-6.604,0-11.97656-5.37305-11.97656-11.97656v-124.04688c0-6.60352,5.37256-11.97656,11.97656-11.97656h164.04688c6.604,0,11.97656,5.37305,11.97656,11.97656v124.04688c0,6.60352-5.37256,11.97656-11.97656,11.97656Zm-164.04688-146c-5.50098,0-9.97656,4.47559-9.97656,9.97656v124.04688c0,5.50098,4.47559,9.97656,9.97656,9.97656h164.04688c5.50098,0,9.97656-4.47559,9.97656-9.97656v-124.04688c0-5.50098-4.47559-9.97656-9.97656-9.97656h-164.04688Z" fill="#3f3d56"/><circle cx="674.25401" cy="166.25219" r="3" fill="#3f3d56"/><circle cx="682.25401" cy="166.25219" r="3" fill="#3f3d56"/><circle cx="690.25401" cy="166.25219" r="3" fill="#3f3d56"/><path d="M533.25401,214.75219c-.82715,0-1.5,.67285-1.5,1.5,0,.40332,.15576,.77637,.43848,1.05176,.28516,.29199,.65869,.44824,1.06152,.44824h155c.82715,0,1.5-.67285,1.5-1.5,0-.40332-.15576-.77637-.43848-1.05176-.28516-.29199-.65869-.44824-1.06152-.44824h-155Z" fill="#e6e6e6"/><path d="M660.25401,214.25219v4h-127c-.54999,0-1.04999-.22003-1.40997-.59003-.37006-.35999-.59003-.85999-.59003-1.40997,0-1.10004,.90002-2,2-2h127Z" fill="#949494"/><path d="M685.75401,206.75219h-20c-2.20557,0-4-1.79395-4-4s1.79443-4,4-4h20c2.20557,0,4,1.79395,4,4s-1.79443,4-4,4Z" fill="#e6e6e6"/><path d="M554.75401,185.75219h-20c-2.20557,0-4-1.79395-4-4s1.79443-4,4-4h20c2.20557,0,4,1.79395,4,4s-1.79443,4-4,4Z" fill="#e6e6e6"/><path d="M533.25401,259.75219c-.82715,0-1.5,.67285-1.5,1.5,0,.40332,.15576,.77637,.43848,1.05176,.28516,.29199,.65869,.44824,1.06152,.44824h155c.82715,0,1.5-.67285,1.5-1.5,0-.40332-.15576-.77637-.43848-1.05176-.28516-.29199-.65869-.44824-1.06152-.44824h-155Z" fill="#e6e6e6"/><path d="M583.25401,259.25219v4h-50c-.54999,0-1.04999-.22003-1.40997-.59003-.37006-.35999-.59003-.85999-.59003-1.40997,0-1.10004,.90002-2,2-2h50Z" fill="#949494"/><path d="M685.75401,251.75219h-20c-2.20557,0-4-1.79395-4-4s1.79443-4,4-4h20c2.20557,0,4,1.79395,4,4s-1.79443,4-4,4Z" fill="#e6e6e6"/></g></g></svg>
                </div>

              </div>

              <div className='w-[100%] gap-5 flex flex-col-reverse md:flex-row justify-center items-center md:p-20  h-auto'>
                <div className='w-[40%]'>
                <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" width="" height="300px" viewBox="0 0 654.23657 682.11354" xmlns:xlink="http://www.w3.org/1999/xlink"><title>mathematics</title><path d="M892.88171,744.55677c0,25.68-138.79,46.5-310,46.5s-310-20.82-310-46.5c0-18.18,69.57-33.93,170.96-41.57,41.81-3.16,89.05-4.93,139.04-4.93,20.55,0,40.63.3,60.05.87C785.40173,703.12678,892.88171,721.95673,892.88171,744.55677Z" transform="translate(-272.88171 -108.94323)" fill="#3f3d56"/><ellipse cx="270" cy="630.61354" rx="119" ry="14.5" opacity="0.1"/><ellipse cx="269.5" cy="521.11354" rx="112.5" ry="120" fill="#3f3d56"/><rect x="235" y="592.11354" width="70" height="64" fill="#949494"/><polygon points="396.5 607.614 392.5 629.614 418.5 633.614 435.5 623.614 434.5 607.614 396.5 607.614" fill="#575a89"/><path d="M538.38171,303.55677s-2,23-7,24,11,41,11,41h24l19-5-9-22s-12-16-3-29S538.38171,303.55677,538.38171,303.55677Z" transform="translate(-272.88171 -108.94323)" fill="#a0616a"/><path d="M538.38171,303.55677s-2,23-7,24,11,41,11,41h24l19-5-9-22s-12-16-3-29S538.38171,303.55677,538.38171,303.55677Z" transform="translate(-272.88171 -108.94323)" opacity="0.1"/><path d="M488.38171,479.55677s-26,50-5,60,26,9,26,12-4,2-2,7-4,25,2,37,4,21,4,21,0,1,2,5,3,7,2,9-7,15-1,18,37,5,40,0-3-8,0-11,5-4,3-6-4-27-4-27,5-29,3-33-5-8-3-11,4-2,5-6,3-13,3-13l11-1,26,5s29,32,61,42c0,0,9,9,12,9s3,0,2,2-4,2-2,4,5-1,3,2-4,3-2,5-1,13-1,14-9,95-6,97,45,8,48,0-2-18-2-18,15-120,11-128-18-44-93-67c0,0-21-4-21-7s-2-22-6-23-27-2-27-2l-29,9-40-7Z" transform="translate(-272.88171 -108.94323)" fill="#2f2e41"/><path d="M523.38171,647.55677l-5,18s-4,29,1,36c3.92739,5.49834,10.93965,12.23063,23.94449,13.4122a16.07115,16.07115,0,0,0,16.77855-11.11774,5.00653,5.00653,0,0,0,.277-1.29446c0-2-3-26-3-26l-5-25-1-7Z" transform="translate(-272.88171 -108.94323)" fill="#2f2e41"/><path d="M669.38171,733.55677s-5-5-6,0-5,26,2,27,74,11,81,7,20-10,12-13-31-12-31-12-13-17-15-18-13,1-18,5S669.38171,733.55677,669.38171,733.55677Z" transform="translate(-272.88171 -108.94323)" fill="#2f2e41"/><circle cx="289.5" cy="184.61354" r="31" fill="#a0616a"/><path d="M559.38171,363.55677l-12-13-13.30147-26s-9.69853-3-11.69853,2-38,21-38,21,9,84,5,92-11,40-5,43,34,0,43,4,35,4,42-1,9-9,16-6c5.95926,2.554,19.89075-84.761,23.90164-110.781a11.844,11.844,0,0,0-4.90807-11.50971c-8.97276-6.29384-25.13277-17.13965-27.99357-15.70925C572.38171,343.55677,559.38171,363.55677,559.38171,363.55677Z" transform="translate(-272.88171 -108.94323)" fill="#575a89"/><path d="M602.38171,359.55677h0a11.85952,11.85952,0,0,1,8.91063,10.19577l8.08936,72.80423s-20,43-30,14S602.38171,359.55677,602.38171,359.55677Z" transform="translate(-272.88171 -108.94323)" fill="#575a89"/><path d="M600.38171,449.55677l22-6s4,28,8,28-14,16-23,14-22-9-23-14,9-26,9-26Z" transform="translate(-272.88171 -108.94323)" fill="#575a89"/><path d="M538.98,306.92974c2.10792-4.648,1.74193-10.06966,3.48463-14.86653a17.72716,17.72716,0,0,1,26.95315-8.38071c2.24178,1.59841,4.48928,3.84417,7.22559,3.539,2.94671-.32859,5.575-3.61593,8.2842-2.41116,3.00277,1.33533,2.19174,6.71676,5.23391,7.95972,1.6013.65426,3.49355-.35311,4.41715-1.8157a11.2246,11.2246,0,0,0,1.28583-4.97622c.41976-4.26508.79909-8.779-1.05062-12.64493a30.28893,30.28893,0,0,1-2.02829-4.08992,13.99385,13.99385,0,0,1-.38561-4.03439c-.01689-5.01309-.38281-10.24215-2.90568-14.57417-2.79955-4.80711-7.97447-7.881-13.37326-9.22227s-11.055-1.13561-16.59807-.66635c-9.16324.77574-18.71927,2.43858-25.93856,8.135a10.14728,10.14728,0,0,0-2.49336,2.61953,13.525,13.525,0,0,0-1.32811,3.84148,79.44958,79.44958,0,0,1-6.96764,18.27716,39.65627,39.65627,0,0,0-3.59543,7.76544c-.76559,2.75442-.71387,5.89343.8887,8.26085,1.30475,1.92745,3.39065,2.95463,5.02945,4.53044,1.62387,1.56146,2.38368,4.56438,4.18252,5.74673,1.57033,1.03215,3.4513.30356,5.0529,1.39752C536.40966,302.72479,536.55818,305.80443,538.98,306.92974Z" transform="translate(-272.88171 -108.94323)" fill="#2f2e41"/><path d="M564.38171,378.55677l3-6s44,13,53,25c0,0,22-14,34-12l12,2-37,33-47-4Z" transform="translate(-272.88171 -108.94323)" fill="#f2f2f2"/><path d="M562.38171,372.55677l-41,57,59,29s5.51572,3,9.75786,0l39.24214-18,37-53-37,19s-4-8-12-4Z" transform="translate(-272.88171 -108.94323)" fill="#949494"/><path d="M625.38171,473.55677l8-21s18-23,8-34-21,32-21,32Z" transform="translate(-272.88171 -108.94323)" fill="#a0616a"/><path d="M533.07939,470.20556l17.45624-14.152s27.11-10.865,23.97851-25.39746-34.22053,17.14513-34.22053,17.14513Z" transform="translate(-272.88171 -108.94323)" fill="#a0616a"/><path d="M489.88171,369.05677h-1s-15.5-18.5-18.5,6.5-13,108,13,111,44.5-12.5,44.5-12.5,19-29,12-29c-3.38691,0-12.59835-1.52116-21-1-8.96272.556-17.01615,3.08078-16.5.5C503.38171,439.55677,517.88171,376.05677,489.88171,369.05677Z" transform="translate(-272.88171 -108.94323)" opacity="0.1"/><path d="M488.38171,349.55677l-4-2s-16,3-19,28-13,108,13,111,61-4,61-4,7-38,0-38-43,5-42,0S516.38171,356.55677,488.38171,349.55677Z" transform="translate(-272.88171 -108.94323)" fill="#575a89"/><polygon points="338 353.114 349.027 336.213 356 364.114 338 372.114 338 353.114" fill="#575a89"/><circle cx="111.47314" cy="85.11354" r="27" fill="#f2f2f2"/><rect x="79.47314" y="286.11354" width="64" height="64" fill="#f2f2f2"/><polygon points="372 0 388.199 28.057 404.397 56.114 372 56.114 339.603 56.114 355.801 28.057 372 0" fill="#f2f2f2"/><path d="M927.11829,277.17226q-.58078,17.95539-8.74513,28.78352-8.16571,10.82931-19.40145,10.83029-9.15176,0-16.04242-10.59861-6.89283-10.5984-6.892-32.60592,0-4.8648.23169-9.26642.23089-4.40064.57921-8.33968l4.05409-38.108H854.14538Q847.196,290.14515,842.73627,303.871q-4.46013,13.72556-15.11568,13.726a12.78019,12.78019,0,0,1-8.57155-3.59073,12.06434,12.06434,0,0,1-4.0541-9.4983q0-5.326,8.3976-14.884,8.39721-9.55611,9.32434-17.43233l6.94976-54.32423H828.43149a19.9108,19.9108,0,0,0-9.09265,2.25854,17.15586,17.15586,0,0,0-6.54451,5.27024l-4.98084,7.41313H803.7594q5.67412-17.6052,13.95764-26.46706,8.28-8.86106,19.05393-8.861H925.2652v20.38611H895.381q-1.39011,13.89963-2.14289,27.799-.75455,13.89963-.75278,27.9151,0,9.499,4.40162,15.40548,4.40064,5.90738,11.00386,5.90718,4.05312,0,8.51344-3.30132a11.97,11.97,0,0,0,5.03856-8.62908q.34754-2.54667.52109-3.99618.17377-1.44695.174-1.79536Z" transform="translate(-272.88171 -108.94323)" fill="#949494"/><path d="M927.11829,277.17226q-.58078,17.95539-8.74513,28.78352-8.16571,10.82931-19.40145,10.83029-9.15176,0-16.04242-10.59861-6.89283-10.5984-6.892-32.60592,0-4.8648.23169-9.26642.23089-4.40064.57921-8.33968l4.05409-38.108H854.14538Q847.196,290.14515,842.73627,303.871q-4.46013,13.72556-15.11568,13.726a12.78019,12.78019,0,0,1-8.57155-3.59073,12.06434,12.06434,0,0,1-4.0541-9.4983q0-5.326,8.3976-14.884,8.39721-9.55611,9.32434-17.43233l6.94976-54.32423H828.43149a19.9108,19.9108,0,0,0-9.09265,2.25854,17.15586,17.15586,0,0,0-6.54451,5.27024l-4.98084,7.41313H803.7594q5.67412-17.6052,13.95764-26.46706,8.28-8.86106,19.05393-8.861H925.2652v20.38611H895.381q-1.39011,13.89963-2.14289,27.799-.75455,13.89963-.75278,27.9151,0,9.499,4.40162,15.40548,4.40064,5.90738,11.00386,5.90718,4.05312,0,8.51344-3.30132a11.97,11.97,0,0,0,5.03856-8.62908q.34754-2.54667.52109-3.99618.17377-1.44695.174-1.79536Z" transform="translate(-272.88171 -108.94323)" opacity="0.1"/><path d="M927.11829,273.55326q-.58078,17.95539-8.74513,28.78352-8.16571,10.82931-19.40145,10.83029-9.15176,0-16.04242-10.5986-6.89283-10.59841-6.892-32.60593,0-4.8648.23169-9.26642.23089-4.40064.57921-8.33967l4.05409-38.10806H854.14538Q847.196,286.52615,842.73627,300.252q-4.46013,13.72557-15.11568,13.726a12.78019,12.78019,0,0,1-8.57155-3.59073,12.06432,12.06432,0,0,1-4.0541-9.49829q0-5.326,8.3976-14.884,8.39721-9.55612,9.32434-17.43233l6.94976-54.32424H828.43149a19.9108,19.9108,0,0,0-9.09265,2.25854,17.15586,17.15586,0,0,0-6.54451,5.27024l-4.98084,7.41314H803.7594q5.67412-17.60522,13.95764-26.46706,8.28-8.86107,19.05393-8.861H925.2652v20.38611H895.381q-1.39011,13.89963-2.14289,27.79906-.75455,13.89962-.75278,27.91509,0,9.499,4.40162,15.40548,4.40064,5.90738,11.00386,5.90718,4.05312,0,8.51344-3.30132a11.97,11.97,0,0,0,5.03856-8.62908q.34754-2.54667.52109-3.99617.17377-1.447.174-1.79537Z" transform="translate(-272.88171 -108.94323)" fill="#949494"/></svg>
                </div>
                  <Education />
              </div>

              <div className='flex flex-col gap-10 items-center justify-center'>
              <NavLink className="text-3xl font-bold transition-all" to='/work'>Work</NavLink>

                <div className='flex flex-col md:flex-row gap-10 items-center p-5 justify-center'>
                   <Project name="Opinions - thoughts sharing platform" url="https://cdn.dribbble.com/userupload/14409217/file/original-3c40ee594b8a69ac9649fdb20d5a78e0.png?resize=1024x1169" link="https://share-opinions.vercel.app/"  />

              <Project name="Dattayog Farmers PVT. LTD. website" url="https://cdn.dribbble.com/userupload/14492789/file/original-b1a6d1d27b44bb8f7e98ee8ab1afbb0e.png?resize=1299x1180" link="https://dattayog-website-deploy-test.vercel.app/"  />
                </div>
             
              </div>

              </Fade>
        </div>
       
    </div>
  )
}

export default About
