import React from "react";
import { Card, Avatar, CardHeader } from "@mui/material";
import { ArrowRight } from "@mui/icons-material";

interface CurrentUserCard {
  name: string;
  email: string;
}

const CurrentUserCard: React.FC<CurrentUserCard> = ({ name, email }) => {
  return (
    <Card
      sx={{
        borderRadius: ".5rem",
      }}
      variant="outlined"
    >
      <CardHeader
        avatar={<Avatar aria-label="recipe">{name[0].toUpperCase()}</Avatar>}
        action={
          <ArrowRight
            aria-label="account-settings"
            className="size-2 text-zinc-400"
          />
        }
        title={name}
        subheader={email}
        className="!p-2 !pe-4"
        classes={{ action: "ms-4 !self-center" }}
      />
    </Card>
  );
};

export default CurrentUserCard;
