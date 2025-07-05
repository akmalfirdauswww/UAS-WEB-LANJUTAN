const { getFile, getData, saveData } = require('../data/db');
const file = getFile('transactions');

exports.getAll = (req, res) => res.json(getData(file));

exports.create = (req, res) => {
  const items = getData(file);
  const newItem = { id: Date.now(), ...req.body };
  items.push(newItem);
  saveData(file, items);
  res.json(newItem);
};

exports.update = (req, res) => {
  const items = getData(file);
  const id = parseInt(req.params.id);
  const index = items.findIndex(p => p.id === id);
  if (index === -1) return res.status(404).json({ message: 'Transaction not found' });

  items[index] = { ...items[index], ...req.body };
  saveData(file, items);
  res.json(items[index]);
};

exports.remove = (req, res) => {
  const items = getData(file);
  const id = parseInt(req.params.id);
  const newItems = items.filter(p => p.id !== id);
  if (items.length === newItems.length) return res.status(404).json({ message: 'Transaction not found' });

  saveData(file, newItems);
  res.json({ message: 'Deleted successfully' });

};