declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace digester {
                    /**
                     * <p> Interface for use with {@link FactoryCreateRule}.
                     * The rule calls {@link #createObject} to create an object
                     * to be pushed onto the <code>Digester</code> stack
                     * whenever it is matched.</p>
                     * <p> {@link AbstractObjectCreationFactory} is an abstract
                     * implementation suitable for creating anonymous
                     * <code>ObjectCreationFactory</code> implementations.
                     */
                    // @ts-ignore
                    interface ObjectCreationFactory {
                        /**
                         * Factory method called by {@link FactoryCreateRule} to supply an
                         * object based on the element's attributes.
                         * @param attributes the element's attributes
                         * @return the creted object
                         * @throws Exception any exception thrown will be propagated upwards
                         */
                        // @ts-ignore
                        createObject(attributes: org.xml.sax.Attributes): any
                        /**
                         * @return the {#link Digester} that was set by the
                         *  {@link FactoryCreateRule} upon initialization.
                         */
                        // @ts-ignore
                        getDigester(): org.apache.tomcat.util.digester.Digester
                        /**
                         * Set the {@link Digester} to allow the implementation to do logging,
                         * classloading based on the digester's classloader, etc.
                         * @param digester parent Digester object
                         */
                        // @ts-ignore
                        setDigester(digester: org.apache.tomcat.util.digester.Digester): void
                    }
                }
            }
        }
    }
}
