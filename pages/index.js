import Head from "next/head";
import styles from './style.module.css'
import Image from "next/image";

const Index = () => {
    return (
        <div>
            <Head>
                <link rel="icon" type={'png/img'} href={'/logo_white.png'}/>
                <title>Диас - Диляра</title>
            </Head>
            <div className={styles.body}>
                <div className={styles.blur}>
                    <div className={styles.mainBlock}>
                        <div className={styles.whiteBlock}>
                            <h1 className={styles.dnd}>D<span className={styles.dndG}>&</span>D</h1>
                            <h1 className={styles.names}>Диас - Диляра</h1>
                            <span className={styles.date}>—— 24.04.2024 ——</span>
                        </div>

                        <Image src={'/List.png'} width={200} height={200} style={{transform: 'rotate(75deg)', marginTop: '-50px'}}/>
                    </div>

                    <div className={styles.secondBlock}>
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
                                <div style={{padding: '0 15px', boxSizing: 'border-box', display: 'flex', justifyContent: 'center'}}>
                                    МЕН
                                </div>
                                <span style={{display: 'flex', justifyContent: 'flex-end'}} className={styles.namesSecond}>Диляра</span>
                            </div>

                            <span style={{textAlign: 'center', display: 'block', }}>
                            үйлену тойына арналған салтанатты ақ дастарханымыздың қадірлі қонағы болуға шақырамыз! 
                            </span>
                        </div>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center', paddingBottom: 50}}>
                        <Image src={'/List.png'} width={200} height={200} style={{transform: 'rotate(75deg)', marginTop: '-50px'}}/>
                    </div>
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