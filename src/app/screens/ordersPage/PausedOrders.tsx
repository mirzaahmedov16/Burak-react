import React from "react";
import { Box, Stack } from "@mui/material";
import ButtonRaw from "@mui/material/Button";
import TabPanelRaw from "@mui/lab/TabPanel";

import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { Messages, serverApi } from "../../../lib/config";
import { retrievePausedOrders } from "./selector";
import { Product } from "../../../lib/types/product";
import { Order, OrderItem, OrderUpdateInput } from "../../../lib/types/order";
import { sweetErrorHandling } from "../../../lib/sweetAlert";
import { useGlobals } from "../../hooks/useGlobals";
import { OrderStatus } from "../../../lib/enums/order.enum";
import { T } from "../../../lib/types/common";
import OrderService from "../../services/OrderService";

/** Vite ba'zan modulni { default: Component } ko'rinishida qaytaradi */
const unwrap = (c: any) => (c && c.default ? c.default : c);
const Button: any = unwrap(ButtonRaw);
const TabPanel: any = unwrap(TabPanelRaw);

/** REDUX SLICE & SELECTOR */
const pausedOrdersRetriever = createSelector(
  retrievePausedOrders,
  (pausedOrders) => ({pausedOrders})
);

interface PausedOrdersProps {
  setValue: (input: string) => void;
}

export default function PausedOrders(props: PausedOrdersProps) {
  const {setValue} = props;
  const { authMember, setOrderBuilder } = useGlobals();
  const { pausedOrders } = useSelector(pausedOrdersRetriever);

  /** HANDLERS **/

  const deleteOrderHandler = async (e: T) => {
    try {
      if (!authMember) throw new Error(Messages.error2);
      const orderId = e.target.value;
      const input: OrderUpdateInput = {
        orderId: orderId,
        orderStatus: OrderStatus.DELETE,
      };

      const confirmation = window.confirm("Do you want to delete the order?");
      if (confirmation) {
        const order = new OrderService();
        await order.updateOrder(input);
        setOrderBuilder(new Date());
      }
    } catch (err) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
  };

  const processOrderHandler = async (e: T) => {
    try {
      if (!authMember) throw new Error(Messages.error2);
      // PAYMENT PROCESS
      const orderId = e.target.value;
      const input: OrderUpdateInput = {
        orderId: orderId,
        orderStatus: OrderStatus.PROCESS,
      };

      const confirmation = window.confirm("Do you want to proceed with payment?");
      if (confirmation) {
        const order = new OrderService();
        await order.updateOrder(input);
        setValue("2")
        setOrderBuilder(new Date());
      }
    } catch (err) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
  };

  return (
    <TabPanel value={"1"}>
      <Stack>
        {pausedOrders.map((order: Order) => {
          return (
            <Box key={order._id} className={"order-main-box"}>
              <Box className={"order-box-scroll"}>
                {order?.orderItems?.map((item: OrderItem) => {
                  const product: Product = order.productData.filter(
                    (ele: Product) => item.productId === ele._id)[0];
                  const imagePath = `${serverApi}/${product.productImages[0]}`;
                  return (
                    <Box key={item._id} className={"orders-name-price"}>
                      <img
                        src={imagePath}
                        className={"order-dish-img"}
                        alt="Lavash"
                      />
                      <p className={"title-dish"}>{product.productName}</p>
                      <Box className={"price-box"}>
                        <p>${item.itemPrice}</p>
                        <img src={"/icons/close.svg"} alt="multiply" />
                        <p>{item.itemQuantity}</p>
                        <img src={"/icons/pause.svg"} alt="equals" />
                        <p>${item.itemPrice * item.itemQuantity}</p>
                      </Box>
                    </Box>
                  );
                })}
              </Box>

              <Box className={"total-price-box"}>
                <Box className={"box-total"}>
                  <p>Product price</p>
                  <p>${order.orderTotal - order.orderDelivery}</p>
                  <img src={"/icons/plus.svg"} alt="plus" />
                  <p>Delivery cost</p>
                  <p>${order.orderDelivery}</p>
                  <img src={"/icons/pause.svg"} alt="equals" />
                  <p>Total</p>
                  <p>${order.orderTotal}</p>
                </Box>
                <Button 
                  onClick={deleteOrderHandler} 
                  variant="contained" 
                  className={"cancel-button"}
                  value={order._id}
                  >
                  Cancel 
                </Button>
                <Button 
                  variant="contained" 
                  className={"pay-button"}
                  value={order._id}
                  onClick={processOrderHandler}
                  >
                  Payment
                </Button>
              </Box>
            </Box>
          );
        })}

        {!pausedOrders || (pausedOrders.length === 0 && (
          <Box display={"flex"} flexDirection={"row"} justifyContent={"center"}>
            <img
              src={"/icons/noimage-list.svg"}
              style={{ width: 300, height: 300 }}
              alt="no orders"
            />
          </Box>
        ))}
      </Stack>
    </TabPanel>
  );
}
