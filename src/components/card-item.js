import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './Item.css'

// import {DEC_COUNTER,INC_COUNTER} from '../redux/action-types'
import { decCounter, incCounter } from '../redux/action-creators'

export const CardItem = () => {
  const counter = useSelector(({ counter }) => counter)

  const dispatch = useDispatch()

  const handInc = () => {
    dispatch(incCounter)
  }
  const handDec = () => {
    dispatch(decCounter)
  }
  useEffect(() => {
    const addBed = document.getElementsByClassName('img-b')[0]

    addBed.addEventListener('click', () => {
      handInc()
      console.log('click')
      addBed.style.color = 'red'
    })
    addBed.addEventListener('dblclick', () => {
      handDec()
      console.log('dblclick')
      addBed.style.color = 'blue'
    })
  }, [])

  return (
    <div>
      <div className="container">
        <div className="container-St">
          <div className="Kiev">Киев</div>
          <div className="Ua">Україна</div>
        </div>
        <div className="container-i">
          <div className=" container-img">
            <img
              className="img-m"
              src=" `./png/image.jpg` "
              alt="Majdan Nezaleznosti"
            />
          </div>
          <div className="i-count">
            <div className="container-bed ">
              <img
                id="imgBed"
                className="img-b"
                src="../png/Vector2.png"
                alt="2bed"
              />

              <div className="i-b-2">
                <img className="img-b2" src="./png/Vector2.png" alt="2bed" />
                <img className="img-b2" src="./png/Vector2.png" alt="2bed" />
              </div>
              <div>
                {' '}
                <img className="img-b1" src="./png/Vector.png" alt="one-bed" />
              </div>
            </div>
            <div className="container-p-count">
              <div className="div-count">{counter}</div>
              <div className="div-count">2$</div>
              <div className="div-count">2$</div>
            </div>
          </div>
        </div>

        <div className="container-list">
          <a href="q" className="Gos">
            Гостиницы
          </a>
          <a href="q" className="Hos">
            Хостелы{' '}
          </a>
          <a href="q" className="Kom-P">
            Комнаты посуточно
          </a>
          <a href="q" className="K-ot">
            Курортные отели
          </a>
          <a href="f" className="Kv-P">
            Квартиры посуточно{' '}
          </a>
          <a href="f" className="D-P">
            Дома посуточно{' '}
          </a>
          <a href="f" className="D-O">
            Дома для отпуска{' '}
          </a>
          <a href="f" className="All-v">
            Все варианты{' '}
          </a>
        </div>
      </div>
    </div>
  )
}
