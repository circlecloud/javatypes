declare namespace org {
    namespace springframework {
        namespace context {
            namespace annotation {
                namespace CommonAnnotationBeanPostProcessor {
                    /**
                     * Class representing generic injection information about an annotated field
                     * or setter method, supporting @Resource and related annotations.
                     */
                    // @ts-ignore
                    class LookupElement extends InjectionMetadata.InjectedElement {
                        // @ts-ignore
                        constructor(member: java.lang.reflect.Member, pd: java.beans.PropertyDescriptor)
                        // @ts-ignore
                        name: string
                        // @ts-ignore
                        isDefaultName: boolean
                        // @ts-ignore
                        lookupType: java.lang.Class<any>
                        // @ts-ignore
                        mappedName: string
                        /**
                         * Return the resource name for the lookup.
                         */
                        // @ts-ignore
                        getName(): java.lang.String
                        /**
                         * Return the desired type for the lookup.
                         */
                        // @ts-ignore
                        getLookupType(): java.lang.Class<?>
                        /**
                         * Build a DependencyDescriptor for the underlying field/method.
                         */
                        // @ts-ignore
                        getDependencyDescriptor(): DependencyDescriptor
                    }
                }
            }
        }
    }
}
