import data from './DB/initialData';
const { GranhandItems } = data;

export function setGranhandItem() {
  return GranhandItems;
}
// 클릭한 제품의 번호와 러쉬 아이템 데이터 문서의 id와 일치하면 반환
export function getItemId(itemId) {
  return GranhandItems.find(lushItem => lushItem.id === itemId);
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
