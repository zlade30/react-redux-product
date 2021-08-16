import React, { useEffect, useState } from 'react';
import ReactModal from 'react-modal';

const Modal = ({
  isOpen,
  onClose,
  title = 'Add Product',
  onSubmit,
  formValue,
  setFormValue
}) => {
  const [selectedImg, setSelectedImg] = useState(null);

  const onHandleImage = (event) => {
    console.log(URL.createObjectURL(event.target.files[0]))
    if(event.target.files[0]) {
      setSelectedImg(URL.createObjectURL(event.target.files[0]))
      setFormValue({
        ...formValue,
        image: URL.createObjectURL(event.target.files[0])
      })
    }
  }

  useEffect(() => {
    if (isOpen) setSelectedImg(null)
  }, [isOpen])

  return (
    <ReactModal
      isOpen={isOpen}
      style={{
        content: {
          width: 400,
          height: 400,
          position: 'absolute',
          top: '40%',
          left: '42%',
          marginTop: '-40px',
          marginLeft: '-50px'
        }
      }}
      onRequestClose={onClose}
      contentLabel={title}
    >
      <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <label>{title}</label>
        <label onClick={onClose} style={{ cursor: 'pointer', color: 'blue' }}>close</label>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', paddingTop: 20 }}>
        <div style={{ marginBottom: 20 }}>
          <input type="file" onChange={onHandleImage}/>
          {selectedImg || formValue.image ? <img style={{ height: 100, width: 200, objectFit: 'contain' }} src={selectedImg || formValue.image}/> : <div />}
        </div>
        <input
          value={formValue.name}
          placeholder="Name"
          onChange={(evt) => setFormValue({ ...formValue, name: evt.target.value })}
          style={{ height: 30, marginBottom: 20 }}
        />
        <input
          type="number"
          value={parseInt(formValue.price)}
          placeholder="price"
          onChange={(evt) => setFormValue({ ...formValue, price: evt.target.value })}
          style={{ height: 30, marginBottom: 20 }}
        />
        <button onClick={onSubmit} style={{ height: 30 }}>{title}</button>
      </div>
    </ReactModal>
  )
}

export default Modal;