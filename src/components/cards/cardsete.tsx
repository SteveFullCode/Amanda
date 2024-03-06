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
export default function CardSete() {
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
              src="https://sense-te.com.br/wp-content/uploads/2021/06/hidratacao-facial-1-768x511.jpg"
              alt="Hidratação facial"
              title="Hidratação facial"
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
            <AccordionTrigger>Hidratação facial</AccordionTrigger>
            <AccordionContent>
              A hidratação facial é um procedimento de cuidado com a pele que
              visa repor a umidade perdida, restaurar a barreira de proteção
              natural da pele e promover uma aparência saudável e radiante.
              Consiste na aplicação de produtos específicos, como cremes, géis
              ou máscaras faciais, que contêm ingredientes hidratantes.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Box>
      <Divider />
      <Box sx={{ p: 1 }} className="flex items-center justify-between">
        <Typography variant="body2">
          <Link
            href="https://wa.me/+558599185575?text=Olá, Amanda gostaria de agendar hidratação facial!"
            target="_blank"
          >
            <Button className=" bg-fuchsia-900 p-2">Contate-me</Button>
          </Link>
        </Typography>
        <Stack direction="row" spacing={1}>
          R$: 50,00
        </Stack>
      </Box>
    </Card>
  );
}
