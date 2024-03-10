"use client";
import FavoriteIcon from "@mui/icons-material/Favorite";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import Insta from "../../assets/instagram-svgrepo-com.svg";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import CustomizedRating from "./avaliacao";
import { Modal, Box } from "@mui/material";

import Carta from "@/assets/carta.svg";
import { Button } from "../ui/button";
interface Comentario {
  nome: string;
  comentario: string;
  instagram: string;
  coracoes: number;
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

export default function Comentarios() {
  const [avaliacao, setAvaliacao] = useState(0);
  const [open, setOpen] = useState(false);
  const [nome, setNome] = useState("");
  const [nomeError, setNomeError] = useState("");
  const [comentario, setComentario] = useState("");
  const [instagram, setInstagram] = useState("");
  const [instagramError, setInstagramError] = useState("");
  const [avaliacaoError, setAvaliacaoError] = useState("");
  const [enviados, setEnviados] = useState<Comentario[]>([]);
  const [enviadoComSucesso, setEnviadoComSucesso] = useState(false);
  const API_BASE_URL = "https://prickly-hare-outerwear.cyclic.app";

  useEffect(() => {
    fetchComentarios();
  }, []);
  useEffect(() => {
    if (enviadoComSucesso) {
      const timer = setTimeout(() => {
        setEnviadoComSucesso(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [enviadoComSucesso]);
  const fetchComentarios = async () => {
    try {
      const response = await axios.get<Comentario[]>(API_BASE_URL);
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
    if (nome.trim() === "") {
      setNomeError("O nome é obrigatório");
      return;
    } else {
      setNomeError("");
    }
    if (instagram.trim() === "") {
      setInstagramError("O Instagram é obrigatório");
      return;
    } else {
      setInstagramError("");
    }
    if (avaliacao === 0) {
      setAvaliacaoError("A avaliação é obrigatória");
      return;
    } else {
      setAvaliacaoError("");
    }

    try {
      const response = await axios.post<Comentario>(API_BASE_URL, {
        nome,
        comentario,
        instagram,
        coracoes: avaliacao,
      });
      setEnviados([...enviados, response.data]);
      setNome("");
      setComentario("");
      setInstagram("");
      setEnviadoComSucesso(true);
      handleClose();
    } catch (error) {
      console.error("Erro ao enviar o comentário:", error);
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
                Deixe seu comentário
              </h2>
              <Input
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className={nomeError ? "border-red-500" : ""}
              />
              {nomeError && <p className="text-red-500">{nomeError}</p>}

              <Textarea
                placeholder="Seu comentário será muito bem vindo."
                className="max-h-52"
                value={comentario}
                onChange={(e) => setComentario(e.target.value)}
              />

              <div>
                <Input
                  placeholder="Instagram"
                  value={instagram}
                  onChange={(e) => setInstagram(e.target.value)}
                  className={instagramError ? "border-red-500" : ""}
                />
                {instagramError && (
                  <p className="text-red-500">{instagramError}</p>
                )}
              </div>

              <p className="text-red-500">{avaliacaoError}</p>

              <CustomizedRating setAvaliacao={setAvaliacao} />

              <Button onClick={handleEnviar} className="">
                Mandar
              </Button>
            </div>
          </Box>
        </Modal>
      </div>
      {enviados.map((enviado, index) => (
        <div
          key={index}
          className="flex flex-col bg-fuchsia-200 rounded-xl p-2 mb-2"
        >
          <div className="flex justify-between pb-2">
            <p>{enviado.nome}</p>
            {enviado.instagram && (
              <div className="flex items-center gap-1">
                <Image src={Insta} alt="insta" width={20} />
                <p className={enviado.instagram ? "text-blue-500" : ""}>
                  {enviado.instagram}
                </p>
              </div>
            )}
            {enviado.coracoes !== undefined && (
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <FavoriteIcon
                    key={i}
                    color={
                      i < (enviado.coracoes || 0) ? "secondary" : "disabled"
                    }
                  />
                ))}
              </div>
            )}
          </div>
          <div>
            <p>Comentário:</p>
            <p className="p-2">{enviado.comentario}</p>
          </div>
        </div>
      ))}
      {enviadoComSucesso && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-white border border-gray-300 rounded-lg p-6 flex flex-col items-center">
            <Image src={Carta} alt="Agradecimento" width={200} height={200} />
            <p className="text-xl font-semibold mt-4">
              Obrigado pelo seu comentário!
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
