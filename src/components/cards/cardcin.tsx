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
export default function CardCinco() {
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
          <Image
            src="https://esteticasmartlipo.com.br/wp-content/uploads/2020/12/limpeza-de-pele-1.jpg"
            alt=" Limpeza de pele"
            title=" Limpeza de pele"
            className="cursor-pointer rounded-xl"
            height={683}
            width={1000}
            style={{
              objectFit: "cover",
              objectPosition: "center",
              width: "100%",
              height: "15rem",
            }}
          />
        </Stack>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger> Limpeza de pele</AccordionTrigger>
            <AccordionContent>
              Um procedimento estético realizado para remover impurezas, células
              mortas, comedões (cravos), milium (pequenos cistos brancos) e
              outras obstruções dos poros da pele. Este procedimento ajuda a
              melhorar a saúde e a aparência da pele, deixando-a mais limpa,
              suave e radiante.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Box>
      <Divider />
      <Box sx={{ p: 1 }} className="flex items-center justify-between">
        <Typography variant="body2">
          <Link
            href="https://wa.me/+558599185575?text=Olá, Amanda gostaria de agendar Limpeza de pele!"
            target="_blank"
          >
            <Button className=" bg-fuchsia-900 p-2">Contate-me</Button>
          </Link>
        </Typography>
        <Stack direction="row" spacing={1}>
          R$: 100,00
        </Stack>
      </Box>
    </Card>
  );
}
