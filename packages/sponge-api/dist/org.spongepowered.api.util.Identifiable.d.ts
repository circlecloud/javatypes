declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                /**
                 * An identifiable object has a UUID that can be retrieved.
                 */
                // @ts-ignore
                interface Identifiable {
                    /**
                     * Gets the unique ID for this object.
                     * @return The {#link UUID}
                     */
                    // @ts-ignore
                    getUniqueId(): java.util.UUID
                }
            }
        }
    }
}
