import React from 'react'
import { Helmet } from "react-helmet";
import DescriptionsComp from '../../components/descriptionsComp/DescriptionsComp'
import DividerComp from '../../components/dividerComp/DividerComp'
import { content, descriptions } from '../../content/Content'
import kvartira from './img/kvartira.webp'
import css from '../PerevozMebel/PerevozMebel.module.css'

function KvartirPereezd() {

  return (
    <>
      <Helmet>
        <title>Квартирный переезд в Минске</title>
        <meta name="description" content="Квартирные переезды, аккуратная доставка мебели, есть грузчики. НЕДОРОГО. Звоните!" />
      </Helmet>
      <section className='container'>
        <article>
          <div className='main-title'>
            <p>Оказываем услугу</p>
            <h1>Квартирный переезд в Минске</h1>
          </div>

          <div className={css.mebelContent}>
            <div>
              <DescriptionsComp descriptions={descriptions.mebel} />
            </div>
            <img src={kvartira} alt='Перевозка мебели с квартиры' />
          </div>

          <div>
            <DividerComp content={content.kvartira} />
          </div>
        </article>
      </section>
    </>
  )
}

export default KvartirPereezd