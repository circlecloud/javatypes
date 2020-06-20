declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace property {
                    /**
                     * @deprecated As of API 7, intended for removal in API 8, with no alternative
                     *      due to accidental existence in the API
                     */
                    // @ts-ignore
                    class DisplacementProperty extends org.spongepowered.api.data.property.AbstractProperty<java.lang.String, java.util.Set<org.spongepowered.api.block.BlockType>> {
                        /**
                         * Creates a {@link DisplacementProperty} with a specific set of
                         * {@link BlockType}s.
                         * @param value The displaceable block types
                         */
                        // @ts-ignore
                        constructor(value: Array<org.spongepowered.api.block.BlockType>)
                        /**
                         * Creates a {@link DisplacementProperty} with a specific set of
                         * {@link BlockType}s.
                         * @param value The displaceable block types
                         * @param op The operator to use when comparing against other properties
                         */
                        // @ts-ignore
                        constructor(value: Array<org.spongepowered.api.block.BlockType>, op: org.spongepowered.api.data.Property.Operator)
                        // @ts-ignore
                        compareTo(o: org.spongepowered.api.data.Property<any, ?>): int
                    }
                }
            }
        }
    }
}
