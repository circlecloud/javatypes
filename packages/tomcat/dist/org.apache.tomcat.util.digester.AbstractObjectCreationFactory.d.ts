declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace digester {
                    /**
                     * <p>Abstract base class for <code>ObjectCreationFactory</code>
                     * implementations.</p>
                     */
                    // @ts-ignore
                    abstract class AbstractObjectCreationFactory extends java.lang.Object implements org.apache.tomcat.util.digester.ObjectCreationFactory {
                        // @ts-ignore
                        constructor()
                        /**
                         * <p>Factory method called by {@link FactoryCreateRule} to supply an
                         * object based on the element's attributes.
                         * @param attributes the element's attributes
                         * @throws Exception any exception thrown will be propagated upwards
                         */
                        // @ts-ignore
                        public abstract createObject(attributes: org.xml.sax.Attributes): any
                        /**
                         * <p>Returns the {@link Digester} that was set by the
                         * {@link FactoryCreateRule} upon initialization.
                         */
                        // @ts-ignore
                        public getDigester(): org.apache.tomcat.util.digester.Digester
                        /**
                         * <p>Set the {@link Digester} to allow the implementation to do logging,
                         * classloading based on the digester's classloader, etc.
                         * @param digester parent Digester object
                         */
                        // @ts-ignore
                        public setDigester(digester: org.apache.tomcat.util.digester.Digester): void
                    }
                }
            }
        }
    }
}
