declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace digester {
                    /**
                     * Rule implementation that creates a new object and pushes it
                     * onto the object stack.  When the element is complete, the
                     * object will be popped
                     */
                    // @ts-ignore
                    class ObjectCreateRule extends org.apache.tomcat.util.digester.Rule {
                        /**
                         * Construct an object create rule with the specified class name.
                         * @param className Java class name of the object to be created
                         */
                        // @ts-ignore
                        constructor(className: java.lang.String | string)
                        /**
                         * Construct an object create rule with the specified class name and an
                         * optional attribute name containing an override.
                         * @param className Java class name of the object to be created
                         * @param attributeName Attribute name which, if present, contains an
                         *   override of the class name to create
                         */
                        // @ts-ignore
                        constructor(className: java.lang.String | string, attributeName: java.lang.String | string)
                        /**
                         * The attribute containing an override class name if it is present.
                         */
                        // @ts-ignore
                        attributeName: java.lang.String | string
                        /**
                         * The Java class name of the object to be created.
                         */
                        // @ts-ignore
                        className: java.lang.String | string
                        /**
                         * Process the beginning of this element.
                         * @param namespace the namespace URI of the matching element, or an
                         *    empty string if the parser is not namespace aware or the element has
                         *    no namespace
                         * @param name the local name if the parser is namespace aware, or just
                         *    the element name otherwise
                         * @param attributes The attribute list for this element
                         */
                        // @ts-ignore
                        public begin(namespace: java.lang.String | string, name: java.lang.String | string, attributes: org.xml.sax.Attributes): void
                        /**
                         * Process the end of this element.
                         * @param namespace the namespace URI of the matching element, or an
                         *    empty string if the parser is not namespace aware or the element has
                         *    no namespace
                         * @param name the local name if the parser is namespace aware, or just
                         *    the element name otherwise
                         */
                        // @ts-ignore
                        public end(namespace: java.lang.String | string, name: java.lang.String | string): void
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
