import React,{use} from 'react';
import type { ITech } from '../../types/tech';

interface TechProps {
    techPromise: Promise<ITech[]>;
}

const Tech = ({ techPromise }: TechProps) => {
  
    const tech = use(techPromise);

    return (
          <div className="container mx-auto flex flex-col">
            
                <h5>Explore the Technologies</h5>
                <p>Pick one technology per category to build your ideal stack.</p>

            
            <div>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
                            {tech.map((item) => {
                                return  (
                                    <div className="tech-card flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-5 max-w-xs">
                                        <div className="flex items-start justify-between">
                                            <img
                                                src={item.icon}
                                                alt={item.name}
                                                width="30"
                                                height="30"
                                                
                                            />
                                            <span className="rounded-full px-3 py-1 text-xs font-medium bg-sky-50 text-sky-600">
                                                {item.badge}
                                            </span>
                                        </div>

                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold text-slate-900">{item.name}</h3>
                                            <p className="mt-1 text-sm leading-relaxed text-slate-500">
                                                {item.description}
                                            </p>
                                        </div>

                                        <div className="flex flex-wrap items-center gap-3 text-sm">
                                            <span className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                                                {item.category}
                                            </span>
                                            <span className="text-slate-500">{item.difficulty}</span>
                                            <span className="ml-auto flex items-center gap-1 font-medium text-slate-700">
                                                <svg width="13" height="13" viewBox="0 0 24 24" fill="#f5a623">
                                                    <path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.86L12 17.77l-6.18 3.23L7 14.14 2 9.27l7.1-1.01L12 2z" />
                                                </svg>
                                                {item.rating}
                                            </span>
                                        </div>
                                        <button className="btn btn-neutral">Add to Stack</button>
                                    </div>
                                );
                            })}
                        </div>
                        <div>

                        </div>

            </div>
            
               
            </div>
        
    );
};

export default Tech;