import { get, post, put, del } from "./api.js";

const endpoints = {
  addDonation: "/data/donation",
  byOfferId: (petId) => {
    return `/data/donation?where=petId%3D%22${petId}%22&distinct=_ownerId&count`;
  },
  byOfferIdAndUserId: (petId, userId) => {
    return `/data/donation?where=petId%3D%22${petId}%22%20and%20_ownerId%3D%22${userId}%22&count`;
  },
};

export async function createDonation(petId) {
  return post(endpoints.addDonation, { petId });
}
export async function getDonations(petId) {
  return get(endpoints.byOfferId(petId));
}
export async function getUserDonation(petId, userId) {
  return get(endpoints.byOfferIdAndUserId(petId, userId));
}
