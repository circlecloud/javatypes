declare namespace org {
    namespace springframework {
        namespace context {
            namespace index {
                /**
                 * Provide access to the candidates that are defined in {@code META-INF/spring.components}.
                 * <p>An arbitrary number of stereotypes can be registered (and queried) on the index: a
                 * typical example is the fully qualified name of an annotation that flags the class for
                 * a certain use case. The following call returns all the {@code @Component}
                 * <b>candidate</b> types for the {@code com.example} package (and its sub-packages):
                 * <pre class="code">
                 * Set&lt;String&gt; candidates = index.getCandidateTypes(
                 * "com.example", "org.springframework.stereotype.Component");
                 * </pre>
                 * <p>The {@code type} is usually the fully qualified name of a class, though this is
                 * not a rule. Similarly, the {@code stereotype} is usually the fully qualified name of
                 * a target type but it can be any marker really.
                 * @author Stephane Nicoll
                 * @since 5.0
                 */
                // @ts-ignore
                class CandidateComponentsIndex extends java.lang.Object {
                    /**
                     * Return the candidate types that are associated with the specified stereotype.
                     * @param basePackage the package to check for candidates
                     * @param stereotype the stereotype to use
                     * @return the candidate types associated with the specified {#code stereotype}
                     *  or an empty set if none has been found for the specified {@code basePackage}
                     */
                    // @ts-ignore
                    getCandidateTypes(basePackage: string, stereotype: string): java.util.Set<java.lang.String>
                }
            }
        }
    }
}
