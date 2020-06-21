declare namespace cn {
    namespace nukkit {
        namespace block {
            /**
             * Created by CreeperFace on 10.4.2017.
             */
            // @ts-ignore
            class BlockRedstoneTorchUnlit extends cn.nukkit.block.BlockTorch {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number /*int*/)
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public getId(): number /*int*/
                // @ts-ignore
                public getLightLevel(): number /*int*/
                // @ts-ignore
                public getWeakPower(side: cn.nukkit.math.BlockFace): number /*int*/
                // @ts-ignore
                public getStrongPower(side: cn.nukkit.math.BlockFace): number /*int*/
                // @ts-ignore
                public toItem(): cn.nukkit.item.Item
                // @ts-ignore
                public onUpdate(type: number /*int*/): number /*int*/
                // @ts-ignore
                checkState(): boolean
                // @ts-ignore
                public tickRate(): number /*int*/
            }
        }
    }
}
