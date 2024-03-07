"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Typography from "@mui/material/Typography";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

interface CustomizedRatingProps {
  setAvaliacao: React.Dispatch<React.SetStateAction<number>>;
}

export default function CustomizedRating({
  setAvaliacao,
}: CustomizedRatingProps) {
  const [localAvaliacao, setLocalAvaliacao] = React.useState<number | null>(2);

  const handleAvaliacaoChange = (
    event: React.ChangeEvent<{}>,
    value: number | null
  ) => {
    const quantidade = value ? Math.ceil(value) : 0;
    setLocalAvaliacao(quantidade);
    setAvaliacao(quantidade);
  };

  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <Typography component="legend">Avaliação</Typography>
      <StyledRating
        name="customized-color"
        value={localAvaliacao}
        onChange={handleAvaliacaoChange}
        getLabelText={(value: number) =>
          `${value} Heart${value !== 1 ? "s" : ""}`
        }
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
    </Box>
  );
}
