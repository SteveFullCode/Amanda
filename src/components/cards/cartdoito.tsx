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
export default function CardOito() {
  return (
    <Card
      variant="outlined"
      sx={{ maxWidth: 1000, maxHeight: 1000 }}
      className="bg-fuchsia-200 rounded-xl w-full"
    >
      <Box sx={{ p: 2 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography gutterBottom variant="h5" component="div">
            <Image
              src="https://milenadellatesta.com.br/wp-content/uploads/2020/04/banners-procedimentos-massagem-energetica-04.png"
              alt="Método Nazaré Santos"
              title="Método Nazaré Santos"
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
            <AccordionTrigger>Método Nazaré Santos</AccordionTrigger>
            <AccordionContent>
              O Método Nazaré Santos de drenagem é uma técnica de massagem 100%
              manual, com esultado imediato e prolongado aonde melhora a
              circulação sanguínea, age no organismo por um período de 72 horas,
              promove um melhor alinhamento postural, regula o intestino, além
              de outros inúmeros benefícios.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }} className="flex items-center justify-between">
        <Typography variant="body2">
          <Link
            href="https://wa.me/+558599185575?text=Olá, Amanda gostaria de agendar Método Nazaré Santos!"
            target="_blank"
          >
            <Button className=" bg-fuchsia-900 w-full">Contate-me</Button>
          </Link>
        </Typography>
        <Stack direction="row" spacing={1}>
          R$: 180,00
        </Stack>
      </Box>
    </Card>
  );
}
