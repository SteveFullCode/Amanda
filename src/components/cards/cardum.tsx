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

export default function CardUm() {
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
              src="https://www.ctbelezaecia.com.br/wp-content/uploads/2021/07/hodragloss-2-1024x683.jpg"
              alt="Hidragloss"
              height={683}
              width={1000}
              title="Linkedin"
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
            <AccordionTrigger>Hidragloss</AccordionTrigger>
            <AccordionContent>
              O Hidragloss é um tratamento estético inovador projetado para
              hidratar e revitalizar os lábios, proporcionando um aspecto jovem
              e saudável. Este procedimento é especialmente recomendado para
              quem deseja melhorar o volume, formato e a textura dos lábios, ao
              mesmo tempo que remove as linhas de expressão.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }} className="flex items-center justify-between">
        <Typography variant="body2">
          <Link
            href="https://wa.me/+558599185575?text=Olá, Amanda gostaria de agendar Hidragloss!"
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
