import { useState } from "react"
import { Switch } from "@mui/material"

import FollowerCard from "./components/FollowerCard"
import OverviewCard from "./components/OverviewCard"

import { overviewData, socialMediaData, totalFollower } from "../data"

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <div className={`w-full h-[2500px] flex justify-center relative md:h-[1100px] lg:h-[780px] ${isDarkMode ? 'dark bg-[#1d2029]' : ''}`}>
      <div className="w-full h-[200px] bg-[#f8f9fe] absolute z-0 dark:bg-[#20222f]" />

      <div className="w-[90%] mt-6 absolute z-10">
        <div className="md:flex md:justify-between md:mb-6">
          <div>
            <h1 className="text-2xl font-bold md:text-3xl dark:text-white">Social Media Dashboard</h1>

            <p className="font-semibold mb-4 opacity-60 dark:text-white">Total Follower: {totalFollower.toLocaleString()}</p>

            <div className="w-full h-[1px] bg-black opacity-60 md:w-0 md:h-0" />
          </div>

          <div className="flex items-center justify-between mt-1 mb-5">
            <p className="font-semibold opacity-60 dark:text-white dark:opacity-70">Dark Mode</p>

            <Switch onChange={(e) => setIsDarkMode(e.target.checked)} />
          </div>
        </div>

        <div className="w-full flex flex-col gap-y-6 md:flex-row md:justify-between">
          {
            socialMediaData.map((card, i) => {
              const { socialMedia, username, follower, followingChanges } = card

              return (
                <FollowerCard key={i} socialMedia={socialMedia} username={username} follower={follower} followingChanges={followingChanges} />
              )
            })
          }
        </div>

        <div className="mt-10">
          <h1 className="text-3xl font-bold opacity-70 md:text-2xl dark:text-white dark:opacity-100">Overview - Today</h1>

          <div className="w-full mt-5 flex flex-col gap-y-4 md:flex-row md:flex-wrap md:justify-between md:items-center md:gap-x-5 md:gap-y-6">
            {
              overviewData.map((card, i) => {
                const { type, title, count, changes } = card

                return (
                  <OverviewCard key={i} type={type} title={title} count={count} changes={changes} />
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
