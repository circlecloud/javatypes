declare namespace org {
    namespace bukkit {
        namespace material {
            /**
             * Represents the different types of sandstone.
             * @deprecated all usage of MaterialData is deprecated and subject to removal.
             *  Use {#link org.bukkit.block.data.BlockData}.
             */
            // @ts-ignore
            class Sandstone extends org.bukkit.material.MaterialData {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(type: org.bukkit.SandstoneType)
                // @ts-ignore
                constructor(type: org.bukkit.Material)
                /**
                 * @param type the type
                 * @param data the raw data value
                 * @deprecated Magic value
                 */
                // @ts-ignore
                constructor(type: org.bukkit.Material, data: number /*byte*/)
                /**
                 * Gets the current type of this sandstone
                 * @return SandstoneType of this sandstone
                 */
                // @ts-ignore
                getType(): org.bukkit.SandstoneType
                /**
                 * Sets the type of this sandstone
                 * @param type New type of this sandstone
                 */
                // @ts-ignore
                setType(type: org.bukkit.SandstoneType): void
                // @ts-ignore
                toString(): java.lang.String
                // @ts-ignore
                clone(): org.bukkit.material.Sandstone
            }
        }
    }
}
