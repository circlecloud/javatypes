declare namespace java {
    namespace io {
        /**
         * A filter for abstract pathnames.
         * <p> Instances of this interface may be passed to the <code>{@link
         * File#listFiles(java.io.FileFilter) listFiles(FileFilter)}</code> method
         * of the <code>{@link java.io.File}</code> class.
         * @since 1.2
         */
        // @ts-ignore
        interface FileFilter {
            /**
             * Tests whether or not the specified abstract pathname should be
             * included in a pathname list.
             * @param pathname  The abstract pathname to be tested
             * @return <code>true</code> if and only if <code>pathname</code>
             *           should be included
             */
            // @ts-ignore
            accept(pathname: java.io.File): boolean
        }
    }
}
