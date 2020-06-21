declare namespace org {
    namespace bukkit {
        namespace material {
            /**
             * Represents the different types of crops in different states of growth.
             * @see Material#LEGACY_CROPS
             * @see Material#LEGACY_CARROT
             * @see Material#LEGACY_POTATO
             * @see Material#LEGACY_BEETROOT_BLOCK
             * @see Material#LEGACY_NETHER_WARTS
             * @deprecated all usage of MaterialData is deprecated and subject to removal.
             *  Use {#link org.bukkit.block.data.BlockData}.
             */
            // @ts-ignore
            class Crops extends org.bukkit.material.MaterialData {
                /**
                 * Constructs a wheat crop block in the seeded state.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a wheat crop block in the given growth state
                 * @param state The growth state of the crops
                 */
                // @ts-ignore
                constructor(state: org.bukkit.CropState)
                /**
                 * Constructs a crop block of the given type and in the given growth state
                 * @param type The type of crops
                 * @param state The growth state of the crops
                 */
                // @ts-ignore
                constructor(type: org.bukkit.Material, state: org.bukkit.CropState)
                /**
                 * Constructs a crop block of the given type and in the seeded state
                 * @param type The type of crops
                 */
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
                static readonly DEFAULT_TYPE: org.bukkit.Material
                // @ts-ignore
                static readonly DEFAULT_STATE: org.bukkit.CropState
                /**
                 * Gets the current growth state of this crop
                 * For crops with only four growth states such as beetroot, only the values SEEDED, SMALL, TALL and RIPE will be
                 * returned.
                 * @return CropState of this crop
                 */
                // @ts-ignore
                public getState(): org.bukkit.CropState
                /**
                 * Sets the growth state of this crop
                 * For crops with only four growth states such as beetroot, the 8 CropStates are mapped into four states:
                 * SEEDED, SMALL, TALL and RIPE
                 * GERMINATED will change to SEEDED
                 * VERY_SMALL will change to SMALL
                 * MEDIUM will change to TALL
                 * VERY_TALL will change to RIPE
                 * @param state New growth state of this crop
                 */
                // @ts-ignore
                public setState(state: org.bukkit.CropState): void
                // @ts-ignore
                public toString(): string
                // @ts-ignore
                public clone(): org.bukkit.material.Crops
            }
        }
    }
}
