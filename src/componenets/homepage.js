import phone from "../img/phone.svg"


export default function Homepage() {
    return (
        <article className="font-sans px-4 space-y-6 mt-8 md:flex md:flex-row md:justify-center md:items-center md:px-10 md:space-x-[30rem]">
        <div className="md:w-96 md:space-y-8">
        <h1 className="text-5xl font-black tracking-wide leading-relaxed text-gray-800 md:text-8xl">Payments infrastructure for the internet</h1> 
        <p className="text-gray-500">Millions of companies of all sizes--from startups to Fortune 500s--use Stripe's software and APIs to accept payments, send payouts, and manage their businesses online.</p>
        <button className="bg-black text-white w-24 h-8 rounded pb-1">Start now</button>
        </div>
        <div className="hidden md:inline">
            <img src={phone} alt="phone" className="h-[35rem]" />
        </div>

        </article>
    )
}