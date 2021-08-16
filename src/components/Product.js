import React from 'react';

const Product = ({ product, onUpdate, onDelete }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: 230,
        height: 400,
        marginBottom: 20,
        borderRadius: 10,
        border: '1px solid gray',
        padding: 10
      }}
    >
      <img src={product.image} style={{ width: 200, height: 160, borderRadius: 10, marginBottom: 20, objectFit: 'cover' }} />
      <label>{product.name}</label>
      <label style={{ marginTop: 10, marginBottom: 20 }}>{`Price: ${product.price}`}</label>
      <button onClick={onUpdate}>Update</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  )
}

export default Product