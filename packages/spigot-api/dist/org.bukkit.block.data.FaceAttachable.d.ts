declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                /**
                 * 'face' represents the face to which a lever or button is stuck.
                 * <br>
                 * This is used in conjunction with {@link Directional} to compute the
                 * orientation of these blocks.
                 */
                // @ts-ignore
                interface FaceAttachable extends org.bukkit.block.data.BlockData {
                    /**
                     * Gets the value of the 'face' property.
                     * @return the 'face' value
                     */
                    // @ts-ignore
                    getAttachedFace(): org.bukkit.block.data.FaceAttachable.AttachedFace
                    /**
                     * Sets the value of the 'face' property.
                     * @param face the new 'face' value
                     */
                    // @ts-ignore
                    setAttachedFace(face: org.bukkit.block.data.FaceAttachable.AttachedFace): void
                }
            }
        }
    }
}
