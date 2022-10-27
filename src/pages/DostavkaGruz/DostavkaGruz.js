import React from 'react'
import { Helmet } from "react-helmet";
import DescriptionsComp from '../../components/descriptionsComp/DescriptionsComp'
import DividerComp from '../../components/dividerComp/DividerComp'
import { content, descriptions } from '../../content/Content'
import gruz from './img/gruz.webp'
import css from '../PerevozMebel/PerevozMebel.module.css'

function DostavkaGruz() {

  return (
    <>
      <Helmet>
        <title>Доставка грузов Минск</title>
        <meta name="description" content="Доставка любых грузов, есть грузчики. НЕДОРОГО. Звоните!" />
      </Helmet>
      <section className='container'>
        <article>
          <div className='main-title'>
            <p>Оказываем услугу</p>
            <h1>Доставка грузов в Минске</h1>
          </div>


          <div className={css.mebelContent}>
            <div>
              <DescriptionsComp descriptions={descriptions.gruz} />
            </div>
            <img src={gruz} alt='Перевозка мебели с квартиры' />
          </div>

          <div>
            <DividerComp content={content.gruz} />
          </div>
        </article>
      </section>
    </>
  )
}

export default DostavkaGruz