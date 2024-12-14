export interface Place {
  name: string;
  id: number;
  tel: string;
  category: string[];
  address: string;
  roadAddress: string;
  abbrAddress: string;
  display: Node;
  telDisplay: string;
  thumUrl: string;
  homePage: string;
  description: string;
  bizhourInfo: string;
  menuInfo: string;
  distance: string;
  naverBookingUrl: string;
  x: string;
  y: string;
  streetPanorama: {
    id: string;
    lng: string;
    lat: string;
    fov: string;
  };
}
