declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace descriptor {
                    namespace web {
                        /**
                         * Representation of a web resource collection for a web application's security
                         * constraint, as represented in a <code>&lt;web-resource-collection&gt;</code>
                         * element in the deployment descriptor.
                         * <p>
                         * <b>WARNING</b>:  It is assumed that instances of this class will be created
                         * and modified only within the context of a single thread, before the instance
                         * is made visible to the remainder of the application.  After that, only read
                         * access is expected.  Therefore, none of the read and write access within
                         * this class is synchronized.
                         * @author Craig R. McClanahan
                         */
                        // @ts-ignore
                        class SecurityCollection extends org.apache.tomcat.util.descriptor.web.XmlEncodingBase implements java.io.Serializable {
                            /**
                             * Construct a new security collection instance with default values.
                             */
                            // @ts-ignore
                            constructor()
                            /**
                             * Construct a new security collection instance with specified values.
                             * @param name Name of this security collection
                             * @param description Description of this security collection
                             */
                            // @ts-ignore
                            constructor(name: java.lang.String | string, description: java.lang.String | string)
                            /**
                             * @return the description of this web resource collection.
                             */
                            // @ts-ignore
                            public getDescription(): string
                            /**
                             * Set the description of this web resource collection.
                             * @param description The new description
                             */
                            // @ts-ignore
                            public setDescription(description: java.lang.String | string): void
                            /**
                             * @return the name of this web resource collection.
                             */
                            // @ts-ignore
                            public getName(): string
                            /**
                             * Set the name of this web resource collection
                             * @param name The new name
                             */
                            // @ts-ignore
                            public setName(name: java.lang.String | string): void
                            /**
                             * @return if this constraint was defined in a deployment descriptor.
                             */
                            // @ts-ignore
                            public isFromDescriptor(): boolean
                            /**
                             * Set if this constraint was defined in a deployment descriptor.
                             * @param isFromDescriptor <code>true</code> was declared in a descriptor
                             */
                            // @ts-ignore
                            public setFromDescriptor(isFromDescriptor: boolean): void
                            /**
                             * Add an HTTP request method to be explicitly part of this web resource
                             * collection.
                             * @param method The method
                             */
                            // @ts-ignore
                            public addMethod(method: java.lang.String | string): void
                            /**
                             * Add an HTTP request method to the methods explicitly excluded from this
                             * web resource collection.
                             * @param method The method
                             */
                            // @ts-ignore
                            public addOmittedMethod(method: java.lang.String | string): void
                            /**
                             * Add a URL pattern to be part of this web resource collection.
                             * @param pattern The pattern
                             */
                            // @ts-ignore
                            public addPattern(pattern: java.lang.String | string): void
                            // @ts-ignore
                            public addPatternDecoded(pattern: java.lang.String | string): void
                            /**
                             * Check if the collection applies to the specified method.
                             * @param method Request method to check
                             * @return <code>true</code> if the specified HTTP request method is
                             *  part of this web resource collection.
                             */
                            // @ts-ignore
                            public findMethod(method: java.lang.String | string): boolean
                            /**
                             * @return the set of HTTP request methods that are part of this web
                             *  resource collection, or a zero-length array if no methods have been
                             *  explicitly included.
                             */
                            // @ts-ignore
                            public findMethods(): string[]
                            /**
                             * @return the set of HTTP request methods that are explicitly excluded from
                             *  this web resource collection, or a zero-length array if no request
                             *  methods are excluded.
                             */
                            // @ts-ignore
                            public findOmittedMethods(): string[]
                            /**
                             * Is the specified pattern part of this web resource collection?
                             * @param pattern Pattern to be compared
                             * @return <code>true</code> if the pattern is part of the collection
                             */
                            // @ts-ignore
                            public findPattern(pattern: java.lang.String | string): boolean
                            /**
                             * @return the set of URL patterns that are part of this web resource
                             *  collection.  If none have been specified, a zero-length array is
                             *  returned.
                             */
                            // @ts-ignore
                            public findPatterns(): string[]
                            /**
                             * Remove the specified HTTP request method from those that are part
                             * of this web resource collection.
                             * @param method Request method to be removed
                             */
                            // @ts-ignore
                            public removeMethod(method: java.lang.String | string): void
                            /**
                             * Remove the specified HTTP request method from those that are explicitly
                             * excluded from this web resource collection.
                             * @param method Request method to be removed
                             */
                            // @ts-ignore
                            public removeOmittedMethod(method: java.lang.String | string): void
                            /**
                             * Remove the specified URL pattern from those that are part of this
                             * web resource collection.
                             * @param pattern Pattern to be removed
                             */
                            // @ts-ignore
                            public removePattern(pattern: java.lang.String | string): void
                            /**
                             * Return a String representation of this security collection.
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
