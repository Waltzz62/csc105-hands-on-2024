export const addItem = (newItem, items, setItems, setNewItem) => {
    if (newItem.trim() !== "") {
      setItems([...items, { id: Date.now(), name: newItem, isBought: false }]);
      setNewItem("");
    }
  };
  
  export const toggleBought = (id, items, setItems) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, isBought: !item.isBought } : item
      )
    );
  };
  
  export const removeItem = (id, items, setItems) => {
    setItems(items.filter((item) => item.id !== id));
  };
  
  export const editItem = (id, items, setItems) => {
    const newName = prompt("Edit item name:");
    if (newName) {
      setItems(
        items.map((item) =>
          item.id === id ? { ...item, name: newName } : item
        )
      );
    }
  };  