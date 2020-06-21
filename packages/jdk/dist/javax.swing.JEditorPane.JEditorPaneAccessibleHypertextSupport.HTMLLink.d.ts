declare namespace javax {
    namespace swing {
        namespace JEditorPane {
            namespace JEditorPaneAccessibleHypertextSupport {
                // @ts-ignore
                class HTMLLink extends javax.accessibility.AccessibleHyperlink {
                    // @ts-ignore
                    constructor(e: javax.swing.text.Element)
                    /**
                     * Since the document a link is associated with may have
                     * changed, this method returns whether this Link is valid
                     * anymore (with respect to the document it references).
                     * @return a flag indicating whether this link is still valid with
                     *          respect to the AccessibleHypertext it belongs to
                     */
                    // @ts-ignore
                    public isValid(): boolean
                    /**
                     * Returns the number of accessible actions available in this Link
                     * If there are more than one, the first one is NOT considered the
                     * "default" action of this LINK object (e.g. in an HTML imagemap).
                     * In general, links will have only one AccessibleAction in them.
                     * @return the zero-based number of Actions in this object
                     */
                    // @ts-ignore
                    public getAccessibleActionCount(): number /*int*/
                    /**
                     * Perform the specified Action on the object
                     * @param i zero-based index of actions
                     * @return true if the the action was performed; else false.
                     * @see #getAccessibleActionCount
                     */
                    // @ts-ignore
                    public doAccessibleAction(i: number /*int*/): boolean
                    /**
                     * Return a String description of this particular
                     * link action.  The string returned is the text
                     * within the document associated with the element
                     * which contains this link.
                     * @param i zero-based index of the actions
                     * @return a String description of the action
                     * @see #getAccessibleActionCount
                     */
                    // @ts-ignore
                    public getAccessibleActionDescription(i: number /*int*/): string
                    /**
                     * Returns a URL object that represents the link.
                     * @param i zero-based index of the actions
                     * @return an URL representing the HTML link itself
                     * @see #getAccessibleActionCount
                     */
                    // @ts-ignore
                    public getAccessibleActionObject(i: number /*int*/): any
                    /**
                     * Return an object that represents the link anchor,
                     * as appropriate for that link.  E.g. from HTML:
                     * <a href="http://www.sun.com/access">Accessibility</a>
                     * this method would return a String containing the text:
                     * 'Accessibility'.
                     * Similarly, from this HTML:
                     * &lt;a HREF="#top"&gt;&lt;img src="top-hat.gif" alt="top hat"&gt;&lt;/a&gt;
                     * this might return the object ImageIcon("top-hat.gif", "top hat");
                     * @param i zero-based index of the actions
                     * @return an Object representing the hypertext anchor
                     * @see #getAccessibleActionCount
                     */
                    // @ts-ignore
                    public getAccessibleActionAnchor(i: number /*int*/): any
                    /**
                     * Get the index with the hypertext document at which this
                     * link begins
                     * @return index of start of link
                     */
                    // @ts-ignore
                    public getStartIndex(): number /*int*/
                    /**
                     * Get the index with the hypertext document at which this
                     * link ends
                     * @return index of end of link
                     */
                    // @ts-ignore
                    public getEndIndex(): number /*int*/
                }
            }
        }
    }
}
