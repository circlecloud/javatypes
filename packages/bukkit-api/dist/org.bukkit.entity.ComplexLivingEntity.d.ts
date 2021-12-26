declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * Represents a complex living entity - one that is made up of various smaller
             * parts
             */
            // @ts-ignore
            interface ComplexLivingEntity extends org.bukkit.entity.LivingEntity {
                /**
                 * Gets a list of parts that belong to this complex entity
                 * @return List of parts
                 */
                // @ts-ignore
                getParts(): Array<org.bukkit.entity.ComplexEntityPart>
            }
        }
    }
}
