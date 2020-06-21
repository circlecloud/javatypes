declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace modeler {
                    /**
                     * <p>Internal configuration information for an <code>Attribute</code>
                     * descriptor.</p>
                     * @author Craig R. McClanahan
                     */
                    // @ts-ignore
                    class AttributeInfo extends org.apache.tomcat.util.modeler.FeatureInfo {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        displayName: java.lang.String | string
                        // @ts-ignore
                        getMethod: java.lang.String | string
                        // @ts-ignore
                        setMethod: java.lang.String | string
                        // @ts-ignore
                        readable: boolean
                        // @ts-ignore
                        writeable: boolean
                        // @ts-ignore
                        is: boolean
                        /**
                         * @return the display name of this attribute.
                         */
                        // @ts-ignore
                        public getDisplayName(): string
                        // @ts-ignore
                        public setDisplayName(displayName: java.lang.String | string): void
                        /**
                         * @return the name of the property getter method, if non-standard.
                         */
                        // @ts-ignore
                        public getGetMethod(): string
                        // @ts-ignore
                        public setGetMethod(getMethod: java.lang.String | string): void
                        /**
                         * Is this a boolean attribute with an "is" getter?
                         * @return <code>true</code> if this is a boolean attribute
                         *   with an "is" getter
                         */
                        // @ts-ignore
                        public isIs(): boolean
                        // @ts-ignore
                        public setIs(jis: boolean): void
                        /**
                         * Is this attribute readable by management applications?
                         * @return <code>true</code> if readable
                         */
                        // @ts-ignore
                        public isReadable(): boolean
                        // @ts-ignore
                        public setReadable(readable: boolean): void
                        /**
                         * @return the name of the property setter method, if non-standard.
                         */
                        // @ts-ignore
                        public getSetMethod(): string
                        // @ts-ignore
                        public setSetMethod(setMethod: java.lang.String | string): void
                        /**
                         * Is this attribute writable by management applications?
                         * @return <code>true</code> if writable
                         */
                        // @ts-ignore
                        public isWriteable(): boolean
                        // @ts-ignore
                        public setWriteable(writeable: boolean): void
                    }
                }
            }
        }
    }
}
