import React, { useState } from 'react'
import { Categories } from '../../data'
import Loyout from '../Loyout'
import './Category.css'

export default function Category() {
    const [categ, setCateg] = useState('')



    const handleSubmit = () => {
        console.log(categ, 'CATEG')
    }


    return (
        <Loyout>

            <div className='category-container'>
                <div className='left-cat-container'>
                    <p className='categ-header'>არსებული კატეგორიები</p>
                    <div className='categories-container'>
                        {Categories ? (Categories.map((val, idx) => {
                            return (
                                <div key={idx} className='categs'>
                                    <p>{idx + 1} {val.name}</p>
                                    <button className='delete-btn' onClick={() => null}>წაშლა</button>
                                </div>
                            )
                        })) : (
                            <p>...Loading</p>
                        )}
                    </div>
                </div>
                <div className='right-cat-container'>
                    <p className='categ-header'> დაამატეთ ახალი კატეგორია</p>
                    <form onSubmit={() => handleSubmit()} className='add-category'>

                        <label className='label' htmlFor='categName'>შეიყვანეთ კატეგორიის სახელი</label>
                        <input
                            id="categName"
                            name="categName"
                            type="text"
                            onChange={(val) => setCateg(val.target.value)}
                            variant="outlined"
                            label="categName"
                            className='user-input'
                            required
                        />
                        <button className='submit-btn' type='submit'>დამატება</button>
                    </form>

                </div>
            </div>
        </Loyout>
    )
}
