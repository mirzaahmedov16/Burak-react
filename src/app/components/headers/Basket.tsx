import React from "react";
import { Box, Button, Popover, Stack, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";

type CartItem = {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
};

const initialItems: CartItem[] = [
  { id: 1, name: "Kebab", image: "/img/fresh.webp", price: 10, quantity: 1 },
];

export default function Basket() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [items, setItems] = React.useState(initialItems);
  const open = Boolean(anchorEl);
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const updateQuantity = (id: number, change: number) => {
    setItems((current) => current
      .map((item) => item.id === id ? { ...item, quantity: item.quantity + change } : item)
      .filter((item) => item.quantity > 0));
  };

  return (
    <Box className="hover-line">
      <IconButton
        aria-label={`Open cart, ${itemCount} items`}
        id="basket-button"
        aria-controls={open ? "basket-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={(event) => setAnchorEl(event.currentTarget)}
      >
        <Badge badgeContent={itemCount} color="secondary">
          <img src="/icons/shopping-cart.svg" alt="" />
        </Badge>
      </IconButton>
      <Popover
        anchorEl={anchorEl}
        id="basket-menu"
        open={open}
        onClose={() => setAnchorEl(null)}
        slotProps={{
          paper: {
            className: "basket-menu-paper",
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.25))",
              mt: 1.5,
              backgroundImage: "none",
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Stack className="basket-frame">
          <Box className="all-check-box">
            <Typography component="span">Cart ({itemCount})</Typography>
          </Box>

          {items.length === 0 ? (
            <Box className="basket-empty">Your cart is empty.</Box>
          ) : (
            <Box className="orders-main-wrapper">
              <Box className="orders-wrapper">
                {items.map((item) => (
                  <Box className="basket-info-box" key={item.id}>
                    <button
                      className="cancel-btn"
                      aria-label={`Remove ${item.name}`}
                      onClick={() => setItems((current) => current.filter(({ id }) => id !== item.id))}
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                    <img src={item.image} className="product-img" alt={item.name} />
                    <span className="product-name">{item.name}</span>
                    <p className="product-price">${item.price} × {item.quantity}</p>
                    <div className="col-2">
                      <button className="remove" aria-label={`Decrease ${item.name} quantity`} onClick={() => updateQuantity(item.id, -1)}>-</button>
                      <button className="add" aria-label={`Increase ${item.name} quantity`} onClick={() => updateQuantity(item.id, 1)}>+</button>
                    </div>
                  </Box>
                ))}
              </Box>
            </Box>
          )}

          <Box className="basket-order">
            <span className="price">Total: ${total.toFixed(2)}</span>
            <Button
              variant="contained"
              disabled={items.length === 0}
              onClick={() => setAnchorEl(null)}
            >
              Order
            </Button>
          </Box>
        </Stack>
      </Popover>
    </Box>
  );
}
