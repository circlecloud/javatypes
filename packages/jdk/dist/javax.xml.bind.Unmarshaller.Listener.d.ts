declare namespace javax {
    namespace xml {
        namespace bind {
            namespace Unmarshaller {
                /**
                 * <p/>
                 * Register an instance of an implementation of this class with {@link Unmarshaller} to externally listen
                 * for unmarshal events.
                 * <p/>
                 * <p/>
                 * This class enables pre and post processing of an instance of a JAXB mapped class
                 * as XML data is unmarshalled into it. The event callbacks are called when unmarshalling
                 * XML content into a JAXBElement instance or a JAXB mapped class that represents a complex type definition.
                 * The event callbacks are not called when unmarshalling to an instance of a
                 * Java datatype that represents a simple type definition.
                 * <p/>
                 * <p/>
                 * External listener is one of two different mechanisms for defining unmarshal event callbacks.
                 * See <a href="Unmarshaller.html#unmarshalEventCallback">Unmarshal Event Callbacks</a> for an overview.
                 * <p/>
                 * (@link #setListener(Listener)}
                 * (@link #getListener()}
                 * @since JAXB2.0
                 */
                // @ts-ignore
                abstract class Listener extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * <p/>
                     * Callback method invoked before unmarshalling into <tt>target</tt>.
                     * <p/>
                     * <p/>
                     * This method is invoked immediately after <tt>target</tt> was created and
                     * before the unmarshalling of this object begins. Note that
                     * if the class of <tt>target</tt> defines its own <tt>beforeUnmarshal</tt> method,
                     * the class specific callback method is invoked before this method is invoked.
                     * @param target non-null instance of JAXB mapped class prior to unmarshalling into it.
                     * @param parent instance of JAXB mapped class that will eventually reference <tt>target</tt>.
                     *                <tt>null</tt> when <tt>target</tt> is root element.
                     */
                    // @ts-ignore
                    public beforeUnmarshal(target: java.lang.Object | any, parent: java.lang.Object | any): void
                    /**
                     * <p/>
                     * Callback method invoked after unmarshalling XML data into <tt>target</tt>.
                     * <p/>
                     * <p/>
                     * This method is invoked after all the properties (except IDREF) are unmarshalled into <tt>target</tt>,
                     * but before <tt>target</tt> is set into its <tt>parent</tt> object.
                     * Note that if the class of <tt>target</tt> defines its own <tt>afterUnmarshal</tt> method,
                     * the class specific callback method is invoked before this method is invoked.
                     * @param target non-null instance of JAXB mapped class prior to unmarshalling into it.
                     * @param parent instance of JAXB mapped class that will reference <tt>target</tt>.
                     *                <tt>null</tt> when <tt>target</tt> is root element.
                     */
                    // @ts-ignore
                    public afterUnmarshal(target: java.lang.Object | any, parent: java.lang.Object | any): void
                }
            }
        }
    }
}
