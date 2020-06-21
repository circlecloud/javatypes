declare namespace cn {
    namespace nukkit {
        namespace item {
            /**
             * @author CreeperFace
             */
            // @ts-ignore
            abstract class ProjectileItem extends cn.nukkit.item.Item {
                // @ts-ignore
                constructor(id: number /*int*/, meta: java.lang.Integer | number, count: number /*int*/, name: java.lang.String | string)
                // @ts-ignore
                public abstract getProjectileEntityType(): string
                // @ts-ignore
                public abstract getThrowForce(): number /*float*/
                // @ts-ignore
                public onClickAir(player: cn.nukkit.Player, directionVector: cn.nukkit.math.Vector3): boolean
                // @ts-ignore
                correctNBT(nbt: cn.nukkit.nbt.tag.CompoundTag): void
            }
        }
    }
}
