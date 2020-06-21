declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace config {
                    /**
                     * Holder for a typed String value. Can be added to bean definitions
                     * in order to explicitly specify a target type for a String value,
                     * for example for collection elements.
                     * <p>This holder will just store the String value and the target type.
                     * The actual conversion will be performed by the bean factory.
                     * @author Juergen Hoeller
                     * @since 1.2
                     * @see BeanDefinition#getPropertyValues
                     * @see org.springframework.beans.MutablePropertyValues#addPropertyValue
                     */
                    // @ts-ignore
                    class TypedStringValue extends java.lang.Object implements org.springframework.beans.BeanMetadataElement {
                        /**
                         * Create a new {@link TypedStringValue} for the given String value.
                         * @param value the String value
                         */
                        // @ts-ignore
                        constructor(value: java.lang.String | string)
                        /**
                         * Create a new {@link TypedStringValue} for the given String value
                         * and target type.
                         * @param value the String value
                         * @param targetType the type to convert to
                         */
                        // @ts-ignore
                        constructor(value: java.lang.String | string, targetType: java.lang.Class<any>)
                        /**
                         * Create a new {@link TypedStringValue} for the given String value
                         * and target type.
                         * @param value the String value
                         * @param targetTypeName the type to convert to
                         */
                        // @ts-ignore
                        constructor(value: java.lang.String | string, targetTypeName: java.lang.String | string)
                        /**
                         * Set the String value.
                         * <p>Only necessary for manipulating a registered value,
                         * for example in BeanFactoryPostProcessors.
                         */
                        // @ts-ignore
                        public setValue(value: java.lang.String | string): void
                        /**
                         * Return the String value.
                         */
                        // @ts-ignore
                        public getValue(): string
                        /**
                         * Set the type to convert to.
                         * <p>Only necessary for manipulating a registered value,
                         * for example in BeanFactoryPostProcessors.
                         */
                        // @ts-ignore
                        public setTargetType(targetType: java.lang.Class<any>): void
                        /**
                         * Return the type to convert to.
                         */
                        // @ts-ignore
                        public getTargetType(): java.lang.Class<any>
                        /**
                         * Specify the type to convert to.
                         */
                        // @ts-ignore
                        public setTargetTypeName(targetTypeName: java.lang.String | string): void
                        /**
                         * Return the type to convert to.
                         */
                        // @ts-ignore
                        public getTargetTypeName(): string
                        /**
                         * Return whether this typed String value carries a target type .
                         */
                        // @ts-ignore
                        public hasTargetType(): boolean
                        /**
                         * Determine the type to convert to, resolving it from a specified class name
                         * if necessary. Will also reload a specified Class from its name when called
                         * with the target type already resolved.
                         * @param classLoader the ClassLoader to use for resolving a (potential) class name
                         * @return the resolved type to convert to
                         * @throws ClassNotFoundException if the type cannot be resolved
                         */
                        // @ts-ignore
                        public resolveTargetType(classLoader: java.lang.ClassLoader): java.lang.Class<any>
                        /**
                         * Set the configuration source {@code Object} for this metadata element.
                         * <p>The exact type of the object will depend on the configuration mechanism used.
                         */
                        // @ts-ignore
                        public setSource(source: java.lang.Object | any): void
                        // @ts-ignore
                        public getSource(): any
                        /**
                         * Set the type name as actually specified for this particular value, if any.
                         */
                        // @ts-ignore
                        public setSpecifiedTypeName(specifiedTypeName: java.lang.String | string): void
                        /**
                         * Return the type name as actually specified for this particular value, if any.
                         */
                        // @ts-ignore
                        public getSpecifiedTypeName(): string
                        /**
                         * Mark this value as dynamic, i.e. as containing an expression
                         * and hence not being subject to caching.
                         */
                        // @ts-ignore
                        public setDynamic(): void
                        /**
                         * Return whether this value has been marked as dynamic.
                         */
                        // @ts-ignore
                        public isDynamic(): boolean
                        // @ts-ignore
                        public equals(other: java.lang.Object | any): boolean
                        // @ts-ignore
                        public hashCode(): number /*int*/
                        // @ts-ignore
                        public toString(): string
                    }
                }
            }
        }
    }
}
