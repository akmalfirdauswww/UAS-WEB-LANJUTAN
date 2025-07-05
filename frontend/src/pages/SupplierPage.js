import React, { useState } from 'react';

const SupplierPage = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [name, setName] = useState('');

  const handleAdd = () => {
    if (!name) return alert('Nama supplier wajib diisi!');
    setSuppliers([...suppliers, { id: Date.now(), name }]);
    setName('');
  };

  const handleDelete = (id) => {
    setSuppliers(suppliers.filter(s => s.id !== id));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Manajemen Supplier</h2>
      <input
        placeholder="Nama Supplier"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <button onClick={handleAdd}>Tambah</button>

      <ul>
        {suppliers.map(sup => (
          <li key={sup.id}>
            {sup.name} <button onClick={() => handleDelete(sup.id)}>Hapus</button>
          </li>
        ))}
        {suppliers.length === 0 && <p>Belum ada supplier.</p>}
      </ul>
    </div>
  );
};

export default SupplierPage;
