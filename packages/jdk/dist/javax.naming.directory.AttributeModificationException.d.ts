declare namespace javax {
    namespace naming {
        namespace directory {
            /**
             * This exception is thrown when an attempt is
             * made to add, or remove, or modify an attribute, its identifier,
             * or its values that conflicts with the attribute's (schema) definition
             * or the attribute's state.
             * It is thrown in response to DirContext.modifyAttributes().
             * It contains a list of modifications that have not been performed, in the
             * order that they were supplied to modifyAttributes().
             * If the list is null, none of the modifications were performed successfully.
             * <p>
             * An AttributeModificationException instance is not synchronized
             * against concurrent multithreaded access. Multiple threads trying
             * to access and modify a single AttributeModification instance
             * should lock the object.
             * @author Rosanna Lee
             * @author Scott Seligman
             * @see DirContext#modifyAttributes
             * @since 1.3
             */
            // @ts-ignore
            class AttributeModificationException extends javax.naming.NamingException {
                /**
                 * Constructs a new instance of AttributeModificationException using
                 * an explanation. All other fields are set to null.
                 * @param explanation     Possibly null additional detail about this exception.
                 *  If null, this exception has no detail message.
                 * @see java.lang.Throwable#getMessage
                 */
                // @ts-ignore
                constructor(explanation: java.lang.String | string)
                /**
                 * Constructs a new instance of AttributeModificationException.
                 * All fields are set to null.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Sets the unexecuted modification list to be e.
                 * Items in the list must appear in the same order in which they were
                 * originally supplied in DirContext.modifyAttributes().
                 * The first item in the list is the first one that was not executed.
                 * If this list is null, none of the operations originally submitted
                 * to modifyAttributes() were executed.
                 * @param e        The possibly null list of unexecuted modifications.
                 * @see #getUnexecutedModifications
                 */
                // @ts-ignore
                setUnexecutedModifications(e: javax.naming.directory.ModificationItem[]): void
                /**
                 * Retrieves the unexecuted modification list.
                 * Items in the list appear in the same order in which they were
                 * originally supplied in DirContext.modifyAttributes().
                 * The first item in the list is the first one that was not executed.
                 * If this list is null, none of the operations originally submitted
                 * to modifyAttributes() were executed.
                 * @return The possibly null unexecuted modification list.
                 * @see #setUnexecutedModifications
                 */
                // @ts-ignore
                getUnexecutedModifications(): javax.naming.directory.ModificationItem[]
                /**
                 * The string representation of this exception consists of
                 * information about where the error occurred, and
                 * the first unexecuted modification.
                 * This string is meant for debugging and not mean to be interpreted
                 * programmatically.
                 * @return The non-null string representation of this exception.
                 */
                // @ts-ignore
                toString(): string
            }
        }
    }
}
