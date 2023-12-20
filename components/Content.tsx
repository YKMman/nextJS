import Image from "next/image"
import Link from "next/link"


async function getData() {
    const res = await fetch('http://localhost:3000/api/special')

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}



export default async function Content() {
    const data = await getData()

    return (
        <div className="inline-flex flex-col max-w-[730px] w-full minxl:!ml-[384px] minlg:ml-[150px] lg:ml-[110px] md:!ml-0 minsm:pr-[32px] sm:!pr-[16px]">
            <div className="inline-flex items-center gap-[4px] mb-[14px] pb-[6px] border-b-[1px] border-white w-fit">
                <Image src={'/special.svg'} width={12} height={18}  alt={data[0].type} />
                <h4 className="text-[20px] font-bold leading-[20px] md:text-[16px]">
                    {data[0].type}
                </h4>
            </div>
            <h1 className="minlg:text-[96px] lg:text-[64px] md:!text-[32px] font-normal minlg:leading-[126px] lg:leading-[64px] md:!leading-[37px] uppercase mb-[20px] md:mb-[14px] w-min relative md:w-fit
            after:content-['«'] after:absolute after:left-[-47px] after:top-0 after:ld:left-[-32px] after:md:left-[-16px]
            before:content-['»'] before:absolute before:right-[-47px] before:bottom-0 before:ld:right-[-32px] before:md:right-[-16px]
            ">{data[0].title}
            </h1>
            <p className="minlg:text-[20px] lg:text-[18px] md:!text-[14px] font-semibold minlg:leading-[26px] lg:leading-[23.4px] mb-[46px] md:mb-[28px] minlg:max-w-[720px] lg:max-w-[459px] w-full md:!max-w-[524px]">{data[0].description}</p>
            <Link href={'/'}
            className="text-[#333] text-[18px] max-w-[187px] md:max-w-[328px] text-center font-bold leading-[18px] py-[16px] px-[44px] rounded-[10px] border-[1px] border-white bg-white duration-300 hover:text-white hover:border-[#F38600] hover:bg-[#F38600] active:shadow-2xl"
            >
                Подробнее
            </Link>
        </div>
    )
}
