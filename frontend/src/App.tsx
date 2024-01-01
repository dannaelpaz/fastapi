import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './App.module.css';

import profileImg from './assets/profile_1.png'

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
        

        <main>

          <div className={styles.heading_info}>
            <p className={styles.title}>
              RANKING <br />
              <span className={styles.player_nickname}>Última Atualização: 23/23/2023 18:00</span>            
            </p>
            <button className={styles.new_draft_btn}>Novo Draft</button>
          </div>

          <div className={styles.podium_list}>
                <li className={styles.podium_place}>
                  <p className={styles.classification_number}>2ND</p>
                  <img src={profileImg} alt="" />              
                  <p className={styles.player_name}>Dannael Paz</p>
                  <p className={styles.player_nickname}>Nael</p>
                  <p className={styles.podium_pdl}>385 PDL</p>
                </li>

                <li className={styles.podium_leader}>
                  <p className={styles.classification_number}>1ST</p>
                  <img src={profileImg} alt="" />              
                  <p className={styles.player_name}>Dannael Paz</p>
                  <p className={styles.player_nickname}>Nael</p>
                  <p className={styles.podium_pdl}>385 PDL</p>
                </li>

                <li className={styles.podium_place}>
                  <p className={styles.classification_number}>3ND</p>
                  <img src={profileImg} alt="" />              
                  <p className={styles.player_name}>Dannael Paz</p>
                  <p className={styles.player_nickname}>Nael</p>
                  <p className={styles.podium_pdl}>385 PDL</p>
                </li>
          </div>

          <ul className={styles.ranking_list}>
              {data.map(player => (
                <li>
                  <p className={styles.classification_number}>1</p>
                  <img src={profileImg} alt="" />
                  <p className={styles.player_name}>{player.name}</p>
                  <p className={styles.player_nickname}>{player.nickname}</p>
                  <p className={styles.player_pdl}>{player.pdl} PDL</p>
                </li>

              ))}
                
          </ul>
        
      </main>

      </div>
    </>
  );
}