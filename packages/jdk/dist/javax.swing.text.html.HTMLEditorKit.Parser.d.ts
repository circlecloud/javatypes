declare namespace javax {
    namespace swing {
        namespace text {
            namespace html {
                namespace HTMLEditorKit {
                    /**
                     * Interface to be supported by the parser.  This enables
                     * providing a different parser while reusing some of the
                     * implementation provided by this editor kit.
                     */
                    // @ts-ignore
                    abstract class Parser extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * Parse the given stream and drive the given callback
                         * with the results of the parse.  This method should
                         * be implemented to be thread-safe.
                         */
                        // @ts-ignore
                        public abstract parse(r: java.io.Reader, cb: javax.swing.text.html.HTMLEditorKit.ParserCallback, ignoreCharSet: boolean): void
                    }
                }
            }
        }
    }
}
