declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace property {
                    /**
                     * Represents an block property that has an integer value. Examples may include
                     */
                    // @ts-ignore
                    class IntProperty extends org.spongepowered.api.data.property.AbstractProperty<java.lang.String, java.lang.Integer> {
                        /**
                         * Create a new integer property with the specified value.
                         * @param value value to match
                         */
                        // @ts-ignore
                        constructor(value: number /*int*/)
                        /**
                         * Create a new integer property with the specified value and logical
                         * operator.
                         * @param value value to match
                         * @param operator logical operator to use when comparing to other
                         *       properties
                         */
                        // @ts-ignore
                        constructor(value: number /*int*/, operator: org.spongepowered.api.data.Property.Operator)
                        /**
                         * Create a new integer property with the specified value and logical
                         * operator.
                         * @param value value to match
                         * @param operator logical operator to use when comparing to other
                         *       properties
                         */
                        // @ts-ignore
                        constructor(value: any, operator: org.spongepowered.api.data.Property.Operator)
                        // @ts-ignore
                        compareTo(other: org.spongepowered.api.data.Property<any, ?>): int
                    }
                }
            }
        }
    }
}
