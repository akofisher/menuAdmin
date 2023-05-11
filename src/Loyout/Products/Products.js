import React, { useEffect, useRef, useState } from 'react'
import { Categories } from '../../data'
import Loyout from '../Loyout'
import './Products.css'
import { Prod } from '../../data'
import ProductCard from '../../Components/ProductCard/ProductCard'

export default function Products() {
    const [id, setId] = useState()
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [YrO, setYrO] = useState(true)
    const ref = useRef(0)
    const goTo = useRef()

    const handleChoosing = (e) => {
        let cbs = document.getElementsByClassName('checkOr')
        for (var i = 0; i < cbs.length; i++) {
            cbs[i].checked = false;
        }
        e.checked = true;
    }
    const handleSubmit = () => {

    }




    return (
        <Loyout>

            <div className='products-container'>
                <div className='head-prod-container'>
                    <p className='categ-header'>აირჩიეთ ერთი კატეგორია</p>
                    <div className='flexible-slider'>

                        <button
                            className="BTNLEFT"
                            onClick={() => (goTo.current.scrollLeft -= 100)}
                        >
                            {'<'}
                        </button>
                        <div className='choose-categ' ref={goTo}>
                            {Categories.map((val, idx) => {

                                return (
                                    <div ref={ref} className='choose-categs' key={idx}>
                                        <input type='checkbox' id={val.name} name={val.name} className='checkOr' />
                                        <label className='categ-label' htmlFor={val.name}>{val.name}</label>
                                    </div>
                                )
                            })}
                        </div>
                        <button
                            className="BTNRIGHT"
                            onClick={() => (goTo.current.scrollLeft += 100)}
                        >
                            {'>'}
                        </button>
                    </div>
                </div>
                <div className='main-prod-container'>
                    <div className='left-prod-container'>
                        <p className='categ-header'>არსებული პროდუქტები კატეგორიაში</p>
                        {Prod ? (
                            Prod.map((val, idx) => {
                                return (
                                    <ProductCard props={val} key={idx} />
                                )
                            })
                        ) : (<p>...Loading</p>)}
                    </div>

                    <div className='right-prod-container'>
                        <p className='categ-header'>დაამატეთ ახალი პროდუქტი</p>
                        <form onSubmit={() => handleSubmit()} className='flexible-form'>

                            <div className='inp-conte'>

                                <label className='label' htmlFor='avatar'>ატვირთეთ ფოტო*</label>
                                <input type="file"
                                    id="avatar" name="avatar"
                                    accept="image/png, image/jpeg" className='pass-input'></input>
                            </div>
                            <div className='inp-conte'>

                                <label className='label' htmlFor='prodName'>შეიყვანეთ პროდუქტის სახელი*</label>
                                <input
                                    id="prodName"
                                    name="prodName"
                                    type="text"
                                    onChange={(val) => setPassword(val.target.value)}
                                    variant="outlined"
                                    label="პაროლი"
                                    className='pass-input'
                                    required
                                />
                            </div>
                            <div className='inp-conte'>

                                <label className='label' htmlFor='description'>შეიყვანეთ პროდუქტის აღწერა*</label>
                                <textarea id="description"
                                    required name="description" className='texarea-description' variant="outlined" type='text' />
                            </div>
                            <div className='inp-conte'>

                                <label className='label' htmlFor='price'>შეიყვანეთ პროდუქტის ფასი*</label>
                                <input id="price" required
                                    name="price" className='pass-input' variant="outlined" type='text' />
                            </div>
                            <div className='inp-conte'>

                                <div className='choose-categs' >
                                    <input onChange={() => {
                                        if (YrO == false) {
                                            setYrO(true)
                                        } else {
                                            setYrO(false)
                                        }
                                    }} variant="outlined" type='checkbox' id='onSale' name='onSale' className='checkOr' />
                                    <label className='categ-label' htmlFor='onSale'>ფასდაკლებაში მონიშვნა</label>
                                </div>

                            </div>
                            <div className='inp-conte'>

                                <label className='label' htmlFor='salePrice'>შეიყვანეთ ფასდაკლებული ფასი</label>
                                <input id="salePrice"
                                    name="salePrice" disabled={YrO} className='pass-input' variant="outlined" type='text' />
                            </div>
                            <div className='inp-conte'>

                                <label className='label' htmlFor='volume'>შეიყვანეთ პროდუქტის მოცულობა (მაგ: 1მლ, 1ლ, 1გრ, 1კგ)*</label>
                                <input id="volume" required
                                    name="volume" className='pass-input' variant="outlined" type='text' />
                            </div>
                            <button className='submit-btn' type="submit">
                                პროდუქტის დამატება
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </Loyout>

    )
}
