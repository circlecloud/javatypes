declare namespace org {
    namespace bukkit {
        namespace material {
            /**
             * Represents a cauldron
             * @deprecated all usage of MaterialData is deprecated and subject to removal.
             *  Use {#link org.bukkit.block.data.BlockData}.
             */
            // @ts-ignore
            class Cauldron extends org.bukkit.material.MaterialData {
                // @ts-ignore
                constructor()
                /**
                 * @param type the type
                 * @param data the raw data value
                 * @deprecated Magic value
                 */
                // @ts-ignore
                constructor(type: org.bukkit.Material, data: number /*byte*/)
                /**
                 * @param data the raw data value
                 * @deprecated Magic value
                 */
                // @ts-ignore
                constructor(data: number /*byte*/)
                /**
                 * Check if the cauldron is full.
                 * @return True if it is full.
                 */
                // @ts-ignore
                public isFull(): boolean
                /**
                 * Check if the cauldron is empty.
                 * @return True if it is empty.
                 */
                // @ts-ignore
                public isEmpty(): boolean
                // @ts-ignore
                public toString(): string
                // @ts-ignore
                public clone(): org.bukkit.material.Cauldron
            }
        }
    }
}
