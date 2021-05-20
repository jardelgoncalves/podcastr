import Image from 'next/image';
import { useContext } from 'react';
import Slider from 'rc-slider';

import { PlayerContext } from '../../contexts/PlayerContext';

import styles from './styles.module.scss';
import 'rc-slider/assets/index.css';

export function Player() {
  const { episodeList, currentEpisodeIndex } = useContext(PlayerContext)
  const episode = episodeList[currentEpisodeIndex]
  return (
    <section className={styles.playerContainer}>
      <header>
        <img src="/playing.svg" alt="Tocando agora"/>
        <strong>Tocando agora</strong>
      </header>

      {
        episode
          ? (
            <div className={styles.playing}>
              <Image
                width={592}
                height={592}
                src={episode.thumbnail}
                alt={episode.title}
                objectFit="cover"
              />
              <strong>{episode.title}</strong>
              <p>{episode.members}</p>
            </div>
          ): (
            <div className={styles.emptyPlayer}>
              <strong>Selecione um podcast para ouvir</strong>
            </div>
          )
      }

      <footer className={!episode ? styles.empty: ''}>
        <div className={styles.progress}>
          <span>00:00</span>
          {
            episode
              ? (
                <Slider />
              ): (
                <div className={styles.slider}>
                  <div className={styles.emptySlider}></div>
                </div>
              )
          }
          <span>00:00</span>
        </div>
        <div className={styles.controls}>
          <button type="button">
            <img src="/shuffle.svg" alt="Embaralhar" />
          </button>
          <button type="button">
            <img src="/play-previous.svg" alt="Tocar anterior" />
          </button>
          <button type="button" className={styles.playButton}>
            <img src="/play.svg" alt="Tocar" />
          </button>
          <button type="button">
            <img src="/play-next.svg" alt="Tocar proxima" />
          </button>
          <button type="button">
            <img src="/repeat.svg" alt="Repetir" />
          </button>
        </div>
      </footer>
    </section>
  )
}