import data from './DB/initialData';
const { GranhandItems } = data;

export function setGranhandItem() {
  return GranhandItems;
}

export function getItemId(itemId) {
  return GranhandItems.find(GranhandItem => GranhandItem.id === itemId);
}

const WISHLIST_KEY = '그랑핸드_장바구니';
const wishlist = JSON.parse(localStorage.getItem(WISHLIST_KEY) || '{}');

export function addWishlist(itemId) {
  wishlist[itemId] = GranhandItems[itemId].title;
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
}
export function delWishlist(itemId) {
  delete wishlist[itemId];
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
}

export function getWishlist() {
  return GranhandItems.filter(item => wishlist[item.id]);
}
