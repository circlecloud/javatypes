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
                            public static readonly MISSING_CLOSE_CAPTURE: org.springframework.web.util.pattern.PatternParseException.PatternMessage
                            // @ts-ignore
                            public static readonly MISSING_OPEN_CAPTURE: org.springframework.web.util.pattern.PatternParseException.PatternMessage
                            // @ts-ignore
                            public static readonly ILLEGAL_NESTED_CAPTURE: org.springframework.web.util.pattern.PatternParseException.PatternMessage
                            // @ts-ignore
                            public static readonly CANNOT_HAVE_ADJACENT_CAPTURES: org.springframework.web.util.pattern.PatternParseException.PatternMessage
                            // @ts-ignore
                            public static readonly ILLEGAL_CHARACTER_AT_START_OF_CAPTURE_DESCRIPTOR: org.springframework.web.util.pattern.PatternParseException.PatternMessage
                            // @ts-ignore
                            public static readonly ILLEGAL_CHARACTER_IN_CAPTURE_DESCRIPTOR: org.springframework.web.util.pattern.PatternParseException.PatternMessage
                            // @ts-ignore
                            public static readonly NO_MORE_DATA_EXPECTED_AFTER_CAPTURE_THE_REST: org.springframework.web.util.pattern.PatternParseException.PatternMessage
                            // @ts-ignore
                            public static readonly BADLY_FORMED_CAPTURE_THE_REST: org.springframework.web.util.pattern.PatternParseException.PatternMessage
                            // @ts-ignore
                            public static readonly MISSING_REGEX_CONSTRAINT: org.springframework.web.util.pattern.PatternParseException.PatternMessage
                            // @ts-ignore
                            public static readonly ILLEGAL_DOUBLE_CAPTURE: org.springframework.web.util.pattern.PatternParseException.PatternMessage
                            // @ts-ignore
                            public static readonly REGEX_PATTERN_SYNTAX_EXCEPTION: org.springframework.web.util.pattern.PatternParseException.PatternMessage
                            // @ts-ignore
                            public static readonly CAPTURE_ALL_IS_STANDALONE_CONSTRUCT: org.springframework.web.util.pattern.PatternParseException.PatternMessage
                            // @ts-ignore
                            public static values(): org.springframework.web.util.pattern.PatternParseException.PatternMessage[]
                            // @ts-ignore
                            public static valueOf(name: java.lang.String | string): org.springframework.web.util.pattern.PatternParseException.PatternMessage
                            // @ts-ignore
                            public formatMessage(...inserts: java.lang.Object[] | any[]): string
                        }
                    }
                }
            }
        }
    }
}
