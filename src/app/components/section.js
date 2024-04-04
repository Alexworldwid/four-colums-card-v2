import Image from 'next/image';
import React from 'react';
import supervisor from "../../../public/images/icon-supervisor.svg";
import Team from "../../../public/images/icon-team-builder.svg";
import Karma from "../../../public/images/icon-karma.svg";
import Calculator from "../../../public/images/icon-calculator.svg";
import Link from 'next/link';

export default function Section() {
    return (
        <section> 
            <div className='supervisor'>
                <Link href="/supervisor" >
                    <h3>Supervisor</h3>
                    <p>Monitors activity to identify project roadblocks</p>
                    <div className='img-container'>
                        <Image className=" text-right" src={supervisor} quality={100} width={50} height={30} alt='supervisor-icon' />
                    </div>      
                </ Link>
            </div>

            
            <div className='team'>
                <Link href="/team-builder">
                    <h3>Team Builder</h3>
                    <p>Scans our talent network to create the optimal team for your project</p>
                    <div className='img-container'>
                        <Image src={Team} quality={60} width={50} height={60} alt='team-icon' />
                    </div>
                </Link>
            </div>

            
            <div className='karma'>
                <Link href="/karma">
                    <h3>Karma</h3>
                    <p>Regularly evaluates our talent to ensure quality</p>
                    <div className='img-container'>
                        <Image src={Karma}quality={60} width={50} height={60} alt='karma-icon' />
                    </div>
                </Link>
            </div>

            
            <div className='calculator'>
                <Link href="/calculator">
                    <h3>Calculator</h3>
                    <p>Uses data from past projects to provide better delivery estimates</p>
                    <div className='img-container'>
                    <Image src={Calculator} quality={60} width={50} height={60} alt='calculator-icon' />
                </div>
                
                </Link>
            </div>
        </section>
    );
};

