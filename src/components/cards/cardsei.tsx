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
              src="https://th.bing.com/th/id/R.64b23d42c4319f2410b65b8252a9e7c8?rik=rb4KzomD2gr8GQ&riu=http%3a%2f%2frevitare.com.br%2fwp-content%2fuploads%2f2017%2f08%2fMicroagulhamento-Est%c3%a9tica-Facial-S%c3%a3o-Jos%c3%a9-dos-Campos-Revitare-1-1024x683.jpg&ehk=JSAYQe8Grg8bk20dxD%2bAXkdIu2ny5NGClOM7MhpuHGg%3d&risl=&pid=ImgRaw&r=0" // Use a URL da imagem passada como propriedade
              alt=" Microagulhamento"
              title=" Microagulhamento"
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
            <AccordionTrigger> Microagulhamento</AccordionTrigger>
            <AccordionContent>
              O microagulhamento é um tratamento estético que utiliza
              micro-agulhas muito finas que estimulam a formação de novas fibras
              de colágeno, sendo indicado para o tratamento de cicatrizes de
              acne, estrias, rejuvenescimento e entre outros.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Box>
      <Divider />
      <Box sx={{ p: 1 }} className="flex items-center justify-between">
        <Typography variant="body2">
          <Link
            href="https://wa.me/+558599185575?text=Olá, Amanda gostaria de agendar microagulhamento!"
            target="_blank"
          >
            <Button className=" bg-fuchsia-900 p-2">Contate-me</Button>
          </Link>
        </Typography>
        <Stack direction="row" spacing={1}>
          R$: 200,00
        </Stack>
      </Box>
    </Card>
  );
}
