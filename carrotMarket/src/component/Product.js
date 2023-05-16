import React, { useState } from 'react';
import '../css/Product.css';
import image1 from '../assets/image/1.jpeg';
import image2 from '../assets/image/2.jpeg';
import image3 from '../assets/image/3.jpeg';
import image4 from '../assets/image/4.jpeg';
import image5 from '../assets/image/5.jpeg';

const Product = () => {

  const [productList, setProductList] = useState([
    { idx: 1, img: image1, title: '소니 헤드셋 팔아요', place: '방화동', time: '19초 전', price: '260,000원' },
    { idx: 2, img: image2, title: '갤럭시워치3 40mm 실버', place: '공항동', time: '4시간 전', price: '130,000원' },
    { idx: 3, img: image3, title: '도자기인형 판매', place: '방화동', time: '30분 전', price: '230,000원' },
    { idx: 4, img: image4, title: '곰인형 판매합니다', place: '방화동', time: '6시간 전', price: '60,000원' },
    { idx: 5, img: image5, title: '미개봉 선풍기 급매합니다', place: '공항동', time: '1일 전', price: '50,000원' },
    { idx: 6, img: image5, title: '선풍기 급매', place: '공항동', time: '2일 전', price: '50,000원' },
  ])

  console.log(productList)

  return (
    <div className='product'>
      <div className='propduct__blind--msg'>화면을 줄여주세요</div>
      {productList.map((item, idx)=>{
        return(
          <div className='product-list' key={idx}>
            <div className='product-list__img'>
              <img src={item.img} alt={item.idx}/>
            </div>
            <div className='product-list__info'>
              <div className='product-list__info--title'>{item.title}</div>
              <div className='product-list__info--meta'>
                <span>{item.place}</span> · <span>{item.time}</span>
              </div>
              <div className='product-list__info--price'>{item.price}</div>
            </div>
          </div>
        )
      })}
      <div className='write__btn'>+ 글쓰기</div>
      <div className='write__btn--small'>+</div>
    </div>
  )
}

export default Product;
