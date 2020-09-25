declare namespace javax {
    namespace tools {
        /**
         * Standard locations of file objects.
         * @author Peter von der Ah&eacute;
         * @since 1.6
         */
        // @ts-ignore
        class StandardLocation extends java.lang.Enum<javax.tools.StandardLocation> implements javax.tools.JavaFileManager.Location {
            /**
             * Location of new class files.
             */
            // @ts-ignore
            public static readonly CLASS_OUTPUT: javax.tools.StandardLocation
            /**
             * Location of new source files.
             */
            // @ts-ignore
            public static readonly SOURCE_OUTPUT: javax.tools.StandardLocation
            /**
             * Location to search for user class files.
             */
            // @ts-ignore
            public static readonly CLASS_PATH: javax.tools.StandardLocation
            /**
             * Location to search for existing source files.
             */
            // @ts-ignore
            public static readonly SOURCE_PATH: javax.tools.StandardLocation
            /**
             * Location to search for annotation processors.
             */
            // @ts-ignore
            public static readonly ANNOTATION_PROCESSOR_PATH: javax.tools.StandardLocation
            /**
             * Location to search for platform classes.  Sometimes called
             * the boot class path.
             */
            // @ts-ignore
            public static readonly PLATFORM_CLASS_PATH: javax.tools.StandardLocation
            /**
             * Location of new native header files.
             * @since 1.8
             */
            // @ts-ignore
            public static readonly NATIVE_HEADER_OUTPUT: javax.tools.StandardLocation
            // @ts-ignore
            public static values(): javax.tools.StandardLocation[]
            // @ts-ignore
            public static valueOf(name: java.lang.String | string): javax.tools.StandardLocation
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
            public static locationFor(name: java.lang.String | string): javax.tools.JavaFileManager.Location
            // @ts-ignore
            public getName(): string
            // @ts-ignore
            public isOutputLocation(): boolean
        }
    }
}
