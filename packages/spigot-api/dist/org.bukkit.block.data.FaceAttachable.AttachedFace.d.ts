declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace FaceAttachable {
                    /**
                     * The face to which a switch type block is stuck.
                     */
                    // @ts-ignore
                    class AttachedFace extends java.lang.Enum<org.bukkit.block.data.FaceAttachable.AttachedFace> {
                        /**
                         * The switch is mounted to the floor and pointing upwards.
                         */
                        // @ts-ignore
                        readonly FLOOR: org.bukkit.block.data.FaceAttachable.AttachedFace
                        /**
                         * The switch is mounted to the wall.
                         */
                        // @ts-ignore
                        readonly WALL: org.bukkit.block.data.FaceAttachable.AttachedFace
                        /**
                         * The switch is mounted to the ceiling and pointing dowanrds.
                         */
                        // @ts-ignore
                        readonly CEILING: org.bukkit.block.data.FaceAttachable.AttachedFace
                        // @ts-ignore
                        values(): org.bukkit.block.data.FaceAttachable.AttachedFace[]
                        // @ts-ignore
                        valueOf(name: java.lang.String | string): org.bukkit.block.data.FaceAttachable.AttachedFace
                    }
                }
            }
        }
    }
}
