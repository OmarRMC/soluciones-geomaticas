import { useState, useEffect, useRef } from 'react';
import style from '../css/StatsCounter.module.css';

const stats = [
    { icon: 'fa-solid fa-diagram-project', value: 150, suffix: '+', label: 'Proyectos Realizados' },
    { icon: 'fa-solid fa-calendar-check', value: 5, suffix: '+', label: 'Años de Experiencia' },
    { icon: 'fa-solid fa-users', value: 200, suffix: '+', label: 'Clientes Satisfechos' },
    { icon: 'fa-solid fa-user-tie', value: 10, suffix: '+', label: 'Profesionales' },
];

function AnimatedNumber({ target, active }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!active) return;
        setCount(0);
        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, duration / steps);
        return () => clearInterval(timer);
    }, [active, target]);

    return <>{count}</>;
}

function StatsCounter() {
    const [visible, setVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.15 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <section className={style.statsSection} ref={ref}>
            <div className={style.statsGrid}>
                {stats.map((stat, i) => (
                    <div className={style.statItem} key={i}>
                        <i className={`${stat.icon} ${style.statIcon}`}></i>
                        <span className={style.statNumber}>
                            <AnimatedNumber target={stat.value} active={visible} />
                            {stat.suffix}
                        </span>
                        <span className={style.statLabel}>{stat.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default StatsCounter;
