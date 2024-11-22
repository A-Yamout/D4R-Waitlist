import TeamZ from '../public/TeamZ.png'
import TeamA from '../public/TeamA.png'
import TeamE from '../public/TeamE.png'
import TeamH from '../public/TeamS.png'
import TeamS from '../public/TeamH.png'
import Link from 'next/link'

export default function Teams(){
    return (
        <ul>
      <li className='grid h-screen place-self-center md:text-2xl font-bold'>
        <Link href="/teams/7110Z">
        <img 
        src="/TeamZ.png" 
        className="w-[800px]"
        draggable={false}></img>
        </Link>
        <Link href="/teams/7110H">
        <img 
        src="/TeamH.png" 
        className="w-[800px]"
        draggable={false}></img>
        </Link>
        <Link href="/teams/7110E">
        <img 
        src="/TeamE.png" 
        className="w-[800px]"
        draggable={false}></img>
        </Link>
        <Link href="/teams/7110A">
        <img 
        src="/TeamA.png" 
        className="w-[800px]"
        draggable={false}></img>
        </Link>
        <Link href="/teams/7110S">
        <img 
        src="/TeamS.png" 
        className="w-[800px]"
        draggable={false}></img>
        </Link>
      </li>
    </ul>
    )
}