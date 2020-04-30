
import Link from 'next/link'
import styles from './index.module.css'
import Iroute from '../../abstractions/Iroute';

const Route: React.FC<Iroute> = ({id, section, pageLink, imgLink}) => (
    <section id={id.toString()} className={styles.route} >
        <picture style={{backgroundImage: `url(${imgLink})`}}>
            <Link href={`/${pageLink}?name=${section}`} >
                <a>{section}</a>
            </Link>
        </picture>
    </section>
)

export default Route;



