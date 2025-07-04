import { useTranslation } from 'react-i18next';
import { Plant, UserPlant } from '../types/plants';

export const useTranslatedPlant = () => {
  const { t } = useTranslation();

  const translatePlant = (plant: Plant | UserPlant): Plant | UserPlant => {
    // Safely get translated values with proper fallbacks
    const getName = () => {
      try {
        const translated = t(`plants.names.${plant.id}`);
        return typeof translated === 'string' && translated !== `plants.names.${plant.id}` ? translated : plant.name;
      } catch {
        return plant.name;
      }
    };

    const getDescription = () => {
      try {
        const translated = t(`plants.descriptions.${plant.id}`);
        return typeof translated === 'string' && translated !== `plants.descriptions.${plant.id}` ? translated : plant.description;
      } catch {
        return plant.description;
      }
    };

    const getCareInstructions = () => {
      try {
        const translated = t(`plants.careInstructions.${plant.id}`);
        return typeof translated === 'string' && translated !== `plants.careInstructions.${plant.id}` ? translated : plant.careInstructions;
      } catch {
        return plant.careInstructions;
      }
    };

    const getFertilizer = () => {
      try {
        // Clean the fertilizer key for translation lookup
        const cleanKey = plant.fertilizer.toLowerCase().replace(/[^a-zA-Z0-9]/g, '-');
        const translated = t(`plants.fertilizers.${cleanKey}`);
        return typeof translated === 'string' && translated !== `plants.fertilizers.${cleanKey}` ? translated : plant.fertilizer;
      } catch {
        return plant.fertilizer;
      }
    };

    const getWateringFrequency = () => {
      try {
        const translated = t(`plants.wateringFrequency.${plant.wateringFrequency}`);
        return typeof translated === 'string' && translated !== `plants.wateringFrequency.${plant.wateringFrequency}` ? translated : plant.wateringFrequency;
      } catch {
        return plant.wateringFrequency;
      }
    };

    const getLightPreference = () => {
      try {
        // Clean the light preference key for translation lookup
        const cleanKey = plant.lightPreference.toLowerCase().replace(/\s+/g, '-');
        const translated = t(`plants.lightPreference.${cleanKey}`);
        return typeof translated === 'string' && translated !== `plants.lightPreference.${cleanKey}` ? translated : plant.lightPreference;
      } catch {
        return plant.lightPreference;
      }
    };

    return {
      ...plant,
      name: getName(),
      description: getDescription(),
      careInstructions: getCareInstructions(),
      fertilizer: getFertilizer(),
      wateringFrequency: getWateringFrequency() as any,
      lightPreference: getLightPreference() as any,
    };
  };

  const translatePlants = (plants: (Plant | UserPlant)[]): (Plant | UserPlant)[] => {
    return plants.map(translatePlant);
  };

  return {
    translatePlant,
    translatePlants,
  };
};