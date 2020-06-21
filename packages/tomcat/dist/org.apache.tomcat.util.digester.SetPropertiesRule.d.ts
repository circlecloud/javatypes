declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace digester {
                    /**
                     * <p>Rule implementation that sets properties on the object at the top of the
                     * stack, based on attributes with corresponding names.</p>
                     */
                    // @ts-ignore
                    class SetPropertiesRule extends org.apache.tomcat.util.digester.Rule {
                        // @ts-ignore
                        constructor()
                        /**
                         * Process the beginning of this element.
                         * @param namespace the namespace URI of the matching element, or an
                         *    empty string if the parser is not namespace aware or the element has
                         *    no namespace
                         * @param theName the local name if the parser is namespace aware, or just
                         *    the element name otherwise
                         * @param attributes The attribute list for this element
                         */
                        // @ts-ignore
                        public begin(namespace: java.lang.String | string, theName: java.lang.String | string, attributes: org.xml.sax.Attributes): void
                        /**
                         * Render a printable version of this Rule.
                         */
                        // @ts-ignore
                        public toString(): string
                    }
                }
            }
        }
    }
}
