declare namespace org {
    namespace bukkit {
        namespace material {
            /**
             * Represents the different types of wooden steps.
             * @see Material#LEGACY_WOOD_STEP
             * @deprecated all usage of MaterialData is deprecated and subject to removal.
             *  Use {#link org.bukkit.block.data.BlockData}.
             */
            // @ts-ignore
            class WoodenStep extends org.bukkit.material.Wood {
                /**
                 * Constructs a wooden step.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a wooden step of the given tree species.
                 * @param species the species of the wooden step
                 */
                // @ts-ignore
                constructor(species: org.bukkit.TreeSpecies)
                /**
                 * Constructs a wooden step of the given type and tree species, either
                 * inverted or not.
                 * @param species the species of the wooden step
                 * @param inv true the step is at the top of the block
                 */
                // @ts-ignore
                constructor(species: org.bukkit.TreeSpecies, inv: boolean)
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
                static readonly DEFAULT_INVERTED: boolean
                /**
                 * Test if step is inverted
                 * @return true if inverted (top half), false if normal (bottom half)
                 */
                // @ts-ignore
                public isInverted(): boolean
                /**
                 * Set step inverted state
                 * @param inv - true if step is inverted (top half), false if step is normal
                 *  (bottom half)
                 */
                // @ts-ignore
                public setInverted(inv: boolean): void
                // @ts-ignore
                public clone(): org.bukkit.material.WoodenStep
                // @ts-ignore
                public toString(): string
            }
        }
    }
}
