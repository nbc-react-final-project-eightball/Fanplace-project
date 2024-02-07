export interface typeProduct {
  productId: number; //상품아이디
  sideCategory?: string; //사이드바카테고리
  category: string; //카테고리
  info?: string; //정보 (예약,뉴,품절)
  Checklist1?: string; //확인사항
  Checklist2?: string;
  Checklist3?: string;
  img: string; //이미지
  artist: string; //아티스트
  title: string; //상품제목
  titleEn: string; //상품영어제목
  price: number; //가격
  salePrice?: number; //세일가격
  ProductName: string; //상품이름
  tag?: string; // NewAlbum ,Top10, BestSeller
  isSoldOut?: boolean; //품절여부
  remainingQuantity?: number; //남은수량
  contentImg1?: string; //상품설명이미지
  contentImg2?: string;
  contentImg3?: string; //최대 이미지 3개까지 넣을수있게 해둿습니다
  releaseDate: string; // 출시일
}
//굿즈리스트에서 상품 정보 보낼때 타입

export interface ProducToShoppingCart {
  category: string; //카테고리
  img: string; // 상품대표이미지
  artist: string; //가수이름
  title: string; // 상품타이틀
  price: number; // 가격
  totalPrice?: number; // 총가격
  quantity?: number; // 선택된수량
  remainingQuantity?: number; // 재고
  productId: number; // 상품아이디
}
//디테일페이지에서 상품 정보 보낼때 타입

//장바구니에서 필요한 타입
export interface TypeCart {
  id: string;
  category: string; //카테고리
  img: string; //이미지
  artist: string; //아티스트
  title: string; //상품이름
  price: number; //가격
  quantity: number; // 선택된수량
  selected: boolean; // 체크박스 선택 T/F
  productId: number; //제품고유id
}
