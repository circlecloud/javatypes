declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace property {
                    /**
                     * Represents an item property that has an integer value. Examples may include
                     * {@link FoodRestorationProperty}, {@link SaturationProperty} etc.
                     */
                    // @ts-ignore
                    class DoubleProperty extends org.spongepowered.api.data.property.AbstractProperty<java.lang.String | string, java.lang.Double | number> {
                        /**
                         * Create a new integer property with the specified value.
                         * @param value value to match
                         */
                        // @ts-ignore
                        constructor(value: number /*double*/)
                        /**
                         * Create a new integer property with the specified value and logical
                         * operator.
                         * @param value value to match
                         * @param operator logical operator to use when comparing to other
                         *       properties
                         */
                        // @ts-ignore
                        constructor(value: number /*double*/, operator: org.spongepowered.api.data.Property.Operator)
                        /**
                         * Create a new integer property with the specified value and logical
                         * operator.
                         * @param value value to match
                         * @param operator logical operator to use when comparing to other
                         *       properties
                         */
                        // @ts-ignore
                        constructor(value: java.lang.Object | any, operator: org.spongepowered.api.data.Property.Operator)
                        // @ts-ignore
                        public compareTo(other: org.spongepowered.api.data.Property<any, any>): number /*int*/
                    }
                }
            }
        }
    }
}
