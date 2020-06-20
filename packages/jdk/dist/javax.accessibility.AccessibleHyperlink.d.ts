declare namespace javax {
    namespace accessibility {
        /**
         * Encapsulation of a link, or set of links (e.g. client side imagemap)
         * in a Hypertext document
         * @see Accessible
         * @see Accessible#getAccessibleContext
         * @see AccessibleContext
         * @see AccessibleText
         * @see AccessibleContext#getAccessibleText
         * @author Peter Korn
         */
        // @ts-ignore
        class AccessibleHyperlink extends java.lang.Object implements javax.accessibility.AccessibleAction {
            // @ts-ignore
            constructor()
            /**
             * Since the document a link is associated with may have
             * changed, this method returns whether or not this Link is still valid
             * (with respect to the document it references).
             * @return a flag indicating whether this link is still valid with
             *          respect to the AccessibleHypertext it belongs to
             */
            // @ts-ignore
            abstract isValid(): boolean
            /**
             * Returns the number of accessible actions available in this Link
             * If there are more than one, the first one is NOT considered the
             * "default" action of this LINK object (e.g. in an HTML imagemap).
             * In general, links will have only one AccessibleAction in them.
             * @return the zero-based number of Actions in this object
             */
            // @ts-ignore
            abstract getAccessibleActionCount(): int
            /**
             * Performs the specified Action on the object
             * @param i zero-based index of actions
             * @return true if the action was performed; otherwise false.
             * @see #getAccessibleActionCount
             */
            // @ts-ignore
            abstract doAccessibleAction(i: number /*int*/): boolean
            /**
             * Returns a String description of this particular
             * link action.  This should be a text string
             * associated with anchoring text, this should be the
             * anchor text.  E.g. from HTML:
             * &lt;a HREF="http://www.sun.com/access"&gt;Accessibility&lt;/a&gt;
             * this method would return "Accessibility".
             * Similarly, from this HTML:
             * &lt;a HREF="#top"&gt;&lt;img src="top-hat.gif" alt="top hat"&gt;&lt;/a&gt;
             * this method would return "top hat"
             * @param i zero-based index of the actions
             * @return a String description of the action
             * @see #getAccessibleActionCount
             */
            // @ts-ignore
            abstract getAccessibleActionDescription(i: number /*int*/): java.lang.String
            /**
             * Returns an object that represents the link action,
             * as appropriate for that link.  E.g. from HTML:
             * &lt;a HREF="http://www.sun.com/access"&gt;Accessibility&lt;/a&gt;
             * this method would return a
             * java.net.URL("http://www.sun.com/access.html");
             * @param i zero-based index of the actions
             * @return an Object representing the hypertext link itself
             * @see #getAccessibleActionCount
             */
            // @ts-ignore
            abstract getAccessibleActionObject(i: number /*int*/): java.lang.Object
            /**
             * Returns an object that represents the link anchor,
             * as appropriate for that link.  E.g. from HTML:
             * &lt;a href="http://www.sun.com/access"&gt;Accessibility&lt;/a&gt;
             * this method would return a String containing the text:
             * "Accessibility".
             * Similarly, from this HTML:
             * &lt;a HREF="#top"&gt;&lt;img src="top-hat.gif" alt="top hat"&gt;&lt;/a&gt;
             * this might return the object ImageIcon("top-hat.gif", "top hat");
             * @param i zero-based index of the actions
             * @return an Object representing the hypertext anchor
             * @see #getAccessibleActionCount
             */
            // @ts-ignore
            abstract getAccessibleActionAnchor(i: number /*int*/): java.lang.Object
            /**
             * Gets the index with the hypertext document at which this
             * link begins
             * @return index of start of link
             */
            // @ts-ignore
            abstract getStartIndex(): int
            /**
             * Gets the index with the hypertext document at which this
             * link ends
             * @return index of end of link
             */
            // @ts-ignore
            abstract getEndIndex(): int
        }
    }
}
