import { typeProduct } from 'Type/TypeInterface';
import React, { useEffect, useState } from 'react';
interface ProductProps {
  product: typeProduct | null;
}
const ProductRecentItems: React.FC<ProductProps> = ({ product }) => {
  const [recentItems, setRecentItems] = useState<typeProduct[]>([]);
  useEffect(() => {
    const recentItemsString = localStorage.getItem('recentItems');
    const recentItems = recentItemsString ? JSON.parse(recentItemsString) : [];

    const updatedItems = [...recentItems, product];
    setRecentItems(updatedItems);

    if (updatedItems.length > 5) {
      updatedItems.shift();
    }

    localStorage.setItem('recentItems', JSON.stringify(updatedItems));

    setTimeout(
      () => {
        localStorage.removeItem('recentItems');
      },
      24 * 60 * 60 * 1000,
    );
  }, [product]);

  return (
    <>
      <div
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        {recentItems.map((item, index) => (
          <div key={index}>
            <div>
              <img
                src={item?.img}
                style={{ width: '100px' }}
                alt={item?.title}
              />
              <h2>{item?.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductRecentItems;
