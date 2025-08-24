import React from 'react';
import { Search, Star, Heart } from 'lucide-react';
import { Card, CardContent } from '@/ui/card';

const steps = [
  {
    icon: Search,
    title: '1. Szukaj',
    description:
      'Wpisz specjalizację i lokalizację. Znajdziemy najlepszych specjalistów w Twojej okolicy.',
    color: 'text-blue-600',
    bg: 'bg-blue-100',
  },
  {
    icon: Star,
    title: '2. Porównuj',
    description:
      'Sprawdź profile, opinie pacjentów i specjalizacje. Wybierz idealnego weterynarza.',
    color: 'text-green-600',
    bg: 'bg-green-100',
  },
  {
    icon: Heart,
    title: '3. Umów wizytę',
    description:
      'Skontaktuj się bezpośrednio z wybranym specjalistą i zadbaj o zdrowie swojego pupila.',
    color: 'text-purple-600',
    bg: 'bg-purple-100',
  },
];

export function HowItWorksSection() {
  return (
    <div className="bg-muted/20 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Jak to działa?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Znajdź idealnego weterynarza specjalistę w trzech prostych krokach
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map(({ icon: Icon, title, description, color, bg }) => (
            <Card key={title} className="text-center border-0 shadow-md">
              <CardContent className="p-6">
                <div
                  className={`${bg} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <Icon className={`h-8 w-8 ${color}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
                <p className="text-muted-foreground">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
