import {use, useState} from 'react';
import type { ITech } from '../../types/tech';
import YourStack from './YousStack';
import { toast } from "react-toastify";
interface TechProps {
    techPromise: Promise<ITech[]>;
}

const Tech = ({ techPromise }: TechProps) => {
  
    const tech = use(techPromise);

    const[stack, setStack] = useState<ITech[]>([]);


    const isInStack = (id: string):boolean =>
        stack.some((item) => item.id === id);

    const addToStack = (item: ITech) => {
        if (isInStack(item.id)) return; 
        setStack((prev) => [...prev, item]);
    };

    const removeFromStack = (id: string) => {
        setStack((prev) => prev.filter((item) => item.id !== id));
    };
    const removeAll = () => setStack([]);
    return (
        <div className="container mx-auto mt-10 sm:px-6 lg:px-8">
            
                <h5 className="text-2xl font-bold text-slate-900">
                    Explore the <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">Technologies</span>
                </h5>
                <p>Pick one technology per category to build your ideal stack.</p>

            
            <div className="container grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
                        <div className="my-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 ">
                            {tech.map((item) => {
                                const selected = isInStack(item.id);
                                return  (
                                    
                                    <div key={item.id} className="tech-card flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-5 max-w-xs hover:shadow-lg transition-shadow">
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

                                        <button
                                            onClick={() => {
                                                addToStack(item);
                                                toast.success(`${item.name} added to stack`, {
                                                    position: "top-right",
                                                    autoClose: 2200,
                                                });
                                            }}
                                            disabled={selected}
                                            className={`btn ${
                                                selected
                                                    ? 'cursor-not-allowed border border-emerald-200 bg-emerald-50 text-emerald-600'
                                                    : 'btn-neutral'
                                            }`}
                                        >
                                            {selected ? '✓ Added to Stack' : 'Add to Stack'}
                                        </button>
                                    </div>
                                );
                            })}
                        </div>


                        <div className="lg:col-span-1">
                            <YourStack stack={stack} onRemove={removeFromStack} onRemoveAll={removeAll} />


                        </div>

            </div>
            
               
        </div>
        
    );
};

export default Tech;