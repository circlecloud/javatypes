declare namespace javax {
    namespace accessibility {
        /**
         * This class collects together the span of text that share the same
         * contiguous set of attributes, along with that set of attributes.  It
         * is used by implementors of the class <code>AccessibleContext</code> in
         * order to generate <code>ACCESSIBLE_TEXT_ATTRIBUTES_CHANGED</code> events.
         * @see javax.accessibility.AccessibleContext
         * @see javax.accessibility.AccessibleContext#ACCESSIBLE_TEXT_ATTRIBUTES_CHANGED
         */
        // @ts-ignore
        class AccessibleAttributeSequence extends java.lang.Object {
            /**
             * Constructs an <code>AccessibleAttributeSequence</code> with the given
             * parameters.
             * @param start the beginning index of the span of text
             * @param end the ending index of the span of text
             * @param attr the <code>AttributeSet</code> shared by this text span
             * @since 1.6
             */
            // @ts-ignore
            constructor(start: number /*int*/, end: number /*int*/, attr: javax.swing.text.AttributeSet)
            /**
             * The start index of the text sequence
             */
            // @ts-ignore
            public startIndex: number /*int*/
            /**
             * The end index of the text sequence
             */
            // @ts-ignore
            public endIndex: number /*int*/
            /**
             * The text attributes
             */
            // @ts-ignore
            public attributes: javax.swing.text.AttributeSet
        }
    }
}
