declare namespace org {
    namespace bukkit {
        namespace material {
            /**
             * Represents the different types of monster eggs
             * @deprecated all usage of MaterialData is deprecated and subject to removal.
             *  Use {#link org.bukkit.block.data.BlockData}.
             */
            // @ts-ignore
            class MonsterEggs extends org.bukkit.material.TexturedMaterial {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(type: org.bukkit.Material)
                /**
                 * @param type the type
                 * @param data the raw data value
                 * @deprecated Magic value
                 */
                // @ts-ignore
                constructor(type: org.bukkit.Material, data: number /*byte*/)
                // @ts-ignore
                getTextures(): java.util.List<org.bukkit.Material>
                // @ts-ignore
                clone(): org.bukkit.material.MonsterEggs
            }
        }
    }
}
