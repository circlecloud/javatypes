declare namespace javax {
    namespace swing {
        namespace event {
            /**
             * Interface for document change notifications.  This provides
             * detailed information to Document observers about how the
             * Document changed.  It provides high level information such
             * as type of change and where it occurred, as well as the more
             * detailed structural changes (What Elements were inserted and
             * removed).
             * @author Timothy Prinzing
             * @see javax.swing.text.Document
             * @see DocumentListener
             */
            // @ts-ignore
            interface DocumentEvent {
                /**
                 * Returns the offset within the document of the start
                 * of the change.
                 * @return the offset &gt;= 0
                 */
                // @ts-ignore
                getOffset(): number /*int*/
                /**
                 * Returns the length of the change.
                 * @return the length &gt;= 0
                 */
                // @ts-ignore
                getLength(): number /*int*/
                /**
                 * Gets the document that sourced the change event.
                 * @return the document
                 */
                // @ts-ignore
                getDocument(): javax.swing.text.Document
                /**
                 * Gets the type of event.
                 * @return the type
                 */
                // @ts-ignore
                getType(): javax.swing.event.DocumentEvent.EventType
                /**
                 * Gets the change information for the given element.
                 * The change information describes what elements were
                 * added and removed and the location.  If there were
                 * no changes, null is returned.
                 * <p>
                 * This method is for observers to discover the structural
                 * changes that were made.  This means that only elements
                 * that existed prior to the mutation (and still exist after
                 * the mutation) need to have ElementChange records.
                 * The changes made available need not be recursive.
                 * <p>
                 * For example, if the an element is removed from it's
                 * parent, this method should report that the parent
                 * changed and provide an ElementChange implementation
                 * that describes the change to the parent.  If the
                 * child element removed had children, these elements
                 * do not need to be reported as removed.
                 * <p>
                 * If an child element is insert into a parent element,
                 * the parent element should report a change.  If the
                 * child element also had elements inserted into it
                 * (grandchildren to the parent) these elements need
                 * not report change.
                 * @param elem the element
                 * @return the change information, or null if the
                 *    element was not modified
                 */
                // @ts-ignore
                getChange(elem: javax.swing.text.Element): javax.swing.event.DocumentEvent.ElementChange
            }
        }
    }
}
