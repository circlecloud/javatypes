declare namespace javax {
    namespace tools {
        namespace Diagnostic {
            /**
             * Kinds of diagnostics, for example, error or warning.
             * The kind of a diagnostic can be used to determine how the
             * diagnostic should be presented to the user. For example,
             * errors might be colored red or prefixed with the word "Error",
             * while warnings might be colored yellow or prefixed with the
             * word "Warning". There is no requirement that the Kind
             * should imply any inherent semantic meaning to the message
             * of the diagnostic: for example, a tool might provide an
             * option to report all warnings as errors.
             */
            // @ts-ignore
            class Kind extends java.lang.Enum<javax.tools.Diagnostic.Kind> {
                // @ts-ignore
                values(): javax.tools.Diagnostic.Kind[]
                // @ts-ignore
                valueOf(name: string): javax.tools.Diagnostic.Kind
            }
        }
    }
}
