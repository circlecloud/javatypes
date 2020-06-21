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
                    abstract class LookupElement extends InjectionMetadata.InjectedElement {
                        // @ts-ignore
                        constructor(member: java.lang.reflect.Member, pd: java.beans.PropertyDescriptor)
                        // @ts-ignore
                        name: java.lang.String | string
                        // @ts-ignore
                        isDefaultName: boolean
                        // @ts-ignore
                        lookupType: java.lang.Class<any>
                        // @ts-ignore
                        mappedName: java.lang.String | string
                        /**
                         * Return the resource name for the lookup.
                         */
                        // @ts-ignore
                        public getName(): string
                        /**
                         * Return the desired type for the lookup.
                         */
                        // @ts-ignore
                        public getLookupType(): java.lang.Class<any>
                        /**
                         * Build a DependencyDescriptor for the underlying field/method.
                         */
                        // @ts-ignore
                        public getDependencyDescriptor(): DependencyDescriptor
                    }
                }
            }
        }
    }
}
