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
                        /**
                         * No operator, use the operator from the <em>other</em> property when
                         * comparing. If both properties have their operator set as DELEGATE,
                         * then comparison will always return false.
                         */
                        // @ts-ignore
                        readonly DELEGATE: org.spongepowered.api.data.Property.Operator
                        /**
                         * Use the <code>.equals()</code> method.
                         */
                        // @ts-ignore
                        readonly EQUAL: org.spongepowered.api.data.Property.Operator
                        /**
                         * Use the <code>.equals()</code> method but match if the result is
                         * false.
                         */
                        // @ts-ignore
                        readonly NOTEQUAL: org.spongepowered.api.data.Property.Operator
                        /**
                         * Use <code>.compareTo()</code> amd match if target is greater than
                         * supplied operand.
                         */
                        // @ts-ignore
                        readonly GREATER: org.spongepowered.api.data.Property.Operator
                        /**
                         * Use <code>.compareTo()</code> and match if target is greater than
                         * or equal to supplied operand.
                         */
                        // @ts-ignore
                        readonly GEQUAL: org.spongepowered.api.data.Property.Operator
                        /**
                         * Use <code>.compareTo()</code> amd match if target is less than the
                         * supplied operand.
                         */
                        // @ts-ignore
                        readonly LESS: org.spongepowered.api.data.Property.Operator
                        /**
                         * Use <code>.compareTo()</code> amd match if target is less than or
                         * equal to the supplied operand.
                         */
                        // @ts-ignore
                        readonly LEQUAL: org.spongepowered.api.data.Property.Operator
                        // @ts-ignore
                        values(): org.spongepowered.api.data.Property.Operator[]
                        // @ts-ignore
                        valueOf(name: java.lang.String | string): org.spongepowered.api.data.Property.Operator
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
                        compare(operand1: org.spongepowered.api.data.Property<any, any>, operand2: org.spongepowered.api.data.Property<any, any>): boolean
                        /**
                         * Stub for subclasses to implement their logic. Used so we can get the
                         * null comparison logic out of the way first and then only proceed with
                         * comparison if both arguments are non-null.
                         * @param operand1 First operand
                         * @param operand2 Second operand
                         * @return First operand's comparison to second
                         */
                        // @ts-ignore
                        apply(operand1: org.spongepowered.api.data.Property<any, any>, operand2: org.spongepowered.api.data.Property<any, any>): boolean
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
