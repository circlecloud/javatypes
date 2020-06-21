declare namespace javax {
    namespace xml {
        namespace bind {
            namespace util {
                /**
                 * {@link javax.xml.bind.ValidationEventHandler ValidationEventHandler}
                 * implementation that collects all events.
                 * <p>
                 * To use this class, create a new instance and pass it to the setEventHandler
                 * method of the Validator, Unmarshaller, Marshaller class.  After the call to
                 * validate or unmarshal completes, call the getEvents method to retrieve all
                 * the reported errors and warnings.
                 * @author <ul><li>Kohsuke Kawaguchi, Sun Microsystems, Inc.</li><li>Ryan Shoemaker, Sun Microsystems, Inc.</li><li>Joe Fialli, Sun Microsystems, Inc.</li></ul>
                 * @see javax.xml.bind.Validator
                 * @see javax.xml.bind.ValidationEventHandler
                 * @see javax.xml.bind.ValidationEvent
                 * @see javax.xml.bind.ValidationEventLocator
                 * @since JAXB1.0
                 */
                // @ts-ignore
                class ValidationEventCollector extends java.lang.Object implements javax.xml.bind.ValidationEventHandler {
                    // @ts-ignore
                    constructor()
                    /**
                     * Return an array of ValidationEvent objects containing a copy of each of
                     * the collected errors and warnings.
                     * @return a copy of all the collected errors and warnings or an empty array
                     *       if there weren't any
                     */
                    // @ts-ignore
                    public getEvents(): javax.xml.bind.ValidationEvent[]
                    /**
                     * Clear all collected errors and warnings.
                     */
                    // @ts-ignore
                    public reset(): void
                    /**
                     * Returns true if this event collector contains at least one
                     * ValidationEvent.
                     * @return true if this event collector contains at least one
                     *          ValidationEvent, false otherwise
                     */
                    // @ts-ignore
                    public hasEvents(): boolean
                    // @ts-ignore
                    public handleEvent(event: javax.xml.bind.ValidationEvent): boolean
                }
            }
        }
    }
}
