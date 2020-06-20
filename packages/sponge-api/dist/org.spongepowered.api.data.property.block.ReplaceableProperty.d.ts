declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace property {
                    namespace block {
                        /**
                         * Gets if a block type can be replaced by other block types when other
                         * blocks are being placed. In short, the case where the value is
                         * <code>true</code>,
                         */
                        // @ts-ignore
                        class ReplaceableProperty extends org.spongepowered.api.data.property.BooleanProperty {
                            /**
                             * Creates a new {@link ReplaceableProperty} with the provided
                             * {@code value}.
                             * @param value The value of whether a block can be replaced
                             */
                            // @ts-ignore
                            constructor(value: boolean)
                            /**
                             * Creates a new {@link ReplaceableProperty} with the provided
                             * {@code value} and
                             * {@link org.spongepowered.api.data.Property.Operator operator} for
                             * comparisons.
                             * @param value The value
                             * @param operator The operator
                             */
                            // @ts-ignore
                            constructor(value: boolean, operator: org.spongepowered.api.data.Property.Operator)
                        }
                    }
                }
            }
        }
    }
}
