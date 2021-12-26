declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * Represents a Skeleton.
             */
            // @ts-ignore
            interface Skeleton extends org.bukkit.entity.Monster {
                /**
                 * Gets the current type of this skeleton.
                 * @return Current type
                 * @deprecated should check what class instance this is
                 */
                // @ts-ignore
                getSkeletonType(): org.bukkit.entity.Skeleton.SkeletonType
                /**
                 * @param type type
                 * @deprecated Must spawn a new subtype variant
                 */
                // @ts-ignore
                setSkeletonType(type: org.bukkit.entity.Skeleton.SkeletonType): void
            }
        }
    }
}
