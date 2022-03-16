// import OutlinedBox from "./OutlinedBox";

export default function PoolBox(pool) {
    return (
        <div className=" bg-blac border-8 border-pink rounded-2xl">
            <div>
                <div className="flex flex-row justify-between text-left p-3">
                    <div className="text-left text-pink text-2xl">
                        {pool.name}
                    </div>
                    <p className="text-5xl">
                        {pool.apr}
                    </p>
                </div>
                <div className="flex flex-row justify-between p-2">
                    <button>Deposit</button>
                    <button>Withdrawl</button>

                </div>
            </div>
        </div>
    );
}
