import ModeTournamentCard from "./modetournamentCard";

const Card = (props) => {
    const { card, Playmode, Platform, Prize } = props;
    return (
        card.map((item) => {
            return (
                <div key={item.id} className="cursor-pointer hover:ring-1 hover:ring-white lg:w-[370px] w-[334px] bg-gray-900 rounded-lg border border-slate-700 shadow-md overflow-hidden">
                    <img className="w-full object-cover" src={item.image} alt="gambar" />
                    <div className="p-[20px]">
                        <h3 className="text-white mt-[2px] mb-[2px] lg:text[24px] font-medium">{item.judul}</h3>
                        <span className="text-white lg:text[16px] font-medium">{item.tanggal}</span>
                        <ModeTournamentCard playmode={item.playmode} platform={item.platform} prize={item.prize} playmodes={Playmode} platforms={Platform} prizes={Prize} />
                    </div>
                </div>
            )
        })
    )
}
export default Card;