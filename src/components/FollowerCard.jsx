import { barColor, followerCountFormat, followingChangesIcon, socialMediaIcon } from "../utils/type"

const FollowerCard = ({ socialMedia, username, follower, followingChanges }) => {
  return (
    <div className='w-full h-[220px] bg-[#f0f3fa] rounded-md md:w-[170px] lg:w-[220px] xl:w-[260px] dark:bg-[#252b43]'>
      <div className={`w-full h-1 rounded-r-md rounded-l-md ${barColor(socialMedia)}`} />

      <div className='w-full h-[calc(100%-4px)] flex flex-col justify-center items-center'>
        <div className='flex items-center gap-x-1.5 mb-5'>
          <img src={`./assets/${socialMediaIcon(socialMedia)}`} alt={`${socialMedia} icon`} width={24} height={24} />

          <p className='font-semibold text-sm dark:text-white'>{username}</p>
        </div>

        <p className='font-bold text-6xl dark:text-white'>{followerCountFormat(follower)}</p>

        <p className='text-lg tracking-widest opacity-50 font-semibold mb-5 dark:text-white'>{socialMedia === 'youtube' ? 'SUBSCRIBERS' : 'FOLLOWERS'}</p>

        <div className='flex items-center gap-x-1'>
          <div className="mt-[1px]">
            <img src={`./assets/${followingChangesIcon(followingChanges)}`} alt="status icon" width={12} height={12} />
          </div>

          <p className={`font-semibold ${followingChanges >= 0 ? 'text-[#4CAF50]' : 'text-[#C0392B]'}`}>{followingChanges < 0 ? (followingChanges * -1) : followingChanges} Today</p>
        </div>
      </div>
    </div>
  )
}

export default FollowerCard