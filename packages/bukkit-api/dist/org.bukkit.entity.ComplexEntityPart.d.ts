declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * Represents a single part of a {@link ComplexLivingEntity}
             */
            // @ts-ignore
            interface ComplexEntityPart extends org.bukkit.entity.Entity {
                /**
                 * Gets the parent {@link ComplexLivingEntity} of this part.
                 * @return Parent complex entity
                 */
                // @ts-ignore
                getParent(): org.bukkit.entity.ComplexLivingEntity
            }
        }
    }
}
