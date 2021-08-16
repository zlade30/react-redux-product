import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from './components/Modal';
import Product from './components/Product';
import Search from './components/Search';
import { addProductAction, removeProductAction, searchProductAction, updateProductAction } from './redux/actions/product.action';

function App() {

  const dispatch = useDispatch()
  const products = useSelector((state) => state.product.products);
  const [formValue, setFormValue] = useState({
    name: '',
    price: '',
    image: ''
  })
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState('Add Product')
  const [productList, setProductList] = useState([])

  useEffect(() => {
    setProductList(products)
  }, [products])

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 40,
        padding: 20
      }}
    >
      <Modal
        isOpen={showModal}
        onSubmit={(e) => {
          e.preventDefault()
          if (title === 'Add Product')
            dispatch(addProductAction({ ...formValue, id: (Math.random() + 1).toString(36).substring(7) }))
          else
            dispatch(updateProductAction(formValue))
          setShowModal(false)
        }}
        formValue={formValue}
        title={title}
        setFormValue={setFormValue}
        onClose={() => {
          setShowModal(false)
          setFormValue({
            name: '',
            price: '',
            image: ''
          })
        }}
      />
      <Search onSearch={(evt) => setProductList(prevList => products.filter((product) => product.name.toLowerCase().includes(evt.target.value.toLowerCase())))} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', width: '100%', paddingTop: 20, paddingBottom: 20 }}>
        {
          productList.map(product =>
            <Product
              key={product.id}
              product={product}
              onUpdate={() => {
                setFormValue(product)
                setTitle('Update Product')
                setShowModal(true)
              }}
              onDelete={() => dispatch(removeProductAction(product))}
            />
          )
        }
        <div
          style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <button
            onClick={() => {
              setShowModal(true)
              setFormValue({
                name: '',
                price: '',
                image: ''
              })
              setTitle('Add Product')
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
