declare namespace com {
    namespace sun {
        namespace javadoc {
            /**
             * Java Programming Language version.  The constants of this enum
             * identify the JDK and J2SE releases containing language changes
             * relevant to doclets.
             * <p>
             * All doclets support at least the 1.1 language version.
             * The first release subsequent to this with language changes
             * affecting doclets is 1.5.
             * @since 1.5
             */
            // @ts-ignore
            class LanguageVersion extends java.lang.Enum<com.sun.javadoc.LanguageVersion> {
                /**
                 * 1.1 added nested classes and interfaces.
                 */
                // @ts-ignore
                public static readonly JAVA_1_1: com.sun.javadoc.LanguageVersion
                /**
                 * 1.5 added generic types, annotations, enums, and varArgs.
                 */
                // @ts-ignore
                public static readonly JAVA_1_5: com.sun.javadoc.LanguageVersion
                // @ts-ignore
                public static values(): com.sun.javadoc.LanguageVersion[]
                // @ts-ignore
                public static valueOf(name: java.lang.String | string): com.sun.javadoc.LanguageVersion
            }
        }
    }
}
