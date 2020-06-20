declare namespace org {
    namespace bukkit {
        namespace material {
            /**
             * Handles specific metadata for certain items or blocks
             * @deprecated all usage of MaterialData is deprecated and subject to removal.
             *  Use {#link org.bukkit.block.data.BlockData}.
             */
            // @ts-ignore
            class MaterialData extends java.lang.Object implements java.lang.Cloneable {
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
                 * Gets the raw data in this material
                 * @return Raw data
                 * @deprecated Magic value
                 */
                // @ts-ignore
                getData(): byte
                /**
                 * Sets the raw data of this material
                 * @param data New raw data
                 * @deprecated Magic value
                 */
                // @ts-ignore
                setData(data: number /*byte*/): void
                /**
                 * Gets the Material that this MaterialData represents
                 * @return Material represented by this MaterialData
                 */
                // @ts-ignore
                getItemType(): org.bukkit.Material
                /**
                 * Creates a new ItemStack based on this MaterialData
                 * @return New ItemStack containing a copy of this MaterialData
                 * @deprecated this method creates an ItemStack of size 0 which is not
                 *  generally useful. Consider {#link #toItemStack(int)}.
                 */
                // @ts-ignore
                toItemStack(): org.bukkit.inventory.ItemStack
                /**
                 * Creates a new ItemStack based on this MaterialData
                 * @param amount The stack size of the new stack
                 * @return New ItemStack containing a copy of this MaterialData
                 */
                // @ts-ignore
                toItemStack(amount: number /*int*/): org.bukkit.inventory.ItemStack
                // @ts-ignore
                toString(): java.lang.String
                // @ts-ignore
                hashCode(): int
                // @ts-ignore
                equals(obj: any): boolean
                // @ts-ignore
                clone(): org.bukkit.material.MaterialData
            }
        }
    }
}
