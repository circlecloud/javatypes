declare namespace org {
    namespace springframework {
        namespace web {
            namespace util {
                namespace pattern {
                    /**
                     * Exception that is thrown when there is a problem with the pattern being parsed.
                     * @author Andy Clement
                     * @since 5.0
                     */
                    // @ts-ignore
                    class PatternParseException extends java.lang.IllegalArgumentException {
                        /**
                         * Return a formatted message with inserts applied.
                         */
                        // @ts-ignore
                        getMessage(): string
                        /**
                         * Return a detailed message that includes the original pattern text
                         * with a pointer to the error position, as well as the error message.
                         */
                        // @ts-ignore
                        toDetailedString(): string
                        // @ts-ignore
                        getPosition(): number /*int*/
                        // @ts-ignore
                        getMessageType(): org.springframework.web.util.pattern.PatternParseException.PatternMessage
                        // @ts-ignore
                        getInserts(): any[]
                    }
                }
            }
        }
    }
}
