declare namespace org {
    namespace bukkit {
        namespace material {
            /**
             * Represents a Wool/Cloth block
             * @deprecated all usage of MaterialData is deprecated and subject to removal.
             *  Use {#link org.bukkit.block.data.BlockData}.
             */
            // @ts-ignore
            class Wool extends org.bukkit.material.MaterialData implements org.bukkit.material.Colorable {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(color: org.bukkit.DyeColor)
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
                 * Gets the current color of this dye
                 * @return DyeColor of this dye
                 */
                // @ts-ignore
                getColor(): org.bukkit.DyeColor
                /**
                 * Sets the color of this dye
                 * @param color New color of this dye
                 */
                // @ts-ignore
                setColor(color: org.bukkit.DyeColor): void
                // @ts-ignore
                toString(): java.lang.String
                // @ts-ignore
                clone(): org.bukkit.material.Wool
            }
        }
    }
}
