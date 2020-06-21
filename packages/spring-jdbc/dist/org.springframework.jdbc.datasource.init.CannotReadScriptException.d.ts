declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace datasource {
                namespace init {
                    /**
                     * Thrown by {@link ScriptUtils} if an SQL script cannot be read.
                     * @author Keith Donald
                     * @author Sam Brannen
                     * @since 3.0
                     */
                    // @ts-ignore
                    class CannotReadScriptException extends org.springframework.jdbc.datasource.init.ScriptException {
                        /**
                         * Construct a new {@code CannotReadScriptException}.
                         * @param resource the resource that cannot be read from
                         * @param cause the underlying cause of the resource access failure
                         */
                        // @ts-ignore
                        constructor(resource: EncodedResource, cause: java.lang.Throwable | Error)
                    }
                }
            }
        }
    }
}
