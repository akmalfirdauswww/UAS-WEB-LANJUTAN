import React, { useState } from 'react';

const CategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState('');

  const handleAdd = () => {
    if (!name) return alert('Nama kategori wajib diisi!');
    setCategories([...categories, { id: Date.now(), name }]);
    setName('');
  };

  const handleDelete = (id) => {
    setCategories(categories.filter(c => c.id !== id));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Manajemen Kategori</h2>
      <input
        placeholder="Nama Kategori"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <button onClick={handleAdd}>Tambah</button>

      <ul>
        {categories.map(cat => (
          <li key={cat.id}>
            {cat.name} <button onClick={() => handleDelete(cat.id)}>Hapus</button>
          </li>
        ))}
        {categories.length === 0 && <p>Belum ada kategori.</p>}
      </ul>
    </div>
  );
};

export default CategoryPage;
