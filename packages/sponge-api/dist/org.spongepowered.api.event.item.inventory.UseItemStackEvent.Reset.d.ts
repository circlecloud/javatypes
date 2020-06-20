declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace item {
                    namespace inventory {
                        namespace UseItemStackEvent {
                            /**
                             * Called before an entity's used item state is reset.
                             * <p>In Vanilla, this usually occurs after {@link Replace} or {@link Stop}./p>
                             * <p>If an entity has finished using an item normally, either
                             * by using it for the maximum duration or by stopping
                             * prematurely, then {@link Stop} or {@link Finish} will have been called
                             * beforehand.</p>
                             * <p>If the item use was 'cancelled' without finishing normally,
                             * such as an entity switching its held item, then {@link Stop} or {@link Finish}
                             * will not have been called.</p>
                             * <p>Example:</p>
                             * <ul>
                             * <li>A player drawing back a bow, but switching to another hotbar
                             * slot without releasing their secondary mouse button.</li>
                             * </ul>
                             */
                            // @ts-ignore
                            interface Reset extends org.spongepowered.api.event.item.inventory.UseItemStackEvent {
                            }
                        }
                    }
                }
            }
        }
    }
}
