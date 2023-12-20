import { TDataMaterial } from "@/types/type";
import Image from "next/image";

export async function getData(id: string) {
    const res = await fetch('http://localhost:3000/api/materialID', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "id": id
        }),
    })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    const data = await res.json();
    return data;
}


export default async function Page({ params }: { params: { id: string } }) {
    const data:TDataMaterial[] = await getData(params.id)


    return (
        <div className="w-full h-full p-[20px] flex items-center justify-center gap-[60px]">
            <Image src={`/${data[0].image}.png`} 
            layout="responsive"
            width={250}
            height={344}  
            style={{maxWidth: '250px', objectFit: 'cover', borderRadius: '10px'}}
            className="bg-gradient-linear from-blue-500 to-green-500"
            alt={data[0].title}/>
            <div className="flex flex-col gap-[20px]"> 
                <h4 className="text-black">{data[0].title}</h4>
                <p className="text-black max-w-[260px]">{data[0].description}</p>
            </div>
        </div>
    )
}