declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace digester {
                    /**
                     * <p>Rule implementation that uses an {@link ObjectCreationFactory} to create
                     * a new object which it pushes onto the object stack.  When the element is
                     * complete, the object will be popped.</p>
                     * <p>This rule is intended in situations where the element's attributes are
                     * needed before the object can be created.  A common scenario is for the
                     * ObjectCreationFactory implementation to use the attributes  as parameters
                     * in a call to either a factory method or to a non-empty constructor.
                     */
                    // @ts-ignore
                    class FactoryCreateRule extends org.apache.tomcat.util.digester.Rule {
                        /**
                         * Construct a factory create rule using the given, already instantiated,
                         * {@link ObjectCreationFactory}.
                         * @param creationFactory called on to create the object.
                         * @param ignoreCreateExceptions if true, exceptions thrown by the object
                         *   creation factory will be ignored.
                         */
                        // @ts-ignore
                        constructor(creationFactory: org.apache.tomcat.util.digester.ObjectCreationFactory, ignoreCreateExceptions: boolean)
                        /**
                         * The object creation factory we will use to instantiate objects
                         * as required based on the attributes specified in the matched XML
                         * element.
                         */
                        // @ts-ignore
                        creationFactory: org.apache.tomcat.util.digester.ObjectCreationFactory
                        /**
                         * Process the beginning of this element.
                         * @param attributes The attribute list of this element
                         */
                        // @ts-ignore
                        public begin(namespace: java.lang.String | string, name: java.lang.String | string, attributes: org.xml.sax.Attributes): void
                        /**
                         * Process the end of this element.
                         */
                        // @ts-ignore
                        public end(namespace: java.lang.String | string, name: java.lang.String | string): void
                        /**
                         * Clean up after parsing is complete.
                         */
                        // @ts-ignore
                        public finish(): void
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
