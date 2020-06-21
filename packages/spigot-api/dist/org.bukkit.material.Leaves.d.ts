declare namespace org {
    namespace bukkit {
        namespace material {
            /**
             * Represents the different types of leaf block that may be permanent or can
             * decay when too far from a log.
             * @see Material#LEGACY_LEAVES
             * @see Material#LEGACY_LEAVES_2
             * @deprecated all usage of MaterialData is deprecated and subject to removal.
             *  Use {#link org.bukkit.block.data.BlockData}.
             */
            // @ts-ignore
            class Leaves extends org.bukkit.material.Wood {
                /**
                 * Constructs a leaf block.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a leaf block of the given tree species.
                 * @param species the species of the wood block
                 */
                // @ts-ignore
                constructor(species: org.bukkit.TreeSpecies)
                /**
                 * Constructs a leaf block of the given tree species and flag for whether
                 * this leaf block will disappear when too far from a log.
                 * @param species the species of the wood block
                 * @param isDecayable whether the block is permanent or can disappear
                 */
                // @ts-ignore
                constructor(species: org.bukkit.TreeSpecies, isDecayable: boolean)
                /**
                 * Constructs a leaf block of the given type.
                 * @param type the type of leaf block
                 */
                // @ts-ignore
                constructor(type: org.bukkit.Material)
                /**
                 * Constructs a leaf block of the given type and tree species.
                 * @param type the type of leaf block
                 * @param species the species of the wood block
                 */
                // @ts-ignore
                constructor(type: org.bukkit.Material, species: org.bukkit.TreeSpecies)
                /**
                 * Constructs a leaf block of the given type and tree species and flag for
                 * whether this leaf block will disappear when too far from a log.
                 * @param type the type of leaf block
                 * @param species the species of the wood block
                 * @param isDecayable whether the block is permanent or can disappear
                 */
                // @ts-ignore
                constructor(type: org.bukkit.Material, species: org.bukkit.TreeSpecies, isDecayable: boolean)
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
                static readonly DEFAULT_DECAYABLE: boolean
                /**
                 * Checks if this leaf block is in the process of decaying
                 * @return true if the leaf block is in the process of decaying
                 */
                // @ts-ignore
                public isDecaying(): boolean
                /**
                 * Set whether this leaf block is in the process of decaying
                 * @param isDecaying whether the block is decaying or not
                 */
                // @ts-ignore
                public setDecaying(isDecaying: boolean): void
                /**
                 * Checks if this leaf block is permanent or can decay when too far from a
                 * log
                 * @return true if the leaf block is permanent or can decay when too far
                 *  from a log
                 */
                // @ts-ignore
                public isDecayable(): boolean
                /**
                 * Set whether this leaf block will disappear when too far from a log
                 * @param isDecayable whether the block is permanent or can disappear
                 */
                // @ts-ignore
                public setDecayable(isDecayable: boolean): void
                // @ts-ignore
                public toString(): string
                // @ts-ignore
                public clone(): org.bukkit.material.Leaves
            }
        }
    }
}
