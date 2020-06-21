declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace descriptor {
                    namespace web {
                        /**
                         * Base class for those elements that need to track the encoding used in the
                         * source XML.
                         */
                        // @ts-ignore
                        abstract class XmlEncodingBase extends java.lang.Object {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            public setCharset(charset: java.nio.charset.Charset): void
                            /**
                             * Obtain the character encoding of the XML source that was used to
                             * populated this object.
                             * @return The character encoding of the associated XML source or
                             *          <code>UTF-8</code> if the encoding could not be determined
                             */
                            // @ts-ignore
                            public getCharset(): java.nio.charset.Charset
                        }
                    }
                }
            }
        }
    }
}
