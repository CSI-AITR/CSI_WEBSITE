import {Link} from "react-router-dom";


export const HoverEffect = ({items}) => {
  return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10">
    {
      items.map((item,index)=>(
        <Link
          to={item?.link}
          key={index}
        >
          <div className="rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2]  relative z-20 hover:scale-[1.03] transition-all duration-200 ">
            <div className="relative z-50">
              <div className="p-4">
                  <h4 className={"text-white font-bold tracking-wide mt-4"}>
                    {item?.title}
                  </h4>

                  <p
                    className="mt-8 text-richblack-50 tracking-wide leading-relaxed text-sm"                   
                  >
                    {item?.description}
                  </p>

              </div>
            </div>
          </div>
        </Link>
      ))
    }
  </div>
}