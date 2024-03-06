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
export default function CardTres() {
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
              src="https://tuaprendes.cl/wp-content/uploads/2021/04/iStock-Peeling-Quimico-1536x1024.jpg" // Use a URL da imagem passada como propriedade
              alt="Peeling químico"
              title="Peeling químico"
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
            <AccordionTrigger>Peeling químico</AccordionTrigger>
            <AccordionContent>
              O pelling pode ser utilizado nos tratamentos de rugas, melanoses,
              melasma, hiperpigmentação pós-inflamatória, cicatrizes atróficas e
              acne. Aonde consiste na utilização de diversos ácidos para
              auxiliar na descamação das células da pele. Lembrando que existe
              um peeling ideal para cada tipo de afecção e fototipo.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Box>
      <Divider />
      <Box sx={{ p: 1 }} className="flex items-center justify-between">
        <Typography variant="body2">
          <Link
            href="https://wa.me/+558599185575?text=Olá, Amanda gostaria de agendar pelling!"
            target="_blank"
          >
            <Button className=" bg-fuchsia-900 w-full">Contate-me</Button>
          </Link>
        </Typography>
        <Stack direction="row" spacing={1}>
          R$: 150,00
        </Stack>
      </Box>
    </Card>
  );
}
