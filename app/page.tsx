"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  HeartHandshake,
  Menu,
  Search,
  ShoppingBag,
} from "lucide-react";
import { useEffect, useMemo, useState, type CSSProperties } from "react";

const donationPercent = 20;

type ProductColor = {
  name: string;
  hex: string;
  images: ProductImage[];
};

type ProductImage = {
  label: string;
  src: string;
  alt: string;
  objectPosition: string;
  cardObjectPosition?: string;
  cardScale?: number;
  cardTransformOrigin?: string;
};

type Product = {
  id: string;
  name: string;
  fabric: string;
  price: string;
  colors: ProductColor[];
  sizes: string[];
};

const products: Product[] = [
  {
    id: "long-sleeve-crop",
    name: "Long Sleeve Crop",
    fabric: "Contour jersey",
    price: "$48",
    colors: [
      {
        name: "Black",
        hex: "#111111",
        images: [
          {
            label: "Front",
            src: "/contessa-shop/products/long-sleeve-black-front.png",
            alt: "Front view of the black long sleeve crop top.",
            objectPosition: "center center",
            cardScale: 1.055,
            cardTransformOrigin: "center bottom",
          },
          {
            label: "Back",
            src: "/contessa-shop/products/long-sleeve-black-back.png",
            alt: "Back view of the black long sleeve crop top.",
            objectPosition: "center center",
          },
        ],
      },
      {
        name: "White",
        hex: "#f4f1e8",
        images: [
          {
            label: "Front",
            src: "/contessa-shop/products/long-sleeve-white-front.png",
            alt: "Front view of the white long sleeve crop top.",
            objectPosition: "center center",
          },
          {
            label: "Back",
            src: "/contessa-shop/products/long-sleeve-white-back.png",
            alt: "Back view of the white long sleeve crop top.",
            objectPosition: "center center",
          },
        ],
      },
    ],
    sizes: ["XXS", "XS", "S", "M", "L", "XL"],
  },
  {
    id: "short-sleeve-crop",
    name: "Short Sleeve Crop",
    fabric: "Ribbed cotton",
    price: "$42",
    colors: [
      {
        name: "Black",
        hex: "#111111",
        images: [
          {
            label: "Full",
            src: "/contessa-shop/products/short-sleeve-black-front-full.png",
            alt: "Full front view of the black short sleeve crop top.",
            objectPosition: "center 18%",
            cardObjectPosition: "center 27%",
          },
          {
            label: "Front",
            src: "/contessa-shop/products/short-sleeve-black-front.png",
            alt: "Closer front view of the black short sleeve crop top.",
            objectPosition: "center 18%",
          },
          {
            label: "Back",
            src: "/contessa-shop/products/short-sleeve-black-back.png",
            alt: "Back view of the black short sleeve crop top.",
            objectPosition: "center 18%",
          },
        ],
      },
      {
        name: "White",
        hex: "#f4f1e8",
        images: [
          {
            label: "Full",
            src: "/contessa-shop/products/short-sleeve-white-front-full.png",
            alt: "Full front view of the white short sleeve crop top.",
            objectPosition: "center 18%",
          },
          {
            label: "Front",
            src: "/contessa-shop/products/short-sleeve-white-front.png",
            alt: "Closer front view of the white short sleeve crop top.",
            objectPosition: "center 18%",
          },
          {
            label: "Back",
            src: "/contessa-shop/products/short-sleeve-white-back.png",
            alt: "Back view of the white short sleeve crop top.",
            objectPosition: "center 18%",
          },
        ],
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2X"],
  },
  {
    id: "classic-tee",
    name: "Classic Tee",
    fabric: "Soft everyday fit",
    price: "$44",
    colors: [
      {
        name: "Black",
        hex: "#111111",
        images: [
          {
            label: "Front",
            src: "/contessa-shop/products/classic-tee-black-front.png",
            alt: "Front view of the black classic tee.",
            objectPosition: "center 20%",
            cardObjectPosition: "center 25%",
          },
          {
            label: "Back",
            src: "/contessa-shop/products/classic-tee-black-back.png",
            alt: "Back view of the black classic tee.",
            objectPosition: "center 20%",
          },
        ],
      },
      {
        name: "White",
        hex: "#f4f1e8",
        images: [
          {
            label: "Front",
            src: "/contessa-shop/products/classic-tee-white-front.avif",
            alt: "Front view of the white classic tee.",
            objectPosition: "center center",
          },
          {
            label: "Back",
            src: "/contessa-shop/products/classic-tee-white-back.avif",
            alt: "Back view of the white classic tee.",
            objectPosition: "center center",
          },
        ],
      },
    ],
    sizes: ["S", "M", "L", "XL", "2X", "3X"],
  },
];

const materialNotes = [
  "Double-stitched hems",
  "Soft stretch recovery",
  "Made-to-order pacing",
];

const pcrfBackgroundImages = [
  {
    src: "/gengar-contessa/pcrf-bg-1.jpg",
    objectPosition: "center center",
  },
  {
    src: "/gengar-contessa/pcrf-bg-2.jpg",
    objectPosition: "center center",
  },
  {
    src: "/gengar-contessa/pcrf-bg-3.webp",
    objectPosition: "center center",
  },
];

export default function HomePage() {
  const [selectedProductId, setSelectedProductId] = useState(products[0].id);
  const [selectedColorName, setSelectedColorName] = useState(products[0].colors[0].name);
  const [selectedSize, setSelectedSize] = useState(products[0].sizes[2]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const selectedProduct = useMemo(
    () => products.find((product) => product.id === selectedProductId) ?? products[0],
    [selectedProductId],
  );

  const selectedColor =
    selectedProduct.colors.find((color) => color.name === selectedColorName) ??
    selectedProduct.colors[0];

  const selectedImage = selectedColor.images[selectedImageIndex] ?? selectedColor.images[0];

  const selectProduct = (product: Product) => {
    setSelectedProductId(product.id);
    setSelectedColorName(product.colors[0].name);
    setSelectedSize(product.sizes[Math.min(2, product.sizes.length - 1)]);
    setSelectedImageIndex(0);
  };

  const selectColor = (color: ProductColor) => {
    setSelectedColorName(color.name);
    setSelectedImageIndex(0);
  };

  const cycleImage = (direction: -1 | 1) => {
    setSelectedImageIndex((currentIndex) => {
      const imageCount = selectedColor.images.length;

      return (currentIndex + direction + imageCount) % imageCount;
    });
  };

  useEffect(() => {
    if (selectedColor.images.length < 2) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setSelectedImageIndex((currentIndex) => (currentIndex + 1) % selectedColor.images.length);
    }, 2000);

    return () => window.clearTimeout(timeoutId);
  }, [selectedColor.images.length, selectedColorName, selectedImageIndex, selectedProductId]);

  return (
    <main className="min-h-screen bg-[var(--gc-paper)] text-[var(--gc-ink)]">
      <div className="announcement">
        <span>{donationPercent}% of all proceeds support PCRF relief work</span>
        <Link href="#impact" aria-label="Jump to impact section">
          <ArrowUpRight size={16} strokeWidth={2} aria-hidden="true" />
        </Link>
      </div>

      <header className="site-header" aria-label="Main navigation">
        <Link href="/" className="brand-mark" aria-label="Contessa Shop home">
          <span>Contessa</span>
          <span className="brand-accent">Shop</span>
        </Link>

        <nav className="desktop-nav" aria-label="Store sections">
          <Link href="#styles">Styles</Link>
          <Link href="#selection">Fit</Link>
          <Link href="#impact">Impact</Link>
          <Link href="#details">Details</Link>
        </nav>

        <div className="header-actions" aria-label="Store tools">
          <button aria-label="Search" type="button">
            <Search size={19} strokeWidth={1.9} aria-hidden="true" />
          </button>
          <button aria-label="Shopping bag" type="button">
            <ShoppingBag size={19} strokeWidth={1.9} aria-hidden="true" />
          </button>
          <button className="mobile-menu" aria-label="Menu" type="button">
            <Menu size={21} strokeWidth={1.9} aria-hidden="true" />
          </button>
        </div>
      </header>

      <section className="collection-intro" aria-labelledby="collection-title">
        <div>
          <p className="kicker">Limited essentials drop</p>
          <h1 id="collection-title">Current Drop</h1>
        </div>
        <p>
          Soft, close-fit staples in clean colors, shaped for repeat wear and
          photographed with the product first.
        </p>
      </section>

      <section className="style-section" id="styles" aria-label="Clothing styles">
        <div className="style-grid">
          {products.map((product) => {
            const coverImage = product.colors[0].images[0];
            const isSelected = selectedProduct.id === product.id;
            const cardScale = coverImage.cardScale ?? 1.01;
            const coverImageStyle = {
              "--style-image-hover-scale": (cardScale + 0.035).toString(),
              "--style-image-origin": coverImage.cardTransformOrigin ?? "center center",
              "--style-image-scale": cardScale.toString(),
              objectPosition: coverImage.cardObjectPosition ?? coverImage.objectPosition,
            } as CSSProperties;

            return (
              <button
                aria-pressed={isSelected}
                className="style-card"
                data-active={isSelected}
                key={product.id}
                onClick={() => selectProduct(product)}
                type="button"
              >
                <div className="style-image-wrap">
                  <Image
                    src={coverImage.src}
                    alt={coverImage.alt}
                    fill
                    sizes="(max-width: 760px) 92vw, (max-width: 1180px) 46vw, 24vw"
                    priority={product.id === "long-sleeve-crop"}
                    className="style-image"
                    style={coverImageStyle}
                  />
                </div>
                <div className="style-meta">
                  <div>
                    <h2>{product.name}</h2>
                    <p>{product.fabric}</p>
                  </div>
                  <div className="style-purchase">
                    <span>{product.colors[0].name}</span>
                    <strong>{product.price}</strong>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <section
        className="selection-section"
        id="selection"
        aria-labelledby="selection-title"
      >
        <div className="selection-media">
          <div className="product-preview">
            <Image
              key={`${selectedProduct.id}-${selectedImage.label}`}
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              sizes="(max-width: 920px) 92vw, 45vw"
              className="selection-image"
              style={{ objectPosition: "center bottom" }}
            />
            {selectedColor.images.length > 1 ? (
              <div className="carousel-arrows" aria-label="Product image controls">
                <button
                  aria-label="Previous product angle"
                  onClick={() => cycleImage(-1)}
                  type="button"
                >
                  <ChevronLeft size={24} strokeWidth={2} aria-hidden="true" />
                </button>
                <button
                  aria-label="Next product angle"
                  onClick={() => cycleImage(1)}
                  type="button"
                >
                  <ChevronRight size={24} strokeWidth={2} aria-hidden="true" />
                </button>
              </div>
            ) : null}
          </div>
          <div className="angle-controls" aria-label="Image angles">
            {selectedColor.images.map((image, index) => (
              <button
                aria-pressed={selectedImageIndex === index}
                key={image.label}
                onClick={() => setSelectedImageIndex(index)}
                type="button"
              >
                {image.label}
              </button>
            ))}
          </div>
        </div>

        <div className="selection-panel">
          <p className="kicker">Selected style</p>
          <h2 id="selection-title">{selectedProduct.name}</h2>
          <div className="selection-price-row">
            <span>{selectedProduct.fabric}</span>
            <strong>{selectedProduct.price}</strong>
          </div>

          <fieldset className="option-fieldset">
            <legend>Color</legend>
            <div className="swatch-row">
              {selectedProduct.colors.map((color) => (
                <button
                  aria-label={`${color.name} color`}
                  aria-pressed={selectedColor.name === color.name}
                  className="swatch-button"
                  key={color.name}
                  onClick={() => selectColor(color)}
                  style={{ backgroundColor: color.hex }}
                  type="button"
                />
              ))}
            </div>
            <p>{selectedColor.name}</p>
          </fieldset>

          <fieldset className="option-fieldset">
            <legend>Size</legend>
            <div className="size-row">
              {selectedProduct.sizes.map((size) => (
                <button
                  aria-pressed={selectedSize === size}
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  type="button"
                >
                  {size}
                </button>
              ))}
            </div>
          </fieldset>

          <button className="add-selection-button" type="button">
            Add {selectedSize} / {selectedColor.name}
          </button>
        </div>
      </section>

      <section className="impact-section" id="impact" aria-labelledby="impact-title">
        <div className="impact-backgrounds" aria-hidden="true">
          {pcrfBackgroundImages.map((image, index) => (
            <div className="impact-background" key={image.src}>
              <Image
                src={image.src}
                alt=""
                fill
                sizes="100vw"
                priority={index === 0}
                className="impact-background-image"
                style={{ objectPosition: image.objectPosition }}
              />
            </div>
          ))}
        </div>

        <div className="impact-copy">
          <p className="kicker">Relief commitment</p>
          <h2 id="impact-title">
            {donationPercent}% of every order is directed to the Palestine
            Children&apos;s Relief Fund.
          </h2>
          <p>
            PCRF provides medical and humanitarian relief for children across the
            Levant. Each drop includes a donation receipt recap after the sales
            window closes.
          </p>
          <div className="impact-action-row">
            <Link
              className="impact-link"
              href="https://www.pcrf.net/"
              target="_blank"
              rel="noreferrer"
            >
              Visit PCRF
              <ArrowUpRight size={18} strokeWidth={1.9} aria-hidden="true" />
            </Link>
            <Image
              src="/gengar-contessa/pcrf-logo.png"
              alt="PCRF Palestine Children's Relief Fund"
              width={220}
              height={75}
              className="pcrf-logo"
            />
          </div>
        </div>

      </section>

      <section className="details-section" id="details" aria-labelledby="details-title">
        <div className="details-heading">
          <p className="kicker">Drop notes</p>
          <h2 id="details-title">Minimal on purpose. Built for everyday rotation.</h2>
        </div>
        <div className="details-grid">
          {materialNotes.map((note) => (
            <div className="detail-item" key={note}>
              <BadgeCheck size={21} strokeWidth={1.8} aria-hidden="true" />
              <span>{note}</span>
            </div>
          ))}
          <div className="detail-item accent-detail">
            <HeartHandshake size={22} strokeWidth={1.8} aria-hidden="true" />
            <span>Impact report posted after fulfillment</span>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <span>Contessa Shop</span>
        <Link href="https://www.pcrf.net/" target="_blank" rel="noreferrer">
          PCRF
          <ArrowUpRight size={15} strokeWidth={1.9} aria-hidden="true" />
        </Link>
      </footer>
    </main>
  );
}
