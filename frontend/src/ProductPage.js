import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: '', price: '' });
  const [editingId, setEditingId] = useState(null);

  const loadProducts = () => {
    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data));
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    if (editingId) {
      axios.put(`http://localhost:5000/api/products/${editingId}`, form)
        .then(() => {
          setForm({ name: '', price: '' });
          setEditingId(null);
          loadProducts();
        });
    } else {
      axios.post('http://localhost:5000/api/products', form)
        .then(() => {
          setForm({ name: '', price: '' });
          loadProducts();
        });
    }
  };

  const handleEdit = (product) => {
    setForm({ name: product.name, price: product.price });
    setEditingId(product.id);
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/products/${id}`)
      .then(() => loadProducts());
  };

  return (
    <div>
      <h2>Products</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          placeholder="Price"
          type="number"
          value={form.price}
          onChange={e => setForm({ ...form, price: e.target.value })}
          required
        />
        <button type="submit">{editingId ? 'Update' : 'Add'} Product</button>
      </form>
      <ul>
        {products.map(p => (
          <li key={p.id}>
            {p.name} - ${p.price}
            <button onClick={() => handleEdit(p)}>Edit</button>
            <button onClick={() => handleDelete(p.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductPage;