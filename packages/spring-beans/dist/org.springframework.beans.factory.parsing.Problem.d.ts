declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace parsing {
                    /**
                     * Represents a problem with a bean definition configuration.
                     * Mainly serves as common argument passed into a {@link ProblemReporter}.
                     * <p>May indicate a potentially fatal problem (an error) or just a warning.
                     * @author Rob Harrop
                     * @author Juergen Hoeller
                     * @since 2.0
                     * @see ProblemReporter
                     */
                    // @ts-ignore
                    class Problem extends java.lang.Object {
                        /**
                         * Create a new instance of the {@link Problem} class.
                         * @param message a message detailing the problem
                         * @param location the location within a bean configuration source that triggered the error
                         */
                        // @ts-ignore
                        constructor(message: string, location: org.springframework.beans.factory.parsing.Location)
                        /**
                         * Create a new instance of the {@link Problem} class.
                         * @param message a message detailing the problem
                         * @param parseState the {#link ParseState} at the time of the error
                         * @param location the location within a bean configuration source that triggered the error
                         */
                        // @ts-ignore
                        constructor(message: string, location: org.springframework.beans.factory.parsing.Location, parseState: org.springframework.beans.factory.parsing.ParseState)
                        /**
                         * Create a new instance of the {@link Problem} class.
                         * @param message a message detailing the problem
                         * @param rootCause the underlying exception that caused the error (may be {#code null})
                         * @param parseState the {#link ParseState} at the time of the error
                         * @param location the location within a bean configuration source that triggered the error
                         */
                        // @ts-ignore
                        constructor(message: string, location: org.springframework.beans.factory.parsing.Location, parseState: org.springframework.beans.factory.parsing.ParseState, rootCause: Error)
                        /**
                         * Get the message detailing the problem.
                         */
                        // @ts-ignore
                        getMessage(): java.lang.String
                        /**
                         * Get the location within a bean configuration source that triggered the error.
                         */
                        // @ts-ignore
                        getLocation(): org.springframework.beans.factory.parsing.Location
                        /**
                         * Get the description of the bean configuration source that triggered the error,
                         * as contained within this Problem's Location object.
                         * @see #getLocation()
                         */
                        // @ts-ignore
                        getResourceDescription(): java.lang.String
                        /**
                         * Get the {@link ParseState} at the time of the error (may be {@code null}).
                         */
                        // @ts-ignore
                        getParseState(): org.springframework.beans.factory.parsing.ParseState
                        /**
                         * Get the underlying exception that caused the error (may be {@code null}).
                         */
                        // @ts-ignore
                        getRootCause(): java.lang.Throwable
                        // @ts-ignore
                        toString(): java.lang.String
                    }
                }
            }
        }
    }
}
