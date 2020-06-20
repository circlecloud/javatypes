declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace support {
                    /**
                     * Qualifier for resolving autowire candidates. A bean definition that
                     * includes one or more such qualifiers enables fine-grained matching
                     * against annotations on a field or parameter to be autowired.
                     * @author Mark Fisher
                     * @author Juergen Hoeller
                     * @since 2.5
                     * @see org.springframework.beans.factory.annotation.Qualifier
                     */
                    // @ts-ignore
                    class AutowireCandidateQualifier extends org.springframework.beans.BeanMetadataAttributeAccessor {
                        /**
                         * Construct a qualifier to match against an annotation of the
                         * given type.
                         * @param type the annotation type
                         */
                        // @ts-ignore
                        constructor(type: java.lang.Class<any>)
                        /**
                         * Construct a qualifier to match against an annotation of the
                         * given type name.
                         * <p>The type name may match the fully-qualified class name of
                         * the annotation or the short class name (without the package).
                         * @param typeName the name of the annotation type
                         */
                        // @ts-ignore
                        constructor(typeName: string)
                        /**
                         * Construct a qualifier to match against an annotation of the
                         * given type whose {@code value} attribute also matches
                         * the specified value.
                         * @param type the annotation type
                         * @param value the annotation value to match
                         */
                        // @ts-ignore
                        constructor(type: java.lang.Class<any>, value: any)
                        /**
                         * Construct a qualifier to match against an annotation of the
                         * given type name whose {@code value} attribute also matches
                         * the specified value.
                         * <p>The type name may match the fully-qualified class name of
                         * the annotation or the short class name (without the package).
                         * @param typeName the name of the annotation type
                         * @param value the annotation value to match
                         */
                        // @ts-ignore
                        constructor(typeName: string, value: any)
                        /**
                         * The name of the key used to store the value.
                         */
                        // @ts-ignore
                        readonly VALUE_KEY: string
                        /**
                         * Retrieve the type name. This value will be the same as the
                         * type name provided to the constructor or the fully-qualified
                         * class name if a Class instance was provided to the constructor.
                         */
                        // @ts-ignore
                        getTypeName(): java.lang.String
                    }
                }
            }
        }
    }
}
