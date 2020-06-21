declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace datasource {
                namespace embedded {
                    /**
                     * Internal helper for exposing dummy OutputStreams to embedded databases
                     * such as Derby, preventing the creation of a log file.
                     * @author Juergen Hoeller
                     * @since 3.0
                     */
                    // @ts-ignore
                    class OutputStreamFactory extends java.lang.Object {
                        /**
                         * Returns an {@link java.io.OutputStream} that ignores all data given to it.
                         */
                        // @ts-ignore
                        public static getNoopOutputStream(): java.io.OutputStream
                    }
                }
            }
        }
    }
}
