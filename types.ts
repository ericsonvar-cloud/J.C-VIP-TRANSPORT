
export type Language = 'es' | 'en';

export interface Mission {
  id: string;
  title: string;
  description: string;
  icon: string;
  illustrationUrl: string;
  url?: string;
}

export interface Level {
  level: number;
  title: string;
  subtitle: string;
  missions: Mission[];
  specialAchievement?: string;
  bonus?: string;
  rewardPrefix?: string;
}

export interface Mode {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface InventoryItem {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface Translation {
  navHome: string;
  navLevels: string;
  navModes: string;
  navPlanner: string;
  navSubtitle: string;
  heroPresenter: string;
  heroTitle: string;
  heroSubtitle: string;
  heroCta: string;
  levelPrefix: string;
  achievementPrefix: string;
  bonusPrefix: string;
  rewardPrefix: string;
  customizeTitle: string;
  customizeSubtitle: string;
  inventoryTitle: string;
  inventorySubtitle: string;
  finalLootTitle: string;
  finalLootText: string;
  footerTagline: string;
  aiPlannerTitle: string;
  aiPlannerPlaceholder: string;
  aiPlannerButton: string;
  aiPlannerLoading: string;
  contactName: string;
  servicesTagline: string;
  qrCatalog: string;
  qrWhatsapp: string;
  paymentTitle: string;
}
