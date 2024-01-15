export interface typeProduct {
  productId: number; //상품아이디
  category: string; //카테고리
  info?: string; //정보
  img: string; //이미지
  artist: string; //아티스트
  title: string; //상품이름
  price: number; //가격
  teg?: string; //태그 뉴? 세일?
  isSoldOut?: boolean; //품절여부
  remainingQuantity?: number; //남은수량
  contentImg1?: string; //상품설명이미지
  contentImg2?: string; //상품설명이미지
}
