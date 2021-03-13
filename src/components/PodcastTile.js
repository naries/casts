import play from '../assets/play.png'
import { Link } from 'react-router-dom'

const PodcastTile = ({mini, id, link, name, author, time, timeAgo}) => (
    <>
    <Link to={link}>
                <div key={id} className={`flex py-2 px-4 mb-2 ${!mini ? "border-2": ""} rounded-sm hover:border-gray-500 justify-between`}>
                    <div className="flex justify-between">
                        <div className="flex justify-center content-center">
                            <div className="w-10 h-10 rounded-full bg-gray-500"></div>
                        </div>

                        <div className="ml-4 text-left">
                            <div className="text-sm leading-6 font-semibold">{name}</div>
                            <div className="text-xs">{author}</div>
                        </div>
                    </div>

                        <div className="flex w-10 h-10 p-1 justify-center cursor-pointer rounded-full border-gray-700 hover:bg-gray-400">
                            <div className="justify-self-center ">
                                <img alt="play" src={play} className="w-8 h-8" />
                            </div>
                        </div>
                </div>
            </Link></>
);

export default PodcastTile;