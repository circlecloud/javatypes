declare namespace javax {
    namespace xml {
        namespace bind {
            namespace helpers {
                /**
                 * Default implementation of the ValidationEvent interface.
                 * <p>
                 * JAXB providers are allowed to use whatever class that implements
                 * the ValidationEvent interface. This class is just provided for a
                 * convenience.
                 * @author <ul><li>Kohsuke Kawaguchi, Sun Microsystems, Inc.</li></ul>
                 * @see javax.xml.bind.Validator
                 * @see javax.xml.bind.ValidationEventHandler
                 * @see javax.xml.bind.ValidationEvent
                 * @see javax.xml.bind.ValidationEventLocator
                 * @since JAXB1.0
                 */
                // @ts-ignore
                class ValidationEventImpl extends java.lang.Object implements javax.xml.bind.ValidationEvent {
                    /**
                     * Create a new ValidationEventImpl.
                     * @param _severity The severity value for this event.  Must be one of
                     *  ValidationEvent.WARNING, ValidationEvent.ERROR, or
                     *  ValidationEvent.FATAL_ERROR
                     * @param _message The text message for this event - may be null.
                     * @param _locator The locator object for this event - may be null.
                     * @throws IllegalArgumentException if an illegal severity field is supplied
                     */
                    // @ts-ignore
                    constructor(_severity: number /*int*/, _message: string, _locator: javax.xml.bind.ValidationEventLocator)
                    /**
                     * Create a new ValidationEventImpl.
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
                    constructor(_severity: number /*int*/, _message: string, _locator: javax.xml.bind.ValidationEventLocator, _linkedException: Error)
                    // @ts-ignore
                    getSeverity(): int
                    /**
                     * Set the severity field of this event.
                     * @param _severity Must be one of ValidationEvent.WARNING,
                     *  ValidationEvent.ERROR, or ValidationEvent.FATAL_ERROR.
                     * @throws IllegalArgumentException if an illegal severity field is supplied
                     */
                    // @ts-ignore
                    setSeverity(_severity: number /*int*/): void
                    // @ts-ignore
                    getMessage(): java.lang.String
                    /**
                     * Set the message field of this event.
                     * @param _message String message - may be null.
                     */
                    // @ts-ignore
                    setMessage(_message: string): void
                    // @ts-ignore
                    getLinkedException(): java.lang.Throwable
                    /**
                     * Set the linked exception field of this event.
                     * @param _linkedException Optional linked exception - may be null.
                     */
                    // @ts-ignore
                    setLinkedException(_linkedException: Error): void
                    // @ts-ignore
                    getLocator(): javax.xml.bind.ValidationEventLocator
                    /**
                     * Set the locator object for this event.
                     * @param _locator The locator - may be null.
                     */
                    // @ts-ignore
                    setLocator(_locator: javax.xml.bind.ValidationEventLocator): void
                    /**
                     * Returns a string representation of this object in a format
                     * helpful to debugging.
                     * @see Object#equals(Object)
                     */
                    // @ts-ignore
                    toString(): java.lang.String
                }
            }
        }
    }
}
