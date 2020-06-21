declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace descriptor {
                    namespace web {
                        /**
                         * Representation of an application resource reference, as represented in
                         * an <code>&lt;res-env-refy&gt;</code> element in the deployment descriptor.
                         * @author Craig R. McClanahan
                         */
                        // @ts-ignore
                        class ContextTransaction extends java.lang.Object implements java.io.Serializable {
                            // @ts-ignore
                            constructor()
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
                            /**
                             * Return a String representation of this object.
                             */
                            // @ts-ignore
                            public toString(): string
                        }
                    }
                }
            }
        }
    }
}
