import React from 'react';
import type { ITech } from '../../types/tech';


interface YourStackProps {
    stack: ITech[];
    onRemove: (id: string) => void;
    onRemoveAll: () => void;
}
const YourStack = ({ stack, onRemove, onRemoveAll }: YourStackProps) => {
    return (
        <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="text-base font-semibold text-slate-900">Your Stack</h3>
            <p className="mt-1 text-sm text-slate-500">
                {stack.length} Technology Selected
            </p>
            

            {stack.length===0 ? (
                <div className="mt-4 flex h-28 items-center justify-center rounded-lg border border-dashed border-slate-300 text-sm text-slate-400">
                    No technologies selected yet.
                </div>
            ) : (
                <ul className="mt-4 flex flex-col gap-2">
                    {stack.map((item) => (
                        <li
                            key={item.id}
                            className="flex items-center justify-between gap-2 rounded-lg border border-slate-200 px-3 py-2"
                        >
                            <div className="flex items-center gap-2">
                                <img src={item.icon} alt={item.name} width="22" height="22" />
                                <div>
                                    <div className="text-sm font-medium text-slate-800">{item.name}</div>
                                    <div className="text-xs text-slate-400">{item.category}</div>
                                </div>
                            </div>
                            <button
                                onClick={() => onRemove(item.id)}
                                className="text-slate-400 hover:text-slate-700"
                                aria-label={`Remove ${item.name}`}
                            >
                                ✕
                            </button>
                        </li>
                    ))}
                </ul>
            )}

            {stack.length > 0 && (
                <button
                    onClick={onRemoveAll}
                    className="mt-4 w-full rounded-lg border border-red-200 py-2 text-sm font-medium text-red-500 hover:bg-red-50"
                >
                    Remove All
                </button>
            )}
        </div>
    );
};

export default YourStack;