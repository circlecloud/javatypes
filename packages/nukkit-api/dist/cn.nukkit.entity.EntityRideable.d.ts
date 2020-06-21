declare namespace cn {
    namespace nukkit {
        namespace entity {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            interface EntityRideable {
                /**
                 * Mount or Dismounts an Entity from a rideable entity
                 * @param entity The target Entity
                 * @return {#code true} if the mounting successful
                 */
                // @ts-ignore
                mountEntity(entity: cn.nukkit.entity.Entity): boolean
                // @ts-ignore
                dismountEntity(entity: cn.nukkit.entity.Entity): boolean
            }
        }
    }
}
