import { useContext } from 'react'
import { Icon } from '.'
import { casts } from '../lib'
import { ThemeContext } from '../lib/theme'
import PodcastTile from './PodcastTile'

const HomePodcastTile = () => {
    const theme = useContext(ThemeContext)
    return <>
        <div className={`flex justify-center ${theme.background} ${theme.foregroundText}`}>
            <div className="w-1/3">
                <div>
                    <Icon />
                </div>
                <div className="text-left py-4 font-semibold text-blue-800 text-3xl">
                    Casts
                </div>
                {casts.map((cast, i) => <PodcastTile 
                    id={cast.id} 
                    link={`/${cast.id}`} 
                    name={cast.name} 
                    author={cast.author} 
                    time={cast.time} 
                    timeAgo={cast.timeAgo}/>
                )}
            </div>
        </div>
    </>
}

export default HomePodcastTile