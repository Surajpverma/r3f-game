import { OrbitControls } from '@react-three/drei'
import Lights from './Lights.js'
import { Level, BlockSpinner} from './Level.js'
import { Debug, Physics } from '@react-three/rapier'
import Player from './Player.js'

export default function Experience() {
    return <>

        {/* <OrbitControls makeDefault /> */}

        <Physics>
            {/* <Debug /> */}
            <Lights />
            <Level />
            <Player />
        </Physics>
    </>
}