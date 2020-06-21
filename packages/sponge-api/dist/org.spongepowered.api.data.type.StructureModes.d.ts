declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace type {
                    /**
                     * An enumeration of {@link StructureMode}s.
                     */
                    // @ts-ignore
                    class StructureModes extends java.lang.Object {
                        /**
                         * Corner mode allows for an easier and automatic size calculation while
                         * saving or loading structures.
                         */
                        // @ts-ignore
                        public static readonly CORNER: org.spongepowered.api.data.type.StructureMode
                        /**
                         * Data mode can only be used during natural generation.
                         * <p>They mark the location to run a function specified by its metadata
                         * input, which can only be used for relevant structures.</p>
                         * <p>The structure block is removed afterwards.</p>
                         * <p>This mode is the default mode when a structure block is first
                         * placed.</p>
                         */
                        // @ts-ignore
                        public static readonly DATA: org.spongepowered.api.data.type.StructureMode
                        /**
                         * Load mode allows a player to load and rotate saved structure files.
                         */
                        // @ts-ignore
                        public static readonly LOAD: org.spongepowered.api.data.type.StructureMode
                        /**
                         * Save mode allows a player to highlight a structure in the world and
                         * save it to a file.
                         */
                        // @ts-ignore
                        public static readonly SAVE: org.spongepowered.api.data.type.StructureMode
                    }
                }
            }
        }
    }
}
