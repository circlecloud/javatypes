declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                /**
                 * Represents an entity which may tame other entities.
                 */
                // @ts-ignore
                interface Tamer extends org.spongepowered.api.util.Identifiable {
                    /**
                     * Gets the name of this tamer to reference on tamed entities.
                     * @return The name to reference this tamer
                     */
                    // @ts-ignore
                    getName(): java.lang.String
                }
            }
        }
    }
}
