declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace advancement {
                /**
                 * Changes the frame around the {@link Advancement} icon and
                 * also the appearance in the notifications.
                 */
                // @ts-ignore
                interface AdvancementType extends org.spongepowered.api.CatalogType {
                    /**
                     * Gets the {@link TextFormat} of the advancement type.
                     * @return The text format
                     */
                    // @ts-ignore
                    getTextFormat(): org.spongepowered.api.text.format.TextFormat
                }
            }
        }
    }
}
