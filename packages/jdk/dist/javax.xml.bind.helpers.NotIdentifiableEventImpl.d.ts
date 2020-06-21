declare namespace javax {
    namespace xml {
        namespace bind {
            namespace helpers {
                /**
                 * Default implementation of the NotIdentifiableEvent interface.
                 * <p>
                 * JAXB providers are allowed to use whatever class that implements
                 * the ValidationEvent interface. This class is just provided for a
                 * convenience.
                 * @author <ul><li>Ryan Shoemaker, Sun Microsystems, Inc.</li></ul>
                 * @see javax.xml.bind.NotIdentifiableEvent
                 * @see javax.xml.bind.Validator
                 * @see javax.xml.bind.ValidationEventHandler
                 * @see javax.xml.bind.ValidationEvent
                 * @see javax.xml.bind.ValidationEventLocator
                 * @since JAXB1.0
                 */
                // @ts-ignore
                class NotIdentifiableEventImpl extends javax.xml.bind.helpers.ValidationEventImpl implements javax.xml.bind.NotIdentifiableEvent {
                    /**
                     * Create a new NotIdentifiableEventImpl.
                     * @param _severity The severity value for this event.  Must be one of
                     *  ValidationEvent.WARNING, ValidationEvent.ERROR, or
                     *  ValidationEvent.FATAL_ERROR
                     * @param _message The text message for this event - may be null.
                     * @param _locator The locator object for this event - may be null.
                     * @throws IllegalArgumentException if an illegal severity field is supplied
                     */
                    // @ts-ignore
                    constructor(_severity: number /*int*/, _message: java.lang.String | string, _locator: javax.xml.bind.ValidationEventLocator)
                    /**
                     * Create a new NotIdentifiableEventImpl.
                     * @param _severity The severity value for this event.  Must be one of
                     *  ValidationEvent.WARNING, ValidationEvent.ERROR, or
                     *  ValidationEvent.FATAL_ERROR
                     * @param _message The text message for this event - may be null.
                     * @param _locator The locator object for this event - may be null.
                     * @param _linkedException An optional linked exception that may provide
                     *  additional information about the event - may be null.
                     * @throws IllegalArgumentException if an illegal severity field is supplied
                     */
                    // @ts-ignore
                    constructor(_severity: number /*int*/, _message: java.lang.String | string, _locator: javax.xml.bind.ValidationEventLocator, _linkedException: java.lang.Throwable | Error)
                }
            }
        }
    }
}
