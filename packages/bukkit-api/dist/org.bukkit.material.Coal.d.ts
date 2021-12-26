declare namespace org {
    namespace bukkit {
        namespace material {
            /**
             * Represents the different types of coals.
             * @deprecated all usage of MaterialData is deprecated and subject to removal.
             *  Use {#link org.bukkit.block.data.BlockData}.
             */
            // @ts-ignore
            class Coal extends org.bukkit.material.MaterialData {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(type: org.bukkit.CoalType)
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
                 * Gets the current type of this coal
                 * @return CoalType of this coal
                 */
                // @ts-ignore
                public getType(): org.bukkit.CoalType
                /**
                 * Sets the type of this coal
                 * @param type New type of this coal
                 */
                // @ts-ignore
                public setType(type: org.bukkit.CoalType): void
                // @ts-ignore
                public toString(): string
                // @ts-ignore
                public clone(): org.bukkit.material.Coal
            }
        }
    }
}
