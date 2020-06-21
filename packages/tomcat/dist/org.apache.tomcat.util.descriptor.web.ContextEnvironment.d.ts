declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace descriptor {
                    namespace web {
                        /**
                         * Representation of an application environment entry, as represented in
                         * an <code>&lt;env-entry&gt;</code> element in the deployment descriptor.
                         * @author Craig R. McClanahan
                         */
                        // @ts-ignore
                        class ContextEnvironment extends org.apache.tomcat.util.descriptor.web.ResourceBase {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            public getOverride(): boolean
                            // @ts-ignore
                            public setOverride(override: boolean): void
                            // @ts-ignore
                            public getValue(): string
                            // @ts-ignore
                            public setValue(value: java.lang.String | string): void
                            /**
                             * Return a String representation of this object.
                             */
                            // @ts-ignore
                            public toString(): string
                            // @ts-ignore
                            public hashCode(): number /*int*/
                            // @ts-ignore
                            public equals(obj: java.lang.Object | any): boolean
                        }
                    }
                }
            }
        }
    }
}
