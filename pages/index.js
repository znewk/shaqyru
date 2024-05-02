import Head from "next/head";
import styles from './style.module.css'
import Image from "next/image";
import { useState, useRef } from 'react';

const Index = () => {

    const [isPlaying, setIsPlaying] = useState(true); // Состояние, отслеживающее, воспроизводится ли музыка
    const audioRef = useRef(); // Создаем ссылку на элемент аудио

    const handlePlayPause = () => {
        if (isPlaying) {
        audioRef.current.pause(); // Ставим на паузу
        } else {
        audioRef.current.play(); // Воспроизводим
        }
        setIsPlaying(!isPlaying); // Меняем состояние
    };
    return (
        <div>
            
            <div className={styles.fixed}></div>
            <Head>
                <link rel="icon" type={'png/img'} href={'/logo_white.png'}/>
                <title>Диас - Диляра</title>
            </Head>
            <div className={styles.body}>
                <div className={styles.blur}>
                {/* <button onClick={handlePlayPause} className={styles.playPauseButton}>
                    {isPlaying ? 'Пауза' : 'Играть'}
                </button> */}
                <div className={styles.playBtn} onClick={handlePlayPause}>
                    {/* <Image src={'/play.png'} onClick={handlePlayPause} height={32} width={32} className={styles.play}/> */}
                    {
                        isPlaying ? (
                            <>
                                <Image src={'/pause.png'}height={32} width={32} className={styles.play}/>
                            </>
                        ) : (
                            <>
                                <Image src={'/play.png'}  height={32} width={32} className={styles.play}/>
                            </>
                            
                        )
                    }
                </div>
                
                    <div className={styles.mainBlock}>
                        <div className={styles.whiteBlock}>
                            <h1 className={styles.dnd}>D<span className={styles.dndG}>&</span>D</h1>
                            <h1 className={styles.names}>Диас - Диляра</h1>
                            <span className={styles.date}>—— 29.06.2024 ——</span>
                        </div>

                        <Image src={'/List.png'} width={200} height={200} style={{transform: 'rotate(75deg)', marginTop: '-50px'}}/>
                    </div>

                    <div className={styles.secondBlock} style={{paddingBottom: 30}}>
                        <div className={styles.header}>
                            <span>———</span>
                            <div style={{padding: '0 15px', boxSizing: 'border-box'}}>
                                <span>Құрметті</span> <br/>
                                <span style={{display: 'flex', justifyContent: 'flex-end'}}>Қонақтар!</span>
                            </div>
                            <span style={{display: 'flex', justifyContent: 'flex-end'}}>———</span>
                        </div>

                        <div className={styles.subSecond}>
                            <span style={{whiteSpace: 'nowrap', display: 'flex', justifyContent: 'center'}}>
                                Сіздерді балаларымыз 
                            </span>

                            <div style={{padding: '15px 0'}}>
                                <span className={styles.namesSecond}>Диас</span>
                                <div style={{padding: '0 15px', boxSizing: 'border-box', display: 'flex', justifyContent: 'center', marginTop: '-20px'}}>
                                    &
                                </div>
                                <span style={{display: 'flex', justifyContent: 'flex-end'}} className={styles.namesSecond}>Диляра</span>
                            </div>

                            <span style={{textAlign: 'center', display: 'block', }}>
                            үйлену тойына арналған салтанатты ақ дастарханымыздың қадірлі қонағы болуға шақырамыз! <br/> <br/>
                            той иелерІ:   <br/>
                            <span className={styles.namesss}>Бахытжан - Айгуль</span>
                            </span>
                        </div>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center', paddingBottom: 50}}>
                        <Image src={'/List.png'} width={200} height={200} style={{transform: 'rotate(75deg)', marginTop: '-50px'}}/>
                    </div>

                    <div className={styles.secondBlock}>
                        <div className={styles.header}>
                            <span style={{display: 'block', textAlign: 'center'}}>———————————</span>

                            <div style={{display: 'flex', justifyContent: 'space-between', fontSize:24}}>
                                <span>29 МАУЫСЫМ</span>
                                <span>2024</span>
                            </div>
                            <span style={{display: 'block', textAlign: 'center'}}>———————————</span>
                        </div>

                        <div className={styles.subSecond}>
                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                <Image src={'/calendar.png'} width={300} height={300} style={{marginTop: '-50px'}}/>
                            </div>
                        </div>

                        <div className={styles.header} style={{marginTop: '-30px'}}>
                            <span style={{display: 'block', textAlign: 'center'}}>БАСТАЛУЫ</span>
                            <span style={{display: 'block', textAlign: 'center'}}>16:00</span>
                        </div>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center', paddingBottom: 50}}>
                        <Image src={'/List.png'} width={200} height={200} style={{transform: 'rotate(75deg)', marginTop: '-50px'}}/>
                    </div>

                    <div className={styles.secondBlock} style={{paddingBottom: 30}}>
                        <div className={styles.header} style={{paddingBottom: 0}}>
                            <span>———</span>
                            <div style={{padding: '0 15px', boxSizing: 'border-box'}}>
                                <span>Мекен-жайымыз:</span> <br/>
                            </div>
                            <span style={{display: 'flex', justifyContent: 'flex-end'}}>———</span>
                        </div>

                        <div className={styles.subSecond}>
                            <div style={{padding: '15px 0'}}>
                                <span style={{display: 'flex', justifyContent: 'center'}} className={styles.namesSecond}>Dilu Plaza</span>
                            </div>
                            <span style={{whiteSpace: 'nowrap', display: 'flex', justifyContent: 'center'}}>
                                банкет залы 
                            </span> <br></br>

                            <span style={{textAlign: 'center', display: 'block', }}>
                            сіздерге ыңғайлы болуы үшін төменде көрсетілген 2gis картаны пайдалануыңызды сұраймыз
                            </span>
                        </div>

                        <a href="https://2gis.kz/astana/geo/70000001055312155" className={styles.link}>2GIS</a>
                    </div>


                    <div className={styles.secondBlock} style={{marginTop: 30}}>
                        <div className={styles.header} style={{paddingBottom: 0}}>
                            <span>———</span>
                            <div style={{padding: '0 15px', boxSizing: 'border-box', textAlign: 'center'}}>
                                <span>Той күнінің бағдарламасы:</span> <br/>
                            </div>
                            <span style={{display: 'flex', justifyContent: 'flex-end'}}>———</span>
                        </div>


                        <div className={styles.wrapper}>
                            <div className={styles.row}>
                                <Image src={'/IMG_0896.png'} height={100} width={100}/>

                                <div className={styles.item}>
                                    <span className={styles.time}>16:00</span> <br/>
                                    <span style={{marginTop: '-10px'}}>Қонақтардың жиналуы</span>
                                </div>
                            </div>


                            <div className={styles.row}>
                                <div className={styles.item}>
                                    <span className={styles.time}>16:30</span> <br/>
                                    <span style={{marginTop: '-10px'}}>фотосессия, Фуршет</span>
                                </div>

                                <Image src={'/IMG_0898.png'} height={100} width={100}/>
                            </div>

                            <div className={styles.row}>
                                <Image src={'/IMG_0901.png'} height={100} width={100}/>

                                <div className={styles.item}>
                                    <span className={styles.time}>17:00</span> <br/>
                                    <span style={{marginTop: '-10px'}}>Тойдың басталуы</span>
                                </div>
                            </div>

                            <div className={styles.row}>
                                <div className={styles.item}>
                                    <span className={styles.time}>20:00</span> <br/>
                                    <span style={{marginTop: '-10px'}}>Қалыңдық пен күйеужігіт вальсі</span>
                                </div>

                                <Image src={'/IMG_0905.png'} height={100} width={100}/>
                            </div>

                            <div className={styles.row}>
                                <Image src={'/IMG_0909.png'} height={100} width={100}/>

                                <div className={styles.item}>
                                    <span className={styles.time}>21:00</span> <br/>
                                    <span style={{marginTop: '-10px'}}>Музыкалық би, шоу бағдарлама</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{display: 'flex', justifyContent: 'center', paddingBottom: 50}}>
                        <Image src={'/List.png'} width={200} height={200} style={{transform: 'rotate(75deg)', marginTop: '-50px'}}/>
                    </div>

                    <div className={styles.secondBlock} style={{marginTop: 30, paddingTop: 30}}>
                        <span className={styles.namesss} style={{display: 'block', textAlign: 'center', fontSize: 64}}>Дресс код:</span>

                        <div className={styles.wrapper2}>
                            <div className={styles.wrapperItem}>
                                <Image src={'/2.png'} height={100} width={120}/>
                                <span>
                                Ерлер қауымы: Классикалық костюм     
                                </span>
                            </div>
                            <div className={styles.wrapperItem}>
                                <Image src={'/1.png'} height={100} width={120}/>
                                <span>
                                Ерлер қауымы: Классикалық костюм     
                                </span>
                            </div>
                        </div>


                        <div className={styles.header}>
                            <span>———</span>
                            <div style={{padding: '0 15px', boxSizing: 'border-box', textAlign: 'center'}}>
                                <span>Келіңіздер, тойымыздың қадірлі қонағы болыңыздар! </span> <br/>
                            </div>
                            <span style={{display: 'flex', justifyContent: 'flex-end'}}>———</span>
                        </div>
                        
                    </div>

                    <div style={{display: 'flex', justifyContent: 'center', paddingBottom: 50}}>
                        <Image src={'/List.png'} width={200} height={200} style={{transform: 'rotate(75deg)', marginTop: '-50px'}}/>
                    </div>

                    <audio src="/music.mp4" autoPlay loop ref={audioRef}/>
                </div>
            </div>







            <style jsx global>
                {`
                  body {
                    margin: 0;
                  }
                `}
            </style>
        </div>
    )
}

export default Index;