import { useMemo } from "react";
import { List, ListRowRenderer } from "react-virtualized";
import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
  totalPrice: number;
  results: Array<{
    id: number;
    title: string;
    price: number;
    priceFormatted: string;
  }>;
  onAddToWishList: (id: number) => void;
}

export default function SearchResults({
  results,
  onAddToWishList,
  totalPrice,
}: SearchResultsProps) {
  const rowRenderer: ListRowRenderer = ({ index, key, style }) => (
    <div key={key} style={style}>
      <ProductItem product={results[index]} onAddToWishList={onAddToWishList} />
    </div>
  );
  return (
    <div>
      <h2>{totalPrice}</h2>
      <List
        height={300}
        rowHeight={30}
        width={900}
        overscanColumnCount={5}
        rowCount={results.length}
        rowRenderer={rowRenderer}
      />
      {/* {results.map(product => {
        return (
          <ProductItem
            product={product}
            key={product.id}
            onAddToWishList={onAddToWishList}
          />
        );
      })} */}
    </div>
  );
}
