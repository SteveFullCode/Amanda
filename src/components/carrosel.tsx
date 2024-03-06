"use client";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CardUm from "./cards/cardum";
import CardDois from "@/components/cards/carddois";
import CardTres from "@/components/cards/cardtrs";
import CardQuatro from "@/components/cards/cardqua";
import CardCinco from "@/components/cards/cardcin";
import CardSeis from "@/components/cards/cardsei";
import CardSete from "./cards/cardsete";
import CardOito from "./cards/cartdoito";

export function CarouselSpacing() {
  const cardComponents: JSX.Element[] = [
    <CardUm key="card1" />,
    <CardDois key="card2" />,
    <CardTres key="card3" />,
    <CardQuatro key="card4" />,
    <CardCinco key="card5" />,
    <CardSeis key="card6" />,
    <CardSete key="card7" />,
    <CardOito key="card8" />,
  ];

  return (
    <Carousel className="w-full md:max-w-8xl pb-4">
      <CarouselContent className="-ml-1">
        {cardComponents.map((cardComponent, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-2">
                  {cardComponent}
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
