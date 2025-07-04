import React, { useEffect, useState } from 'react';
import { Plant, CareAction } from '../../types/plants';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Check } from 'lucide-react';
import { usePlants } from '../../context/PlantsContext';
import { useNavigate } from 'react-router-dom';
import { useTranslatedPlant } from '../../hooks/useTranslatedPlant';
import { useTranslation } from 'react-i18next';

interface PlantActionCardProps {
  plant: Plant;
  actions: CareAction[];
  completed: number;
  onComplete: (count: number) => void;
}

const PlantActionCard: React.FC<PlantActionCardProps> = ({
  plant,
  actions,
  completed,
  onComplete,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [localCompleted, setLocalCompleted] = useState<string[]>([]);
  const navigate = useNavigate();
  const { translatePlant } = useTranslatedPlant();
  const { t } = useTranslation();

  const translatedPlant = translatePlant(plant);
  const todayKey = `plant-${plant.id}-completed-${new Date().toLocaleDateString()}`;

  useEffect(() => {
    const stored = localStorage.getItem(todayKey);
    if (stored) setLocalCompleted(JSON.parse(stored));
  }, [todayKey]);

  const handleActionClick = (actionId: string) => {
    if (localCompleted.includes(actionId)) return;
    const updated = [...localCompleted, actionId];
    setLocalCompleted(updated);
    localStorage.setItem(todayKey, JSON.stringify(updated));
    onComplete(updated.length);
  };

  const total = actions.length;
  const done = localCompleted.length;
  const allDone = done === total && total > 0;

  const getTranslatedActionName = (actionId: string) => {
    return t(`tasks.${actionId}`, actionId);
  };

  const getTranslatedActionDescription = (actionId: string) => {
    return t(`tasks.${actionId}Description`, `${actionId} description`);
  };

  return (
    <motion.div
      className="card overflow-hidden mb-4"
      layout
      transition={{ duration: 0.3 }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex items-center cursor-pointer p-4">
        <div className="flex-grow">
          <h3 className="font-semibold text-lg">{translatedPlant.name}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {done}/{total} {allDone ? t('common.complete') : t('common.incomplete')}
          </p>
        </div>
        <button onClick={e => { e.stopPropagation(); setIsExpanded(!isExpanded); }}>
          {isExpanded ? <ChevronUp /> : <ChevronDown />}
        </button>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="px-4 pb-4"
          >
            {actions.map(action => {
              const isDone = localCompleted.includes(action.id);
              return (
                <div 
                  key={action.id}
                  className={`p-3 rounded mb-2 flex justify-between items-center ${
                    isDone ? 'bg-green-50 border border-green-100 dark:bg-green-900/20 dark:border-green-800' : 'bg-gray-50 border border-gray-200 dark:bg-gray-700 dark:border-gray-600'
                  }`}
                >
                  <div>
                    <h4 className={`font-medium ${isDone ? 'text-green-800 dark:text-green-200' : 'text-gray-800 dark:text-gray-200'}`}>
                      {getTranslatedActionName(action.id)}
                    </h4>
                    <p className={`text-sm ${isDone ? 'text-green-600 dark:text-green-300' : 'text-gray-600 dark:text-gray-400'}`}>
                      {getTranslatedActionDescription(action.id)}
                    </p>
                  </div>
                  {!isDone ? (
                    <button
                      className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 dark:bg-blue-900 dark:hover:bg-blue-800"
                      onClick={(e) => { e.stopPropagation(); handleActionClick(action.id); }}
                      aria-label={t('tasks.markComplete')}
                    >
                      <Check />
                    </button>
                  ) : (
                    <span className="text-green-600 dark:text-green-400 text-sm font-medium">
                      {t('tasks.completed')}
                    </span>
                  )}
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default PlantActionCard;