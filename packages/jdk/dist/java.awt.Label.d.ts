declare namespace java {
    namespace awt {
        /**
         * A <code>Label</code> object is a component for placing text in a
         * container. A label displays a single line of read-only text.
         * The text can be changed by the application, but a user cannot edit it
         * directly.
         * <p>
         * For example, the code&nbsp;.&nbsp;.&nbsp;.
         * <hr><blockquote><pre>
         * setLayout(new FlowLayout(FlowLayout.CENTER, 10, 10));
         * add(new Label("Hi There!"));
         * add(new Label("Another Label"));
         * </pre></blockquote><hr>
         * <p>
         * produces the following labels:
         * <p>
         * <img src="doc-files/Label-1.gif" alt="Two labels: 'Hi There!' and 'Another label'"
         * style="float:center; margin: 7px 10px;">
         * @author Sami Shaio
         * @since JDK1.0
         */
        // @ts-ignore
        class Label extends java.awt.Component implements javax.accessibility.Accessible {
            /**
             * Constructs an empty label.
             * The text of the label is the empty string <code>""</code>.
             * @exception HeadlessException if GraphicsEnvironment.isHeadless()
             *  returns true.
             * @see java.awt.GraphicsEnvironment#isHeadless
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a new label with the specified string of text,
             * left justified.
             * @param text the string that the label presents.
             *         A <code>null</code> value
             *         will be accepted without causing a NullPointerException
             *         to be thrown.
             * @exception HeadlessException if GraphicsEnvironment.isHeadless()
             *  returns true.
             * @see java.awt.GraphicsEnvironment#isHeadless
             */
            // @ts-ignore
            constructor(text: java.lang.String | string)
            /**
             * Constructs a new label that presents the specified string of
             * text with the specified alignment.
             * Possible values for <code>alignment</code> are <code>Label.LEFT</code>,
             * <code>Label.RIGHT</code>, and <code>Label.CENTER</code>.
             * @param text the string that the label presents.
             *         A <code>null</code> value
             *         will be accepted without causing a NullPointerException
             *         to be thrown.
             * @param alignment   the alignment value.
             * @exception HeadlessException if GraphicsEnvironment.isHeadless()
             *  returns true.
             * @see java.awt.GraphicsEnvironment#isHeadless
             */
            // @ts-ignore
            constructor(text: java.lang.String | string, alignment: number /*int*/)
            /**
             * Indicates that the label should be left justified.
             */
            // @ts-ignore
            public static readonly LEFT: number /*int*/
            /**
             * Indicates that the label should be centered.
             */
            // @ts-ignore
            public static readonly CENTER: number /*int*/
            /**
             * Indicates that the label should be right justified.
             * @since JDK1.0t.
             */
            // @ts-ignore
            public static readonly RIGHT: number /*int*/
            /**
             * Creates the peer for this label.  The peer allows us to
             * modify the appearance of the label without changing its
             * functionality.
             */
            // @ts-ignore
            public addNotify(): void
            /**
             * Gets the current alignment of this label. Possible values are
             * <code>Label.LEFT</code>, <code>Label.RIGHT</code>, and
             * <code>Label.CENTER</code>.
             * @see java.awt.Label#setAlignment
             */
            // @ts-ignore
            public getAlignment(): number /*int*/
            /**
             * Sets the alignment for this label to the specified alignment.
             * Possible values are <code>Label.LEFT</code>,
             * <code>Label.RIGHT</code>, and <code>Label.CENTER</code>.
             * @param alignment    the alignment to be set.
             * @exception IllegalArgumentException if an improper value for
             *                           <code>alignment</code> is given.
             * @see java.awt.Label#getAlignment
             */
            // @ts-ignore
            public setAlignment(alignment: number /*int*/): void
            /**
             * Gets the text of this label.
             * @return the text of this label, or <code>null</code> if
             *              the text has been set to <code>null</code>.
             * @see java.awt.Label#setText
             */
            // @ts-ignore
            public getText(): string
            /**
             * Sets the text for this label to the specified text.
             * @param text the text that this label displays. If
             *              <code>text</code> is <code>null</code>, it is
             *              treated for display purposes like an empty
             *              string <code>""</code>.
             * @see java.awt.Label#getText
             */
            // @ts-ignore
            public setText(text: java.lang.String | string): void
            /**
             * Returns a string representing the state of this <code>Label</code>.
             * This method is intended to be used only for debugging purposes, and the
             * content and format of the returned string may vary between
             * implementations. The returned string may be empty but may not be
             * <code>null</code>.
             * @return the parameter string of this label
             */
            // @ts-ignore
            paramString(): string
            /**
             * Gets the AccessibleContext associated with this Label.
             * For labels, the AccessibleContext takes the form of an
             * AccessibleAWTLabel.
             * A new AccessibleAWTLabel instance is created if necessary.
             * @return an AccessibleAWTLabel that serves as the
             *          AccessibleContext of this Label
             * @since 1.3
             */
            // @ts-ignore
            public getAccessibleContext(): javax.accessibility.AccessibleContext
        }
    }
}
