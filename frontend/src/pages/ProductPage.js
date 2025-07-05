import React, { useState } from 'react';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleAddProduct = () => {
    if (!name || !price) return alert('Isi nama dan harga!');
    const newProduct = {
      id: Date.now(),
      name,
      price: parseFloat(price),
    };
    setProducts([...products, newProduct]);
    setName('');
    setPrice('');
  };

  const handleDelete = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Manajemen Produk</h2>

      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Nama Produk"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <input
          type="number"
          placeholder="Harga"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <button onClick={handleAddProduct}>Tambah Produk</button>
      </div>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Nama</th>
            <th>Harga</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {products.map(prod => (
            <tr key={prod.id}>
              <td>{prod.name}</td>
              <td>Rp {prod.price.toLocaleString()}</td>
              <td>
                <button onClick={() => handleDelete(prod.id)}>Hapus</button>
              </td>
            </tr>
          ))}
          {products.length === 0 && (
            <tr><td colSpan="3">Belum ada produk.</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductPage;
