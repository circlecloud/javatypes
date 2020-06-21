declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace descriptor {
                    namespace web {
                        /**
                         * Representation of an error page element for a web application,
                         * as represented in a <code>&lt;error-page&gt;</code> element in the
                         * deployment descriptor.
                         * @author Craig R. McClanahan
                         */
                        // @ts-ignore
                        class ErrorPage extends java.lang.Object implements java.io.Serializable {
                            // @ts-ignore
                            constructor()
                            /**
                             * @return the error code.
                             */
                            // @ts-ignore
                            public getErrorCode(): number /*int*/
                            /**
                             * Set the error code.
                             * @param errorCode The new error code
                             */
                            // @ts-ignore
                            public setErrorCode(errorCode: number /*int*/): void
                            /**
                             * Set the error code (hack for default XmlMapper data type).
                             * @param errorCode The new error code
                             */
                            // @ts-ignore
                            public setErrorCode(errorCode: java.lang.String | string): void
                            /**
                             * @return the exception type.
                             */
                            // @ts-ignore
                            public getExceptionType(): string
                            /**
                             * Set the exception type.
                             * @param exceptionType The new exception type
                             */
                            // @ts-ignore
                            public setExceptionType(exceptionType: java.lang.String | string): void
                            /**
                             * @return the location.
                             */
                            // @ts-ignore
                            public getLocation(): string
                            /**
                             * Set the location.
                             * @param location The new location
                             */
                            // @ts-ignore
                            public setLocation(location: java.lang.String | string): void
                            /**
                             * Render a String representation of this object.
                             */
                            // @ts-ignore
                            public toString(): string
                            // @ts-ignore
                            public getName(): string
                        }
                    }
                }
            }
        }
    }
}
