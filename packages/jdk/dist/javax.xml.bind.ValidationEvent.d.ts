declare namespace javax {
    namespace xml {
        namespace bind {
            /**
             * This event indicates that a problem was encountered while validating the
             * incoming XML data during an unmarshal operation, while performing
             * on-demand validation of the Java content tree, or while marshalling the
             * Java content tree back to XML data.
             * @author <ul><li>Ryan Shoemaker, Sun Microsystems, Inc.</li><li>Kohsuke Kawaguchi, Sun Microsystems, Inc.</li><li>Joe Fialli, Sun Microsystems, Inc.</li></ul>
             * @see Validator
             * @see ValidationEventHandler
             * @since JAXB1.0
             */
            // @ts-ignore
            interface ValidationEvent {
                /**
                 * Conditions that are not errors or fatal errors as defined by the
                 * XML 1.0 recommendation
                 */
                // @ts-ignore
                readonly WARNING: number /*int*/
                /**
                 * Conditions that correspond to the definition of "error" in section
                 * 1.2 of the W3C XML 1.0 Recommendation
                 */
                // @ts-ignore
                readonly ERROR: number /*int*/
                /**
                 * Conditions that correspond to the definition of "fatal error" in section
                 * 1.2 of the W3C XML 1.0 Recommendation
                 */
                // @ts-ignore
                readonly FATAL_ERROR: number /*int*/
                /**
                 * Retrieve the severity code for this warning/error.
                 * <p>
                 * Must be one of <tt>ValidationError.WARNING</tt>,
                 * <tt>ValidationError.ERROR</tt>, or <tt>ValidationError.FATAL_ERROR</tt>.
                 * @return the severity code for this warning/error
                 */
                // @ts-ignore
                getSeverity(): number /*int*/
                /**
                 * Retrieve the text message for this warning/error.
                 * @return the text message for this warning/error or null if one wasn't set
                 */
                // @ts-ignore
                getMessage(): string
                /**
                 * Retrieve the linked exception for this warning/error.
                 * @return the linked exception for this warning/error or null if one
                 *          wasn't set
                 */
                // @ts-ignore
                getLinkedException(): Error
                /**
                 * Retrieve the locator for this warning/error.
                 * @return the locator that indicates where the warning/error occurred
                 */
                // @ts-ignore
                getLocator(): javax.xml.bind.ValidationEventLocator
            }
        }
    }
}
