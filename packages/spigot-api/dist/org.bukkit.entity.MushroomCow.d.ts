declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * Represents a mushroom {@link Cow}
             */
            // @ts-ignore
            interface MushroomCow extends org.bukkit.entity.Cow {
                /**
                 * Get the variant of this cow.
                 * @return cow variant
                 */
                // @ts-ignore
                getVariant(): org.bukkit.entity.MushroomCow.Variant
                /**
                 * Set the variant of this cow.
                 * @param variant cow variant
                 */
                // @ts-ignore
                setVariant(variant: org.bukkit.entity.MushroomCow.Variant): void
            }
        }
    }
}
