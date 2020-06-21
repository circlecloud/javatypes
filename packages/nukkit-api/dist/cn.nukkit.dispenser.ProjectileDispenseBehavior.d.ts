declare namespace cn {
    namespace nukkit {
        namespace dispenser {
            /**
             * @author CreeperFace
             */
            // @ts-ignore
            class ProjectileDispenseBehavior extends java.lang.Object implements cn.nukkit.dispenser.DispenseBehavior {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(entity: java.lang.String | string)
                // @ts-ignore
                public dispense(source: cn.nukkit.block.BlockDispenser, item: cn.nukkit.item.Item): void
                // @ts-ignore
                getEntityType(): string
                /**
                 * you can add extra data of projectile here
                 * @param nbt tag
                 */
                // @ts-ignore
                correctNBT(nbt: cn.nukkit.nbt.tag.CompoundTag): void
            }
        }
    }
}
