import React from 'react';
import { DoorConfigurator } from '../components/DoorConfigurator';

interface ConfiguratorPageProps {
  onOpenQuoteModal: (config?: any) => void;
}

export const ConfiguratorPage: React.FC<ConfiguratorPageProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <DoorConfigurator onQuoteGenerated={(config) => onOpenQuoteModal(config)} />
    </div>
  );
};
