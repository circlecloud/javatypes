declare namespace cn {
    namespace nukkit {
        namespace utils {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            class BlockIterator extends java.lang.Object implements java.util.Iterator<cn.nukkit.block.Block> {
                // @ts-ignore
                constructor(level: cn.nukkit.level.Level, start: cn.nukkit.math.Vector3, direction: cn.nukkit.math.Vector3)
                // @ts-ignore
                constructor(level: cn.nukkit.level.Level, start: cn.nukkit.math.Vector3, direction: cn.nukkit.math.Vector3, yOffset: number /*double*/)
                // @ts-ignore
                constructor(level: cn.nukkit.level.Level, start: cn.nukkit.math.Vector3, direction: cn.nukkit.math.Vector3, yOffset: number /*double*/, maxDistance: number /*int*/)
                // @ts-ignore
                public next(): cn.nukkit.block.Block
                // @ts-ignore
                public hasNext(): boolean
            }
        }
    }
}
