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
  SwipeableDrawer,
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import PageTitle from "@/components/page-title";
import GiftcardListItemActionButton from "@/components/giftcard/card-action";
import {
  AddCircleOutlined,
  AddOutlined,
  AddPhotoAlternateOutlined,
  ArrowRightAltOutlined,
  FilterAltOutlined,
  NoteAddOutlined,
  FilterListOutlined,
  Image,
  MoreVertOutlined,
  SortOutlined,
} from "@mui/icons-material";
import clsx from "clsx";

export default function GiftcardPage() {
  const [editFormOpened, setEditFormOpened] = React.useState(false);
  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);

  const toggleEditFormVisibility = (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event &&
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setEditFormOpened((visible) => !visible);
  };

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

      <SwipeableDrawer
        anchor="bottom"
        open={editFormOpened}
        onClose={() => setEditFormOpened(false)}
        onOpen={() => setEditFormOpened(true)}
      >
        <Box sx={{ width: "100%", padding: "1rem", backgroundColor: "#fff" }}>
          <h2 className="text-xl font-medium mb-6 flex items-center truncate gap-x-2">
            <NoteAddOutlined />
            Add New Gift Card
          </h2>

          <div className="flex flex-col gap-y-6 mb-8">
            <Button
              size="large"
              component="label"
              fullWidth
              role={undefined}
              variant="outlined"
              tabIndex={-1}
              classes={{
                root: "min-h-[8rem] !border-default !border-gray-300 flex-col gap-y-2",
              }}
            >
              <AddPhotoAlternateOutlined className="!size-6" />
              <div>Upload Cover Image</div>
              <input type="file" className="hidden" aria-label="hidden" />
            </Button>
            <TextField
              label="Card Title"
              size="medium"
              fullWidth
              className="mt-4"
            />

            <div className="border p-3 border-gray-300">
              <div className="flex justify-between mb-2">
                <label className="text-lg font-light text-stone-600">
                  Tags
                </label>

                <Button
                  type="button"
                  variant="text"
                  size="small"
                  color="primary"
                >
                  New
                </Button>
              </div>

              <div className="flex flex-wrap gap-4">
                {["Fresh", "Trending", "Best Rates"].map((tag, index) => {
                  const _id = `tag-${index}`;
                  return (
                    <label
                      key={_id}
                      htmlFor={_id}
                      className={clsx({
                        "!transition-all": true,
                        "cursor-pointer bg-zinc-100 rounded-md px-4 py-3 leading-none":
                          true,
                        "!bg-primary text-white": selectedTags.includes(_id),
                      })}
                    >
                      {tag}
                      <input
                        type="checkbox"
                        onChange={(evt) => {
                          if (evt.target.checked) {
                            return setSelectedTags((tags) => [...tags, _id]);
                          }

                          setSelectedTags((tags) => {
                            return tags.filter((t) => t !== _id);
                          });
                        }}
                        name={_id}
                        id={_id}
                        className="hidden"
                      />
                    </label>
                  );
                })}

                <Button
                  variant="text"
                  color="inherit"
                  className={clsx({
                    "transition-all": true,
                    "cursor-pointer leading-none !min-w-0 !p-0": true,
                  })}
                >
                  <AddCircleOutlined className="!size-8" />
                </Button>
              </div>
            </div>
          </div>

          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            className="mt-4"
            endIcon={<ArrowRightAltOutlined />}
            onClick={() => setEditFormOpened(false)}
          >
            Next: Add Exchange Rates
          </Button>
        </Box>
      </SwipeableDrawer>

      <Fab
        size="large"
        color="primary"
        aria-label="add"
        onClick={() => setEditFormOpened(true)}
        // variant="extended"
        sx={{ position: "fixed", bottom: "6rem", right: "2rem" }}
      >
        <AddOutlined className="me-2.." />
        {/* New */}
      </Fab>
    </main>
  );
}
