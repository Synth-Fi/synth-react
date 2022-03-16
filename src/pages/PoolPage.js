import pool_data from '../pool_data';
import PoolBox from '../components/PoolBox';
export default function PoolPage(props) {

    return (
        <div className=" m-6">
        {/* LIST OF POOLS TO DEPOSIT INTO */}
        {pool_data.pools.map((pool, i) => {
            return ( <PoolBox key={i} {...pool} /> );
        })}

        {/* YOUR ASSETS */}
        </div>
    );
}