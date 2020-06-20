declare namespace javax {
    namespace tools {
        /**
         * Standard locations of file objects.
         * @author Peter von der Ah&eacute;
         * @since 1.6
         */
        // @ts-ignore
        class StandardLocation extends java.lang.Enum<javax.tools.StandardLocation> implements javax.tools.JavaFileManager.Location {
            // @ts-ignore
            values(): javax.tools.StandardLocation[]
            // @ts-ignore
            valueOf(name: string): javax.tools.StandardLocation
            /**
             * Gets a location object with the given name.  The following
             * property must hold: {@code locationFor(x) ==
             * locationFor(y)} if and only if {@code x.equals(y)}.
             * The returned location will be an output location if and only if
             * name ends with {@code "_OUTPUT"}.
             * @param name a name
             * @return a location
             */
            // @ts-ignore
            locationFor(name: string): javax.tools.JavaFileManager.Location
            // @ts-ignore
            getName(): java.lang.String
            // @ts-ignore
            isOutputLocation(): boolean
        }
    }
}
