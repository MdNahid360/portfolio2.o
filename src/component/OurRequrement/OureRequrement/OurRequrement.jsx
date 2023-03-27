import React from 'react';
import vc1 from '../../../Assctes/vectors/1.png'
import vc2 from '../../../Assctes/vectors/2.png'
import vc3 from '../../../Assctes/vectors/3.png'
import vc4 from '../../../Assctes/vectors/4.png'
import vc5 from '../../../Assctes/vectors/5.png'
import vc6 from '../../../Assctes/vectors/6.png'
import vc7 from '../../../Assctes/vectors/7.png'
const OurRequrement = () => {
    return (
        <div className="text-white common-bg py-[96px]">
            <div className="requirement-box  bg-right-top">
                <div className="md:w-[85%] w-[98%] mx-auto">
                     <h1 className="text-xl  font-bold relative after:absolute after:left-0 after:right-0 after:bottom-[-18px] after:w-[60px] after:rounded-full after:h-[6px] after:bg-[#0095ff] after:mx-auto text-center">How We Develop <span className="shadow-tx">Software</span></h1>
                    
                    <div className="md:grid grid-cols-2 mt-8 ">
                        <div className="h-full flex items-center md:mt-0 mt-16">
                            <div className='w-full'>
                                <h2 className="font-bold md:text-6xl text-4xl md:text-left text-center">Requirements</h2>
                                <p className="mt-5 text-xl md:text-left text-center text-gray-400">
                                    Gather and <br />
                                    document project requirements.
                                </p>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-3 grid-cols-2 md:px-12">
                              <div align="center" className="mt-10 ">
                                     <div className="w-[100px] h-[100px] rounded-xl bg-[#1e2a31a3] duration-200  common-hover-shadow cursor-pointer flex items-center justify-center">
                                        <img src={vc1} alt="" className="vc-img" />
                                     </div>
                                     <p className='mt-3'>Requirement</p>
                               </div>
                              <div align="center" className="mt-10 ">
                                     <div className="w-[100px] h-[100px] rounded-xl bg-[#1e2a31a3] duration-200  common-hover-shadow cursor-pointer flex items-center justify-center">
                                        <img src={vc2} alt="" className="vc-img" />
                                     </div>
                                     <p className='mt-3'>Analysis</p>
                               </div>
                              <div align="center" className="mt-10 ">
                                     <div className="w-[100px] h-[100px] rounded-xl bg-[#1e2a31a3] duration-200  common-hover-shadow cursor-pointer flex items-center justify-center">
                                        <img src={vc3} alt="" className="vc-img" />
                                     </div>
                                     <p className='mt-3'>Design</p>
                               </div>
                              <div align="center" className="mt-10 ">
                                     <div className="w-[100px] h-[100px] rounded-xl bg-[#1e2a31a3] duration-200  common-hover-shadow cursor-pointer flex items-center justify-center">
                                        <img src={vc4} alt="" className="vc-img" />
                                     </div>
                                     <p className='mt-3'>Coding</p>
                               </div>
                              <div align="center" className="mt-10 ">
                                     <div className="w-[100px] h-[100px] rounded-xl bg-[#1e2a31a3] duration-200  common-hover-shadow cursor-pointer flex items-center justify-center">
                                        <img src={vc5} alt="" className="vc-img" />
                                     </div>
                                     <p className='mt-3'>Testing</p>
                               </div>
                              <div align="center" className="mt-10 ">
                                     <div className="w-[100px] h-[100px] rounded-xl bg-[#1e2a31a3] duration-200  common-hover-shadow cursor-pointer flex items-center justify-center">
                                        <img src={vc6} alt="" className="vc-img" />
                                     </div>
                                     <p className='mt-3'>Deployment</p>
                               </div>
                              <div align="center" className="mt-10 ">
                                     <div className="w-[100px] h-[100px] rounded-xl bg-[#1e2a31a3] duration-200  common-hover-shadow cursor-pointer flex items-center justify-center">
                                        <img src={vc7} alt="" className="vc-img" />
                                     </div>
                                     <p className='mt-3'>Maintenance</p>
                               </div>
                               
                            
                        </div>
                    </div>
                </div>
            </div>
         
        </div>
    );
};

export default OurRequrement;