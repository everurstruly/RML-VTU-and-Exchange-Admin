import React from "react";
import {
  TextField,
  Button,
  Card,
  Fab,
  CardHeader,
  IconButton,
  CardActions,
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";
import PageTitle from "@/components/page-title";
import GiftcardListItemActionButton from "@/components/giftcard/card-action";
import {
  AddCircleOutlined,
  AddOutlined,
  FilterAltOutlined,
  FilterListOutlined,
  Image,
  MoreVertOutlined,
  SortOutlined,
} from "@mui/icons-material";

export default function GiftcardPage() {
  return (
    <main className="min-h-screen relative pb-32 pt-6">
      <PageTitle text="Gift Card Services - List" />

      <section className="px-4 pt-6 pb-20">
        <div className="flex flex-col gap-y-2 mb-6">
          <TextField
            label="Search"
            variant="outlined"
            size="small"
            placeholder="Search Card Title"
            fullWidth
          />

          <div className="flex gap-x-2">
            <Button
              size="medium"
              variant="outlined"
              color="primary"
              sx={{ borderRadius: "2px" }}
              fullWidth
              startIcon={<FilterAltOutlined />}
            >
              Filter
            </Button>

            <Button
              size="medium"
              variant="outlined"
              color="primary"
              sx={{ borderRadius: "2px" }}
              fullWidth
              startIcon={<SortOutlined />}
            >
              Sort
            </Button>
          </div>
        </div>

        <ul className="flex flex-col gap-5 mb-8">
          {[1, 2, 3, 4, 5, 6, 8, 9, 10, 11].map((item) => {
            return (
              <li key={item}>
                <Card variant="outlined">
                  <CardHeader
                    avatar={
                      <div className="border h-10 w-14 rounded-sm bg-zinc-50"></div>
                    }
                    action={<GiftcardListItemActionButton />}
                    title="Amazon"
                    classes={{ title: "!font-medium" }}
                    subheader={
                      <p className="truncate text-xs text-zinc-400 font-light max-w-[90%]">
                        {["Fresh", "Trending", "Best Reates"].map(
                          (tag, index) => {
                            if (index === 0) return `${tag}`;
                            return `, ${tag}`;
                          }
                        )}
                      </p>
                    }
                  />
                  <Divider />
                  <CardActions className="flex justify-between">
                    <Button
                      fullWidth
                      size="small"
                      href="/orders?service=giftcards,brand=yoyo"
                    >
                      View Orders
                    </Button>

                    <Button
                      fullWidth
                      size="small"
                      href="/services/giftcard/rates"
                    >
                      Edit Rates
                    </Button>
                  </CardActions>
                </Card>
              </li>
            );
          })}
        </ul>
      </section>

      <Fab
        size="large"
        color="primary"
        aria-label="add"
        // variant="extended"
        sx={{ position: "fixed", bottom: "6rem", right: "2rem" }}
      >
        <AddOutlined className="me-2.." />
        {/* New */}
      </Fab>
    </main>
  );
}
