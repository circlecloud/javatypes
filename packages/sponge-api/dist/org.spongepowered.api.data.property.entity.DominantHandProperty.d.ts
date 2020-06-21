declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace property {
                    namespace entity {
                        /**
                         * Represents a {@link Property} for the dominant {@link HandPreference} of a
                         * {@link Player}.
                         * <p>Handedness usually determines which hand is used for "main" interactions,
                         * such as tool use or block breaking.</p>
                         * <p><i>NOTE: </i> This only applies to {@link Player}s, for {@link Living}
                         * entities see {@link DominantHandData}.</p>
                         */
                        // @ts-ignore
                        class DominantHandProperty extends org.spongepowered.api.data.property.AbstractProperty<java.lang.String | string, org.spongepowered.api.data.type.HandPreference> {
                            /**
                             * Creates a new {@link DominantHandProperty} with the provided
                             * {@link HandPreference} value.
                             * @param value The value
                             */
                            // @ts-ignore
                            constructor(value: org.spongepowered.api.data.type.HandPreference)
                            /**
                             * Creates a new {@link DominantHandProperty} with the provided
                             * {@link HandPreference}
                             * and {@link org.spongepowered.api.data.Property.Operator} value.
                             * @param value The value
                             * @param op The operator for comparison
                             */
                            // @ts-ignore
                            constructor(value: org.spongepowered.api.data.type.HandPreference, op: org.spongepowered.api.data.Property.Operator)
                            // @ts-ignore
                            public compareTo(o: org.spongepowered.api.data.Property<any, any>): number /*int*/
                        }
                    }
                }
            }
        }
    }
}
