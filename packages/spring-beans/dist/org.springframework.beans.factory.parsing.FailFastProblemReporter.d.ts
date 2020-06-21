declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace parsing {
                    /**
                     * Simple {@link ProblemReporter} implementation that exhibits fail-fast
                     * behavior when errors are encountered.
                     * <p>The first error encountered results in a {@link BeanDefinitionParsingException}
                     * being thrown.
                     * <p>Warnings are written to
                     * {@link #setLogger(org.apache.commons.logging.Log) the log} for this class.
                     * @author Rob Harrop
                     * @author Juergen Hoeller
                     * @author Rick Evans
                     * @since 2.0
                     */
                    // @ts-ignore
                    class FailFastProblemReporter extends java.lang.Object implements org.springframework.beans.factory.parsing.ProblemReporter {
                        // @ts-ignore
                        constructor()
                        /**
                         * Set the {@link Log logger} that is to be used to report warnings.
                         * <p>If set to {@code null} then a default {@link Log logger} set to
                         * the name of the instance class will be used.
                         * @param logger the {#link Log logger} that is to be used to report warnings
                         */
                        // @ts-ignore
                        public setLogger(logger: Log): void
                        /**
                         * Throws a {@link BeanDefinitionParsingException} detailing the error
                         * that has occurred.
                         * @param problem the source of the error
                         */
                        // @ts-ignore
                        public fatal(problem: org.springframework.beans.factory.parsing.Problem): void
                        /**
                         * Throws a {@link BeanDefinitionParsingException} detailing the error
                         * that has occurred.
                         * @param problem the source of the error
                         */
                        // @ts-ignore
                        public error(problem: org.springframework.beans.factory.parsing.Problem): void
                        /**
                         * Writes the supplied {@link Problem} to the {@link Log} at {@code WARN} level.
                         * @param problem the source of the warning
                         */
                        // @ts-ignore
                        public warning(problem: org.springframework.beans.factory.parsing.Problem): void
                    }
                }
            }
        }
    }
}
