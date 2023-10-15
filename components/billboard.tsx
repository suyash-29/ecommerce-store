import { Billboard } from "@/types";

interface BillboardProps {
  data: Billboard;
}

const Billboard: React.FC<BillboardProps> = ({
  data
}) => {
  console
  return ( 
    <div className=" p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div style={{ backgroundImage: `url(${data?.imageUrl})` }} 
      className=" h-full  rounded-xl relative aspect-rectangle  aspect-[3.5/1]    overflow-hidden bg-cover">
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className=" text-white font-bold text-[4vw] sm:text-[3vw] lg:text-[5vw] sm:max-w-xl max-w-xs">
            {data.label}
          </div>
        </div>
      </div>
    </div>
   );
};

export default Billboard;
