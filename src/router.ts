// Generouted, changes to this file will be overriden
/* eslint-disable */

import { components, hooks, utils } from "@generouted/react-router/client";

export type Path =
  | `/`
  | `/me`
  | `/messages`
  | `/orders`
  | `/orders/crypto/:id`
  | `/orders/giftcards/:id`
  | `/services/giftcard`
  | `/services/giftcard/rates`;

export type Params = {
  "/orders/crypto/:id": { id: string };
  "/orders/giftcards/:id": { id: string };
};

export type ModalPath = never;

export const { Link, Navigate } = components<Path, Params>();
export const { useModals, useNavigate, useParams } = hooks<
  Path,
  Params,
  ModalPath
>();
export const { redirect } = utils<Path, Params>();
