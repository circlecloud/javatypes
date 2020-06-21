declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                /**
                 * Represents a type of {@link Dimension}.
                 */
                // @ts-ignore
                interface DimensionType extends org.spongepowered.api.CatalogType {
                    /**
                     * Returns the dimension class for this type.
                     * @return The dimension class for this type
                     */
                    // @ts-ignore
                    getDimensionClass(): java.lang.Class<any>
                }
            }
        }
    }
}
