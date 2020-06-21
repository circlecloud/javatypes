declare namespace cn {
    namespace nukkit {
        namespace inventory {
            /**
             * Created by CreeperFace on 8.5.2017.
             */
            // @ts-ignore
            class HopperInventory extends cn.nukkit.inventory.ContainerInventory {
                // @ts-ignore
                constructor(hopper: cn.nukkit.blockentity.BlockEntityHopper)
                // @ts-ignore
                public getHolder(): cn.nukkit.blockentity.BlockEntityHopper
            }
        }
    }
}
