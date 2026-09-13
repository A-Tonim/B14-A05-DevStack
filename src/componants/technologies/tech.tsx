import React,{use} from 'react';
import type { ITech } from '../../types/tech';

interface TechProps {
    techPromise: Promise<ITech[]>;
}

const Tech = ({ techPromise }: TechProps) => {
    console.log(techPromise);
    const tech = use(techPromise);

    return 
        <div>
            
        </div>
    ;
};

export default Tech;