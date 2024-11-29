import { LucideIcon } from "lucide-react"

export interface StatusBadgeProps {
  icon: LucideIcon;
  label?: string;
  value: string;
  color: 'blue' | 'green' | 'purple' | 'orange';
  pulse?: boolean;
}

export interface MetricCardProps {
  icon: LucideIcon;
  label: string;
  value: number;
  color: string;
  isDark: boolean;
}

export interface StatCardProps {
  stat: {
    title: string;
    value: string;
    change: string;
    changeText: string;
    icon: LucideIcon;
    color: string;
    gradient: string;
  };
  index: number;
  isDark: boolean;
} 