import style from '../css/Loading.module.css'
function Loading() {
    return (  <main className={style.main}>
    <div className={style.wrapper}>
        <span className={style.dot}></span>
        <span className={style.dot}></span>
        <span className={style.dot}></span>
        <span className={style.dot}></span>

    </div>
    
    </main>);
}

export default Loading;