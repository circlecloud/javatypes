declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * Represents a Parrot.
             */
            // @ts-ignore
            interface Parrot extends org.bukkit.entity.Tameable, org.bukkit.entity.Sittable {
                /**
                 * Get the variant of this parrot.
                 * @return parrot variant
                 */
                // @ts-ignore
                getVariant(): org.bukkit.entity.Parrot.Variant
                /**
                 * Set the variant of this parrot.
                 * @param variant parrot variant
                 */
                // @ts-ignore
                setVariant(variant: org.bukkit.entity.Parrot.Variant): void
            }
        }
    }
}
