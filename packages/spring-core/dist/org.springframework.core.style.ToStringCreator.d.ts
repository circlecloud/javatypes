declare namespace org {
    namespace springframework {
        namespace core {
            namespace style {
                /**
                 * Utility class that builds pretty-printing {@code toString()} methods
                 * with pluggable styling conventions. By default, ToStringCreator adheres
                 * to Spring's {@code toString()} styling conventions.
                 * @author Keith Donald
                 * @author Juergen Hoeller
                 * @since 1.2.2
                 */
                // @ts-ignore
                class ToStringCreator extends java.lang.Object {
                    /**
                     * Create a ToStringCreator for the given object.
                     * @param obj the object to be stringified
                     */
                    // @ts-ignore
                    constructor(obj: java.lang.Object | any)
                    /**
                     * Create a ToStringCreator for the given object, using the provided style.
                     * @param obj the object to be stringified
                     * @param styler the ValueStyler encapsulating pretty-print instructions
                     */
                    // @ts-ignore
                    constructor(obj: java.lang.Object | any, styler: org.springframework.core.style.ValueStyler)
                    /**
                     * Create a ToStringCreator for the given object, using the provided style.
                     * @param obj the object to be stringified
                     * @param styler the ToStringStyler encapsulating pretty-print instructions
                     */
                    // @ts-ignore
                    constructor(obj: java.lang.Object | any, styler: org.springframework.core.style.ToStringStyler)
                    /**
                     * Append a byte field value.
                     * @param fieldName the name of the field, usually the member variable name
                     * @param value the field value
                     * @return this, to support call-chaining
                     */
                    // @ts-ignore
                    public append(fieldName: java.lang.String | string, value: number /*byte*/): org.springframework.core.style.ToStringCreator
                    /**
                     * Append a short field value.
                     * @param fieldName the name of the field, usually the member variable name
                     * @param value the field value
                     * @return this, to support call-chaining
                     */
                    // @ts-ignore
                    public append(fieldName: java.lang.String | string, value: number /*short*/): org.springframework.core.style.ToStringCreator
                    /**
                     * Append a integer field value.
                     * @param fieldName the name of the field, usually the member variable name
                     * @param value the field value
                     * @return this, to support call-chaining
                     */
                    // @ts-ignore
                    public append(fieldName: java.lang.String | string, value: number /*int*/): org.springframework.core.style.ToStringCreator
                    /**
                     * Append a long field value.
                     * @param fieldName the name of the field, usually the member variable name
                     * @param value the field value
                     * @return this, to support call-chaining
                     */
                    // @ts-ignore
                    public append(fieldName: java.lang.String | string, value: number /*long*/): org.springframework.core.style.ToStringCreator
                    /**
                     * Append a float field value.
                     * @param fieldName the name of the field, usually the member variable name
                     * @param value the field value
                     * @return this, to support call-chaining
                     */
                    // @ts-ignore
                    public append(fieldName: java.lang.String | string, value: number /*float*/): org.springframework.core.style.ToStringCreator
                    /**
                     * Append a double field value.
                     * @param fieldName the name of the field, usually the member variable name
                     * @param value the field value
                     * @return this, to support call-chaining
                     */
                    // @ts-ignore
                    public append(fieldName: java.lang.String | string, value: number /*double*/): org.springframework.core.style.ToStringCreator
                    /**
                     * Append a boolean field value.
                     * @param fieldName the name of the field, usually the member variable name
                     * @param value the field value
                     * @return this, to support call-chaining
                     */
                    // @ts-ignore
                    public append(fieldName: java.lang.String | string, value: boolean): org.springframework.core.style.ToStringCreator
                    /**
                     * Append a field value.
                     * @param fieldName the name of the field, usually the member variable name
                     * @param value the field value
                     * @return this, to support call-chaining
                     */
                    // @ts-ignore
                    public append(fieldName: java.lang.String | string, value: java.lang.Object | any): org.springframework.core.style.ToStringCreator
                    /**
                     * Append the provided value.
                     * @param value the value to append
                     * @return this, to support call-chaining.
                     */
                    // @ts-ignore
                    public append(value: java.lang.Object | any): org.springframework.core.style.ToStringCreator
                    /**
                     * Return the String representation that this ToStringCreator built.
                     */
                    // @ts-ignore
                    public toString(): string
                }
            }
        }
    }
}
