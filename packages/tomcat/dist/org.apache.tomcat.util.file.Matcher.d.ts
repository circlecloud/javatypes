declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace file {
                    /**
                     * <p>This is a utility class to match file globs.
                     * The class has been derived from
                     * org.apache.tools.ant.types.selectors.SelectorUtils.
                     * </p>
                     * <p>All methods are static.</p>
                     */
                    // @ts-ignore
                    class Matcher extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * Tests whether or not a given file name matches any file name pattern in
                         * the given set. The match is performed case-sensitively.
                         * @see #match(String, String, boolean)
                         * @param patternSet The pattern set to match against. Must not be
                         *                 <code>null</code>.
                         * @param fileName The file name to match, as a String. Must not be
                         *                 <code>null</code>. It must be just a file name, without
                         *                 a path.
                         * @return <code>true</code> if any pattern in the set matches against the
                         *          file name, or <code>false</code> otherwise.
                         */
                        // @ts-ignore
                        public static matchName(patternSet: java.util.Set<java.lang.String | string> | Array<java.lang.String | string>, fileName: java.lang.String | string): boolean
                        /**
                         * Tests whether or not a string matches against a pattern.
                         * The pattern may contain two special characters:<br>
                         * '*' means zero or more characters<br>
                         * '?' means one and only one character
                         * @param pattern The pattern to match against.
                         *                 Must not be <code>null</code>.
                         * @param str     The string which must be matched against the
                         *                 pattern. Must not be <code>null</code>.
                         * @param caseSensitive Whether or not matching should be performed
                         *                         case sensitively.
                         * @return <code>true</code> if the string matches against the pattern,
                         *          or <code>false</code> otherwise.
                         */
                        // @ts-ignore
                        public static match(pattern: java.lang.String | string, str: java.lang.String | string, caseSensitive: boolean): boolean
                    }
                }
            }
        }
    }
}
