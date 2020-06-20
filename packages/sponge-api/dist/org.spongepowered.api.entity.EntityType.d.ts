declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                /**
                 * Describes a type of entity.
                 */
                // @ts-ignore
                interface EntityType extends org.spongepowered.api.CatalogType, org.spongepowered.api.text.translation.Translatable {
                    /**
                     * Returns the entity class for this type.
                     * @return The entity class for this type
                     */
                    // @ts-ignore
                    getEntityClass(): java.lang.Class<? extends org.spongepowered.api.entity.Entity>
                }
            }
        }
    }
}
