/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './List.css'
import logoR from './icon/VectorR.png'
import logoG from './icon/VectorG.png'

export const List = () => {
  return (
    <div>
      <div className="">
        <div className="Logoclass">
          <img src={logoR} alt="icon" className="vec" />
          <img src={logoG} alt="icon" className="vec" />
        </div>
        <ul className="cont">
          {' '}
          <li className="dec">
            <a href="#" className="ssylka" type="text/html">
              {' '}
              Сдать квартиру посуточно Киев{' '}
            </a>
          </li>{' '}
          <li className="dec">
            <a href="#" className="ssylka" type="text/html">
              {' '}
              Сдать апартаменты посуточно Киев{' '}
            </a>
          </li>{' '}
          <li className="dec">
            <a href="#" className="ssylka" type="text/html">
              {' '}
              Сдать дом посуточно Киев{' '}
            </a>
          </li>{' '}
          <li className="dec">
            <a href="#" className="ssylka" type="text/html">
              {' '}
              Сдать номер в гостинице Киев{' '}
            </a>
          </li>{' '}
          <li className="dec">
            <a href="#" className="ssylka" type="text/html">
              {' '}
              Сдать номер в отеле Киев{' '}
            </a>
          </li>
          <li className="dec">
            {' '}
            <a href="#" className="ssylka" type="text/html">
              {' '}
              Сдать место в хостеле Киев{' '}
            </a>
          </li>
          <li className="dec">
            {' '}
            <a href="#" className="ssylka" type="text/html">
              {' '}
              Сдать комнату в квартире посуточно Переяслав - Хмелницкий{' '}
            </a>
          </li>
          <li className="dec">
            {' '}
            <a href="#" className="ssylka" type="text/html">
              {' '}
              Сдать комнату в доме посуточно Переяслав - Хмелницкий{' '}
            </a>
          </li>
          <li className="dec">
            {' '}
            <a href="#" className="ssylka" type="text/html">
              {' '}
              Сдать номер в Guest House Киев{' '}
            </a>
          </li>
          <li className="dec">
            {' '}
            <a href="#" className="ssylka" type="text/html">
              {' '}
              Сдать номер в Capsule Hotel Киев{' '}
            </a>
          </li>
          <li className="dec">
            {' '}
            <a href="#" className="ssylka" type="text/html">
              {' '}
              Сдать номер в мотеле Киев{' '}
            </a>
          </li>
          <li className="dec">
            {' '}
            <a href="#" className="ssylka" type="text/html">
              {' '}
              Сдать жилье посуточно Киев{' '}
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
