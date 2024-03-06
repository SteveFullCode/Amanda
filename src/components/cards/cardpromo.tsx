import * as React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

export default function CardPromo() {
  return (
    <Card
      variant="outlined"
      sx={{ width: "100%", display: "flex" }}
      className=" rounded-xl"
      id="serviços"
    >
      <Box
        sx={{ p: 2, width: "100%" }}
        className="flex items-center justify-around flex-col gap-2 lg:flex-row"
      >
        {" "}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography gutterBottom variant="h5" component="div">
            <Image
              src="https://esteticasmartlipo.com.br/wp-content/uploads/2020/12/limpeza-de-pele-1.jpg"
              alt="Promoção da semana"
              width={600}
              height={400}
              title="Promoção da semana"
              className="cursor-pointer  rounded-xl"
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </Typography>
        </Stack>
        <div className="flex flex-col gap-12 lg:max-w-sm shadow-lg rounded-xl p-2 bg-fuchsia-200 ">
          <Typography
            color="text.secondary"
            variant="body2"
            className="text-center font-bold text-xl"
          >
            Promoção da semana
          </Typography>
          <Typography
            color="text.secondary"
            variant="body2"
            className=" font-semibold text-lg"
          >
            limpeza de pele
          </Typography>
          <Typography
            color="text.secondary"
            variant="body2"
            className=" font-semibold text-sm text-justify"
          >
            Um procedimento estético realizado para remover impurezas, células
            mortas, comedões (cravos), milium (pequenos cistos brancos) e outras
            obstruções dos poros da pele. Este procedimento ajuda a melhorar a
            saúde e a aparência da pele, deixando-a mais limpa, suave e
            radiante.
          </Typography>
          <Box sx={{ p: 1 }} className="flex justify-between items-center">
            <Typography variant="body2">
              <Typography variant="body2">
                <Link
                  href="https://wa.me/+558599185575?text=Olá, Amanda gostaria de agendar Promoção da semana!"
                  target="_blank"
                >
                  <Button className=" bg-fuchsia-900 w-full">Contate-me</Button>
                </Link>
              </Typography>
            </Typography>
            <Stack
              direction="row"
              spacing={1}
              className="sm:text-lg font-semibold text-sm"
            >
              R$: 100,00
            </Stack>
          </Box>
        </div>
      </Box>
      <Divider />
    </Card>
  );
}
