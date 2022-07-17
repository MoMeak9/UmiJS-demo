import {Link, Outlet, history} from 'umi';
import styles from './index.less';

export default function Layout() {
    const goBack = () => {
        history.back()
    }

    const pushTo = () => {
        history.push({
            pathname: '/list',
            search: '?a=b&c=d',
            hash: 'anchor',
        });
    }

    return (
        <div className={styles.navs}>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/docs">Docs</Link>
                </li>
                <li>
                    <Link to="/user">User</Link>
                </li>
                <li>
                    <Link to="/data">Data</Link>
                </li>
                <li>
                    <a href="https://github.com/umijs/umi">Github</a>
                </li>
            </ul>
            <div>
                <h2>History API</h2>
                <div>{history.location.pathname}</div>
                <div>{history.location.search}</div>
                <div>{history.location.hash}</div>
                <button type={"button"} onClick={goBack}>goBack</button>
                <button type={"button"} onClick={pushTo}>pushTo</button>
            </div>
            {/*<Navigate to={'/docs'}/>*/}
            <Outlet/>
        </div>
    );
}
