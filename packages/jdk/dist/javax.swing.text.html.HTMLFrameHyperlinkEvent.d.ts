declare namespace javax {
    namespace swing {
        namespace text {
            namespace html {
                /**
                 * HTMLFrameHyperlinkEvent is used to notify interested
                 * parties that link was activated in a frame.
                 * @author Sunita Mani
                 */
                // @ts-ignore
                class HTMLFrameHyperlinkEvent extends javax.swing.event.HyperlinkEvent {
                    /**
                     * Creates a new object representing a html frame
                     * hypertext link event.
                     * @param source the object responsible for the event
                     * @param type the event type
                     * @param targetURL the affected URL
                     * @param targetFrame the Frame to display the document in
                     */
                    // @ts-ignore
                    constructor(source: java.lang.Object | any, type: javax.swing.event.HyperlinkEvent.EventType, targetURL: java.net.URL, targetFrame: java.lang.String | string)
                    /**
                     * Creates a new object representing a hypertext link event.
                     * @param source the object responsible for the event
                     * @param type the event type
                     * @param targetURL the affected URL
                     * @param desc a description
                     * @param targetFrame the Frame to display the document in
                     */
                    // @ts-ignore
                    constructor(source: java.lang.Object | any, type: javax.swing.event.HyperlinkEvent.EventType, targetURL: java.net.URL, desc: java.lang.String | string, targetFrame: java.lang.String | string)
                    /**
                     * Creates a new object representing a hypertext link event.
                     * @param source the object responsible for the event
                     * @param type the event type
                     * @param targetURL the affected URL
                     * @param sourceElement the element that corresponds to the source
                     *                       of the event
                     * @param targetFrame the Frame to display the document in
                     */
                    // @ts-ignore
                    constructor(source: java.lang.Object | any, type: javax.swing.event.HyperlinkEvent.EventType, targetURL: java.net.URL, sourceElement: javax.swing.text.Element, targetFrame: java.lang.String | string)
                    /**
                     * Creates a new object representing a hypertext link event.
                     * @param source the object responsible for the event
                     * @param type the event type
                     * @param targetURL the affected URL
                     * @param desc a description
                     * @param sourceElement the element that corresponds to the source
                     *                       of the event
                     * @param targetFrame the Frame to display the document in
                     */
                    // @ts-ignore
                    constructor(source: java.lang.Object | any, type: javax.swing.event.HyperlinkEvent.EventType, targetURL: java.net.URL, desc: java.lang.String | string, sourceElement: javax.swing.text.Element, targetFrame: java.lang.String | string)
                    /**
                     * Creates a new object representing a hypertext link event.
                     * @param source the object responsible for the event
                     * @param type the event type
                     * @param targetURL the affected URL
                     * @param desc a description
                     * @param sourceElement the element that corresponds to the source
                     *                       of the event
                     * @param inputEvent  InputEvent that triggered the hyperlink event
                     * @param targetFrame the Frame to display the document in
                     * @since 1.7
                     */
                    // @ts-ignore
                    constructor(source: java.lang.Object | any, type: javax.swing.event.HyperlinkEvent.EventType, targetURL: java.net.URL, desc: java.lang.String | string, sourceElement: javax.swing.text.Element, inputEvent: java.awt.event.InputEvent, targetFrame: java.lang.String | string)
                    /**
                     * returns the target for the link.
                     */
                    // @ts-ignore
                    public getTarget(): string
                }
            }
        }
    }
}
