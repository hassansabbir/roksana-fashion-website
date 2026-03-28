export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  hoverImage: string;
  description: string;
  details: string[];
  sizes: string[];
  colors: { name: string; hex: string }[];
}

export const categories = [
  "3 Piece",
  "Saree",
  "Salwar Kameez",
  "Tops",
  "Casual Wear",
];

export const products: Product[] = [
  {
    id: "1",
    name: "Royal Velvet 3-Piece Suite",
    price: 8500,
    category: "3 Piece",
    image:
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1000&auto=format&fit=crop",
    hoverImage:
      "https://smartdeal.com.bd/public/uploads/all/HJockimK6aAH68Zm4n0JxOAG9lFniwC62MJFLphU.jpg",
    description:
      "An exquisite velvet 3-piece suite with intricate gold embroidery, perfect for wedding festivities.",
    details: [
      "Premium Velvet Fabric",
      "Hand-embroidered Zardozi work",
      "Includes Dupatta and Salwar",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Maroon", hex: "#800000" },
      { name: "Navy Blue", hex: "#000080" },
    ],
  },
  {
    id: "2",
    name: "Silk Banarasi Saree",
    price: 12000,
    category: "Saree",
    image:
      "https://static.cilory.com/783838-thickbox_default/light-green-silk-stone--beads-designer-saree.jpg.webp",
    hoverImage:
      "https://silkland.in/cdn/shop/files/SZ-DGRUPA-OFW-2371_1_d73bcc5e-6ed1-4d10-b5cf-d46c6794003e.jpg?v=1748936263",
    description:
      "Classic Banarasi silk saree with traditional motifs and a rich gold border.",
    details: ["Pure Silk", "Authentic Banarasi weaving", "Length: 6.5 meters"],
    sizes: ["OS"],
    colors: [
      { name: "Crimson Red", hex: "#DC143C" },
      { name: "Emerald Green", hex: "#50C878" },
    ],
  },
  {
    id: "3",
    name: "Embroidered Georgette Kameez",
    price: 5500,
    category: "Salwar Kameez",
    image: "https://labane.com/wp-content/uploads/2022/08/4561LA-2690.webp",
    hoverImage:
      "https://i.etsystatic.com/36562015/r/il/c731ee/6249614832/il_fullxfull.6249614832_c7gl.jpg",
    description:
      "Lightweight georgette kameez with delicate floral embroidery on the neckline and sleeves.",
    details: ["Georgette Fabric", "Comfortable lining", "Elegant drape"],
    sizes: ["S", "M", "L"],
    colors: [{ name: "Peach", hex: "#FFDAB9" }],
  },
  {
    id: "4",
    name: "Linen Fusion Top",
    price: 2500,
    category: "Tops",
    image:
      "https://laz-img-sg.alicdn.com/p/5d917164f073f834f8d4a2e84b221389.jpg",
    hoverImage:
      "https://img.drz.lazcdn.com/static/bd/p/3b7a58cd80d7a9f88091fb492f25b8bd.jpg_720x720q80.jpg",
    description:
      "Modern fusion top crafted from high-quality linen, ideal for casual outings.",
    details: ["100% Linen", "Breathable material", "Relaxed fit"],
    sizes: ["XS", "S", "M", "L"],
    colors: [{ name: "Ivory", hex: "#FFFFF0" }],
  },
  {
    id: "5",
    name: "Casual Cotton Kurti",
    price: 1800,
    category: "Casual Wear",
    image:
      "https://kajols.com/cdn/shop/products/cotton-casual-kurti-254077-1000x1375.jpg?v=1682336143",
    hoverImage:
      "https://imgbook.textileexport.in/imgbook/product/o/20260320/17740107731091889183.jpg",
    description:
      "Everyday cotton kurti with simple block prints and a classic silhouette.",
    details: ["Pure Cotton", "Screen printed", "Machine washable"],
    sizes: ["S", "M", "L", "XL"],
    colors: [{ name: "Indigo", hex: "#4B0082" }],
  },
  {
    id: "6",
    name: "Golden Zari Salwar",
    price: 6800,
    category: "Salwar Kameez",
    image:
      "https://www.hatkay.com/cdn/shop/collections/3308_2fd758bc-547d-4166-bd4d-946e44462ba5.jpg?v=1767785504&width=400",
    hoverImage:
      "https://m.media-amazon.com/images/I/81gdcyIgPlL._AC_UY1100_.jpg",
    description:
      "Elegant salwar kameez with golden zari work and a soft chiffon dupatta.",
    details: ["Chiffon and Silk blend", "Zari embroidery", "Semi-stitched"],
    sizes: ["M", "L", "XL"],
    colors: [{ name: "Beige", hex: "#F5F5DC" }],
  },
];
