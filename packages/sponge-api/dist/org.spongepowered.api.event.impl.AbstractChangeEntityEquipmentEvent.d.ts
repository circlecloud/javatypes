declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace impl {
                    // @ts-ignore
                    abstract class AbstractChangeEntityEquipmentEvent extends org.spongepowered.api.event.impl.AbstractEvent implements org.spongepowered.api.event.entity.ChangeEntityEquipmentEvent {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        transaction: org.spongepowered.api.data.Transaction<org.spongepowered.api.item.inventory.ItemStackSnapshot>
                        // @ts-ignore
                        public getOriginalItemStack(): java.util.Optional<org.spongepowered.api.item.inventory.ItemStackSnapshot>
                        // @ts-ignore
                        public getItemStack(): java.util.Optional<org.spongepowered.api.data.Transaction<org.spongepowered.api.item.inventory.ItemStackSnapshot>>
                        // @ts-ignore
                        public getTransaction(): org.spongepowered.api.data.Transaction<org.spongepowered.api.item.inventory.ItemStackSnapshot>
                    }
                }
            }
        }
    }
}
