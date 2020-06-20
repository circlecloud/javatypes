declare namespace org {
    namespace bukkit {
        namespace material {
            /**
             * Represents nether wart
             * @deprecated all usage of MaterialData is deprecated and subject to removal.
             *  Use {#link org.bukkit.block.data.BlockData}.
             */
            // @ts-ignore
            class NetherWarts extends org.bukkit.material.MaterialData {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(state: org.bukkit.NetherWartsState)
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
                 * Gets the current growth state of this nether wart
                 * @return NetherWartsState of this nether wart
                 */
                // @ts-ignore
                getState(): org.bukkit.NetherWartsState
                /**
                 * Sets the growth state of this nether wart
                 * @param state New growth state of this nether wart
                 */
                // @ts-ignore
                setState(state: org.bukkit.NetherWartsState): void
                // @ts-ignore
                toString(): java.lang.String
                // @ts-ignore
                clone(): org.bukkit.material.NetherWarts
            }
        }
    }
}
