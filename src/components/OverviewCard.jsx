import { followerCountFormat, followingChangesIcon, socialMediaIcon } from "../utils/type"

const OverviewCard = ({ type, title, count, changes }) => {
  return (
    <div className='w-full h-[140px] bg-[#f0f3fa] rounded-md flex justify-center items-center md:w-[260px] dark:bg-[#252b43]'>
      <div className="w-[80%] h-[65%] flex flex-col justify-between">
        <div className='flex justify-between items-center'>
          <p className='font-semibold dark:text-white'>{title}</p>

          <img src={`./assets/${socialMediaIcon(type)}`} alt="" width={24} height={24} />
        </div>

        <div className='flex justify-between items-end'>
          <p className='text-4xl font-bold dark:text-white'>{followerCountFormat(count)}</p>

          <div className='flex items-center gap-x-1'>
            <div className="mt-[1px]">
              <img src={`./assets/${followingChangesIcon(changes)}`} alt="" width={12} height={12} />
            </div>

            <p className={`font-semibold ${changes >= 0 ? 'text-[#4CAF50]' : 'text-[#C0392B]'}`}>{changes < 0 ? (changes * -1) : changes}%</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OverviewCard