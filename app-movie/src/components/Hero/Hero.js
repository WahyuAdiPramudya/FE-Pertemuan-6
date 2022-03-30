import style from "./Hero.module.css"

function Hero() {
    return (
        <div className={style.container}>
            <section className={style.hero}>
                <div className={style.hero__left}>
                    <h2 className={style.hero__title}>Spiderman</h2>
                    <h3 className={style.hero_genre}>Genre : Action, Drama, Romance</h3>
                    <p className={style.hero__description}>
                        ini adalah description
                    </p>
                    <button className={style.hero__button}>Watch</button>
                </div>
                <div className={style.hero__rigth}>
                    <img className={style.hero__image} src="https://images.bisnis-cdn.com/posts/2019/06/29/939271/spiderman1.jpg" alt="placeholder"/>
                </div>
            </section>
        </div>
    )
}

export default Hero;