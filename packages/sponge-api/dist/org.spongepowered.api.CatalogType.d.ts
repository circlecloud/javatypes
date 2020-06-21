declare namespace org {
    namespace spongepowered {
        namespace api {
            /**
             * Represents a type of a dummy that can be used to identify types without
             * using an {@link Enum}.
             * <p>All implementing classes, including those not listed in the dummy
             * specified by the {@link org.spongepowered.api.util.annotation.CatalogedBy
             * CatalogedBy} annotation, must meet the requirement that if any of
             * <code>`a.equals(b)`</code>, <code>`a == b`</code>, or
             * <code>`a.getId().equalsIgnoreCase(b.getId())`</code> are true then all must
             * be true.</p>
             */
            // @ts-ignore
            interface CatalogType {
                /**
                 * Gets the unique identifier of this {@link CatalogType}. The identifier is
                 * case insensitive, thus there cannot be another instance with a different
                 * character case. The id of this instance must remain the same for the
                 * entire duration of its existence. The identifier can be formatted however
                 * needed.
                 * <p>A typical id format follows the pattern of <code>`modId:name`</code>
                 * or <code>`minecraft:name`</code>. However the prefix may be omitted for
                 * default/vanilla minecraft types.</p>
                 * @return The unique identifier of this dummy type
                 */
                // @ts-ignore
                getId(): string
                /**
                 * Gets the human-readable name of this individual {@link CatalogType}. This
                 * name is not guaranteed to be unique. This value should not be used for
                 * serialization.
                 * @return The human-readable name of this dummy type
                 */
                // @ts-ignore
                getName(): string
            }
        }
    }
}
