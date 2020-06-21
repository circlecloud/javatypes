declare namespace cn {
    namespace nukkit {
        namespace block {
            /**
             * Created by Pub4Game on 03.01.2016.
             */
            // @ts-ignore
            class BlockBedrockInvisible extends cn.nukkit.block.BlockSolid {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public getId(): number /*int*/
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public getHardness(): number /*double*/
                // @ts-ignore
                public getResistance(): number /*double*/
                // @ts-ignore
                public isBreakable(item: cn.nukkit.item.Item): boolean
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor
                // @ts-ignore
                public canBePushed(): boolean
                // @ts-ignore
                public toItem(): cn.nukkit.item.Item
            }
        }
    }
}
