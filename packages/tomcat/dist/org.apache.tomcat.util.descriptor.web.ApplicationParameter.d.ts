declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace descriptor {
                    namespace web {
                        /**
                         * Representation of a context initialization parameter that is configured
                         * in the server configuration file, rather than the application deployment
                         * descriptor.  This is convenient for establishing default values (which
                         * may be configured to allow application overrides or not) without having
                         * to modify the application deployment descriptor itself.
                         * @author Craig R. McClanahan
                         */
                        // @ts-ignore
                        class ApplicationParameter extends java.lang.Object implements java.io.Serializable {
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
                        }
                    }
                }
            }
        }
    }
}
