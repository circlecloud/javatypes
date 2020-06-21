declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace digester {
                    /**
                     * Concrete implementations of this class implement actions to be taken when
                     * a corresponding nested pattern of XML elements has been matched.
                     */
                    // @ts-ignore
                    abstract class Rule extends java.lang.Object {
                        /**
                         * <p>Base constructor.
                         * Now the digester will be set when the rule is added.</p>
                         */
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        static readonly sm: org.apache.tomcat.util.res.StringManager
                        /**
                         * The Digester with which this Rule is associated.
                         */
                        // @ts-ignore
                        digester: org.apache.tomcat.util.digester.Digester
                        /**
                         * The namespace URI for which this Rule is relevant, if any.
                         */
                        // @ts-ignore
                        namespaceURI: java.lang.String | string
                        /**
                         * Identify the Digester with which this Rule is associated.
                         * @return the Digester with which this Rule is associated.
                         */
                        // @ts-ignore
                        public getDigester(): org.apache.tomcat.util.digester.Digester
                        /**
                         * Set the <code>Digester</code> with which this <code>Rule</code> is
                         * associated.
                         * @param digester The digester with which to associate this rule
                         */
                        // @ts-ignore
                        public setDigester(digester: org.apache.tomcat.util.digester.Digester): void
                        /**
                         * Return the namespace URI for which this Rule is relevant, if any.
                         * @return The namespace URI for which this rule is relevant or
                         *          <code>null</code> if none.
                         */
                        // @ts-ignore
                        public getNamespaceURI(): string
                        /**
                         * Set the namespace URI for which this Rule is relevant, if any.
                         * @param namespaceURI Namespace URI for which this Rule is relevant,
                         *   or <code>null</code> to match independent of namespace.
                         */
                        // @ts-ignore
                        public setNamespaceURI(namespaceURI: java.lang.String | string): void
                        /**
                         * This method is called when the beginning of a matching XML element
                         * is encountered. The default implementation is a NO-OP.
                         * @param namespace the namespace URI of the matching element, or an
                         *                   empty string if the parser is not namespace aware or the
                         *                   element has no namespace
                         * @param name the local name if the parser is namespace aware, or just
                         *              the element name otherwise
                         * @param attributes The attribute list of this element
                         * @throws Exception if an error occurs while processing the event
                         */
                        // @ts-ignore
                        public begin(namespace: java.lang.String | string, name: java.lang.String | string, attributes: org.xml.sax.Attributes): void
                        /**
                         * This method is called when the body of a matching XML element is
                         * encountered.  If the element has no body, this method is not called at
                         * all. The default implementation is a NO-OP.
                         * @param namespace the namespace URI of the matching element, or an empty
                         *                   string if the parser is not namespace aware or the
                         *                   element has no namespace
                         * @param name the local name if the parser is namespace aware, or just the
                         *              element name otherwise
                         * @param text The text of the body of this element
                         * @throws Exception if an error occurs while processing the event
                         */
                        // @ts-ignore
                        public body(namespace: java.lang.String | string, name: java.lang.String | string, text: java.lang.String | string): void
                        /**
                         * This method is called when the end of a matching XML element
                         * is encountered. The default implementation is a NO-OP.
                         * @param namespace the namespace URI of the matching element, or an empty
                         *                   string if the parser is not namespace aware or the
                         *                   element has no namespace
                         * @param name the local name if the parser is namespace aware, or just the
                         *              element name otherwise
                         * @throws Exception if an error occurs while processing the event
                         */
                        // @ts-ignore
                        public end(namespace: java.lang.String | string, name: java.lang.String | string): void
                        /**
                         * This method is called after all parsing methods have been
                         * called, to allow Rules to remove temporary data.
                         * @throws Exception if an error occurs while processing the event
                         */
                        // @ts-ignore
                        public finish(): void
                    }
                }
            }
        }
    }
}
