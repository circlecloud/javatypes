declare namespace javax {
    namespace xml {
        namespace bind {
            namespace Marshaller {
                /**
                 * <p/>
                 * Register an instance of an implementation of this class with a {@link Marshaller} to externally listen
                 * for marshal events.
                 * <p/>
                 * <p/>
                 * This class enables pre and post processing of each marshalled object.
                 * The event callbacks are called when marshalling from an instance that maps to an xml element or
                 * complex type definition. The event callbacks are not called when marshalling from an instance of a
                 * Java datatype that represents a simple type definition.
                 * <p/>
                 * <p/>
                 * External listener is one of two different mechanisms for defining marshal event callbacks.
                 * See <a href="Marshaller.html#marshalEventCallback">Marshal Event Callbacks</a> for an overview.
                 * @see Marshaller#setListener(Listener)
                 * @see Marshaller#getListener()
                 * @since JAXB2.0
                 */
                // @ts-ignore
                abstract class Listener extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * <p/>
                     * Callback method invoked before marshalling from <tt>source</tt> to XML.
                     * <p/>
                     * <p/>
                     * This method is invoked just before marshalling process starts to marshal <tt>source</tt>.
                     * Note that if the class of <tt>source</tt> defines its own <tt>beforeMarshal</tt> method,
                     * the class specific callback method is invoked just before this method is invoked.
                     * @param source instance of JAXB mapped class prior to marshalling from it.
                     */
                    // @ts-ignore
                    public beforeMarshal(source: java.lang.Object | any): void
                    /**
                     * <p/>
                     * Callback method invoked after marshalling <tt>source</tt> to XML.
                     * <p/>
                     * <p/>
                     * This method is invoked after <tt>source</tt> and all its descendants have been marshalled.
                     * Note that if the class of <tt>source</tt> defines its own <tt>afterMarshal</tt> method,
                     * the class specific callback method is invoked just before this method is invoked.
                     * @param source instance of JAXB mapped class after marshalling it.
                     */
                    // @ts-ignore
                    public afterMarshal(source: java.lang.Object | any): void
                }
            }
        }
    }
}
