declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace descriptor {
                    namespace web {
                        /**
                         * Representation of an Context element
                         * @author Peter Rossbach (pero#apache.org)
                         */
                        // @ts-ignore
                        class ResourceBase extends java.lang.Object implements java.io.Serializable, org.apache.tomcat.util.descriptor.web.Injectable {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            public getDescription(): string
                            // @ts-ignore
                            public setDescription(description: java.lang.String | string): void
                            // @ts-ignore
                            public getName(): string
                            // @ts-ignore
                            public setName(name: java.lang.String | string): void
                            // @ts-ignore
                            public getType(): string
                            // @ts-ignore
                            public setType(type: java.lang.String | string): void
                            // @ts-ignore
                            public getLookupName(): string
                            // @ts-ignore
                            public setLookupName(lookupName: java.lang.String | string): void
                            /**
                             * @param name The property name
                             * @return a configured property.
                             */
                            // @ts-ignore
                            public getProperty(name: java.lang.String | string): any
                            /**
                             * Set a configured property.
                             * @param name The property name
                             * @param value The property value
                             */
                            // @ts-ignore
                            public setProperty(name: java.lang.String | string, value: java.lang.Object | any): void
                            /**
                             * Remove a configured property.
                             * @param name The property name
                             */
                            // @ts-ignore
                            public removeProperty(name: java.lang.String | string): void
                            /**
                             * List properties.
                             * @return the property names iterator
                             */
                            // @ts-ignore
                            public listProperties(): java.util.Iterator<java.lang.String | string>
                            // @ts-ignore
                            public addInjectionTarget(injectionTargetName: java.lang.String | string, jndiName: java.lang.String | string): void
                            // @ts-ignore
                            public getInjectionTargets(): Array<org.apache.tomcat.util.descriptor.web.InjectionTarget>
                            // @ts-ignore
                            public hashCode(): number /*int*/
                            // @ts-ignore
                            public equals(obj: java.lang.Object | any): boolean
                            // @ts-ignore
                            public getNamingResources(): org.apache.tomcat.util.descriptor.web.NamingResources
                            // @ts-ignore
                            public setNamingResources(resources: org.apache.tomcat.util.descriptor.web.NamingResources): void
                        }
                    }
                }
            }
        }
    }
}
