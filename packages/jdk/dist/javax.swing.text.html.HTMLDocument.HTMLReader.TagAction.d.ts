declare namespace javax {
    namespace swing {
        namespace text {
            namespace html {
                namespace HTMLDocument {
                    namespace HTMLReader {
                        /**
                         * An action to be performed in response
                         * to parsing a tag.  This allows customization
                         * of how each tag is handled and avoids a large
                         * switch statement.
                         */
                        // @ts-ignore
                        class TagAction extends java.lang.Object {
                            // @ts-ignore
                            constructor()
                            /**
                             * Called when a start tag is seen for the
                             * type of tag this action was registered
                             * to.  The tag argument indicates the actual
                             * tag for those actions that are shared across
                             * many tags.  By default this does nothing and
                             * completely ignores the tag.
                             */
                            // @ts-ignore
                            public start(t: javax.swing.text.html.HTML.Tag, a: javax.swing.text.MutableAttributeSet): void
                            /**
                             * Called when an end tag is seen for the
                             * type of tag this action was registered
                             * to.  The tag argument indicates the actual
                             * tag for those actions that are shared across
                             * many tags.  By default this does nothing and
                             * completely ignores the tag.
                             */
                            // @ts-ignore
                            public end(t: javax.swing.text.html.HTML.Tag): void
                        }
                    }
                }
            }
        }
    }
}
