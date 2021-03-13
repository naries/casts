import { Link, useParams } from 'react-router-dom'
import { PodcastTile, MinifiedIcon } from '../components'
import { casts } from '../lib'
import play from '../assets/play.png'
import previous from '../assets/previous.png'
import pause from '../assets/pause.png'
import { useContext, useRef, useState } from 'react'
import headphones from '../assets/headphone.jpg'
import { ThemeContext } from '../lib/theme'

const Podcast = ({light}) => {
    const theme = useContext(ThemeContext)
    const audio = useRef(null)
    const onPlayClick = () => {
        audio.current.play()
        setIsPlaying(true)
    }
    const onPauseClick = () => {
        audio.current.pause()
        setIsPlaying(false)
    }
    const [isPlaying, setIsPlaying] = useState(true)
    const [showList, setShowList] = useState(false)

    const _showList = () => {
        setShowList(true)
    }
    const _hideList =() => {
        setShowList(false)
    }
    const params = useParams()
    return <>
    <div className={`h-screen ${theme.foregroundText} ${theme.background}`}>
        <MinifiedIcon />
        <div>Now playing</div>
        <div className="h-4"></div>
            <div className="flex justify-center content-center items-center">
                <div className="flex justify-evenly w-2/3 relative">
                    <div>
                        <div className="flex justify-center content-center text-center py-4">
                            <div className=" w-48 h-48 rounded-full p-4 overflow-hidden border border-white" style={{boxShadow: "0 0.75rem 8rem 0 rgb(140 152 164 / 25%"}}>
                                <div className="w-full h-full overflow-hidden border rounded-full bg-gray-50 animate-spin-slow">
                                    <img src={headphones}/>
                                </div>
                            </div>
                        </div>
                        <div className="text-4xl mt-4 mb-2">Sound Helix's Music {params.id}</div>
                        <div className="mb-4">Helix</div>
                        <div className="flex justify-center my-4 text-sm content-center">
                             <div className="flex justify-between w-96">
                                <div>
                                    <audio ref={audio} src={casts.find(cast => cast.id===parseInt(params.id)).music} autoPlay/>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center content-center">
                            <Link to={`/${parseInt(params.id) !== 1 ? parseInt(params.id) - 1: 10}`}>
                                <div className="w-10 h-10 flex p-1 justify-center cursor-pointer mr-3">
                                    <div className="justify-self-center pt-4">
                                        <img alt="Previous" src={previous} className="w-8 h-8" />
                                    </div>
                                </div>
                            </Link>
                            <div className="w-16 h-16 overflow-hidden flex justify-center cursor-pointer rounded-full hover:bg-gray-700"
                                onClick={!isPlaying ? onPlayClick : onPauseClick}>
                                <div className="justify-self-center">
                                    <img alt="Play" src={!isPlaying ? play : pause} className="w-16 h-16" />
                                </div>
                            </div>
                            <Link to={`/${parseInt(params.id) !== 10 ? parseInt(params.id) + 1: 1}`}>
                                <div className="w-10 h-10 flex p-1 justify-center cursor-pointer ml-3 ">
                                    <div className="justify-self-center pb-12 transform rotate-180">
                                        <img alt="Next" src={previous} className="w-8 h-8" />
                                    </div>
                                </div>
                            </Link>
                        </div>
                        {!showList && <div className="mt-4 text-sm bg-gray-900 rounded-md border border-gray-400 hover:bg-gray-700 px-2 cursor-pointer py-1 text-gray-300" onClick={_showList}>
                            Show list
                        </div>}
                    </div>

                    {showList && <div className="fixed right-0 px-4">
                        <div className="text-left flex justify-between my-4">
                            <div className="text-xl font-semibold text-blue-800">
                                List
                            </div>
                            {showList && <div className="text-sm bg-gray-200 rounded-md border border-gray-400 hover:bg-gray-300 px-2 cursor-pointer py-1 text-gray-600" onClick={_hideList}>
                                hide
                            </div>}
                        </div>
                        <div className="h-96 overflow-auto p-2">
                            {casts.map((cast, i) => <PodcastTile 
                                mini={true}
                                id={cast.id}
                                link={`/${cast.id}`} 
                                name={cast.name} 
                                author={cast.author} 
                                time={cast.time} 
                                timeAgo={cast.timeAgo}/>
                                )}
                            </div>
                    </div>}
                </div>
            </div>
        </div>
    </>
}

export default Podcast;