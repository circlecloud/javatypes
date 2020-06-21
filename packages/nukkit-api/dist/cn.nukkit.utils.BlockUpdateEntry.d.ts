declare namespace cn {
    namespace nukkit {
        namespace utils {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            class BlockUpdateEntry extends java.lang.Object implements java.lang.Comparable<cn.nukkit.utils.BlockUpdateEntry> {
                // @ts-ignore
                constructor(pos: cn.nukkit.math.Vector3, block: cn.nukkit.block.Block)
                // @ts-ignore
                constructor(pos: cn.nukkit.math.Vector3, block: cn.nukkit.block.Block, delay: number /*long*/, priority: number /*int*/)
                // @ts-ignore
                public priority: number /*int*/
                // @ts-ignore
                public delay: number /*long*/
                // @ts-ignore
                public readonly pos: cn.nukkit.math.Vector3
                // @ts-ignore
                public readonly block: cn.nukkit.block.Block
                // @ts-ignore
                public readonly id: number /*long*/
                // @ts-ignore
                public compareTo(entry: cn.nukkit.utils.BlockUpdateEntry): number /*int*/
                // @ts-ignore
                public equals(object: java.lang.Object | any): boolean
                // @ts-ignore
                public hashCode(): number /*int*/
            }
        }
    }
}
