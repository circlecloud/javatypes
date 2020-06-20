declare namespace javax {
    namespace swing {
        namespace event {
            /**
             * HyperlinkEvent is used to notify interested parties that
             * something has happened with respect to a hypertext link.
             * <p>
             * <strong>Warning:</strong>
             * Serialized objects of this class will not be compatible with
             * future Swing releases. The current serialization support is
             * appropriate for short term storage or RMI between applications running
             * the same version of Swing.  As of 1.4, support for long term storage
             * of all JavaBeans&trade;
             * has been added to the <code>java.beans</code> package.
             * Please see {@link java.beans.XMLEncoder}.
             * @author Timothy Prinzing
             */
            // @ts-ignore
            class HyperlinkEvent extends java.util.EventObject {
                /**
                 * Creates a new object representing a hypertext link event.
                 * The other constructor is preferred, as it provides more
                 * information if a URL could not be formed.  This constructor
                 * is primarily for backward compatibility.
                 * @param source the object responsible for the event
                 * @param type the event type
                 * @param u the affected URL
                 */
                // @ts-ignore
                constructor(source: any, type: javax.swing.event.HyperlinkEvent.EventType, u: java.net.URL)
                /**
                 * Creates a new object representing a hypertext link event.
                 * @param source the object responsible for the event
                 * @param type the event type
                 * @param u the affected URL.  This may be null if a valid URL
                 *    could not be created.
                 * @param desc the description of the link.  This may be useful
                 *    when attempting to form a URL resulted in a MalformedURLException.
                 *    The description provides the text used when attempting to form the
                 *    URL.
                 */
                // @ts-ignore
                constructor(source: any, type: javax.swing.event.HyperlinkEvent.EventType, u: java.net.URL, desc: string)
                /**
                 * Creates a new object representing a hypertext link event.
                 * @param source the object responsible for the event
                 * @param type the event type
                 * @param u the affected URL.  This may be null if a valid URL
                 *    could not be created.
                 * @param desc the description of the link.  This may be useful
                 *    when attempting to form a URL resulted in a MalformedURLException.
                 *    The description provides the text used when attempting to form the
                 *    URL.
                 * @param sourceElement Element in the Document representing the
                 *    anchor
                 * @since 1.4
                 */
                // @ts-ignore
                constructor(source: any, type: javax.swing.event.HyperlinkEvent.EventType, u: java.net.URL, desc: string, sourceElement: javax.swing.text.Element)
                /**
                 * Creates a new object representing a hypertext link event.
                 * @param source the object responsible for the event
                 * @param type the event type
                 * @param u the affected URL.  This may be null if a valid URL
                 *    could not be created.
                 * @param desc the description of the link.  This may be useful
                 *    when attempting to form a URL resulted in a MalformedURLException.
                 *    The description provides the text used when attempting to form the
                 *    URL.
                 * @param sourceElement Element in the Document representing the
                 *    anchor
                 * @param inputEvent  InputEvent that triggered the hyperlink event
                 * @since 1.7
                 */
                // @ts-ignore
                constructor(source: any, type: javax.swing.event.HyperlinkEvent.EventType, u: java.net.URL, desc: string, sourceElement: javax.swing.text.Element, inputEvent: java.awt.event.InputEvent)
                /**
                 * Gets the type of event.
                 * @return the type
                 */
                // @ts-ignore
                getEventType(): javax.swing.event.HyperlinkEvent.EventType
                /**
                 * Get the description of the link as a string.
                 * This may be useful if a URL can't be formed
                 * from the description, in which case the associated
                 * URL would be null.
                 */
                // @ts-ignore
                getDescription(): java.lang.String
                /**
                 * Gets the URL that the link refers to.
                 * @return the URL
                 */
                // @ts-ignore
                getURL(): java.net.URL
                /**
                 * Returns the <code>Element</code> that corresponds to the source of the
                 * event. This will typically be an <code>Element</code> representing
                 * an anchor. If a constructor that is used that does not specify a source
                 * <code>Element</code>, or null was specified as the source
                 * <code>Element</code>, this will return null.
                 * @return Element indicating source of event, or null
                 * @since 1.4
                 */
                // @ts-ignore
                getSourceElement(): javax.swing.text.Element
                /**
                 * Returns the {@code InputEvent} that triggered the hyperlink event.
                 * This will typically be a {@code MouseEvent}.  If a constructor is used
                 * that does not specify an {@code InputEvent}, or @{code null}
                 * was specified as the {@code InputEvent}, this returns {@code null}.
                 * @return InputEvent that triggered the hyperlink event, or null
                 * @since 1.7
                 */
                // @ts-ignore
                getInputEvent(): java.awt.event.InputEvent
            }
        }
    }
}
