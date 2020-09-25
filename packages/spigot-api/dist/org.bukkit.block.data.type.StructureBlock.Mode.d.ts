declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    namespace StructureBlock {
                        /**
                         * Operating mode of a structure block.
                         */
                        // @ts-ignore
                        class Mode extends java.lang.Enum<org.bukkit.block.data.type.StructureBlock.Mode> {
                            /**
                             * Allows selection and saving of a structure.
                             */
                            // @ts-ignore
                            public static readonly SAVE: org.bukkit.block.data.type.StructureBlock.Mode
                            /**
                             * Allows loading of a structure.
                             */
                            // @ts-ignore
                            public static readonly LOAD: org.bukkit.block.data.type.StructureBlock.Mode
                            /**
                             * Used for detection of two opposite corners of a structure.
                             */
                            // @ts-ignore
                            public static readonly CORNER: org.bukkit.block.data.type.StructureBlock.Mode
                            /**
                             * Dummy block used to run a custom function during world generation
                             * before being removed.
                             */
                            // @ts-ignore
                            public static readonly DATA: org.bukkit.block.data.type.StructureBlock.Mode
                            // @ts-ignore
                            public static values(): org.bukkit.block.data.type.StructureBlock.Mode[]
                            // @ts-ignore
                            public static valueOf(name: java.lang.String | string): org.bukkit.block.data.type.StructureBlock.Mode
                        }
                    }
                }
            }
        }
    }
}
