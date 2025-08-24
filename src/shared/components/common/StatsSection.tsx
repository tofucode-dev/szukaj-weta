import React from 'react';
import { Users, Heart, Star, Shield } from 'lucide-react';

const stats = [
  { icon: Users, value: '1000+', label: 'Weterynarzy', color: 'text-blue-600', bg: 'bg-blue-100' },
  {
    icon: Heart,
    value: '50+',
    label: 'Specjalizacji',
    color: 'text-green-600',
    bg: 'bg-green-100',
  },
  { icon: Star, value: '15k+', label: 'Opinii', color: 'text-yellow-600', bg: 'bg-yellow-100' },
  {
    icon: Shield,
    value: '100%',
    label: 'Zweryfikowani',
    color: 'text-purple-600',
    bg: 'bg-purple-100',
  },
];

export function StatsSection() {
  return (
    <div className="bg-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map(({ icon: Icon, value, label, color, bg }) => (
            <div key={label}>
              <div className="flex justify-center mb-4">
                <div className={`p-3 ${bg} rounded-full`}>
                  <Icon className={`h-8 w-8 ${color}`} />
                </div>
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{value}</div>
              <div className="text-muted-foreground">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
