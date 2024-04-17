const ModeTournamentCard = (props) => {
    const { playmode, platform, prize, playmodes = 'Playmode', platforms = 'Platform', prizes = 'Prize' } = props
    return (
        <>
            <div className="grid grid-cols-4 mt-[10px]">
                <div className="col-span-1 lg:text[14px] text-white">{playmodes}</div>
                <div className="col-span-1 lg:text[14px] text-white">{platforms}</div>
                <div className="col-span-1 lg:text[14px] text-white">{prizes}</div>
            </div>
            <div className="grid grid-cols-4">
                <div className="col-span-1 text-white lg:text[16px] font-medium">{playmode}</div>
                <div className="col-span-1 text-white lg:text[16px] font-medium">{platform}</div>
                <div className="col-span-1 text-white lg:text[16px] font-medium">{prize}</div>
            </div>
        </>

    )
}
export default ModeTournamentCard