declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace annotation {
                    namespace InjectionMetadata {
                        /**
                         * A single injected element.
                         */
                        // @ts-ignore
                        abstract class InjectedElement extends java.lang.Object {
                            // @ts-ignore
                            constructor(member: java.lang.reflect.Member, pd: java.beans.PropertyDescriptor)
                            // @ts-ignore
                            readonly member: java.lang.reflect.Member
                            // @ts-ignore
                            readonly isField: boolean
                            // @ts-ignore
                            readonly pd: java.beans.PropertyDescriptor
                            // @ts-ignore
                            skip: java.lang.Boolean
                            // @ts-ignore
                            public getMember(): java.lang.reflect.Member
                            // @ts-ignore
                            getResourceType(): java.lang.Class<any>
                            // @ts-ignore
                            checkResourceType(resourceType: java.lang.Class<any>): void
                            /**
                             * Either this or {@link #getResourceToInject} needs to be overridden.
                             */
                            // @ts-ignore
                            inject(target: java.lang.Object | any, requestingBeanName: java.lang.String | string, pvs: org.springframework.beans.PropertyValues): void
                            /**
                             * Check whether this injector's property needs to be skipped due to
                             * an explicit property value having been specified. Also marks the
                             * affected property as processed for other processors to ignore it.
                             */
                            // @ts-ignore
                            checkPropertySkipping(pvs: org.springframework.beans.PropertyValues): boolean
                            /**
                             * Clear property skipping for this element.
                             * @since 3.2.13
                             */
                            // @ts-ignore
                            clearPropertySkipping(pvs: org.springframework.beans.PropertyValues): void
                            /**
                             * Either this or {@link #inject} needs to be overridden.
                             */
                            // @ts-ignore
                            getResourceToInject(target: java.lang.Object | any, requestingBeanName: java.lang.String | string): any
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
}
