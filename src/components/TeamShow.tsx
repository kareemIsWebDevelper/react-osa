type teamProp = {
    name: string,
    bio: string,
    imageUrl: string,
}

export const TeamShow = ({ name, bio, imageUrl }: teamProp) => {
    return (
        <div>
          <div className="mt-10 flex gap-10">
            <div className="relative grid gap-2 justify-center items-center text-center">
                <img src={imageUrl} alt="ceo" className="rounded-full" style={{maxWidth: 200, maxHeight: 200}} />
                <div className="absolute bg-[#fcd87f] w-48 h-48 rounded-full -z-20 -top-2 -right-3" />
                <p>{ name }</p>
                <button className="bg-[#6c0022] text-white p-1 rounded-lg">{ bio }</button>
            </div>
          </div>
        </div>
    )
}