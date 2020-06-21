declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
            abstract class BlockMeta extends cn.nukkit.block.Block {
                // @ts-ignore
                constructor(meta: number /*int*/)
                // @ts-ignore
                public getFullId(): number /*int*/
                // @ts-ignore
                public getDamage(): number /*int*/
                // @ts-ignore
                public setDamage(meta: number /*int*/): void
            }
        }
    }
}
