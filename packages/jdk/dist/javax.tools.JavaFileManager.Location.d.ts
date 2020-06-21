declare namespace javax {
    namespace tools {
        namespace JavaFileManager {
            /**
             * Interface for locations of file objects.  Used by file managers
             * to determine where to place or search for file objects.
             */
            // @ts-ignore
            interface Location {
                /**
                 * Gets the name of this location.
                 * @return a name
                 */
                // @ts-ignore
                getName(): string
                /**
                 * Determines if this is an output location.  An output
                 * location is a location that is conventionally used for
                 * output.
                 * @return true if this is an output location, false otherwise
                 */
                // @ts-ignore
                isOutputLocation(): boolean
            }
        }
    }
}
