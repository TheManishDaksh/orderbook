interface marketProps{
    market : String,
    currency : String
}

export default function Market({market, currency}:marketProps){
    return(
        <div  className="bg-slate-800 rounded text-white max-w-30 h-10 text-xl">
            <div className="flex items-center justify-center-safe p-2">
                <p className="text-slate-50">{market || "BTC"}/</p>
                <p className="text-slate-300">{currency || "USD"}</p>
            </div>
        </div>
    )
}