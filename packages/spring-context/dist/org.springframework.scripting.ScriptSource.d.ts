declare namespace org {
    namespace springframework {
        namespace scripting {
            /**
             * Interface that defines the source of a script.
             * Tracks whether the underlying script has been modified.
             * @author Rob Harrop
             * @author Juergen Hoeller
             * @since 2.0
             */
            // @ts-ignore
            interface ScriptSource {
                /**
                 * Retrieve the current script source text as String.
                 * @return the script text
                 * @throws IOException if script retrieval failed
                 */
                // @ts-ignore
                getScriptAsString(): java.lang.String
                /**
                 * Indicate whether the underlying script data has been modified since
                 * the last time {@link #getScriptAsString()} was called.
                 * Returns {@code true} if the script has not been read yet.
                 * @return whether the script data has been modified
                 */
                // @ts-ignore
                isModified(): boolean
                /**
                 * Determine a class name for the underlying script.
                 * @return the suggested class name, or {#code null} if none available
                 */
                // @ts-ignore
                suggestedClassName(): java.lang.String
            }
        }
    }
}
