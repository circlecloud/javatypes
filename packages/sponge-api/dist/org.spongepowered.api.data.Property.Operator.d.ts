declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace Property {
                    /**
                     * Operator used to indicate to a query what operation to use when comparing
                     * this property with properties present on an item stack.
                     */
                    // @ts-ignore
                    class Operator extends java.lang.Enum<org.spongepowered.api.data.Property.Operator> {
                        // @ts-ignore
                        values(): org.spongepowered.api.data.Property.Operator[]
                        // @ts-ignore
                        valueOf(name: string): org.spongepowered.api.data.Property.Operator
                        /**
                         * <p>Compare the two operands by applying this operator <em>infix</em>
                         * with respect to them. For example, if this object is
                         * {@link Operator#GREATER} then calling this method with
                         * <code>object1</code> and <code>object2</code> would effectively
                         * return:</p>
                         * <blockquote> <code>returnValue = object1 &gt; object2;</code>
                         * </blockquote>
                         * @param operand1 First operand
                         * @param operand2 Second operand
                         * @return First operand's comparison to second
                         */
                        // @ts-ignore
                        compare(operand1: org.spongepowered.api.data.Property<any, ?>, operand2: org.spongepowered.api.data.Property<any, ?>): boolean
                        /**
                         * Stub for subclasses to implement their logic. Used so we can get the
                         * null comparison logic out of the way first and then only proceed with
                         * comparison if both arguments are non-null.
                         * @param operand1 First operand
                         * @param operand2 Second operand
                         * @return First operand's comparison to second
                         */
                        // @ts-ignore
                        apply(operand1: org.spongepowered.api.data.Property<any, ?>, operand2: org.spongepowered.api.data.Property<any, ?>): boolean
                        /**
                         * Gets the default operator to use if none is specified.
                         * @return the default operator
                         */
                        // @ts-ignore
                        defaultOperator(): org.spongepowered.api.data.Property.Operator
                    }
                }
            }
        }
    }
}
