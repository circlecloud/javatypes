declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace meta {
                namespace tags {
                    /**
                     * This class represents an enum with a generic content type. It defines the
                     * types a custom item tag can have.
                     * <p>
                     * This interface can be used to create your own custom {@link ItemTagType} with
                     * different complex types. This may be useful for the likes of a
                     * UUIDItemTagType:
                     * <pre>
                     * {@code
                     * public class UUIDItemTagType implements ItemTagType<byte[], UUID> {
                     * {@literal @Override}
                     * public Class<byte[]> getPrimitiveType() {
                     * return byte[].class;
                     * }
                     * {@literal @Override}
                     * public Class<UUID> getComplexType() {
                     * return UUID.class;
                     * }
                     * {@literal @Override}
                     * public byte[] toPrimitive(UUID complex, ItemTagAdapterContext context) {
                     * ByteBuffer bb = ByteBuffer.wrap(new byte[16]);
                     * bb.putLong(complex.getMostSignificantBits());
                     * bb.putLong(complex.getLeastSignificantBits());
                     * return bb.array();
                     * }
                     * {@literal @Override}
                     * public UUID fromPrimitive(byte[] primitive, ItemTagAdapterContext context) {
                     * ByteBuffer bb = ByteBuffer.wrap(primitive);
                     * long firstLong = bb.getLong();
                     * long secondLong = bb.getLong();
                     * return new UUID(firstLong, secondLong);
                     * }
                     * }}</pre>
                     * @param <T> the primary object type that is stored in the given tag
                     * @param <Z> the retrieved object type when applying this item tag type
                     * @deprecated please use {#link PersistentDataType} as this part of the api is being replaced
                     */
                    // @ts-ignore
                    interface ItemTagType<T, Z> {
                        // @ts-ignore
                        
                        // @ts-ignore
                        
                        // @ts-ignore
                        
                        // @ts-ignore
                        
                        // @ts-ignore
                        
                        // @ts-ignore
                        
                        // @ts-ignore
                        
                        // @ts-ignore
                        
                        // @ts-ignore
                        
                        // @ts-ignore
                        
                        // @ts-ignore
                        
                        /**
                         * Returns the primitive data type of this tag.
                         * @return the class
                         */
                        // @ts-ignore
                        getPrimitiveType(): java.lang.Class<T>
                        /**
                         * Returns the complex object type the primitive value resembles.
                         * @return the class type
                         */
                        // @ts-ignore
                        getComplexType(): java.lang.Class<Z>
                        /**
                         * Returns the primitive data that resembles the complex object passed to
                         * this method.
                         * @param complex the complex object instance
                         * @param context the context this operation is running in
                         * @return the primitive value
                         */
                        // @ts-ignore
                        toPrimitive(complex: Z, context: org.bukkit.inventory.meta.tags.ItemTagAdapterContext): T
                        /**
                         * Creates a complex object based of the passed primitive value
                         * @param primitive the primitive value
                         * @param context the context this operation is running in
                         * @return the complex object instance
                         */
                        // @ts-ignore
                        fromPrimitive(primitive: T, context: org.bukkit.inventory.meta.tags.ItemTagAdapterContext): Z
                    }
                }
            }
        }
    }
}
