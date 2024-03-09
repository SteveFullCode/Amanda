"use client";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Button } from "../ui/button";
import CustomizedRating from "./avaliacao";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React, { useState, useEffect } from "react";
import axios from "axios";

interface Comentario {
  nome: string;
  comentario: string;
  instagram: string;
  avaliacao?: number;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

interface Enviado {
  nome: string;
  comentario: string;
  instagram: string;
  avaliacao?: number;
}

export default function Comentarios() {
  const [avaliacao, setAvaliacao] = useState(0);
  const [open, setOpen] = useState(false);
  const [nome, setNome] = useState("");
  const [comentario, setComentario] = useState("");
  const [instagram, setInstagram] = useState("");
  const [enviados, setEnviados] = useState<Comentario[]>([]);
  const API_BASE_URL = "https://long-red-angler-toga.cyclic.app";
  useEffect(() => {
    fetchComentarios();
  }, []);

  const fetchComentarios = async () => {
    try {
      const response = await axios.get<Comentario[]>(
        `${API_BASE_URL}/comentarios`
      );
      setEnviados(response.data);
    } catch (error) {
      console.error("Erro ao buscar os comentários:", error);
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEnviar = async () => {
    if (nome.trim() !== "") {
      try {
        const response = await axios.post<Comentario>(
          `${API_BASE_URL}/comentarios`,
          {
            nome,
            comentario,
            instagram,
            avaliacao,
          }
        );
        setEnviados([...enviados, response.data]);
        setNome("");
        setComentario("");
        setInstagram("");
        handleClose();
      } catch (error) {
        console.error("Erro ao enviar o comentário:", error);
      }
    }
  };

  return (
    <section className="w-full mb-10 ">
      <h2 className="text-center text-3xl font-semibold mb-5">Avaliações</h2>
      <div className="flex justify-between items-center mb-5">
        <h3 className="font-semibold text-xl">Clientes: ({enviados.length})</h3>
        <Button onClick={handleOpen} className="">
          Comentários
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={{ ...style, width: 400 }}>
            <div className="flex flex-col gap-8">
              <h2
                id="parent-modal-title"
                className="text-center font-semibold "
              >
                Faça parte da minha família
              </h2>
              <Input
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
              <Textarea
                placeholder="Seu comentário será muito bem vindo."
                className="max-h-52"
                value={comentario}
                onChange={(e) => setComentario(e.target.value)}
              />
              <div>
                <p>Opcional</p>
                <Input
                  placeholder="Instagram"
                  value={instagram}
                  onChange={(e) => setInstagram(e.target.value)}
                />
              </div>
              <p
                id="parent-modal-description"
                className="text-center font-semibold"
              >
                O nome é obrigatório para a avaliação.
              </p>
              <CustomizedRating setAvaliacao={setAvaliacao} />{" "}
              <Button onClick={handleEnviar}>Mandar</Button>
            </div>
          </Box>
        </Modal>
      </div>
      {enviados.map((enviado, index) => (
        <div
          key={index}
          className="flex flex-col bg-red-200 rounded-xl p-2 mb-2"
        >
          <div className="flex justify-between pb-2">
            <p>{enviado.nome}</p>
            {enviado.instagram && <p>{enviado.instagram}</p>}
            {enviado.avaliacao !== undefined && (
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <FavoriteIcon
                    key={i}
                    color={
                      i < (enviado.avaliacao || 0) ? "secondary" : "disabled"
                    }
                  />
                ))}
              </div>
            )}
          </div>
          <div>
            <p>comentário:</p>
            <p className="p-2">{enviado.comentario}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
