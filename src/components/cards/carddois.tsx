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
export default function CardDois() {
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
              src="https://th.bing.com/th/id/R.f08dbcbcc11a8888ff859ba5aa9689a4?rik=lO%2brQIWzu%2fGkEg&riu=http%3a%2f%2f4.bp.blogspot.com%2f-KwMn71y_2_k%2fVRsEYLTBljI%2fAAAAAAAAATM%2fqUmDEPQ2pog%2fs1600%2fheadmassage4.jpg&ehk=Cqy%2fD7QZpYQkPhikVa6NdB7%2bDoU%2f%2fTCuUm3gxuee29Y%3d&risl=&pid=ImgRaw&r=0" // Use a URL da imagem passada como propriedade
              alt="Massagem relaxante"
              title="Massagem relaxante"
              height={683}
              width={1000}
              className="rounded-xl"
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
            <AccordionTrigger>Massagem relaxante</AccordionTrigger>
            <AccordionContent>
              A massagem relaxante é uma técnica terapêutica que visa
              proporcionar relaxamento físico e mental, alívio do estresse e
              tensões musculares. Ela utiliza movimentos suaves, firmes e
              ritmados, aplicados de forma sequencial em todo o corpo, com o
              objetivo de promover o bem-estar geral.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }} className="flex items-center justify-between">
        <Typography variant="body2">
          <Link
            href="https://wa.me/+558599185575?text=Olá, Amanda gostaria de agendar massagem relaxante!"
            target="_blank"
          >
            <Button className=" bg-fuchsia-900 w-full">Contate-me</Button>
          </Link>
        </Typography>
        <Stack direction="row" spacing={1}>
          R$: 80,00
        </Stack>
      </Box>
    </Card>
  );
}
