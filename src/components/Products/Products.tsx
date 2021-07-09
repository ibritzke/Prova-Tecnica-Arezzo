import React, { useState } from "react";
import { usePaginator } from "@rpodwika/use-paginator";
import Data from "../../service/products.json";

//icon and images
import ImageDefault from "../../assets/notImage.jpg";
import { FiChevronRight } from "react-icons/fi";
import { FiChevronLeft } from "react-icons/fi";

//css
import "./Products.css";

export const Produtos = () => {
  const [produtos, setProdutos] = useState(Data.products);
  const [ordenar, setOrdenar] = useState<number>(1);
  const pageSize = 20;
  const {
    currentPage,
    setCurrentPage,
    pageItems,
    totalPages,
    nextPage,
    prevPage,
  } = usePaginator(produtos, pageSize);

  //image default
  const addDefaultSrc = (e: any) => {
    e.target.src = [ImageDefault];
  };
  const handleOrder = (event: number): any => {
    if (event === 1) {
      const res = produtos.sort((x, y) => {
        if (x.name < y.name) return -1;
        if (x.name > y.name) return 1;
        return 0;
      });
      return setProdutos(res), setOrdenar(1);
    }

    if (event === 2) {
      const res = produtos.sort((x, y) => {
        if (x.name > y.name) return -1;
        if (x.name < y.name) return 1;
        return 0;
      });
      return setProdutos(res), setOrdenar(2);
    }

    if (event === 3) {
      const res = produtos.sort((x, y) => {
        if (x.price > y.price) return -1;
        if (x.price < y.price) return 1;
        return 0;
      });
      return setProdutos(res), setOrdenar(3);
    }

    if (event === 4) {
      const res = produtos.sort((x, y) => {
        if (x.price < y.price) return -1;
        if (x.price > y.price) return 1;
        return 0;
      });
      return setProdutos(res), setOrdenar(4);
    }
  };

  return (
    <div className="container">
      <div className="main-header">
        <p className="title">NOVIDADES</p>
        <p className="subtitle">
          Novidades para você ficar linda e iluminada! Desde os metalizados, que
          trazem bossa para os looks, enfeitando mules e sandálias, ate sapatos
          confortáveis, perfeitos para momentos relax. As bolsas chegaram em
          shapes incríveis para complementar seu dia a dia!
        </p>
      </div>
      <div className="main">
        <div className="select">
          <select
            value={ordenar}
            onChange={(event) => handleOrder(Number(event.target.value))}
          >
            <option value="1">Nome A-Z</option>
            <option value="2">Nome Z-A</option>
            <option value="3">Maior valor</option>
            <option value="4">Menor valor</option>
          </select>
        </div>
        <div className="main-list">
          {pageItems.map((produto, index) => {
            return (
              <div className="product" key={index}>
                <img
                  onError={addDefaultSrc}
                  src={produto.image}
                  className="product-img"
                  alt=""
                />
                <p className="product-name">{produto.name}</p>
                <p className="product-price">R${produto.price}0</p>
              </div>
            );
          })}
        </div>
        <div className="main-pagination">
          {currentPage !== 1 ? (
            <div className="central" onClick={prevPage}>
              <FiChevronLeft />
            </div>
          ) : (
            <div />
          )}

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <div
              onClick={() => setCurrentPage(p)}
              data-is-active={p === currentPage}
              key={`page-${p}`}
              className="central"
            >
              {p}
            </div>
          ))}
          {currentPage !== totalPages ? (
            <div className="central" onClick={nextPage}>
              <FiChevronRight />
            </div>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
};
