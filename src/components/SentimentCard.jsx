import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import clsx from 'clsx';

const SentimentCard = ({ title, score, delta, icon: Icon }) => {
    const isPositive = delta > 0;
    const isNeutral = delta === 0;

    return (
        <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 p-5 rounded-xl hover:shadow-md transition-all hover:border-brand-200 dark:hover:border-zinc-700">
            <div className="flex justify-between items-start mb-3">
                <span className="text-slate-500 dark:text-zinc-400 text-sm font-medium">{title}</span>
                {Icon && <Icon className="text-brand-500 dark:text-brand-400 w-5 h-5" />}
            </div>

            <div className="flex items-end gap-3">
                <div className="text-3xl font-bold text-slate-900 dark:text-white">{score}%</div>
                <div className={clsx(
                    "flex items-center gap-1 text-sm font-medium mb-1",
                    isPositive ? "text-emerald-600 dark:text-emerald-400" :
                        isNeutral ? "text-slate-500 dark:text-zinc-400" :
                            "text-rose-600 dark:text-rose-400"
                )}>
                    {isPositive ? <TrendingUp className="w-4 h-4" /> :
                        isNeutral ? <Minus className="w-4 h-4" /> :
                            <TrendingDown className="w-4 h-4" />}
                    <span>{Math.abs(delta)}%</span>
                </div>
            </div>
            <div className="text-xs text-slate-400 dark:text-zinc-500 mt-2">vs. previous period</div>
        </div>
    );
};

export default SentimentCard;
