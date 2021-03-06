declare namespace cn {
    namespace nukkit {
        namespace block {
            /**
             * Created by CreeperFace on 27. 11. 2016.
             */
            // @ts-ignore
            abstract class BlockButton extends cn.nukkit.block.BlockFlowable implements cn.nukkit.utils.Faceable {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number /*int*/)
                // @ts-ignore
                public getResistance(): number /*double*/
                // @ts-ignore
                public getHardness(): number /*double*/
                // @ts-ignore
                public place(item: cn.nukkit.item.Item, block: cn.nukkit.block.Block, target: cn.nukkit.block.Block, face: cn.nukkit.math.BlockFace, fx: number /*double*/, fy: number /*double*/, fz: number /*double*/, player: cn.nukkit.Player): boolean
                // @ts-ignore
                public canBeActivated(): boolean
                // @ts-ignore
                public onActivate(item: cn.nukkit.item.Item, player: cn.nukkit.Player): boolean
                // @ts-ignore
                public onUpdate(type: number /*int*/): number /*int*/
                // @ts-ignore
                public isActivated(): boolean
                // @ts-ignore
                public isPowerSource(): boolean
                // @ts-ignore
                public getWeakPower(side: cn.nukkit.math.BlockFace): number /*int*/
                // @ts-ignore
                public getStrongPower(side: cn.nukkit.math.BlockFace): number /*int*/
                // @ts-ignore
                public getFacing(): cn.nukkit.math.BlockFace
                // @ts-ignore
                public onBreak(item: cn.nukkit.item.Item): boolean
                // @ts-ignore
                public toItem(): cn.nukkit.item.Item
                // @ts-ignore
                public getBlockFace(): cn.nukkit.math.BlockFace
            }
        }
    }
}
