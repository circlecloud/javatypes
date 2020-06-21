declare namespace org {
    namespace springframework {
        namespace web {
            namespace util {
                namespace pattern {
                    namespace PatternParseException {
                        /**
                         * The messages that can be included in a {@link PatternParseException} when there is a parse failure.
                         */
                        // @ts-ignore
                        class PatternMessage extends java.lang.Enum<org.springframework.web.util.pattern.PatternParseException.PatternMessage> {
                            // @ts-ignore
                            readonly MISSING_CLOSE_CAPTURE: org.springframework.web.util.pattern.PatternParseException.PatternMessage
                            // @ts-ignore
                            readonly MISSING_OPEN_CAPTURE: org.springframework.web.util.pattern.PatternParseException.PatternMessage
                            // @ts-ignore
                            readonly ILLEGAL_NESTED_CAPTURE: org.springframework.web.util.pattern.PatternParseException.PatternMessage
                            // @ts-ignore
                            readonly CANNOT_HAVE_ADJACENT_CAPTURES: org.springframework.web.util.pattern.PatternParseException.PatternMessage
                            // @ts-ignore
                            readonly ILLEGAL_CHARACTER_AT_START_OF_CAPTURE_DESCRIPTOR: org.springframework.web.util.pattern.PatternParseException.PatternMessage
                            // @ts-ignore
                            readonly ILLEGAL_CHARACTER_IN_CAPTURE_DESCRIPTOR: org.springframework.web.util.pattern.PatternParseException.PatternMessage
                            // @ts-ignore
                            readonly NO_MORE_DATA_EXPECTED_AFTER_CAPTURE_THE_REST: org.springframework.web.util.pattern.PatternParseException.PatternMessage
                            // @ts-ignore
                            readonly BADLY_FORMED_CAPTURE_THE_REST: org.springframework.web.util.pattern.PatternParseException.PatternMessage
                            // @ts-ignore
                            readonly MISSING_REGEX_CONSTRAINT: org.springframework.web.util.pattern.PatternParseException.PatternMessage
                            // @ts-ignore
                            readonly ILLEGAL_DOUBLE_CAPTURE: org.springframework.web.util.pattern.PatternParseException.PatternMessage
                            // @ts-ignore
                            readonly REGEX_PATTERN_SYNTAX_EXCEPTION: org.springframework.web.util.pattern.PatternParseException.PatternMessage
                            // @ts-ignore
                            readonly CAPTURE_ALL_IS_STANDALONE_CONSTRUCT: org.springframework.web.util.pattern.PatternParseException.PatternMessage
                            // @ts-ignore
                            values(): org.springframework.web.util.pattern.PatternParseException.PatternMessage[]
                            // @ts-ignore
                            valueOf(name: java.lang.String | string): org.springframework.web.util.pattern.PatternParseException.PatternMessage
                            // @ts-ignore
                            formatMessage(...inserts: java.lang.Object[] | any[]): string
                        }
                    }
                }
            }
        }
    }
}
