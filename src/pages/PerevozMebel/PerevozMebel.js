import React from 'react'
import { Helmet } from "react-helmet"
import css from './PerevozMebel.module.css'
import mebel from './img/mebel.png'
import DescriptionsComp from '../../components/descriptionsComp/DescriptionsComp'
import DividerComp from '../../components/dividerComp/DividerComp'
import { content, descriptions } from '../../content/Content'
// import { Divider, Tag, Row, Col } from 'antd'
// import { useScreens } from '../../Constants/constants'

function PerevozMebel() {
  // const screens = useScreens()
  return (
    <>
      {/* Current break point:{' '}
      {Object.entries(screens)
        .filter((screen) => !!screen[1])
        .map((screen) => (
          <Tag color="blue" key={screen[0]}>
            {screen[0]}
          </Tag>
        ))} */}
      <Helmet>
        <title>Перевозка мебели в Минске</title>
        <meta name="description" content="Офисные и квартирные переезды, доставка мебели, есть грузчики. НЕДОРОГО. Звоните!" />
      </Helmet>

      <section>
        <div className='container'>
          <article>

            <div className='main-title'>
              <p>Оказываем услугу</p>
              <h1>Перевозка мебели в Минске</h1>
            </div>


            <div className={css.mebelContent}>
              <div>
                <DescriptionsComp descriptions={descriptions.mebel} />
              </div>
              <img src={mebel} alt='Доствка мебели' />
            </div>


            <div>
              <DividerComp content={content.mebel} />
            </div>


          </article>
        </div>
      </section>
    </>
  )
}

export default PerevozMebel