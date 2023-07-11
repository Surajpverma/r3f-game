import { OrbitControls } from '@react-three/drei'
import Lights from './Lights.js'
import { Level, BlockSpinner} from './Level.js'
import { Debug, Physics } from '@react-three/rapier'
import Player from './Player.js'
import useGame from './stores/useGame.js'


export default function Experience() {

    const blocksCount = useGame((state) => state.blockCount)
    const blocksSeed = useGame((state) => state.blockSeed)


    return <>

        <color args={['#252731']} attach="background" />

        <Physics>
            <Lights />
            <Level count={ blocksCount } seed={ blocksSeed } />
            <Player />
        </Physics>
    </>
}