"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
export default function CardQuatro() {
  return (
    <Card
      variant="outlined"
      sx={{ maxWidth: 1000, maxHeight: 1000 }}
      className="bg-fuchsia-200 rounded-xl"
    >
      <Box sx={{ p: 2 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography gutterBottom variant="h5" component="div">
            <Image
              src="https://www.beholistic.pt/wp-content/uploads/2013/10/ventosas.jpg"
              alt="Massagem com ventosas"
              title="Massagem com ventosas"
              className=" rounded-xl"
              height={683}
              width={1000}
              style={{
                objectFit: "cover",
                objectPosition: "center",
                width: "100%",
                height: "15rem",
              }}
            />
          </Typography>
        </Stack>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Massagem com ventosas</AccordionTrigger>
            <AccordionContent>
              A ventosaterapia é uma técnica de medicina alternativa que envolve
              o uso de copos de vidro ou plástico para criar vácuo na pele e,
              assim, aumentar o fluxo sanguíneo para uma determinada área do
              corpo, estimula o aumento de trocas metabólicas entre o sangue e
              as células, além de eliminar as toxinas da pele.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }} className="flex items-center justify-between">
        <Typography variant="body2">
          <Link
            href="https://wa.me/+558599185575?text=Olá, Amanda gostaria de agendar Ventosaterapia!"
            target="_blank"
          >
            <Button className=" bg-fuchsia-900 w-full">Contate-me</Button>
          </Link>
        </Typography>
        <Stack direction="row" spacing={1}>
          R$: 100,00
        </Stack>
      </Box>
    </Card>
  );
}
