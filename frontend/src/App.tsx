import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './App.module.css';

import profileImg from './assets/profile_1.png'
import profileImg2 from './assets/profile_2.png'
import profileImg3 from './assets/profile_3.png'
import profileImg4 from './assets/profile_4.png'
import profileImg5 from './assets/profile_5.png'


import {Header} from './components/Header';

export function App() {
  const [data, setData] = useState<{
    name: string,
    nickname: string,
    pdl: Int16Array
  
  
  }[]>([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/players')
      .then(response => setData(response.data));
  }, []);

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        

        <div>

          <h1 className={styles.title}>RANKING</h1>
          <p className={styles.player_nickname}>Última Atualização: 23/23/2023 18:00</p>

          <div className={styles.podium_list}>

          </div>

          <ul className={styles.ranking_list}>
              {/* {data.map(player => (
                <li>
                  <img src={profileImg} alt="" />
                  <p className={styles.player_name}>{player.name}</p>
                  <p className={styles.player_nickname}>{player.nickname}</p>
                  <p className={styles.player_pdl}>{player.pdl} PDL</p>
                </li>

              ))} */}
                <li>
                  <p className={styles.classification_number}>1</p>
                  <img src={profileImg} alt="" />              
                  <p className={styles.player_name}>Dannael Paz</p>
                  <p className={styles.player_nickname}>Nael</p>
                  <p className={styles.player_pdl}>385 PDL</p>
                </li>


                 <li>
                 <p className={styles.classification_number}>2</p>
                  <img src={profileImg2} alt="" />
                  <p className={styles.player_name}>Danilo Avelino</p>
                  <p className={styles.player_nickname}>Ventão</p>
                  <p className={styles.player_pdl}>345 PDL</p>
                </li> 

                 <li>
                 <p className={styles.classification_number}>3</p>
                  <img src={profileImg3} alt="" />
                  <p className={styles.player_name}>Anastácio Pires</p>
                  <p className={styles.player_nickname}>Naná</p>
                  <p className={styles.player_pdl}>305 PDL</p>
                </li>  

                 <li>
                 <p className={styles.classification_number}>4</p>
                  <img src={profileImg4} alt="" />
                  <p className={styles.player_name}>Edson Alencar</p>
                  <p className={styles.player_nickname}>Ed</p>
                  <p className={styles.player_pdl}>280 PDL</p>
                </li>  

                 <li>
                 <p className={styles.classification_number}>5</p>
                  <img src={profileImg5} alt="" />
                  <p className={styles.player_name}>Raffael Paz</p>
                  <p className={styles.player_nickname}>Break</p>
                  <p className={styles.player_pdl}>205 PDL</p>
                </li>       
          </ul>
        
      </div>

      </div>
    </>
  );
}